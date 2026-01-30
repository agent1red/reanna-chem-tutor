// Module Loader - Dynamically loads all subject modules
// To add a new subject: create folder, add module files, register here

const ModuleRegistry = {
  modules: {},
  subjects: {},
  
  register(module) {
    this.modules[module.id] = module;
    if (!this.subjects[module.subject]) {
      this.subjects[module.subject] = [];
    }
    this.subjects[module.subject].push(module.id);
  },
  
  getModule(id) {
    return this.modules[id];
  },
  
  getAllModules() {
    return Object.values(this.modules);
  },
  
  getModulesBySubject(subject) {
    const ids = this.subjects[subject] || [];
    return ids.map(id => this.modules[id]);
  },
  
  getSubjects() {
    return Object.keys(this.subjects);
  },
  
  // Get randomized questions from a module's pool
  getRandomizedQuestions(moduleId, poolType, count) {
    const module = this.modules[moduleId];
    if (!module || !module.questionPools || !module.questionPools[poolType]) {
      return [];
    }
    
    const pool = [...module.questionPools[poolType]];
    const shuffled = this.shuffleArray(pool);
    const selected = shuffled.slice(0, count);
    
    // Randomize answer order for multiple choice
    return selected.map(q => {
      if (q.type === 'multiple-choice' && q.options) {
        const shuffledOptions = this.shuffleArray([...q.options]);
        return { ...q, options: shuffledOptions };
      }
      if (q.type === 'multi-select' && q.options) {
        const shuffledOptions = this.shuffleArray([...q.options]);
        return { ...q, options: shuffledOptions };
      }
      return q;
    });
  },
  
  // Fisher-Yates shuffle
  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },
  
  // Get exam questions from all modules
  getExamQuestions(count = 20) {
    const allModules = this.getAllModules();
    const questionsPerModule = Math.ceil(count / allModules.length);
    let allQuestions = [];
    
    allModules.forEach(module => {
      const moduleQuestions = this.getRandomizedQuestions(
        module.id, 
        'quiz', 
        questionsPerModule
      ).map(q => ({ ...q, module: module.id, moduleTitle: module.title }));
      allQuestions = allQuestions.concat(moduleQuestions);
    });
    
    // Shuffle all and take exact count
    return this.shuffleArray(allQuestions).slice(0, count);
  }
};

// Register Chemistry modules (loaded via script tags)
if (typeof window !== 'undefined') {
  window.ModuleRegistry = ModuleRegistry;
  
  // Auto-register modules when they're loaded
  window.addEventListener('DOMContentLoaded', () => {
    // Chemistry modules
    if (window.sigFigsModule) ModuleRegistry.register(window.sigFigsModule);
    if (window.nomenclatureModule) ModuleRegistry.register(window.nomenclatureModule);
    if (window.matterAtomsModule) ModuleRegistry.register(window.matterAtomsModule);
    if (window.labSkillsModule) ModuleRegistry.register(window.labSkillsModule);
    
    // Future subjects would be registered here:
    // if (window.historyModule1) ModuleRegistry.register(window.historyModule1);
    // etc.
    
    console.log('📚 Modules loaded:', Object.keys(ModuleRegistry.modules));
  });
}
