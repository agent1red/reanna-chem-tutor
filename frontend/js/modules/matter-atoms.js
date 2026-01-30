// Matter & Atomic Structure Module Content
const matterAtomsModule = {
  id: 'matter-atoms',
  emoji: '⚛️',
  title: 'Matter & Atomic Structure',
  description: 'Understand matter classification and atomic structure.',
  content: {
    video: {
      url: 'https://www.youtube.com/embed/FSyAehMdpyI',
      title: 'Atomic Structure - Crash Course Chemistry'
    },
    reading: {
      html: `
        <h3 class="text-xl font-bold mb-4 text-primary">Everything is Matter (Except Energy) 🌍</h3>
        <p class="mb-4">Look around you. Your phone, the air you breathe, your water bottle — it's all matter. Matter is anything that has mass and takes up space. The only thing that ISN'T matter is energy (like light or heat). Understanding how matter is organized is the foundation of all chemistry.</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">How We Classify Matter 📊</h4>
        <p class="mb-3">Scientists organize matter into categories based on its composition. Here's the breakdown:</p>
        
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 mb-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold text-primary mb-2">🔷 Pure Substances</h5>
              <p class="text-sm mb-3">Have a definite, fixed composition. Always the same throughout.</p>
              
              <div class="bg-blue-50 rounded p-3 mb-2">
                <p class="font-semibold">Elements</p>
                <p class="text-sm">Made of only ONE type of atom. Can't be broken down further by chemical means.</p>
                <p class="text-xs text-gray-500 mt-1">Examples: Gold (Au), Oxygen (O₂), Iron (Fe), Carbon (C)</p>
              </div>
              
              <div class="bg-purple-50 rounded p-3">
                <p class="font-semibold">Compounds</p>
                <p class="text-sm">Two or more elements chemically bonded in a fixed ratio.</p>
                <p class="text-xs text-gray-500 mt-1">Examples: Water (H₂O), Salt (NaCl), Sugar (C₆H₁₂O₆)</p>
              </div>
            </div>
            
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold text-secondary mb-2">🔶 Mixtures</h5>
              <p class="text-sm mb-3">Two or more substances physically combined (NOT chemically bonded).</p>
              
              <div class="bg-green-50 rounded p-3 mb-2">
                <p class="font-semibold">Homogeneous (Solutions)</p>
                <p class="text-sm">Uniform throughout — looks the same everywhere.</p>
                <p class="text-xs text-gray-500 mt-1">Examples: Salt water, air, coffee, alloys (bronze)</p>
              </div>
              
              <div class="bg-yellow-50 rounded p-3">
                <p class="font-semibold">Heterogeneous</p>
                <p class="text-sm">NOT uniform — you can see different parts.</p>
                <p class="text-xs text-gray-500 mt-1">Examples: Salad, pizza, trail mix, sand, blood</p>
              </div>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Physical vs Chemical: The Big Distinction ⚡</h4>
        <p class="mb-3">This is a concept that shows up EVERYWHERE in chemistry. You need to know the difference:</p>
        
        <div class="grid md:grid-cols-2 gap-4 mb-5">
          <div class="bg-blue-50 rounded-xl p-4">
            <h5 class="font-bold text-accent mb-2">Physical Properties & Changes</h5>
            <p class="text-sm mb-3">Can be observed WITHOUT changing what the substance IS.</p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p class="font-semibold mb-1">Physical Properties:</p>
              <ul class="list-disc list-inside space-y-1">
                <li>Color, odor, taste</li>
                <li>Melting/boiling point</li>
                <li>Density</li>
                <li>Hardness</li>
                <li>Conductivity</li>
                <li>Solubility</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-3 text-sm mt-2">
              <p class="font-semibold mb-1">Physical Changes:</p>
              <p>Melting, freezing, boiling, dissolving, cutting, crushing</p>
              <p class="text-xs text-gray-500 mt-1">The substance is still the same thing!</p>
            </div>
          </div>
          
          <div class="bg-red-50 rounded-xl p-4">
            <h5 class="font-bold text-danger mb-2">Chemical Properties & Changes</h5>
            <p class="text-sm mb-3">Describe how a substance REACTS or changes into NEW substances.</p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p class="font-semibold mb-1">Chemical Properties:</p>
              <ul class="list-disc list-inside space-y-1">
                <li>Flammability</li>
                <li>Reactivity with acids</li>
                <li>Reactivity with oxygen (oxidation)</li>
                <li>Reactivity with water</li>
                <li>Toxicity</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-3 text-sm mt-2">
              <p class="font-semibold mb-1">Signs of Chemical Change:</p>
              <p>Color change, gas bubbles, precipitate forms, energy released/absorbed, new smell</p>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Inside the Atom ⚛️</h4>
        <p class="mb-3">Atoms are the building blocks of all matter. They're incredibly tiny — millions could fit on the period at the end of this sentence. But they're made of even smaller particles:</p>
        
        <div class="bg-gray-100 rounded-xl p-4 mb-5">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b-2"><th class="p-2 text-left">Particle</th><th class="p-2 text-center">Symbol</th><th class="p-2 text-center">Charge</th><th class="p-2 text-center">Mass (amu)</th><th class="p-2 text-left">Location</th></tr>
            </thead>
            <tbody>
              <tr class="border-b"><td class="p-2 font-semibold">Proton</td><td class="p-2 text-center">p⁺</td><td class="p-2 text-center text-green-600 font-bold">+1</td><td class="p-2 text-center">1</td><td class="p-2">Nucleus (center)</td></tr>
              <tr class="border-b"><td class="p-2 font-semibold">Neutron</td><td class="p-2 text-center">n⁰</td><td class="p-2 text-center">0</td><td class="p-2 text-center">1</td><td class="p-2">Nucleus (center)</td></tr>
              <tr><td class="p-2 font-semibold">Electron</td><td class="p-2 text-center">e⁻</td><td class="p-2 text-center text-red-600 font-bold">-1</td><td class="p-2 text-center">~0</td><td class="p-2">Electron cloud (outside)</td></tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">The Numbers You Need to Know 🔢</h4>
        <div class="bg-yellow-50 rounded-xl p-5 mb-5">
          <div class="space-y-3">
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold text-primary">Atomic Number (Z)</p>
              <p class="text-sm">= Number of protons</p>
              <p class="text-sm">= Number of electrons (in a neutral atom)</p>
              <p class="text-xs text-gray-500">This defines what element it is! All carbon atoms have 6 protons.</p>
            </div>
            
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold text-secondary">Mass Number (A)</p>
              <p class="text-sm">= Protons + Neutrons</p>
              <p class="text-xs text-gray-500">This is the total of the "heavy" particles in the nucleus.</p>
            </div>
            
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold text-accent">Finding Neutrons</p>
              <p class="text-sm">Neutrons = Mass Number - Atomic Number</p>
              <p class="text-xs text-gray-500">Or: n = A - Z</p>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Isotopes: Same Element, Different Mass 🔄</h4>
        <div class="bg-purple-50 rounded-xl p-5 mb-5">
          <p class="mb-3">Isotopes are atoms of the SAME element (same number of protons) but with DIFFERENT numbers of neutrons. This means they have different mass numbers.</p>
          
          <div class="bg-white rounded-lg p-4">
            <p class="font-bold mb-2">Carbon Isotopes Example:</p>
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b"><th class="p-2">Isotope</th><th class="p-2">Protons</th><th class="p-2">Neutrons</th><th class="p-2">Mass #</th></tr>
              </thead>
              <tbody>
                <tr class="border-b"><td class="p-2">Carbon-12</td><td class="p-2 text-center">6</td><td class="p-2 text-center">6</td><td class="p-2 text-center">12</td></tr>
                <tr class="border-b"><td class="p-2">Carbon-13</td><td class="p-2 text-center">6</td><td class="p-2 text-center">7</td><td class="p-2 text-center">13</td></tr>
                <tr><td class="p-2">Carbon-14</td><td class="p-2 text-center">6</td><td class="p-2 text-center">8</td><td class="p-2 text-center">14</td></tr>
              </tbody>
            </table>
            <p class="text-xs text-gray-500 mt-2">They're ALL carbon because they ALL have 6 protons. The number after the dash is the mass number.</p>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Ions: When Atoms Get Charged ⚡</h4>
        <div class="bg-cyan-50 rounded-xl p-4">
          <p class="mb-3">When atoms gain or lose electrons, they become ions:</p>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold text-green-600">Cations (+)</p>
              <p>Lost electrons → positive charge</p>
              <p class="text-xs text-gray-500">Na → Na⁺ (lost 1 electron)</p>
            </div>
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold text-red-600">Anions (-)</p>
              <p>Gained electrons → negative charge</p>
              <p class="text-xs text-gray-500">Cl → Cl⁻ (gained 1 electron)</p>
            </div>
          </div>
        </div>
      `
    },
    practice: [
      { question: 'Is air a pure substance or mixture?', answer: 'mixture', hint: 'Air contains nitrogen, oxygen, and other gases' },
      { question: 'Is salt water homogeneous or heterogeneous?', answer: 'homogeneous', hint: 'Is it uniform throughout?' },
      { question: 'Is melting ice a physical or chemical change?', answer: 'physical', hint: 'Is the water still H₂O after melting?' },
      { question: 'Is burning wood a physical or chemical change?', answer: 'chemical', hint: 'Can you un-burn wood?' },
      { question: 'An atom has 11 protons. How many electrons does a NEUTRAL atom have?', answer: '11', hint: 'Neutral atoms have equal protons and electrons' },
      { question: 'Carbon-14 has how many neutrons?', answer: '8', hint: 'Carbon has 6 protons. Mass number - atomic number = neutrons' },
      { question: 'An atom has 17 protons and 18 neutrons. What is its mass number?', answer: '35', hint: 'Mass number = protons + neutrons' },
      { question: 'What particle determines the identity of an element?', answer: 'proton', hint: 'This is what makes carbon carbon, gold gold, etc.' },
      { question: 'Is flammability a physical or chemical property?', answer: 'chemical', hint: 'Does testing it change the substance?' },
      { question: 'Pizza is what type of mixture?', answer: 'heterogeneous', hint: 'Can you see different parts (cheese, sauce, crust)?' },
      { question: 'Gold (Au) is an element or compound?', answer: 'element', hint: 'Is it made of only one type of atom?' },
      { question: 'Water (H₂O) is an element or compound?', answer: 'compound', hint: 'Does it contain multiple elements chemically bonded?' },
      { question: 'Uranium-235 has how many neutrons? (U has atomic number 92)', answer: '143', hint: '235 - 92 = ?' },
      { question: 'Is density a physical or chemical property?', answer: 'physical', hint: 'Can you measure it without changing the substance?' },
      { question: 'An atom with 8 protons, 8 neutrons, and 10 electrons has what charge?', answer: '-2', hint: '8 protons (+8) and 10 electrons (-10) = ?' },
      { question: 'If Na loses one electron, what is its charge?', answer: '+1', hint: 'Losing negative charge makes it positive' }
    ],
    quiz: [
      { type: 'multiple-choice', question: 'Which is a chemical property?', options: ['Density', 'Boiling point', 'Flammability', 'Color'], correctAnswer: 'Flammability' },
      { type: 'fill-in-blank', question: 'The atomic number equals the number of _____', correctAnswer: 'protons' },
      { type: 'multiple-choice', question: 'Isotopes have different numbers of:', options: ['Protons', 'Electrons', 'Neutrons', 'Charges'], correctAnswer: 'Neutrons' },
      { type: 'fill-in-blank', question: 'An atom with 8 protons and 8 neutrons has a mass number of:', correctAnswer: '16' },
      { type: 'multiple-choice', question: 'Salt water is what type of mixture?', options: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'], correctAnswer: 'Homogeneous mixture' },
      { type: 'fill-in-blank', question: 'What particle has no charge?', correctAnswer: 'neutron' },
      { type: 'multi-select', question: 'Which are PHYSICAL changes? (Select all)', options: ['Melting ice', 'Burning paper', 'Dissolving sugar', 'Rusting iron', 'Cutting wood'], correctAnswers: ['Melting ice', 'Dissolving sugar', 'Cutting wood'] },
      { type: 'multiple-choice', question: 'An atom with more electrons than protons is a:', options: ['Cation', 'Anion', 'Isotope', 'Neutral atom'], correctAnswer: 'Anion' },
      { type: 'fill-in-blank', question: 'Chlorine-37 has how many neutrons? (Cl atomic number = 17)', correctAnswer: '20' },
      { type: 'multiple-choice', question: 'Which is a pure substance?', options: ['Air', 'Salt water', 'Bronze', 'Water'], correctAnswer: 'Water' },
      { type: 'multi-select', question: 'Select all COMPOUNDS:', options: ['O₂', 'H₂O', 'NaCl', 'Fe', 'CO₂'], correctAnswers: ['H₂O', 'NaCl', 'CO₂'] },
      { type: 'fill-in-blank', question: 'Electrons are found in the electron _____ around the nucleus', correctAnswer: 'cloud' },
      { type: 'multiple-choice', question: 'Which is NOT a sign of chemical change?', options: ['Color change', 'Gas bubbles', 'Change in shape', 'New smell'], correctAnswer: 'Change in shape' },
      { type: 'fill-in-blank', question: 'A sodium ion (Na⁺) has how many electrons? (Na atomic # = 11)', correctAnswer: '10' },
      { type: 'multi-select', question: 'Which are ELEMENTS? (Select all)', options: ['CO₂', 'Au', 'H₂O', 'O₂', 'NaCl'], correctAnswers: ['Au', 'O₂'] },
      { type: 'fill-in-blank', question: 'What is the mass number of an atom with 26 protons and 30 neutrons?', correctAnswer: '56' },
      { type: 'multiple-choice', question: 'Trail mix is:', options: ['Homogeneous mixture', 'Heterogeneous mixture', 'Compound', 'Element'], correctAnswer: 'Heterogeneous mixture' }
    ]
  }
};

if (typeof module !== 'undefined') module.exports = matterAtomsModule;
