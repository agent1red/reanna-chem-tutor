const { createApp, ref, reactive, computed, onMounted, watch } = Vue;

// Load module content from separate files
const sigFigsModule = {
  id: 'sig-figs',
  emoji: '🔢',
  title: 'Significant Figures',
  description: 'Learn the rules for significant figures and how to use them in calculations.',
  content: {
    video: { url: 'https://www.youtube.com/embed/eCJ76hz7jPM', title: 'Significant Figures Made Easy' },
    reading: {
      html: `
        <h3 class="text-xl font-bold mb-4 text-primary">What Even Are Significant Figures? 🤔</h3>
        <p class="mb-4">Okay so here's the deal — in science, we can't just throw around random numbers. When you measure something, your answer is only as good as your measuring tool. Significant figures (or "sig figs" because we're lazy) tell us how precise a measurement actually is.</p>
        <p class="mb-4">Think about it this way: if you're measuring your height with a ruler that only shows inches, you can't suddenly claim you're 5 feet 7.3847362 inches tall. That's just making stuff up! Sig figs keep us honest about what we actually measured.</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">The Five Rules You Need to Know 📋</h4>
        <div class="bg-purple-50 rounded-xl p-5 mb-5">
          <p class="mb-3"><strong>Rule #1: Non-zero digits ALWAYS count.</strong></p>
          <p class="mb-4 text-gray-600">This one's easy. If you see a number that isn't zero, it's significant. The number 523 has 3 sig figs. The number 1.7 has 2 sig figs.</p>
          
          <p class="mb-3"><strong>Rule #2: Zeros sandwiched between non-zeros count.</strong></p>
          <p class="mb-4 text-gray-600">These are called "captive zeros" (they're trapped!). In 4007, that zero is stuck between 4 and 7, so it counts. That's 4 sig figs.</p>
          
          <p class="mb-3"><strong>Rule #3: Leading zeros are just placeholders — they DON'T count.</strong></p>
          <p class="mb-4 text-gray-600">Those zeros at the beginning of small decimals? They're just showing you where the decimal point is. In 0.0042, only the 4 and 2 are significant. That's 2 sig figs.</p>
          
          <p class="mb-3"><strong>Rule #4: Trailing zeros AFTER a decimal point DO count.</strong></p>
          <p class="mb-4 text-gray-600">If someone writes 2.50 instead of 2.5, they're telling you they measured to the hundredths place. That trailing zero matters! So 2.50 has 3 sig figs.</p>
          
          <p class="mb-3"><strong>Rule #5: Trailing zeros WITHOUT a decimal are sketchy.</strong></p>
          <p class="text-gray-600">The number 2500 is ambiguous. Does it have 2 sig figs? 3? 4? We literally can't tell. That's why scientists use scientific notation.</p>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Let's Practice Counting! 🔢</h4>
        <div class="bg-white border-2 border-gray-100 rounded-xl p-4 mb-5">
          <table class="w-full">
            <thead><tr class="border-b-2"><th class="p-2 text-left">Number</th><th class="p-2 text-center">Sig Figs</th><th class="p-2 text-left">Why?</th></tr></thead>
            <tbody class="text-sm">
              <tr class="border-b"><td class="p-2">45.83</td><td class="p-2 text-center font-bold text-primary">4</td><td class="p-2">All non-zero digits</td></tr>
              <tr class="border-b"><td class="p-2">0.00250</td><td class="p-2 text-center font-bold text-primary">3</td><td class="p-2">Leading zeros don't count, trailing does</td></tr>
              <tr class="border-b"><td class="p-2">1002</td><td class="p-2 text-center font-bold text-primary">4</td><td class="p-2">Captive zeros count</td></tr>
              <tr><td class="p-2">3.00</td><td class="p-2 text-center font-bold text-primary">3</td><td class="p-2">Trailing zeros after decimal count</td></tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Math with Sig Figs ➕✖️</h4>
        <div class="grid md:grid-cols-2 gap-4 mb-5">
          <div class="bg-green-50 rounded-xl p-4">
            <h5 class="font-bold text-success mb-2">Adding & Subtracting</h5>
            <p class="text-sm mb-3">Round to the <strong>least number of decimal places</strong></p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p>12.52 + 1.7 = 14.22</p>
              <p class="text-gray-500">1.7 has 1 decimal place</p>
              <p class="font-bold text-success">Answer: 14.2</p>
            </div>
          </div>
          <div class="bg-blue-50 rounded-xl p-4">
            <h5 class="font-bold text-accent mb-2">Multiplying & Dividing</h5>
            <p class="text-sm mb-3">Round to the <strong>least number of sig figs</strong></p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p>4.56 × 1.4 = 6.384</p>
              <p class="text-gray-500">1.4 has 2 sig figs</p>
              <p class="font-bold text-accent">Answer: 6.4</p>
            </div>
          </div>
        </div>
      `
    },
    practice: [
      { question: 'How many sig figs in 0.00456?', answer: '3', hint: 'Leading zeros don\'t count!' },
      { question: 'How many sig figs in 1.020?', answer: '4', hint: 'Captive zero AND trailing zero after decimal both count' },
      { question: 'How many sig figs in 8000?', answer: '1', hint: 'Trailing zeros without decimal are ambiguous - assume minimum' },
      { question: 'How many sig figs in 8000.?', answer: '4', hint: 'The decimal point makes ALL zeros significant!' },
      { question: 'How many sig figs in 0.0030?', answer: '2', hint: 'Only 3 and the final 0 count' },
      { question: 'Round 45.678 to 3 sig figs:', answer: '45.7', hint: 'Look at the 4th digit to round' },
      { question: 'Round 0.004562 to 2 sig figs:', answer: '0.0046', hint: 'Leading zeros stay' },
      { question: 'Calculate: 2.5 × 3.42 = ? (correct sig figs)', answer: '8.6', hint: '2.5 has 2 sig figs' },
      { question: 'Calculate: 15.234 + 2.1 = ? (correct sig figs)', answer: '17.3', hint: '2.1 has 1 decimal place' },
      { question: 'Calculate: 100.0 ÷ 3.0 = ? (correct sig figs)', answer: '33', hint: 'Both have 2 sig figs minimum' },
      { question: 'How many sig figs in 5.00 × 10³?', answer: '3', hint: 'Scientific notation makes it clear!' },
      { question: 'Calculate: 7.5 - 0.823 = ? (correct sig figs)', answer: '6.7', hint: '7.5 has 1 decimal place' },
      { question: 'How many sig figs in 10.00?', answer: '4', hint: 'All trailing zeros after decimal count' },
      { question: 'Calculate: 6.022 × 2.0 = ? (correct sig figs)', answer: '12', hint: '2.0 has 2 sig figs' },
      { question: 'Round 99.999 to 3 sig figs:', answer: '100.', hint: 'Add decimal to show sig figs' }
    ],
    quiz: [
      { type: 'multiple-choice', question: 'How many significant figures are in 0.00340?', options: ['2', '3', '4', '5'], correctAnswer: '3' },
      { type: 'multiple-choice', question: 'How many significant figures are in 100.0?', options: ['1', '2', '3', '4'], correctAnswer: '4' },
      { type: 'fill-in-blank', question: 'How many significant figures are in 2.050?', correctAnswer: '4' },
      { type: 'multiple-choice', question: 'For addition/subtraction, round to the:', options: ['Least sig figs', 'Most sig figs', 'Least decimal places', 'Most decimal places'], correctAnswer: 'Least decimal places' },
      { type: 'fill-in-blank', question: 'Calculate with correct sig figs: 4.0 + 2.55 = ?', correctAnswer: '6.6' },
      { type: 'multiple-choice', question: 'How many sig figs in 0.007?', options: ['1', '2', '3', '4'], correctAnswer: '1' },
      { type: 'fill-in-blank', question: 'Round 3.678 to 2 significant figures:', correctAnswer: '3.7' },
      { type: 'multi-select', question: 'Which numbers have exactly 3 significant figures? (Select all)', options: ['0.0250', '2.50', '2500', '25.0', '0.250'], correctAnswers: ['0.0250', '2.50', '25.0', '0.250'] },
      { type: 'multiple-choice', question: 'Calculate: 3.0 × 4.00 with correct sig figs', options: ['12', '12.0', '12.00', '12.000'], correctAnswer: '12' },
      { type: 'fill-in-blank', question: 'How many sig figs in 1000.00?', correctAnswer: '6' },
      { type: 'multiple-choice', question: 'In 0.00470, which zeros are significant?', options: ['All of them', 'Only the last one', 'Only the middle ones', 'None of them'], correctAnswer: 'Only the last one' },
      { type: 'fill-in-blank', question: 'Calculate: 25.5 ÷ 5.0 = ? (correct sig figs)', correctAnswer: '5.1' },
      { type: 'multi-select', question: 'Which rules are TRUE about sig figs?', options: ['Non-zero digits always count', 'Leading zeros never count', 'Trailing zeros always count', 'Captive zeros always count'], correctAnswers: ['Non-zero digits always count', 'Leading zeros never count', 'Captive zeros always count'] },
      { type: 'fill-in-blank', question: 'Calculate: 12.11 - 0.2 = ? (correct sig figs)', correctAnswer: '11.9' },
      { type: 'multiple-choice', question: 'The number 4.00 × 10² has how many sig figs?', options: ['1', '2', '3', '5'], correctAnswer: '3' },
      { type: 'multi-select', question: 'Select ALL correct statements:', options: ['5.0 has 2 sig figs', '500 has 1 sig fig', '0.050 has 2 sig figs', '5.00 has 3 sig figs'], correctAnswers: ['5.0 has 2 sig figs', '500 has 1 sig fig', '0.050 has 2 sig figs', '5.00 has 3 sig figs'] }
    ]
  }
};

