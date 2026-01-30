const { createApp, ref, reactive, computed, onMounted } = Vue;

// Toast notification system
const toasts = ref([]);
let toastId = 0;

const showToast = (message, type = 'info', duration = 4000) => {
  const id = ++toastId;
  toasts.value.push({ id, message, type });
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id);
  }, duration);
};

const removeToast = (id) => {
  toasts.value = toasts.value.filter(t => t.id !== id);
};

// Wait for modules to load
const getModules = () => {
  if (typeof ModuleRegistry !== 'undefined') {
    return ModuleRegistry.getAllModules();
  }
  // Fallback to window objects
  return [
    window.sigFigsModule,
    window.nomenclatureModule,
    window.matterAtomsModule,
    window.labSkillsModule
  ].filter(Boolean);
};

createApp({
  setup() {
    const loading = ref(true);
    const user = ref(null);
    const token = ref(localStorage.getItem('token'));
    const loginForm = reactive({ username: '', password: '' });
    const loginError = ref('');
    const currentView = ref('dashboard');
    const currentModule = ref(null);
    const currentSection = ref('video');
    const progress = ref({});
    const practiceAnswers = ref([]);
    const practiceChecked = ref([]);
    const practiceQuestions = ref([]);
    const quizAnswers = ref([]);
    const quizQuestions = ref([]);
    const showQuizResults = ref(false);
    const quizResults = ref({});
    const isPlaying = ref(false);
    const audioElement = ref(null);
    
    const examEligible = ref(false);
    const examQuestions = ref([]);
    const examAnswers = ref([]);
    const showExamResults = ref(false);
    const examResults = ref({});
    
    const students = ref([]);
    const adminStats = ref({ totalStudents: 0, averageProgress: 0, totalQuizAttempts: 0, averageQuizScore: 0 });
    
    // Student progress modal
    const showStudentModal = ref(false);
    const selectedStudent = ref(null);
    const studentProgress = ref([]);
    const studentQuizAttempts = ref([]);
    
    // Confirm modal
    const showConfirmModal = ref(false);
    const confirmAction = ref(null);
    const confirmMessage = ref('');
    
    // Answer key modal
    const showAnswerKey = ref(false);
    const answerKeyModule = ref('');
    const answerKeyData = ref(null);

    const modules = ref([]);
    const sections = [
      { id: 'video', title: 'Video', emoji: '📺' },
      { id: 'reading', title: 'Reading', emoji: '📖' },
      { id: 'practice', title: 'Practice', emoji: '✏️' },
      { id: 'quiz', title: 'Quiz', emoji: '📝' }
    ];

    const overallProgress = computed(() => {
      const totalSections = modules.value.length * 4;
      if (totalSections === 0) return 0;
      let completed = 0;
      for (const moduleId in progress.value) {
        for (const section in progress.value[moduleId]) {
          if (progress.value[moduleId][section].completed) completed++;
        }
      }
      return Math.round((completed / totalSections) * 100);
    });

    const api = async (endpoint, options = {}) => {
      const headers = { 'Content-Type': 'application/json' };
      if (token.value) headers['Authorization'] = `Bearer ${token.value}`;
      const response = await fetch(`/api${endpoint}`, { ...options, headers: { ...headers, ...options.headers } });
      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(error.error || 'Request failed');
      }
      return response.json();
    };

    const login = async () => {
      loginError.value = '';
      try {
        const data = await api('/auth/login', { method: 'POST', body: JSON.stringify(loginForm) });
        token.value = data.token;
        user.value = data.user;
        localStorage.setItem('token', data.token);
        await loadProgress();
        await checkExamEligibility();
        if (data.user.role === 'admin') await loadAdminData();
        showToast(`Welcome back, ${data.user.username}!`, 'success');
      } catch (error) {
        loginError.value = error.message;
        showToast(error.message, 'error');
      }
    };

    const logout = () => {
      token.value = null;
      user.value = null;
      localStorage.removeItem('token');
      currentView.value = 'dashboard';
      progress.value = {};
      showToast('Logged out successfully', 'info');
    };
    
    // Navigate back to dashboard with fresh data
    const goToDashboard = async () => {
      currentView.value = 'dashboard';
      await loadProgress();
      if (user.value?.role === 'admin') {
        await loadAdminData();
      }
    };

    const loadProgress = async () => {
      try { 
        progress.value = await api('/progress'); 
        console.log('Progress loaded:', progress.value);
      } catch (e) { 
        console.error('Failed to load progress:', e); 
      }
    };

    const loadAdminData = async () => {
      try {
        students.value = await api('/admin/students');
        adminStats.value = await api('/admin/stats');
      } catch (e) { 
        console.error(e); 
        showToast('Failed to load admin data', 'error');
      }
    };

    const getModuleProgress = (moduleId) => {
      if (!progress.value[moduleId]) return 0;
      const sects = Object.values(progress.value[moduleId]);
      return Math.round((sects.filter(s => s.completed).length / 4) * 100);
    };

    const isSectionComplete = (moduleId, section) => progress.value[moduleId]?.[section]?.completed || false;

    // Shuffle array helper
    const shuffleArray = (array) => {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    // Get randomized questions from module pool
    const getRandomizedQuestions = (module, poolType, count) => {
      if (!module.questionPools || !module.questionPools[poolType]) return [];
      
      const pool = [...module.questionPools[poolType]];
      const shuffled = shuffleArray(pool);
      const selected = shuffled.slice(0, count);
      
      // Randomize answer order for multiple choice
      return selected.map(q => {
        if ((q.type === 'multiple-choice' || q.type === 'multi-select') && q.options) {
          return { ...q, options: shuffleArray(q.options) };
        }
        return q;
      });
    };

    const openModule = (module) => {
      currentModule.value = module;
      currentSection.value = 'video';
      currentView.value = 'module';
      practiceAnswers.value = [];
      practiceChecked.value = [];
      quizAnswers.value = [];
      audioElement.value = null;
      isPlaying.value = false;
      
      // Generate randomized questions for this session
      const practiceCount = module.questionsPerPractice || 10;
      const quizCount = module.questionsPerQuiz || 12;
      
      practiceQuestions.value = getRandomizedQuestions(module, 'practice', practiceCount);
      quizQuestions.value = getRandomizedQuestions(module, 'quiz', quizCount);
      
      console.log(`Loaded ${practiceQuestions.value.length} practice and ${quizQuestions.value.length} quiz questions`);
    };

    const markComplete = async (sectionType) => {
      try {
        console.log('Marking complete:', currentModule.value.id, sectionType);
        const result = await api('/progress/update', { 
          method: 'POST', 
          body: JSON.stringify({ 
            moduleId: currentModule.value.id, 
            sectionType, 
            completed: true 
          }) 
        });
        console.log('Mark complete result:', result);
        await loadProgress();
        await checkExamEligibility();
        showToast('Progress saved! ✅', 'success');
      } catch (e) { 
        console.error('Failed to mark complete:', e); 
        showToast('Failed to save progress. Please try again.', 'error');
      }
    };

    const checkPractice = () => {
      const problems = practiceQuestions.value;
      practiceChecked.value = practiceAnswers.value.map((ans, i) => {
        const correct = problems[i].answer.toLowerCase().trim();
        const userAns = (ans || '').toLowerCase().trim();
        return userAns === correct;
      });
      
      const correctCount = practiceChecked.value.filter(c => c).length;
      const allCorrect = practiceChecked.value.every(c => c);
      
      if (allCorrect && practiceChecked.value.length === problems.length) {
        markComplete('practice');
        showToast('Perfect! All answers correct! 🎉', 'success');
      } else {
        showToast(`${correctCount}/${problems.length} correct. Keep trying!`, correctCount > problems.length / 2 ? 'warning' : 'error');
      }
    };

    const submitQuiz = async () => {
      const questions = quizQuestions.value;
      const answers = questions.map((q, i) => ({
        questionId: i,
        type: q.type,
        question: q.question,
        correctAnswer: q.type === 'multi-select' ? q.correctAnswers : q.correctAnswer,
        userAnswer: quizAnswers.value[i] || (q.type === 'multi-select' ? [] : '')
      }));

      try {
        const result = await api('/quiz/submit', { 
          method: 'POST', 
          body: JSON.stringify({ moduleId: currentModule.value.id, answers }) 
        });
        quizResults.value = result;
        showQuizResults.value = true;
        await loadProgress();
        if (result.passed) {
          showToast('Quiz passed! Great job! 🎉', 'success');
        }
      } catch (e) { 
        console.error('Quiz submit error:', e);
        showToast('Failed to submit quiz. Please try again.', 'error');
      }
    };

    const toggleAudio = async () => {
      if (!audioElement.value) {
        try {
          const response = await api(`/tts/${currentModule.value.id}`);
          audioElement.value = new Audio(response.audioUrl);
          audioElement.value.onended = () => { isPlaying.value = false; };
        } catch (e) {
          console.error('Audio load error:', e);
          showToast('Audio not available for this module', 'warning');
          return;
        }
      }
      if (isPlaying.value) {
        audioElement.value.pause();
        isPlaying.value = false;
      } else {
        audioElement.value.play();
        isPlaying.value = true;
      }
    };

    // Admin functions
    const viewStudentProgress = async (student) => {
      try {
        const data = await api(`/admin/students/${student.id}/progress`);
        selectedStudent.value = student;
        studentProgress.value = data.progress || [];
        studentQuizAttempts.value = data.quizAttempts || [];
        showStudentModal.value = true;
      } catch (e) { 
        console.error(e);
        showToast('Failed to load student progress', 'error');
      }
    };
    
    const closeStudentModal = () => {
      showStudentModal.value = false;
      selectedStudent.value = null;
      studentProgress.value = [];
      studentQuizAttempts.value = [];
    };

    const confirmResetProgress = (student) => {
      confirmMessage.value = `Are you sure you want to reset all progress for ${student.username}? This cannot be undone.`;
      confirmAction.value = () => resetStudentProgress(student);
      showConfirmModal.value = true;
    };

    const resetStudentProgress = async (student) => {
      showConfirmModal.value = false;
      try {
        await api(`/admin/students/${student.id}/reset`, { method: 'POST' });
        showToast(`Progress reset for ${student.username}`, 'success');
        await loadAdminData();
        if (showStudentModal.value && selectedStudent.value?.id === student.id) {
          // Refresh the modal data
          await viewStudentProgress(student);
        }
      } catch (e) { 
        console.error(e);
        showToast('Failed to reset progress', 'error');
      }
    };
    
    // Toggle a section complete/incomplete for a student
    const toggleSection = async (moduleId, sectionType) => {
      if (!selectedStudent.value) return;
      try {
        const result = await api(`/admin/students/${selectedStudent.value.id}/toggle-section`, {
          method: 'POST',
          body: JSON.stringify({ moduleId, sectionType })
        });
        showToast(result.message, 'success');
        // Refresh student data
        await viewStudentProgress(selectedStudent.value);
        await loadAdminData();
      } catch (e) {
        console.error(e);
        showToast('Failed to toggle section', 'error');
      }
    };
    
    // Check if a section is complete for current student
    const isSectionCompleteForStudent = (moduleId, sectionType) => {
      return studentProgress.value.some(
        p => p.module_id === moduleId && p.section_type === sectionType && p.completed
      );
    };
    
    // Open answer key for a module
    const openAnswerKey = async (moduleId) => {
      try {
        const data = await api(`/admin/answer-key/${moduleId}`);
        answerKeyData.value = data;
        answerKeyModule.value = moduleId;
        showAnswerKey.value = true;
      } catch (e) {
        console.error(e);
        showToast('Failed to load answer key', 'error');
      }
    };
    
    const closeAnswerKey = () => {
      showAnswerKey.value = false;
      answerKeyData.value = null;
      answerKeyModule.value = '';
    };
    
    // Helper to get student's module progress
    const getStudentModuleProgress = (moduleId) => {
      const moduleProgress = studentProgress.value.filter(p => p.module_id === moduleId);
      const completed = moduleProgress.filter(p => p.completed).length;
      return { completed, total: 4 };
    };

    const checkExamEligibility = async () => {
      try {
        const data = await api('/exam/eligibility');
        examEligible.value = data.eligible;
      } catch (e) { console.error(e); }
    };

    const startExam = async () => {
      try {
        const questions = await api('/exam/questions');
        examQuestions.value = questions;
        examAnswers.value = questions.map(q => q.type === 'multi-select' ? [] : '');
        currentView.value = 'exam';
        showToast('Good luck on your exam! 📝', 'info');
      } catch (e) { 
        console.error('Exam load error:', e);
        showToast('Failed to load exam', 'error');
      }
    };

    const submitExam = async () => {
      const answers = examQuestions.value.map((q, i) => ({
        questionId: q.id,
        type: q.type,
        question: q.question,
        userAnswer: examAnswers.value[i] || ''
      }));
      try {
        const result = await api('/exam/submit', { method: 'POST', body: JSON.stringify({ answers }) });
        examResults.value = result;
        showExamResults.value = true;
        if (result.passed) {
          showToast('Congratulations! You passed! 🎓', 'success', 6000);
        }
      } catch (e) { 
        console.error('Exam submit error:', e);
        showToast('Failed to submit exam', 'error');
      }
    };

    const closeExamResults = () => {
      showExamResults.value = false;
      currentView.value = 'dashboard';
    };

    const toggleMultiSelect = (index, option) => {
      if (!quizAnswers.value[index]) quizAnswers.value[index] = [];
      const arr = quizAnswers.value[index];
      const idx = arr.indexOf(option);
      if (idx === -1) arr.push(option);
      else arr.splice(idx, 1);
    };

    const toggleExamMultiSelect = (index, option) => {
      if (!examAnswers.value[index]) examAnswers.value[index] = [];
      const arr = examAnswers.value[index];
      const idx = arr.indexOf(option);
      if (idx === -1) arr.push(option);
      else arr.splice(idx, 1);
    };

    onMounted(async () => {
      // Load modules
      setTimeout(() => {
        modules.value = getModules();
        console.log('Modules loaded:', modules.value.map(m => m.id));
      }, 100);

      if (token.value) {
        try {
          user.value = await api('/auth/me');
          await loadProgress();
          await checkExamEligibility();
          if (user.value.role === 'admin') await loadAdminData();
        } catch (e) {
          console.error('Auth check failed:', e);
          localStorage.removeItem('token');
          token.value = null;
        }
      }
      loading.value = false;
    });

    return {
      loading, user, loginForm, loginError, currentView, currentModule, currentSection, 
      progress, modules, sections, overallProgress, 
      practiceAnswers, practiceChecked, practiceQuestions,
      quizAnswers, quizQuestions, showQuizResults, quizResults, isPlaying,
      students, adminStats, examEligible, examQuestions, examAnswers, showExamResults, examResults,
      // Toast system
      toasts, removeToast,
      // Student modal
      showStudentModal, selectedStudent, studentProgress, studentQuizAttempts,
      closeStudentModal, getStudentModuleProgress, toggleSection, isSectionCompleteForStudent,
      // Confirm modal
      showConfirmModal, confirmAction, confirmMessage,
      // Answer key
      showAnswerKey, answerKeyModule, answerKeyData, openAnswerKey, closeAnswerKey,
      // Functions
      login, logout, goToDashboard, getModuleProgress, isSectionComplete, openModule, markComplete, 
      checkPractice, submitQuiz, toggleAudio, viewStudentProgress, confirmResetProgress, resetStudentProgress, 
      startExam, submitExam, closeExamResults, toggleMultiSelect, toggleExamMultiSelect
    };
  }
}).mount('#app');
