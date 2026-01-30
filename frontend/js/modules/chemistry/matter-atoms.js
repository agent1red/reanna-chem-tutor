// Matter & Atomic Structure Module
const matterAtomsModule = {
  id: 'matter-atoms',
  subject: 'chemistry',
  emoji: '⚛️',
  title: 'Matter & Atomic Structure',
  description: 'Understand matter classification and atomic structure.',
  
  content: {
    video: {
      url: 'https://www.youtube.com/embed/FSyAehMdpyI',
      title: 'Atomic Structure'
    },
    reading: {
      sections: [
        {
          id: 'intro',
          title: 'What is Matter?',
          audioFile: 'matter-atoms-intro.mp3'
        },
        {
          id: 'classification',
          title: 'Classifying Matter',
          audioFile: 'matter-atoms-classification.mp3'
        },
        {
          id: 'properties',
          title: 'Physical vs Chemical Properties',
          audioFile: 'matter-atoms-properties.mp3'
        },
        {
          id: 'atomic',
          title: 'Inside the Atom',
          audioFile: 'matter-atoms-atomic.mp3'
        },
        {
          id: 'isotopes',
          title: 'Isotopes and Ions',
          audioFile: 'matter-atoms-isotopes.mp3'
        }
      ],
      html: `
        <div class="reading-section" id="section-intro">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-primary">🌍 What is Matter?</h3>
            <button onclick="playAudio('matter-atoms-intro.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Everything around you—every object you can touch, every breath you take, every drop of water you drink—is made of matter. Matter is defined as anything that has mass and takes up space. Your desk, your phone, the air in your lungs, the water in your glass, and even your own body are all examples of matter. This simple definition encompasses virtually everything in the physical world, from the smallest grain of sand to the largest star in the universe.</p>
          
          <p class="mb-4">But what about things you can't touch? Light, for example, is not matter—it's pure energy that has no mass and doesn't occupy space in the traditional sense. Heat, radio waves, and other forms of electromagnetic radiation are also not matter. Understanding this distinction is fundamental to chemistry: we study matter, how it's structured, how it changes, and how it interacts with other matter. Energy can affect matter (heat can melt ice), but energy itself is not what chemistry is primarily about.</p>
          
          <p class="mb-4">All matter is composed of incredibly tiny particles called atoms. The idea of atoms dates back to ancient Greek philosophers like Democritus, who proposed that if you kept cutting matter into smaller and smaller pieces, you'd eventually reach an uncuttable particle—he called it "atomos," meaning indivisible. While we now know atoms can be broken into even smaller particles, the atom remains the basic unit of matter that retains chemical properties. An atom of gold is still gold; an atom of oxygen is still oxygen.</p>
          
          <p class="mb-4">The diversity of matter we see—from soft fabrics to hard diamonds, from invisible gases to colorful liquids—comes from different combinations and arrangements of just over 100 different types of atoms called elements. These elements are organized on the periodic table, which you'll become very familiar with in chemistry. Some matter is made of just one type of atom (like pure gold or pure oxygen), while most everyday matter is made of atoms of different elements combined together in specific ways.</p>
          
          <p class="mb-4">Understanding matter and its atomic nature is the foundation of all chemistry. When we mix chemicals, cook food, breathe air, or watch iron rust, we're observing matter undergoing changes. These changes can be classified, predicted, and explained once we understand what matter is made of and how atoms behave. By the end of this module, you'll see the world differently—recognizing that everything around you is made of incredibly small particles in constant motion, combining and recombining in an endless dance of chemistry.</p>
        </div>

        <div class="reading-section mt-8" id="section-classification">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-secondary">📊 Classifying Matter</h3>
            <button onclick="playAudio('matter-atoms-classification.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Scientists have developed a systematic way to classify matter based on its composition. At the highest level, all matter is divided into two categories: pure substances and mixtures. Understanding this classification helps chemists communicate precisely about what they're working with and predict how materials will behave. Let's explore each category and see how everyday materials fit into this framework.</p>
          
          <p class="mb-4"><strong>Pure substances</strong> have a fixed, definite composition that's the same throughout. They are further divided into elements and compounds. <strong>Elements</strong> are the simplest pure substances—they contain only one type of atom and cannot be broken down into simpler substances by ordinary chemical means. Gold (Au), oxygen (O₂), iron (Fe), and carbon (C) are all elements. Notice that some elements exist as molecules containing two atoms of the same type (like O₂), but they're still elements because they contain only one type of atom.</p>
          
          <p class="mb-4"><strong>Compounds</strong> are pure substances made of two or more different elements chemically bonded together in fixed proportions. Water (H₂O) is always two hydrogen atoms bonded to one oxygen atom—this ratio never changes. Table salt (NaCl) is always one sodium atom bonded to one chlorine atom. The properties of compounds are often completely different from the elements that make them up: hydrogen and oxygen are gases, but water is a liquid; sodium is a reactive metal and chlorine is a toxic gas, but table salt is a harmless white crystal we eat every day.</p>
          
          <p class="mb-4"><strong>Mixtures</strong> are combinations of two or more substances that are NOT chemically bonded together. The components keep their individual properties and can be physically separated. Mixtures come in two varieties: <strong>homogeneous mixtures</strong> (also called solutions) are uniform throughout—any sample you take looks the same as any other sample. Salt water is homogeneous because the salt is evenly distributed; air is homogeneous because the gases are evenly mixed. You can't see the individual components.</p>
          
          <p class="mb-4"><strong>Heterogeneous mixtures</strong> are NOT uniform—you can see different parts or regions with different compositions. Pizza is a classic example: you can see the cheese, sauce, and toppings as separate regions. Trail mix, salad, soil, and granite rock are all heterogeneous mixtures. The key distinction is whether you can identify different regions by looking at the sample. With homogeneous mixtures, every part looks identical; with heterogeneous mixtures, you can see the variation.</p>
        </div>

        <div class="reading-section mt-8" id="section-properties">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-success">⚡ Physical vs Chemical Properties</h3>
            <button onclick="playAudio('matter-atoms-properties.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Every substance has characteristics that we can observe and measure. These characteristics are called properties, and they're divided into two main categories based on whether the substance's identity changes when we observe them. Understanding the difference between physical and chemical properties is essential for describing matter accurately and predicting how substances will behave under different conditions.</p>
          
          <p class="mb-4"><strong>Physical properties</strong> can be observed or measured without changing the substance's identity. When you measure a substance's density, note its color, determine its melting point, or observe its hardness, you're examining physical properties. The substance remains the same before and after the observation. A piece of ice is still H₂O whether it's a solid at -10°C or a liquid at 25°C—measuring its temperature doesn't change what it is. Other physical properties include mass, volume, conductivity, magnetism, and state of matter (solid, liquid, gas).</p>
          
          <p class="mb-4"><strong>Chemical properties</strong> describe how a substance reacts with other substances or changes into a different substance. You can only observe these by performing or observing a chemical reaction. Flammability is a chemical property—you can't know if paper is flammable just by looking at it; you have to actually burn it (or try to). Reactivity with oxygen (rusting), reactivity with acids, and toxicity are all chemical properties. After observing a chemical property, you no longer have the original substance—you have something new.</p>
          
          <p class="mb-4">Similarly, <strong>physical changes</strong> are changes that don't alter a substance's identity. Melting ice into water, dissolving sugar in coffee, cutting a piece of paper, or crushing a can are all physical changes—the substance is the same before and after, just in a different form or state. You can often reverse physical changes: melt ice, then freeze it again; dissolve salt in water, then evaporate the water to get the salt back.</p>
          
          <p class="mb-4"><strong>Chemical changes</strong> (also called chemical reactions) produce one or more NEW substances with different properties. Burning wood creates ash, carbon dioxide, and water vapor—you can never "unburn" wood to get the original back. Rusting iron, baking a cake, digesting food, and photosynthesis are all chemical changes. Signs that a chemical change has occurred include: color change (not just mixing colors), production of gas (bubbles forming), formation of a precipitate (solid forming in a liquid), temperature change without heating, and production of light or sound.</p>
        </div>

        <div class="reading-section mt-8" id="section-atomic">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-accent">⚛️ Inside the Atom</h3>
            <button onclick="playAudio('matter-atoms-atomic.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">For centuries, atoms were thought to be the smallest possible particles—indivisible and fundamental. But starting in the late 1800s, scientists discovered that atoms themselves are made of even smaller particles. Understanding atomic structure is key to understanding chemical behavior, because the arrangement of particles within atoms determines how atoms interact with each other.</p>
          
          <p class="mb-4">Atoms consist of three types of subatomic particles: protons, neutrons, and electrons. <strong>Protons</strong> carry a positive electrical charge (+1) and have a mass of approximately 1 atomic mass unit (amu). <strong>Neutrons</strong> have no electrical charge (they're neutral) and also have a mass of about 1 amu. Protons and neutrons are found together in the <strong>nucleus</strong>, the tiny, dense center of the atom. The nucleus is incredibly small compared to the whole atom—if an atom were the size of a football stadium, the nucleus would be about the size of a marble on the 50-yard line!</p>
          
          <p class="mb-4"><strong>Electrons</strong> carry a negative electrical charge (-1) and have essentially no mass compared to protons and neutrons—about 1/1836 of an amu. Despite their tiny mass, electrons are crucial because they determine how atoms interact chemically. Electrons occupy the space around the nucleus in what's called the electron cloud. Unlike planets orbiting a sun in fixed paths, electrons exist in probability zones called orbitals. You can never know exactly where an electron is—only the probability of finding it in a particular region.</p>
          
          <p class="mb-4">Two key numbers define each element: the <strong>atomic number (Z)</strong> is the number of protons in an atom's nucleus. This number is unique to each element and defines what element an atom is. Carbon always has 6 protons; oxygen always has 8. If you change the number of protons, you change the element entirely. In a neutral atom (one with no overall charge), the number of electrons equals the number of protons—so neutral carbon has 6 electrons, and neutral oxygen has 8.</p>
          
          <p class="mb-4">The <strong>mass number (A)</strong> is the total number of protons plus neutrons in the nucleus. Since protons and neutrons each have a mass of about 1 amu, the mass number approximately equals the atom's mass. To find the number of neutrons, simply subtract: Neutrons = Mass Number − Atomic Number. For example, carbon-12 has 6 protons (atomic number) and 12 as its mass number, so it has 12 − 6 = 6 neutrons. Carbon-14 has the same 6 protons but 14 − 6 = 8 neutrons. Both are carbon because they have the same number of protons.</p>
        </div>

        <div class="reading-section mt-8" id="section-isotopes">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-warning">🔬 Isotopes and Ions</h3>
            <button onclick="playAudio('matter-atoms-isotopes.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Atoms of the same element don't all have to be identical. While every carbon atom has 6 protons (that's what makes it carbon), the number of neutrons can vary. <strong>Isotopes</strong> are atoms of the same element with different numbers of neutrons, and therefore different mass numbers. Carbon-12 (6 protons, 6 neutrons) and Carbon-14 (6 protons, 8 neutrons) are both carbon isotopes. They behave almost identically chemically because they have the same number of electrons, but they have different masses.</p>
          
          <p class="mb-4">Some isotopes are stable, existing unchanged forever. Others are radioactive, meaning their nuclei are unstable and will eventually decay, releasing radiation. Carbon-14 is radioactive with a half-life of about 5,730 years, which is why it's useful for dating ancient organic materials. Uranium, radium, and many other heavy elements have radioactive isotopes. In chemistry, we mostly deal with stable isotopes, but radioactive isotopes have important applications in medicine, archaeology, and energy production.</p>
          
          <p class="mb-4">The atomic mass shown on the periodic table is actually a weighted average of all the naturally occurring isotopes of that element. For carbon, this average is about 12.01 amu, reflecting that most carbon is carbon-12, with small amounts of carbon-13 and trace amounts of carbon-14. This is why atomic masses are rarely whole numbers—they're averages of multiple isotopes, each present in different proportions.</p>
          
          <p class="mb-4">While isotopes differ in neutrons, <strong>ions</strong> differ in electrons. A neutral atom has equal numbers of protons and electrons, but atoms can gain or lose electrons to form ions. When an atom loses electrons, it has more protons than electrons and becomes positively charged—this is called a <strong>cation</strong>. Metals typically form cations. Sodium (Na) loses one electron to become Na⁺. When an atom gains electrons, it has more electrons than protons and becomes negatively charged—this is an <strong>anion</strong>. Nonmetals typically form anions. Chlorine (Cl) gains one electron to become Cl⁻.</p>
          
          <p class="mb-4">Understanding ions is crucial because most compounds are held together by attractions between positive and negative ions (ionic bonding) or by sharing electrons between atoms (covalent bonding). The number of electrons an atom tends to gain or lose determines its chemical behavior and what compounds it forms. Metals, which lose electrons easily, bond with nonmetals, which gain electrons easily. This dance of electrons—losing, gaining, sharing—is what chemistry is all about.</p>
        </div>

        <div class="bg-purple-50 rounded-xl p-6 mt-8">
          <h4 class="font-bold text-primary mb-4">📝 Quick Reference Summary</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold mb-2">Matter Classification</h5>
              <ul class="text-sm space-y-1">
                <li>• <strong>Pure Substances:</strong> Fixed composition</li>
                <li>  - Elements: One type of atom</li>
                <li>  - Compounds: Elements chemically bonded</li>
                <li>• <strong>Mixtures:</strong> Not chemically bonded</li>
                <li>  - Homogeneous: Uniform (solutions)</li>
                <li>  - Heterogeneous: Not uniform</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold mb-2">Atomic Structure</h5>
              <ul class="text-sm space-y-1">
                <li>• Proton: +1 charge, ~1 amu, nucleus</li>
                <li>• Neutron: 0 charge, ~1 amu, nucleus</li>
                <li>• Electron: -1 charge, ~0 amu, cloud</li>
                <li>• Atomic # = Protons = Electrons (neutral)</li>
                <li>• Mass # = Protons + Neutrons</li>
                <li>• Isotopes: Same protons, different neutrons</li>
                <li>• Ions: Different electrons (±charge)</li>
              </ul>
            </div>
          </div>
        </div>
      `
    }
  },
  
  questionPools: {
    practice: [
      { id: 'p1', question: 'Is air a pure substance or mixture?', answer: 'mixture', hint: 'Contains N₂, O₂, and other gases' },
      { id: 'p2', question: 'Is salt water homogeneous or heterogeneous?', answer: 'homogeneous', hint: 'Uniform throughout' },
      { id: 'p3', question: 'Is pizza what type of mixture?', answer: 'heterogeneous', hint: 'Can see different parts' },
      { id: 'p4', question: 'Is Gold (Au) an element or compound?', answer: 'element', hint: 'One type of atom' },
      { id: 'p5', question: 'Is Water (H₂O) an element or compound?', answer: 'compound', hint: 'Multiple elements bonded' },
      { id: 'p6', question: 'Is melting ice physical or chemical?', answer: 'physical', hint: 'Still H₂O' },
      { id: 'p7', question: 'Is burning wood physical or chemical?', answer: 'chemical', hint: 'Can\'t un-burn it' },
      { id: 'p8', question: 'Is flammability physical or chemical property?', answer: 'chemical', hint: 'Must react to test' },
      { id: 'p9', question: 'Is density physical or chemical property?', answer: 'physical', hint: 'Measure without changing it' },
      { id: 'p10', question: '11 protons = how many electrons (neutral)?', answer: '11', hint: 'Neutral = protons = electrons' },
      { id: 'p11', question: 'Carbon-14 has how many neutrons?', answer: '8', hint: 'Carbon = 6 protons; 14-6 = ?' },
      { id: 'p12', question: '17 protons + 18 neutrons = mass number?', answer: '35', hint: 'Just add them' },
      { id: 'p13', question: 'What particle determines element identity?', answer: 'proton', hint: 'Change this = new element' },
      { id: 'p14', question: 'Uranium-235 has how many neutrons? (Z=92)', answer: '143', hint: '235 - 92' },
      { id: 'p15', question: '8 protons, 8 neutrons, 10 electrons = charge?', answer: '-2', hint: '8 positive, 10 negative' },
      { id: 'p16', question: 'If Na loses 1 electron, charge is?', answer: '+1', hint: 'Losing negative = positive' },
      { id: 'p17', question: 'Cl⁻ has how many electrons? (Z=17)', answer: '18', hint: 'Gained 1' },
      { id: 'p18', question: 'What type of ion do metals form?', answer: 'cation', hint: 'Metals lose electrons' },
      { id: 'p19', question: 'Is dissolving sugar physical or chemical?', answer: 'physical', hint: 'Sugar still exists' },
      { id: 'p20', question: 'What subatomic particle has no charge?', answer: 'neutron', hint: 'In nucleus' }
    ],
    quiz: [
      { id: 'q1', type: 'multiple-choice', question: 'Which is a chemical property?', options: ['Density', 'Boiling point', 'Flammability', 'Color'], correctAnswer: 'Flammability' },
      { id: 'q2', type: 'multiple-choice', question: 'Isotopes differ in:', options: ['Protons', 'Electrons', 'Neutrons', 'Charge'], correctAnswer: 'Neutrons' },
      { id: 'q3', type: 'multiple-choice', question: 'Salt water is:', options: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'], correctAnswer: 'Homogeneous mixture' },
      { id: 'q4', type: 'multiple-choice', question: 'More electrons than protons =', options: ['Cation', 'Anion', 'Isotope', 'Neutral'], correctAnswer: 'Anion' },
      { id: 'q5', type: 'multiple-choice', question: 'Which is a pure substance?', options: ['Air', 'Salt water', 'Bronze', 'Water'], correctAnswer: 'Water' },
      { id: 'q6', type: 'fill-in-blank', question: 'Atomic number = number of _____', correctAnswer: 'protons' },
      { id: 'q7', type: 'fill-in-blank', question: '8 protons + 8 neutrons = mass number ___', correctAnswer: '16' },
      { id: 'q8', type: 'fill-in-blank', question: 'Which particle has no charge?', correctAnswer: 'neutron' },
      { id: 'q9', type: 'fill-in-blank', question: 'Cl-37 has ___ neutrons (Z=17)', correctAnswer: '20' },
      { id: 'q10', type: 'fill-in-blank', question: 'Electrons are in the electron ___', correctAnswer: 'cloud' },
      { id: 'q11', type: 'multi-select', question: 'Which are PHYSICAL changes?', options: ['Melting ice', 'Burning paper', 'Dissolving sugar', 'Rusting iron', 'Cutting wood'], correctAnswers: ['Melting ice', 'Dissolving sugar', 'Cutting wood'] },
      { id: 'q12', type: 'multi-select', question: 'Select COMPOUNDS:', options: ['O₂', 'H₂O', 'NaCl', 'Fe', 'CO₂'], correctAnswers: ['H₂O', 'NaCl', 'CO₂'] },
      { id: 'q13', type: 'multi-select', question: 'Select ELEMENTS:', options: ['CO₂', 'Au', 'H₂O', 'O₂', 'NaCl'], correctAnswers: ['Au', 'O₂'] },
      { id: 'q14', type: 'multiple-choice', question: 'NOT a sign of chemical change:', options: ['Color change', 'Gas bubbles', 'Shape change', 'New smell'], correctAnswer: 'Shape change' },
      { id: 'q15', type: 'multiple-choice', question: 'Trail mix is:', options: ['Homogeneous', 'Heterogeneous', 'Compound', 'Element'], correctAnswer: 'Heterogeneous' },
      { id: 'q16', type: 'fill-in-blank', question: 'Na⁺ has ___ electrons (Z=11)', correctAnswer: '10' },
      { id: 'q17', type: 'fill-in-blank', question: '26 protons + 30 neutrons = mass ___', correctAnswer: '56' },
      { id: 'q18', type: 'multiple-choice', question: 'Protons have what charge?', options: ['Positive', 'Negative', 'Neutral'], correctAnswer: 'Positive' },
      { id: 'q19', type: 'multiple-choice', question: 'What determines element identity?', options: ['Neutrons', 'Protons', 'Electrons', 'Mass'], correctAnswer: 'Protons' },
      { id: 'q20', type: 'multiple-choice', question: 'Metals typically form:', options: ['Anions', 'Cations', 'Isotopes'], correctAnswer: 'Cations' }
    ]
  },
  
  questionsPerPractice: 10,
  questionsPerQuiz: 12
};

if (typeof window !== 'undefined') {
  window.matterAtomsModule = matterAtomsModule;
}