const nomenclatureModule = {
  id: 'nomenclature',
  emoji: '🏷️',
  title: 'Chemical Nomenclature',
  description: 'Master naming Type I, II, and III chemical compounds.',
  content: {
    video: { url: 'https://www.youtube.com/embed/m_VeGsR60nA', title: 'Naming Compounds - Chad\'s Prep' },
    reading: {
      html: `
        <h3 class="text-xl font-bold mb-4 text-primary">Chemical Naming: It's Like Learning a New Language 🗣️</h3>
        <p class="mb-4">Chemists needed a way to name millions of different compounds without confusion. They came up with nomenclature (fancy word for "naming stuff"). Once you learn the patterns, it's actually pretty straightforward!</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">Type I: The Easy Ionic Compounds 🔵</h4>
        <div class="bg-blue-50 rounded-xl p-5 mb-5">
          <p class="mb-3">These are ionic compounds where the metal ALWAYS has the same charge.</p>
          <p class="mb-3"><strong>Formula:</strong> Metal name + Nonmetal with "-ide" ending</p>
          <div class="bg-white rounded-lg p-4 mb-3">
            <p class="font-bold mb-2">Examples:</p>
            <ul class="space-y-1 text-sm">
              <li>• NaCl → Sodium chloride</li>
              <li>• CaBr₂ → Calcium bromide</li>
              <li>• MgF₂ → Magnesium fluoride</li>
            </ul>
          </div>
          <p class="text-sm bg-blue-100 rounded-lg p-3">Common Type I Metals: Na⁺, K⁺, Ca²⁺, Mg²⁺, Al³⁺, Zn²⁺, Ag⁺</p>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Type II: The Tricky Transition Metals 🟣</h4>
        <div class="bg-purple-50 rounded-xl p-5 mb-5">
          <p class="mb-3">Some metals can have DIFFERENT charges. Use Roman numerals to show the charge!</p>
          <p class="mb-3"><strong>Formula:</strong> Metal name(Roman numeral) + Nonmetal with "-ide"</p>
          <div class="bg-white rounded-lg p-4 mb-3">
            <p class="font-bold mb-2">Examples:</p>
            <ul class="space-y-1 text-sm">
              <li>• FeCl₂ → Iron(II) chloride</li>
              <li>• FeCl₃ → Iron(III) chloride</li>
              <li>• CuO → Copper(II) oxide</li>
            </ul>
          </div>
          <p class="text-sm">Common Type II Metals: Fe, Cu, Pb, Sn, Co, Ni, Cr, Mn</p>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Type III: Covalent Compounds 🟢</h4>
        <div class="bg-green-50 rounded-xl p-5 mb-5">
          <p class="mb-3">Two nonmetals bonded together. Use PREFIXES!</p>
          <div class="bg-white rounded-lg p-4 mb-3">
            <p class="font-bold mb-2">Prefixes: mono(1), di(2), tri(3), tetra(4), penta(5), hexa(6), hepta(7), octa(8), nona(9), deca(10)</p>
          </div>
          <div class="bg-white rounded-lg p-4">
            <p class="font-bold mb-2">Examples:</p>
            <ul class="space-y-1 text-sm">
              <li>• CO₂ → Carbon dioxide (not monocarbon!)</li>
              <li>• N₂O₄ → Dinitrogen tetroxide</li>
              <li>• PCl₅ → Phosphorus pentachloride</li>
            </ul>
          </div>
          <p class="text-sm mt-3 bg-green-100 rounded-lg p-3">Don't use "mono" for the FIRST element!</p>
        </div>
      `
    },
    practice: [
      { question: 'Name: NaCl', answer: 'sodium chloride', hint: 'Type I - Na is always +1' },
      { question: 'Name: FeCl₃', answer: 'iron(III) chloride', hint: 'Type II - figure out iron\'s charge' },
      { question: 'Name: CO₂', answer: 'carbon dioxide', hint: 'Type III - use prefixes' },
      { question: 'Name: N₂O₄', answer: 'dinitrogen tetroxide', hint: 'di = 2, tetra = 4' },
      { question: 'Name: CuO', answer: 'copper(II) oxide', hint: 'Oxygen is -2, so Cu must be +2' },
      { question: 'Name: MgBr₂', answer: 'magnesium bromide', hint: 'Type I - Mg is always +2' },
      { question: 'Name: PCl₅', answer: 'phosphorus pentachloride', hint: 'penta = 5' },
      { question: 'Name: SnO₂', answer: 'tin(IV) oxide', hint: 'Two oxygens = -4' },
      { question: 'Write formula: calcium fluoride', answer: 'CaF2', hint: 'Ca is +2, F is -1' },
      { question: 'Write formula: dinitrogen monoxide', answer: 'N2O', hint: 'di = 2, mono = 1' },
      { question: 'Name: Cu₂O', answer: 'copper(I) oxide', hint: 'Two Cu share -2' },
      { question: 'Write formula: iron(III) oxide', answer: 'Fe2O3', hint: 'Balance +3 and -2' },
      { question: 'Name: SF₆', answer: 'sulfur hexafluoride', hint: 'hexa = 6' },
      { question: 'Write formula: aluminum oxide', answer: 'Al2O3', hint: 'Al is +3, O is -2' },
      { question: 'Name: PbCl₄', answer: 'lead(IV) chloride', hint: 'Four Cl⁻ = -4' }
    ],
    quiz: [
      { type: 'multiple-choice', question: 'What type of compound is CuCl₂?', options: ['Type I', 'Type II', 'Type III'], correctAnswer: 'Type II' },
      { type: 'fill-in-blank', question: 'Name: MgO', correctAnswer: 'magnesium oxide' },
      { type: 'fill-in-blank', question: 'Name: CO', correctAnswer: 'carbon monoxide' },
      { type: 'multiple-choice', question: 'Which prefix means 4?', options: ['tri', 'tetra', 'penta', 'hexa'], correctAnswer: 'tetra' },
      { type: 'fill-in-blank', question: 'Formula for iron(II) sulfide:', correctAnswer: 'FeS' },
      { type: 'multiple-choice', question: 'N₂O₅ is named:', options: ['Nitrogen oxide', 'Nitrogen pentoxide', 'Dinitrogen pentoxide'], correctAnswer: 'Dinitrogen pentoxide' },
      { type: 'fill-in-blank', question: 'Name: PbO₂', correctAnswer: 'lead(IV) oxide' },
      { type: 'multi-select', question: 'Which are Type I compounds?', options: ['NaCl', 'FeCl₂', 'CaBr₂', 'CuO', 'AlF₃'], correctAnswers: ['NaCl', 'CaBr₂', 'AlF₃'] },
      { type: 'fill-in-blank', question: 'Formula for sulfur trioxide:', correctAnswer: 'SO3' },
      { type: 'multiple-choice', question: 'In FeCl₃, iron\'s charge is:', options: ['+1', '+2', '+3', '+4'], correctAnswer: '+3' },
      { type: 'fill-in-blank', question: 'Name: Ca₃N₂', correctAnswer: 'calcium nitride' },
      { type: 'multi-select', question: 'Which use prefixes?', options: ['CO₂', 'NaCl', 'N₂O₄', 'SF₆', 'MgO'], correctAnswers: ['CO₂', 'N₂O₄', 'SF₆'] },
      { type: 'fill-in-blank', question: 'Formula for copper(I) chloride:', correctAnswer: 'CuCl' },
      { type: 'multiple-choice', question: 'Which name is INCORRECT?', options: ['Sodium chloride', 'Monocarbon dioxide', 'Calcium bromide'], correctAnswer: 'Monocarbon dioxide' },
      { type: 'multi-select', question: 'Select correctly named compounds:', options: ['NaBr = sodium bromide', 'FeCl₂ = iron chloride', 'PCl₃ = phosphorus trichloride'], correctAnswers: ['NaBr = sodium bromide', 'PCl₃ = phosphorus trichloride'] }
    ]
  }
};

