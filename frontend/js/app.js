const { createApp, ref, reactive, computed, onMounted, watch } = Vue;

// Module content data
const moduleData = {
  'sig-figs': {
    id: 'sig-figs',
    emoji: '🔢',
    title: 'Significant Figures',
    description: 'Learn the rules for significant figures and how to use them in calculations.',
    content: {
      video: {
        url: 'https://www.youtube.com/embed/eCJ76hz7jPM',
        title: 'Significant Figures Made Easy'
      },
      reading: {
        html: `
          <h3 class="text-xl font-bold mb-4 text-primary">What are Significant Figures?</h3>
          <p class="mb-4">Significant figures (sig figs) are the digits in a number that carry meaningful information about its precision. They tell us how precise a measurement is.</p>
          
          <h4 class="text-lg font-bold mb-2 text-secondary">The Rules:</h4>
          <div class="bg-purple-50 rounded-xl p-4 mb-4">
            <ol class="list-decimal list-inside space-y-2">
              <li><strong>Non-zero digits</strong> are ALWAYS significant. (123 has 3 sig figs)</li>
              <li><strong>Zeros between non-zero digits</strong> are significant. (102 has 3 sig figs)</li>
              <li><strong>Leading zeros</strong> are NOT significant. (0.0025 has 2 sig figs)</li>
              <li><strong>Trailing zeros after a decimal</strong> ARE significant. (2.500 has 4 sig figs)</li>
              <li><strong>Trailing zeros without a decimal</strong> are ambiguous. (2500 could be 2, 3, or 4 sig figs)</li>
            </ol>
          </div>

          <h4 class="text-lg font-bold mb-2 text-secondary">Examples:</h4>
          <table class="w-full mb-4 bg-white rounded-xl overflow-hidden">
            <thead class="bg-primary text-white">
              <tr><th class="p-3">Number</th><th class="p-3">Sig Figs</th><th class="p-3">Why?</th></tr>
            </thead>
            <tbody>
              <tr class="border-b"><td class="p-3 text-center">45.8</td><td class="p-3 text-center">3</td><td class="p-3">All non-zero</td></tr>
              <tr class="border-b"><td class="p-3 text-center">0.00340</td><td class="p-3 text-center">3</td><td class="p-3">Leading zeros don't count, trailing does</td></tr>
              <tr class="border-b"><td class="p-3 text-center">1.020</td><td class="p-3 text-center">4</td><td class="p-3">Zero between and trailing zero count</td></tr>
              <tr><td class="p-3 text-center">5000.</td><td class="p-3 text-center">4</td><td class="p-3">Decimal point makes all zeros significant</td></tr>
            </tbody>
          </table>

          <h4 class="text-lg font-bold mb-2 text-secondary">Calculations with Sig Figs:</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-50 rounded-xl p-4">
              <h5 class="font-bold text-success mb-2">Addition & Subtraction</h5>
              <p>Round to the <strong>least decimal places</strong></p>
              <p class="text-sm mt-2">12.52 + 1.7 = 14.22 → <strong>14.2</strong></p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4">
              <h5 class="font-bold text-accent mb-2">Multiplication & Division</h5>
              <p>Round to the <strong>least sig figs</strong></p>
              <p class="text-sm mt-2">4.56 × 1.4 = 6.384 → <strong>6.4</strong></p>
            </div>
          </div>
        `
      },
      practice: [
        { question: 'How many significant figures are in 0.00450?', answer: '3', hint: 'Leading zeros don\'t count, but trailing zeros after decimal do!' },
        { question: 'How many significant figures are in 1020?', answer: '3', hint: 'Trailing zeros without decimal are not significant' },
        { question: 'Round 12.587 to 3 significant figures:', answer: '12.6', hint: 'Look at the 4th digit to decide rounding' },
        { question: 'Calculate with correct sig figs: 2.5 × 3.42 = ?', answer: '8.6', hint: '2.5 has 2 sig figs, so answer needs 2 sig figs' }
      ],
      quiz: [
        { type: 'multiple-choice', question: 'How many significant figures are in 0.0032?', options: ['1', '2', '3', '4'], correctAnswer: '2' },
        { type: 'multiple-choice', question: 'How many significant figures are in 100.0?', options: ['1', '3', '4', '5'], correctAnswer: '4' },
        { type: 'fill-in-blank', question: 'How many significant figures are in 2.050?', correctAnswer: '4' },
        { type: 'multiple-choice', question: 'For addition/subtraction, you round to the:', options: ['Least sig figs', 'Most sig figs', 'Least decimal places', 'Most decimal places'], correctAnswer: 'Least decimal places' },
        { type: 'fill-in-blank', question: 'Calculate with correct sig figs: 4.0 + 2.55 = ?', correctAnswer: '6.6' }
      ]
    }
  },
  'nomenclature': {
    id: 'nomenclature',
    emoji: '🏷️',
    title: 'Chemical Nomenclature',
    description: 'Master naming Type I, II, and III chemical compounds.',
    content: {
      video: {
        url: 'https://www.youtube.com/embed/VBJrJljDwjY',
        title: 'Naming Compounds - Tyler DeWitt'
      },
      reading: {
        html: `
          <h3 class="text-xl font-bold mb-4 text-primary">Naming Chemical Compounds</h3>
          <p class="mb-4">Chemical nomenclature is the system for naming compounds. There are three main types you need to know!</p>

          <div class="bg-purple-50 rounded-xl p-4 mb-6">
            <h4 class="text-lg font-bold text-primary mb-3">🔵 Type I: Ionic Compounds (Fixed Charge Metals)</h4>
            <p class="mb-2">Metals that always have the SAME charge.</p>
            <p class="font-semibold mb-2">Formula: Metal name + Nonmetal with -ide ending</p>
            <div class="bg-white rounded-lg p-3">
              <p><strong>Examples:</strong></p>
              <ul class="list-disc list-inside">
                <li>NaCl → Sodium chloride</li>
                <li>CaBr₂ → Calcium bromide</li>
                <li>K₂O → Potassium oxide</li>
              </ul>
            </div>
            <p class="mt-2 text-sm">Common Type I metals: Na⁺, K⁺, Ca²⁺, Mg²⁺, Al³⁺, Zn²⁺, Ag⁺</p>
          </div>

          <div class="bg-pink-50 rounded-xl p-4 mb-6">
            <h4 class="text-lg font-bold text-secondary mb-3">🟣 Type II: Ionic Compounds (Variable Charge Metals)</h4>
            <p class="mb-2">Metals that can have DIFFERENT charges (transition metals).</p>
            <p class="font-semibold mb-2">Formula: Metal name(Roman numeral) + Nonmetal with -ide</p>
            <div class="bg-white rounded-lg p-3">
              <p><strong>Examples:</strong></p>
              <ul class="list-disc list-inside">
                <li>FeCl₂ → Iron(II) chloride (Fe is +2)</li>
                <li>FeCl₃ → Iron(III) chloride (Fe is +3)</li>
                <li>CuO → Copper(II) oxide</li>
                <li>Cu₂O → Copper(I) oxide</li>
              </ul>
            </div>
            <p class="mt-2 text-sm">Common Type II metals: Fe, Cu, Pb, Sn, Co, Ni, Cr, Mn</p>
          </div>

          <div class="bg-cyan-50 rounded-xl p-4 mb-6">
            <h4 class="text-lg font-bold text-accent mb-3">🟢 Type III: Covalent/Molecular Compounds</h4>
            <p class="mb-2">Nonmetal + Nonmetal compounds. Use prefixes!</p>
            <div class="bg-white rounded-lg p-3 mb-3">
              <p><strong>Prefixes:</strong> mono(1), di(2), tri(3), tetra(4), penta(5), hexa(6), hepta(7), octa(8), nona(9), deca(10)</p>
            </div>
            <p class="font-semibold mb-2">Formula: Prefix-first element + Prefix-second element-ide</p>
            <div class="bg-white rounded-lg p-3">
              <p><strong>Examples:</strong></p>
              <ul class="list-disc list-inside">
                <li>CO₂ → Carbon dioxide</li>
                <li>N₂O₄ → Dinitrogen tetroxide</li>
                <li>PCl₅ → Phosphorus pentachloride</li>
              </ul>
            </div>
            <p class="mt-2 text-sm">Note: Don't use "mono" for the first element (CO₂ is carbon dioxide, not monocarbon dioxide)</p>
          </div>

          <h4 class="text-lg font-bold mb-2 text-secondary">Quick Decision Tree:</h4>
          <div class="bg-gray-100 rounded-xl p-4">
            <p>1. Does it contain a metal? → If NO, it's <strong>Type III</strong> (use prefixes)</p>
            <p>2. If YES, is the metal always the same charge? → If YES, it's <strong>Type I</strong></p>
            <p>3. If the metal can have different charges → It's <strong>Type II</strong> (use Roman numerals)</p>
          </div>
        `
      },
      practice: [
        { question: 'Name this compound: NaBr', answer: 'sodium bromide', hint: 'Type I - Na always has +1 charge' },
        { question: 'Name this compound: FeCl₃', answer: 'iron(III) chloride', hint: 'Type II - Figure out iron\'s charge from chlorine\'s -1' },
        { question: 'Name this compound: N₂O₅', answer: 'dinitrogen pentoxide', hint: 'Type III - Two nonmetals, use prefixes' },
        { question: 'Write the formula for: calcium fluoride', answer: 'CaF2', hint: 'Ca is +2, F is -1, you need 2 fluorines' }
      ],
      quiz: [
        { type: 'multiple-choice', question: 'What type of compound is CuCl₂?', options: ['Type I', 'Type II', 'Type III'], correctAnswer: 'Type II' },
        { type: 'fill-in-blank', question: 'Name this compound: MgO', correctAnswer: 'magnesium oxide' },
        { type: 'fill-in-blank', question: 'Name this compound: CO', correctAnswer: 'carbon monoxide' },
        { type: 'multiple-choice', question: 'Which prefix means 4?', options: ['tri', 'tetra', 'penta', 'hexa'], correctAnswer: 'tetra' },
        { type: 'fill-in-blank', question: 'Write the formula for iron(II) oxide:', correctAnswer: 'FeO' }
      ]
    }
  },
  'matter-atoms': {
    id: 'matter-atoms',
    emoji: '⚛️',
    title: 'Matter & Atomic Structure',
    description: 'Understand matter classification and atomic structure.',
    content: {
      video: {
        url: 'https://www.youtube.com/embed/FSyAehMdpyI',
        title: 'Atomic Structure - Crash Course'
      },
      reading: {
        html: `
          <h3 class="text-xl font-bold mb-4 text-primary">Understanding Matter</h3>
          
          <h4 class="text-lg font-bold mb-2 text-secondary">Classification of Matter</h4>
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6">
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white rounded-lg p-4">
                <h5 class="font-bold text-primary mb-2">Pure Substances</h5>
                <p class="mb-2"><strong>Elements:</strong> Only one type of atom (Fe, O₂, Au)</p>
                <p><strong>Compounds:</strong> Two or more elements chemically bonded (H₂O, NaCl, CO₂)</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h5 class="font-bold text-secondary mb-2">Mixtures</h5>
                <p class="mb-2"><strong>Homogeneous:</strong> Uniform throughout (salt water, air)</p>
                <p><strong>Heterogeneous:</strong> Not uniform (salad, pizza, sand)</p>
              </div>
            </div>
          </div>

          <h4 class="text-lg font-bold mb-2 text-secondary">Physical vs Chemical Properties</h4>
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="bg-blue-50 rounded-xl p-4">
              <h5 class="font-bold text-accent mb-2">Physical Properties</h5>
              <p class="mb-2">Can be observed without changing the substance:</p>
              <ul class="list-disc list-inside text-sm">
                <li>Color, odor, texture</li>
                <li>Melting/boiling point</li>
                <li>Density, solubility</li>
                <li>State of matter</li>
              </ul>
            </div>
            <div class="bg-red-50 rounded-xl p-4">
              <h5 class="font-bold text-danger mb-2">Chemical Properties</h5>
              <p class="mb-2">Describe how substance reacts:</p>
              <ul class="list-disc list-inside text-sm">
                <li>Flammability</li>
                <li>Reactivity with acid</li>
                <li>Oxidation (rusting)</li>
                <li>Toxicity</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-bold mb-4 text-primary">Atomic Structure</h3>
          <div class="bg-gray-100 rounded-xl p-4 mb-4">
            <table class="w-full">
              <thead>
                <tr class="text-left"><th class="p-2">Particle</th><th class="p-2">Charge</th><th class="p-2">Location</th><th class="p-2">Mass (amu)</th></tr>
              </thead>
              <tbody>
                <tr><td class="p-2">Proton (p⁺)</td><td class="p-2 text-success">+1</td><td class="p-2">Nucleus</td><td class="p-2">1</td></tr>
                <tr><td class="p-2">Neutron (n⁰)</td><td class="p-2">0</td><td class="p-2">Nucleus</td><td class="p-2">1</td></tr>
                <tr><td class="p-2">Electron (e⁻)</td><td class="p-2 text-danger">-1</td><td class="p-2">Electron cloud</td><td class="p-2">~0</td></tr>
              </tbody>
            </table>
          </div>

          <h4 class="text-lg font-bold mb-2 text-secondary">Key Relationships:</h4>
          <div class="bg-yellow-50 rounded-xl p-4 mb-4">
            <ul class="space-y-2">
              <li><strong>Atomic Number (Z)</strong> = Number of protons = Number of electrons (in neutral atom)</li>
              <li><strong>Mass Number (A)</strong> = Protons + Neutrons</li>
              <li><strong>Neutrons</strong> = Mass Number - Atomic Number</li>
            </ul>
          </div>

          <h4 class="text-lg font-bold mb-2 text-secondary">Isotopes</h4>
          <p class="mb-4">Atoms of the same element with <strong>different numbers of neutrons</strong>.</p>
          <div class="bg-purple-50 rounded-xl p-4">
            <p><strong>Example: Carbon Isotopes</strong></p>
            <ul class="list-disc list-inside">
              <li>Carbon-12: 6 protons, 6 neutrons (most common)</li>
              <li>Carbon-13: 6 protons, 7 neutrons</li>
              <li>Carbon-14: 6 protons, 8 neutrons (radioactive)</li>
            </ul>
            <p class="mt-2 text-sm">All are carbon because they all have 6 protons!</p>
          </div>
        `
      },
      practice: [
        { question: 'Is dissolving sugar in water a physical or chemical change?', answer: 'physical', hint: 'Can you get the sugar back by evaporating the water?' },
        { question: 'An atom has 17 protons and 18 neutrons. What is its mass number?', answer: '35', hint: 'Mass number = protons + neutrons' },
        { question: 'Carbon-14 has how many neutrons?', answer: '8', hint: 'Carbon always has 6 protons. 14 - 6 = ?' },
        { question: 'Is air a homogeneous or heterogeneous mixture?', answer: 'homogeneous', hint: 'Is air uniform throughout?' }
      ],
      quiz: [
        { type: 'multiple-choice', question: 'Which is a chemical property?', options: ['Density', 'Boiling point', 'Flammability', 'Color'], correctAnswer: 'Flammability' },
        { type: 'fill-in-blank', question: 'The atomic number equals the number of _____', correctAnswer: 'protons' },
        { type: 'multiple-choice', question: 'Isotopes have different numbers of:', options: ['Protons', 'Electrons', 'Neutrons', 'Charges'], correctAnswer: 'Neutrons' },
        { type: 'fill-in-blank', question: 'An atom with 8 protons and 8 neutrons has a mass number of:', correctAnswer: '16' },
        { type: 'multiple-choice', question: 'Salt water is what type of mixture?', options: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'], correctAnswer: 'Homogeneous mixture' }
      ]
    }
  },
  'lab-skills': {
    id: 'lab-skills',
    emoji: '🔬',
    title: 'Lab Skills',
    description: 'Master density calculations and lab techniques.',
    content: {
      video: {
        url: 'https://www.youtube.com/embed/qMPM6azVVhM',
        title: 'Density Problems - Chemistry'
      },
      reading: {
        html: `
          <h3 class="text-xl font-bold mb-4 text-primary">Density</h3>
          
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 mb-6">
            <h4 class="text-2xl font-bold text-center mb-4">D = m / V</h4>
            <div class="grid md:grid-cols-3 gap-4 text-center">
              <div class="bg-white rounded-lg p-3">
                <p class="font-bold text-primary">D = Density</p>
                <p class="text-sm">g/mL or g/cm³</p>
              </div>
              <div class="bg-white rounded-lg p-3">
                <p class="font-bold text-secondary">m = Mass</p>
                <p class="text-sm">grams (g)</p>
              </div>
              <div class="bg-white rounded-lg p-3">
                <p class="font-bold text-accent">V = Volume</p>
                <p class="text-sm">mL or cm³</p>
              </div>
            </div>
          </div>

          <h4 class="text-lg font-bold mb-2 text-secondary">Rearranging the Formula:</h4>
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-purple-50 rounded-xl p-4 text-center">
              <p class="font-bold">Find Density</p>
              <p class="text-xl">D = m ÷ V</p>
            </div>
            <div class="bg-pink-50 rounded-xl p-4 text-center">
              <p class="font-bold">Find Mass</p>
              <p class="text-xl">m = D × V</p>
            </div>
            <div class="bg-cyan-50 rounded-xl p-4 text-center">
              <p class="font-bold">Find Volume</p>
              <p class="text-xl">V = m ÷ D</p>
            </div>
          </div>

          <h4 class="text-lg font-bold mb-2 text-secondary">Example Problem:</h4>
          <div class="bg-gray-100 rounded-xl p-4 mb-6">
            <p class="font-semibold mb-2">A metal cube has a mass of 27 g and a volume of 10 cm³. What is its density?</p>
            <p class="text-primary">D = m / V</p>
            <p class="text-primary">D = 27 g / 10 cm³</p>
            <p class="text-primary font-bold">D = 2.7 g/cm³</p>
          </div>

          <h3 class="text-xl font-bold mb-4 text-primary">Lab Techniques</h3>
          
          <h4 class="text-lg font-bold mb-2 text-secondary">Measuring Volume of Liquids:</h4>
          <div class="bg-blue-50 rounded-xl p-4 mb-4">
            <p class="mb-2">Use a <strong>graduated cylinder</strong> and read at the <strong>meniscus</strong> (the bottom of the curve).</p>
            <p class="text-sm">Always read at eye level!</p>
          </div>

          <h4 class="text-lg font-bold mb-2 text-secondary">Measuring Volume of Irregular Solids:</h4>
          <div class="bg-green-50 rounded-xl p-4 mb-4">
            <p class="font-semibold mb-2">Water Displacement Method:</p>
            <ol class="list-decimal list-inside">
              <li>Record initial water volume in graduated cylinder</li>
              <li>Carefully add the object</li>
              <li>Record new water volume</li>
              <li>Volume of object = Final volume - Initial volume</li>
            </ol>
          </div>

          <h4 class="text-lg font-bold mb-2 text-secondary">Common Densities to Know:</h4>
          <table class="w-full bg-white rounded-xl overflow-hidden">
            <thead class="bg-primary text-white">
              <tr><th class="p-3">Substance</th><th class="p-3">Density (g/cm³)</th><th class="p-3">Float or Sink in Water?</th></tr>
            </thead>
            <tbody>
              <tr class="border-b"><td class="p-3">Water</td><td class="p-3 text-center">1.0</td><td class="p-3 text-center">—</td></tr>
              <tr class="border-b"><td class="p-3">Ice</td><td class="p-3 text-center">0.92</td><td class="p-3 text-center">Float</td></tr>
              <tr class="border-b"><td class="p-3">Aluminum</td><td class="p-3 text-center">2.7</td><td class="p-3 text-center">Sink</td></tr>
              <tr class="border-b"><td class="p-3">Gold</td><td class="p-3 text-center">19.3</td><td class="p-3 text-center">Sink</td></tr>
              <tr><td class="p-3">Vegetable Oil</td><td class="p-3 text-center">0.92</td><td class="p-3 text-center">Float</td></tr>
            </tbody>
          </table>
          <p class="mt-2 text-sm text-gray-500">Objects with density < 1 g/cm³ float in water; objects with density > 1 g/cm³ sink.</p>
        `
      },
      practice: [
        { question: 'A rock has mass 50g and volume 20mL. What is its density?', answer: '2.5', hint: 'D = m/V = 50/20' },
        { question: 'Will an object with density 0.8 g/cm³ float or sink in water?', answer: 'float', hint: 'Water has density 1.0 g/cm³' },
        { question: 'A liquid has density 1.5 g/mL. What is the mass of 10 mL?', answer: '15', hint: 'm = D × V' },
        { question: 'What is the volume of 100g of water?', answer: '100', hint: 'Water density = 1.0 g/mL, V = m/D' }
      ],
      quiz: [
        { type: 'fill-in-blank', question: 'The formula for density is D = m divided by ___', correctAnswer: 'V' },
        { type: 'multiple-choice', question: 'A substance with density 0.7 g/mL will ___ in water', options: ['float', 'sink', 'dissolve', 'react'], correctAnswer: 'float' },
        { type: 'fill-in-blank', question: 'Calculate: An object has mass 45g and volume 15mL. Density = ___ g/mL', correctAnswer: '3' },
        { type: 'multiple-choice', question: 'To find volume of an irregular solid, use:', options: ['A ruler', 'Water displacement', 'A scale', 'Estimation'], correctAnswer: 'Water displacement' },
        { type: 'fill-in-blank', question: 'If D = 2.0 g/mL and V = 25 mL, then mass = ___ g', correctAnswer: '50' }
      ]
    }
  }
};

createApp({
  setup() {
    // State
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
    const quizAnswers = ref([]);
    const showQuizResults = ref(false);
    const quizResults = ref({});
    const isPlaying = ref(false);
    const audioElement = ref(null);
    
    // Final exam state
    const examEligible = ref(false);
    const examQuestions = ref([]);
    const examAnswers = ref([]);
    const showExamResults = ref(false);
    const examResults = ref({});
    
    // Admin state
    const students = ref([]);
    const adminStats = ref({ totalStudents: 0, averageProgress: 0, totalQuizAttempts: 0, averageQuizScore: 0 });

    // Modules list
    const modules = Object.values(moduleData);

    const sections = [
      { id: 'video', title: 'Video', emoji: '📺' },
      { id: 'reading', title: 'Reading', emoji: '📖' },
      { id: 'practice', title: 'Practice', emoji: '✏️' },
      { id: 'quiz', title: 'Quiz', emoji: '📝' }
    ];

    // Computed
    const overallProgress = computed(() => {
      const totalSections = modules.length * 4;
      let completed = 0;
      for (const moduleId in progress.value) {
        for (const section in progress.value[moduleId]) {
          if (progress.value[moduleId][section].completed) completed++;
        }
      }
      return Math.round((completed / totalSections) * 100);
    });

    // Methods
    const api = async (endpoint, options = {}) => {
      const headers = { 'Content-Type': 'application/json' };
      if (token.value) headers['Authorization'] = `Bearer ${token.value}`;
      
      const response = await fetch(`/api${endpoint}`, {
        ...options,
        headers: { ...headers, ...options.headers }
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Request failed');
      }
      
      return response.json();
    };

    const login = async () => {
      loginError.value = '';
      try {
        const data = await api('/auth/login', {
          method: 'POST',
          body: JSON.stringify(loginForm)
        });
        token.value = data.token;
        user.value = data.user;
        localStorage.setItem('token', data.token);
        await loadProgress();
        if (data.user.role === 'admin') {
          await loadAdminData();
        }
      } catch (error) {
        loginError.value = error.message;
      }
    };

    const logout = () => {
      token.value = null;
      user.value = null;
      localStorage.removeItem('token');
      currentView.value = 'dashboard';
    };

    const loadProgress = async () => {
      try {
        progress.value = await api('/progress');
      } catch (error) {
        console.error('Failed to load progress:', error);
      }
    };

    const loadAdminData = async () => {
      try {
        students.value = await api('/admin/students');
        adminStats.value = await api('/admin/stats');
      } catch (error) {
        console.error('Failed to load admin data:', error);
      }
    };

    const getModuleProgress = (moduleId) => {
      if (!progress.value[moduleId]) return 0;
      const sections = Object.values(progress.value[moduleId]);
      const completed = sections.filter(s => s.completed).length;
      return Math.round((completed / 4) * 100);
    };

    const isSectionComplete = (moduleId, section) => {
      return progress.value[moduleId]?.[section]?.completed || false;
    };

    const openModule = (module) => {
      currentModule.value = module;
      currentSection.value = 'video';
      currentView.value = 'module';
      practiceAnswers.value = [];
      practiceChecked.value = [];
      quizAnswers.value = [];
    };

    const markComplete = async (sectionType) => {
      try {
        await api('/progress/update', {
          method: 'POST',
          body: JSON.stringify({
            moduleId: currentModule.value.id,
            sectionType,
            completed: true
          })
        });
        await loadProgress();
      } catch (error) {
        console.error('Failed to update progress:', error);
      }
    };

    const checkPractice = () => {
      const problems = currentModule.value.content.practice;
      practiceChecked.value = practiceAnswers.value.map((answer, i) => {
        const correct = problems[i].answer.toLowerCase().trim();
        const userAnswer = (answer || '').toLowerCase().trim();
        return userAnswer === correct;
      });
      
      const allCorrect = practiceChecked.value.every(c => c);
      if (allCorrect) {
        markComplete('practice');
      }
    };

    const submitQuiz = async () => {
      const questions = currentModule.value.content.quiz;
      const answers = questions.map((q, i) => ({
        questionId: i,
        type: q.type,
        question: q.question,
        correctAnswer: q.correctAnswer,
        userAnswer: quizAnswers.value[i] || ''
      }));

      try {
        const result = await api('/quiz/submit', {
          method: 'POST',
          body: JSON.stringify({
            moduleId: currentModule.value.id,
            answers
          })
        });
        quizResults.value = result;
        showQuizResults.value = true;
        await loadProgress();
      } catch (error) {
        console.error('Failed to submit quiz:', error);
      }
    };

    const toggleAudio = async () => {
      if (!audioElement.value) {
        // First time - load the audio
        try {
          const response = await api(`/tts/${currentModule.value.id}`);
          audioElement.value = new Audio(response.audioUrl);
          audioElement.value.onended = () => { isPlaying.value = false; };
          audioElement.value.onerror = () => { 
            isPlaying.value = false;
            alert('Audio playback error. Try again.');
          };
        } catch (error) {
          alert('🔊 Audio not available: ' + (error.message || 'TTS not configured'));
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

    const viewStudentProgress = async (student) => {
      try {
        const data = await api(`/admin/students/${student.id}/progress`);
        alert(`Progress for ${student.username}:\n${JSON.stringify(data.progress, null, 2)}`);
      } catch (error) {
        console.error('Failed to load student progress:', error);
      }
    };

    const resetStudentProgress = async (student) => {
      if (!confirm(`Reset all progress for ${student.username}?`)) return;
      try {
        await api(`/admin/students/${student.id}/reset`, { method: 'POST' });
        alert('Progress reset successfully');
        await loadAdminData();
      } catch (error) {
        console.error('Failed to reset progress:', error);
      }
    };

    // Final Exam methods
    const checkExamEligibility = async () => {
      try {
        const data = await api('/exam/eligibility');
        examEligible.value = data.eligible;
      } catch (error) {
        console.error('Failed to check exam eligibility:', error);
      }
    };

    const startExam = async () => {
      try {
        const questions = await api('/exam/questions');
        examQuestions.value = questions;
        examAnswers.value = new Array(questions.length).fill('');
        currentView.value = 'exam';
      } catch (error) {
        alert('Failed to load exam: ' + error.message);
      }
    };

    const submitExam = async () => {
      const answers = examQuestions.value.map((q, i) => ({
        questionId: q.id,
        type: q.type,
        userAnswer: examAnswers.value[i] || ''
      }));

      try {
        const result = await api('/exam/submit', {
          method: 'POST',
          body: JSON.stringify({ answers })
        });
        examResults.value = result;
        showExamResults.value = true;
      } catch (error) {
        alert('Failed to submit exam: ' + error.message);
      }
    };

    const closeExamResults = () => {
      showExamResults.value = false;
      currentView.value = 'dashboard';
      examQuestions.value = [];
      examAnswers.value = [];
    };

    // Initialize
    onMounted(async () => {
      if (token.value) {
        try {
          user.value = await api('/auth/me');
          await loadProgress();
          await checkExamEligibility();
          if (user.value.role === 'admin') {
            await loadAdminData();
          }
        } catch (error) {
          localStorage.removeItem('token');
          token.value = null;
        }
      }
      loading.value = false;
    });

    return {
      loading,
      user,
      loginForm,
      loginError,
      currentView,
      currentModule,
      currentSection,
      progress,
      modules,
      sections,
      overallProgress,
      practiceAnswers,
      practiceChecked,
      quizAnswers,
      showQuizResults,
      quizResults,
      isPlaying,
      students,
      adminStats,
      examEligible,
      examQuestions,
      examAnswers,
      showExamResults,
      examResults,
      login,
      logout,
      getModuleProgress,
      isSectionComplete,
      openModule,
      markComplete,
      checkPractice,
      submitQuiz,
      toggleAudio,
      viewStudentProgress,
      resetStudentProgress,
      startExam,
      submitExam,
      closeExamResults
    };
  }
}).mount('#app');