const matterAtomsModule = {
  id: 'matter-atoms',
  emoji: '⚛️',
  title: 'Matter & Atomic Structure',
  description: 'Understand matter classification and atomic structure.',
  content: {
    video: { url: 'https://www.youtube.com/embed/FSyAehMdpyI', title: 'Atomic Structure - Crash Course' },
    reading: {
      html: `
        <h3 class="text-xl font-bold mb-4 text-primary">Everything is Matter 🌍</h3>
        <p class="mb-4">Look around you. Your phone, the air, water — it's all matter. Matter is anything with mass that takes up space. Understanding how matter is organized is the foundation of chemistry.</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">Classification of Matter 📊</h4>
        <div class="grid md:grid-cols-2 gap-4 mb-5">
          <div class="bg-blue-50 rounded-xl p-4">
            <h5 class="font-bold text-primary mb-2">Pure Substances</h5>
            <div class="bg-white rounded-lg p-3 mb-2">
              <p class="font-semibold">Elements</p>
              <p class="text-sm">One type of atom only</p>
              <p class="text-xs text-gray-500">Gold, Oxygen, Iron</p>
            </div>
            <div class="bg-white rounded-lg p-3">
              <p class="font-semibold">Compounds</p>
              <p class="text-sm">Elements chemically bonded</p>
              <p class="text-xs text-gray-500">H₂O, NaCl, CO₂</p>
            </div>
          </div>
          <div class="bg-green-50 rounded-xl p-4">
            <h5 class="font-bold text-success mb-2">Mixtures</h5>
            <div class="bg-white rounded-lg p-3 mb-2">
              <p class="font-semibold">Homogeneous</p>
              <p class="text-sm">Uniform throughout</p>
              <p class="text-xs text-gray-500">Salt water, air</p>
            </div>
            <div class="bg-white rounded-lg p-3">
              <p class="font-semibold">Heterogeneous</p>
              <p class="text-sm">Visibly different parts</p>
              <p class="text-xs text-gray-500">Pizza, salad, sand</p>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Physical vs Chemical ⚡</h4>
        <div class="grid md:grid-cols-2 gap-4 mb-5">
          <div class="bg-blue-50 rounded-xl p-4">
            <h5 class="font-bold text-accent mb-2">Physical</h5>
            <p class="text-sm">Observed without changing what it IS</p>
            <p class="text-xs mt-2">Color, melting point, density, boiling</p>
          </div>
          <div class="bg-red-50 rounded-xl p-4">
            <h5 class="font-bold text-danger mb-2">Chemical</h5>
            <p class="text-sm">How it reacts or changes to NEW stuff</p>
            <p class="text-xs mt-2">Flammability, rusting, reactivity</p>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Inside the Atom ⚛️</h4>
        <div class="bg-gray-100 rounded-xl p-4 mb-5">
          <table class="w-full text-sm">
            <thead><tr class="border-b-2"><th class="p-2">Particle</th><th class="p-2">Charge</th><th class="p-2">Mass</th><th class="p-2">Location</th></tr></thead>
            <tbody>
              <tr class="border-b"><td class="p-2">Proton</td><td class="p-2 text-green-600">+1</td><td class="p-2">1 amu</td><td class="p-2">Nucleus</td></tr>
              <tr class="border-b"><td class="p-2">Neutron</td><td class="p-2">0</td><td class="p-2">1 amu</td><td class="p-2">Nucleus</td></tr>
              <tr><td class="p-2">Electron</td><td class="p-2 text-red-600">-1</td><td class="p-2">~0</td><td class="p-2">Electron cloud</td></tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Key Equations 🔢</h4>
        <div class="bg-yellow-50 rounded-xl p-4">
          <p class="mb-2"><strong>Atomic Number</strong> = Protons = Electrons (neutral atom)</p>
          <p class="mb-2"><strong>Mass Number</strong> = Protons + Neutrons</p>
          <p><strong>Neutrons</strong> = Mass Number - Atomic Number</p>
        </div>
      `
    },
    practice: [
      { question: 'Is air a pure substance or mixture?', answer: 'mixture', hint: 'Air contains multiple gases' },
      { question: 'Is salt water homogeneous or heterogeneous?', answer: 'homogeneous', hint: 'Is it uniform?' },
      { question: 'Is melting ice physical or chemical?', answer: 'physical', hint: 'Is it still H₂O?' },
      { question: 'Is burning wood physical or chemical?', answer: 'chemical', hint: 'Can you un-burn it?' },
      { question: 'Neutral atom has 11 protons. How many electrons?', answer: '11', hint: 'Neutral = equal' },
      { question: 'Carbon-14 has how many neutrons?', answer: '8', hint: '14 - 6 = ?' },
      { question: '17 protons, 18 neutrons. Mass number?', answer: '35', hint: 'Add them' },
      { question: 'What particle defines the element?', answer: 'proton', hint: 'This makes carbon carbon' },
      { question: 'Is flammability physical or chemical?', answer: 'chemical', hint: 'Does testing it change the substance?' },
      { question: 'Pizza is what type of mixture?', answer: 'heterogeneous', hint: 'Can you see different parts?' },
      { question: 'Gold (Au) is element or compound?', answer: 'element', hint: 'One type of atom?' },
      { question: 'Water (H₂O) is element or compound?', answer: 'compound', hint: 'Multiple elements bonded?' },
      { question: 'U-235 neutrons? (Z=92)', answer: '143', hint: '235 - 92 = ?' },
      { question: 'Is density physical or chemical?', answer: 'physical', hint: 'Can measure without changing it' },
      { question: '8 protons, 10 electrons. Charge?', answer: '-2', hint: '8 - 10 = ?' }
    ],
    quiz: [
      { type: 'multiple-choice', question: 'Which is a chemical property?', options: ['Density', 'Boiling point', 'Flammability', 'Color'], correctAnswer: 'Flammability' },
      { type: 'fill-in-blank', question: 'Atomic number = number of _____', correctAnswer: 'protons' },
      { type: 'multiple-choice', question: 'Isotopes differ in:', options: ['Protons', 'Electrons', 'Neutrons', 'Charges'], correctAnswer: 'Neutrons' },
      { type: 'fill-in-blank', question: '8 protons + 8 neutrons = mass number:', correctAnswer: '16' },
      { type: 'multiple-choice', question: 'Salt water is:', options: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'], correctAnswer: 'Homogeneous mixture' },
      { type: 'fill-in-blank', question: 'What particle has no charge?', correctAnswer: 'neutron' },
      { type: 'multi-select', question: 'Which are PHYSICAL changes?', options: ['Melting ice', 'Burning paper', 'Dissolving sugar', 'Rusting iron'], correctAnswers: ['Melting ice', 'Dissolving sugar'] },
      { type: 'multiple-choice', question: 'More electrons than protons =', options: ['Cation', 'Anion', 'Isotope', 'Neutral'], correctAnswer: 'Anion' },
      { type: 'fill-in-blank', question: 'Cl-37 neutrons? (Z=17)', correctAnswer: '20' },
      { type: 'multiple-choice', question: 'Which is a pure substance?', options: ['Air', 'Salt water', 'Bronze', 'Water'], correctAnswer: 'Water' },
      { type: 'multi-select', question: 'Select COMPOUNDS:', options: ['O₂', 'H₂O', 'NaCl', 'Fe', 'CO₂'], correctAnswers: ['H₂O', 'NaCl', 'CO₂'] },
      { type: 'fill-in-blank', question: 'Electrons orbit in the electron _____', correctAnswer: 'cloud' },
      { type: 'multiple-choice', question: 'NOT a sign of chemical change?', options: ['Color change', 'Gas bubbles', 'Shape change', 'New smell'], correctAnswer: 'Shape change' },
      { type: 'fill-in-blank', question: 'Na⁺ electrons? (Z=11)', correctAnswer: '10' },
      { type: 'multi-select', question: 'Which are ELEMENTS?', options: ['CO₂', 'Au', 'H₂O', 'O₂', 'NaCl'], correctAnswers: ['Au', 'O₂'] }
    ]
  }
};

const labSkillsModule = {
  id: 'lab-skills',
  emoji: '🔬',
  title: 'Lab Skills',
  description: 'Master density calculations and lab techniques.',
  content: {
    video: { url: 'https://www.youtube.com/embed/REtBibhIqfo', title: 'Density Calculations Tutorial' },
    reading: {
      html: `
        <h3 class="text-xl font-bold mb-4 text-primary">Density: Super Useful! 📊</h3>
        <p class="mb-4">Density tells us if something will float or sink, helps identify substances, and solves tons of real problems!</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">The Magic Formula ✨</h4>
        <div class="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-6 mb-5 text-center">
          <p class="text-4xl font-bold text-primary mb-4">D = m / V</p>
          <div class="grid grid-cols-3 gap-4 text-sm">
            <div class="bg-white rounded-lg p-2"><strong>D</strong> = Density (g/mL)</div>
            <div class="bg-white rounded-lg p-2"><strong>m</strong> = Mass (g)</div>
            <div class="bg-white rounded-lg p-2"><strong>V</strong> = Volume (mL)</div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Rearranging 🔄</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-5">
          <div class="bg-purple-50 rounded-xl p-4 text-center">
            <p class="text-sm">Find Density</p>
            <p class="text-xl font-bold">D = m ÷ V</p>
          </div>
          <div class="bg-pink-50 rounded-xl p-4 text-center">
            <p class="text-sm">Find Mass</p>
            <p class="text-xl font-bold">m = D × V</p>
          </div>
          <div class="bg-cyan-50 rounded-xl p-4 text-center">
            <p class="text-sm">Find Volume</p>
            <p class="text-xl font-bold">V = m ÷ D</p>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Float or Sink? 🌊</h4>
        <div class="bg-blue-50 rounded-xl p-4 mb-5">
          <p class="text-center mb-3"><strong>Water = 1.0 g/mL</strong></p>
          <div class="grid grid-cols-2 gap-4 text-sm text-center">
            <div class="bg-green-100 rounded-lg p-3"><strong class="text-green-600">FLOATS</strong><br/>D &lt; 1.0</div>
            <div class="bg-red-100 rounded-lg p-3"><strong class="text-red-600">SINKS</strong><br/>D &gt; 1.0</div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Water Displacement 🪨</h4>
        <div class="bg-yellow-50 rounded-xl p-4">
          <p class="mb-2">For irregular objects:</p>
          <ol class="text-sm list-decimal list-inside space-y-1">
            <li>Record initial water level (V₁)</li>
            <li>Add object (submerge fully)</li>
            <li>Record new level (V₂)</li>
            <li>Volume = V₂ - V₁</li>
          </ol>
        </div>
      `
    },
    practice: [
      { question: 'Mass 50g, volume 20mL. Density?', answer: '2.5', hint: 'D = 50/20' },
      { question: 'Will D=0.8 g/cm³ float or sink?', answer: 'float', hint: 'Compare to 1.0' },
      { question: 'D=1.5 g/mL, V=10mL. Mass?', answer: '15', hint: 'm = D × V' },
      { question: 'Volume of 200g water?', answer: '200', hint: 'V = m ÷ 1.0' },
      { question: 'Mass 81g, D=2.7. Volume?', answer: '30', hint: 'V = 81/2.7' },
      { question: 'Water: 45mL → 52mL with rock. Rock volume?', answer: '7', hint: '52 - 45' },
      { question: 'Mercury D=13.6. Mass of 5mL?', answer: '68', hint: '13.6 × 5' },
      { question: 'Cube 2×2×2cm, mass 21.6g. Density?', answer: '2.7', hint: 'V=8, D=21.6/8' },
      { question: 'D=2.7, V=15cm³. Mass?', answer: '40.5', hint: '2.7 × 15' },
      { question: 'Mass 36g, V=30mL. Density?', answer: '1.2', hint: '36/30' },
      { question: 'Will D=1.2 float or sink?', answer: 'sink', hint: '1.2 > 1.0' },
      { question: 'Gold D=19.3. Volume of 96.5g?', answer: '5', hint: '96.5/19.3' },
      { question: 'D=2.5, m=100g. Volume?', answer: '40', hint: '100/2.5' },
      { question: 'Mass 650g, V=500mL. Density?', answer: '1.3', hint: '650/500' },
      { question: 'Block 4×3×2cm, mass 192g. Density?', answer: '8', hint: 'V=24, D=192/24' }
    ],
    quiz: [
      { type: 'fill-in-blank', question: 'D = m ÷ ___', correctAnswer: 'V' },
      { type: 'multiple-choice', question: 'D=0.7 g/mL will ___ in water', options: ['float', 'sink', 'dissolve'], correctAnswer: 'float' },
      { type: 'fill-in-blank', question: 'Mass 60g, V=20mL. D=?', correctAnswer: '3' },
      { type: 'multiple-choice', question: 'Irregular solid volume uses:', options: ['Ruler', 'Water displacement', 'Scale'], correctAnswer: 'Water displacement' },
      { type: 'fill-in-blank', question: 'D=8, V=5. Mass=?', correctAnswer: '40' },
      { type: 'multiple-choice', question: 'Read graduated cylinder at:', options: ['Top', 'Meniscus bottom', 'Middle'], correctAnswer: 'Meniscus bottom' },
      { type: 'fill-in-blank', question: 'Water density = ___ g/mL', correctAnswer: '1' },
      { type: 'multi-select', question: 'Which FLOAT in water?', options: ['Ice (0.92)', 'Aluminum (2.7)', 'Cork (0.24)', 'Iron (7.9)'], correctAnswers: ['Ice (0.92)', 'Cork (0.24)'] },
      { type: 'fill-in-blank', question: 'Water 25mL→31mL. Object volume?', correctAnswer: '6' },
      { type: 'multiple-choice', question: 'To find mass:', options: ['m = D/V', 'm = V/D', 'm = D × V'], correctAnswer: 'm = D × V' },
      { type: 'fill-in-blank', question: 'Mass 75g, V=50mL. D=?', correctAnswer: '1.5' },
      { type: 'multi-select', question: 'TRUE about density:', options: ['D = m/V', 'Denser than water sinks', 'Ice denser than water', 'D constant for substance'], correctAnswers: ['D = m/V', 'Denser than water sinks', 'D constant for substance'] },
      { type: 'fill-in-blank', question: 'D=2.5, m=100g. V=?', correctAnswer: '40' },
      { type: 'multiple-choice', question: 'Ice floats because:', options: ['Ice is colder', 'Lower density', 'Water heavier'], correctAnswer: 'Lower density' },
      { type: 'multi-select', question: 'TRUE statements:', options: ['1 mL = 1 cm³', 'Water D = 1 g/mL', 'm = D × V', 'Heavy = always sinks'], correctAnswers: ['1 mL = 1 cm³', 'Water D = 1 g/mL', 'm = D × V'] }
    ]
  }
};

const moduleData = {
  'sig-figs': sigFigsModule,
  'nomenclature': nomenclatureModule,
  'matter-atoms': matterAtomsModule,
  'lab-skills': labSkillsModule
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
    const quizAnswers = ref([]);
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

    const modules = Object.values(moduleData);
    const sections = [
      { id: 'video', title: 'Video', emoji: '📺' },
      { id: 'reading', title: 'Reading', emoji: '📖' },
      { id: 'practice', title: 'Practice', emoji: '✏️' },
      { id: 'quiz', title: 'Quiz', emoji: '📝' }
    ];

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

    const api = async (endpoint, options = {}) => {
      const headers = { 'Content-Type': 'application/json' };
      if (token.value) headers['Authorization'] = `Bearer ${token.value}`;
      const response = await fetch(`/api${endpoint}`, { ...options, headers: { ...headers, ...options.headers } });
      if (!response.ok) {
        const error = await response.json();
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
      try { progress.value = await api('/progress'); } catch (e) { console.error(e); }
    };

    const loadAdminData = async () => {
      try {
        students.value = await api('/admin/students');
        adminStats.value = await api('/admin/stats');
      } catch (e) { console.error(e); }
    };

    const getModuleProgress = (moduleId) => {
      if (!progress.value[moduleId]) return 0;
      const sects = Object.values(progress.value[moduleId]);
      return Math.round((sects.filter(s => s.completed).length / 4) * 100);
    };

    const isSectionComplete = (moduleId, section) => progress.value[moduleId]?.[section]?.completed || false;

    const openModule = (module) => {
      currentModule.value = module;
      currentSection.value = 'video';
      currentView.value = 'module';
      practiceAnswers.value = [];
      practiceChecked.value = [];
      quizAnswers.value = [];
      audioElement.value = null;
      isPlaying.value = false;
    };

    const markComplete = async (sectionType) => {
      try {
        await api('/progress/update', { method: 'POST', body: JSON.stringify({ moduleId: currentModule.value.id, sectionType, completed: true }) });
        await loadProgress();
        await checkExamEligibility();
      } catch (e) { console.error(e); }
    };

    const checkPractice = () => {
      const problems = currentModule.value.content.practice;
      practiceChecked.value = practiceAnswers.value.map((ans, i) => {
        const correct = problems[i].answer.toLowerCase().trim();
        const userAns = (ans || '').toLowerCase().trim();
        return userAns === correct;
      });
      if (practiceChecked.value.every(c => c)) markComplete('practice');
    };

    const submitQuiz = async () => {
      const questions = currentModule.value.content.quiz;
      const answers = questions.map((q, i) => ({
        questionId: i,
        type: q.type,
        question: q.question,
        correctAnswer: q.type === 'multi-select' ? q.correctAnswers : q.correctAnswer,
        userAnswer: quizAnswers.value[i] || (q.type === 'multi-select' ? [] : '')
      }));

      try {
        const result = await api('/quiz/submit', { method: 'POST', body: JSON.stringify({ moduleId: currentModule.value.id, answers }) });
        quizResults.value = result;
        showQuizResults.value = true;
        await loadProgress();
      } catch (e) { console.error(e); }
    };

    const toggleAudio = async () => {
      if (!audioElement.value) {
        try {
          const response = await api(`/tts/${currentModule.value.id}`);
          audioElement.value = new Audio(response.audioUrl);
          audioElement.value.onended = () => { isPlaying.value = false; };
        } catch (e) {
          alert('Audio not available');
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
      } catch (e) { console.error(e); }
    };

    const resetStudentProgress = async (student) => {
      if (!confirm(`Reset all progress for ${student.username}?`)) return;
      try {
        await api(`/admin/students/${student.id}/reset`, { method: 'POST' });
        alert('Progress reset');
        await loadAdminData();
      } catch (e) { console.error(e); }
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
      } catch (e) { alert('Failed to load exam'); }
    };

    const submitExam = async () => {
      const answers = examQuestions.value.map((q, i) => ({
        questionId: q.id,
        type: q.type,
        userAnswer: examAnswers.value[i] || ''
      }));
      try {
        const result = await api('/exam/submit', { method: 'POST', body: JSON.stringify({ answers }) });
        examResults.value = result;
        showExamResults.value = true;
      } catch (e) { alert('Failed to submit exam'); }
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
      if (token.value) {
        try {
          user.value = await api('/auth/me');
          await loadProgress();
          await checkExamEligibility();
          if (user.value.role === 'admin') await loadAdminData();
        } catch (e) {
          localStorage.removeItem('token');
          token.value = null;
        }
      }
      loading.value = false;
    });

    return {
      loading, user, loginForm, loginError, currentView, currentModule, currentSection, progress, modules, sections,
      overallProgress, practiceAnswers, practiceChecked, quizAnswers, showQuizResults, quizResults, isPlaying,
      students, adminStats, examEligible, examQuestions, examAnswers, showExamResults, examResults,
      login, logout, getModuleProgress, isSectionComplete, openModule, markComplete, checkPractice, submitQuiz,
      toggleAudio, viewStudentProgress, resetStudentProgress, startExam, submitExam, closeExamResults,
      toggleMultiSelect, toggleExamMultiSelect
    };
  }
}).mount('#app');
