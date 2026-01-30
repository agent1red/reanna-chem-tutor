// Lab Skills Module Content
const labSkillsModule = {
  id: 'lab-skills',
  emoji: '🔬',
  title: 'Lab Skills',
  description: 'Master density calculations and lab techniques.',
  content: {
    video: {
      url: 'https://www.youtube.com/embed/REtBibhIqfo',
      title: 'Density Calculations Tutorial'
    },
    reading: {
      html: `
        <h3 class="text-xl font-bold mb-4 text-primary">Density: The Most Useful Property Ever 📊</h3>
        <p class="mb-4">Okay, so density might sound boring, but it's actually super useful. It's how we figure out if something will float or sink, identify unknown substances, and solve a ton of real-world problems. Plus, once you get the formula down, the math is pretty straightforward!</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">The Magic Formula ✨</h4>
        <div class="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-6 mb-5 text-center">
          <p class="text-4xl font-bold text-primary mb-4">D = m / V</p>
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold text-2xl text-primary">D</p>
              <p class="text-sm">Density</p>
              <p class="text-xs text-gray-500">g/mL or g/cm³</p>
            </div>
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold text-2xl text-secondary">m</p>
              <p class="text-sm">Mass</p>
              <p class="text-xs text-gray-500">grams (g)</p>
            </div>
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold text-2xl text-accent">V</p>
              <p class="text-sm">Volume</p>
              <p class="text-xs text-gray-500">mL or cm³</p>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Rearranging for What You Need 🔄</h4>
        <p class="mb-3">You won't always be solving for density. Sometimes you need mass or volume. Here's the formula triangle trick:</p>
        
        <div class="grid md:grid-cols-3 gap-4 mb-5">
          <div class="bg-purple-50 rounded-xl p-4 text-center">
            <p class="text-sm text-gray-600 mb-1">Find Density</p>
            <p class="text-2xl font-bold text-purple-600">D = m ÷ V</p>
            <p class="text-xs mt-2">"mass divided by volume"</p>
          </div>
          <div class="bg-pink-50 rounded-xl p-4 text-center">
            <p class="text-sm text-gray-600 mb-1">Find Mass</p>
            <p class="text-2xl font-bold text-pink-600">m = D × V</p>
            <p class="text-xs mt-2">"density times volume"</p>
          </div>
          <div class="bg-cyan-50 rounded-xl p-4 text-center">
            <p class="text-sm text-gray-600 mb-1">Find Volume</p>
            <p class="text-2xl font-bold text-cyan-600">V = m ÷ D</p>
            <p class="text-xs mt-2">"mass divided by density"</p>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Let's Work Through Some Problems 📝</h4>
        <div class="space-y-4 mb-5">
          <div class="bg-gray-50 rounded-xl p-4">
            <p class="font-semibold text-primary mb-2">Example 1: Finding Density</p>
            <p class="text-sm mb-2">A metal cube has a mass of 54 grams and a volume of 20 cm³. What is its density?</p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p>D = m ÷ V</p>
              <p>D = 54 g ÷ 20 cm³</p>
              <p class="font-bold text-primary">D = 2.7 g/cm³</p>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-xl p-4">
            <p class="font-semibold text-secondary mb-2">Example 2: Finding Mass</p>
            <p class="text-sm mb-2">A liquid has a density of 1.5 g/mL. What is the mass of 30 mL of this liquid?</p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p>m = D × V</p>
              <p>m = 1.5 g/mL × 30 mL</p>
              <p class="font-bold text-secondary">m = 45 g</p>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-xl p-4">
            <p class="font-semibold text-accent mb-2">Example 3: Finding Volume</p>
            <p class="text-sm mb-2">A rock has a mass of 100 g and a density of 2.5 g/cm³. What is its volume?</p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p>V = m ÷ D</p>
              <p>V = 100 g ÷ 2.5 g/cm³</p>
              <p class="font-bold text-accent">V = 40 cm³</p>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Float or Sink? 🌊</h4>
        <div class="bg-blue-50 rounded-xl p-5 mb-5">
          <p class="mb-3">Here's the cool part — density tells us if something will float or sink!</p>
          <div class="bg-white rounded-lg p-4 mb-3">
            <p class="text-center mb-2"><strong>Water's density = 1.0 g/mL</strong></p>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="text-center p-3 bg-green-100 rounded-lg">
                <p class="font-bold text-green-600">FLOATS ⬆️</p>
                <p>Density &lt; 1.0 g/mL</p>
              </div>
              <div class="text-center p-3 bg-red-100 rounded-lg">
                <p class="font-bold text-red-600">SINKS ⬇️</p>
                <p>Density &gt; 1.0 g/mL</p>
              </div>
            </div>
          </div>
          
          <p class="font-semibold mb-2">Common Densities to Know:</p>
          <table class="w-full text-sm bg-white rounded-lg overflow-hidden">
            <thead class="bg-blue-100">
              <tr><th class="p-2">Substance</th><th class="p-2">Density (g/cm³)</th><th class="p-2">In Water?</th></tr>
            </thead>
            <tbody>
              <tr class="border-b"><td class="p-2">Ice</td><td class="p-2 text-center">0.92</td><td class="p-2 text-center text-green-600">Floats</td></tr>
              <tr class="border-b"><td class="p-2">Vegetable oil</td><td class="p-2 text-center">0.92</td><td class="p-2 text-center text-green-600">Floats</td></tr>
              <tr class="border-b"><td class="p-2">Water</td><td class="p-2 text-center">1.00</td><td class="p-2 text-center">—</td></tr>
              <tr class="border-b"><td class="p-2">Aluminum</td><td class="p-2 text-center">2.70</td><td class="p-2 text-center text-red-600">Sinks</td></tr>
              <tr class="border-b"><td class="p-2">Iron/Steel</td><td class="p-2 text-center">7.87</td><td class="p-2 text-center text-red-600">Sinks</td></tr>
              <tr><td class="p-2">Gold</td><td class="p-2 text-center">19.3</td><td class="p-2 text-center text-red-600">Sinks</td></tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Lab Techniques You Need to Know 🥼</h4>
        
        <div class="bg-green-50 rounded-xl p-5 mb-5">
          <h5 class="font-bold mb-3">Measuring Volume of Liquids 💧</h5>
          <div class="bg-white rounded-lg p-4 mb-3">
            <ul class="space-y-2 text-sm">
              <li>• Use a <strong>graduated cylinder</strong> for accurate measurements</li>
              <li>• Read at the <strong>meniscus</strong> (the bottom of the curve)</li>
              <li>• Keep your eyes at the <strong>same level</strong> as the liquid surface</li>
              <li>• Record to the correct number of significant figures</li>
            </ul>
          </div>
          <p class="text-sm text-gray-600">Pro tip: The meniscus curves because water molecules are attracted to the glass walls!</p>
        </div>

        <div class="bg-yellow-50 rounded-xl p-5 mb-5">
          <h5 class="font-bold mb-3">Water Displacement Method 🪨</h5>
          <p class="text-sm mb-3">For irregular objects (rocks, metal chunks, etc.) that you can't measure with a ruler:</p>
          <div class="bg-white rounded-lg p-4">
            <ol class="space-y-2 text-sm list-decimal list-inside">
              <li>Fill a graduated cylinder partway with water and record the volume (V₁)</li>
              <li>Carefully lower the object into the water (make sure it's fully submerged)</li>
              <li>Record the new water level (V₂)</li>
              <li>Calculate: <strong>Object's volume = V₂ - V₁</strong></li>
            </ol>
          </div>
          <p class="text-sm text-gray-600 mt-3">Why it works: The object pushes the water up by exactly its own volume!</p>
        </div>

        <div class="bg-purple-50 rounded-xl p-5">
          <h5 class="font-bold mb-3">Using a Balance ⚖️</h5>
          <div class="bg-white rounded-lg p-4 text-sm">
            <ul class="space-y-2">
              <li>• Always <strong>zero/tare</strong> the balance before measuring</li>
              <li>• Never place chemicals directly on the balance pan (use a container)</li>
              <li>• Record mass to the precision of the balance</li>
              <li>• Keep the balance clean and on a level surface</li>
            </ul>
          </div>
        </div>
      `
    },
    practice: [
      { question: 'A rock has mass 50g and volume 20mL. What is its density?', answer: '2.5', hint: 'D = m/V = 50/20' },
      { question: 'Will an object with density 0.8 g/cm³ float or sink in water?', answer: 'float', hint: 'Compare to water\'s density of 1.0' },
      { question: 'A liquid has density 1.5 g/mL. What is the mass of 10 mL?', answer: '15', hint: 'm = D × V' },
      { question: 'What is the volume of 200g of water? (D = 1.0 g/mL)', answer: '200', hint: 'V = m ÷ D' },
      { question: 'An object has mass 81g and density 2.7 g/cm³. What is its volume?', answer: '30', hint: 'V = m ÷ D = 81 ÷ 2.7' },
      { question: 'A graduated cylinder reads 45 mL with water. After adding a rock, it reads 52 mL. What is the rock\'s volume?', answer: '7', hint: 'Volume = Final - Initial' },
      { question: 'Mercury has density 13.6 g/mL. What is the mass of 5 mL?', answer: '68', hint: 'm = D × V = 13.6 × 5' },
      { question: 'A cube of metal (2cm × 2cm × 2cm) has mass 21.6g. What is its density?', answer: '2.7', hint: 'First find V = 2×2×2 = 8, then D = 21.6/8' },
      { question: 'Will ice (D = 0.92 g/cm³) float in vegetable oil (D = 0.92 g/cm³)?', answer: 'no', hint: 'Same density means it would be suspended, not float or sink' },
      { question: 'A sample of aluminum (D = 2.7 g/cm³) has a volume of 15 cm³. What is its mass?', answer: '40.5', hint: 'm = D × V = 2.7 × 15' },
      { question: 'Unknown liquid has mass 36g and volume 30mL. What is its density?', answer: '1.2', hint: 'D = 36/30' },
      { question: 'Will this unknown liquid (D = 1.2 g/mL) float or sink in water?', answer: 'sink', hint: '1.2 > 1.0' },
      { question: 'Gold has density 19.3 g/cm³. What is the volume of a 96.5g gold nugget?', answer: '5', hint: 'V = m/D = 96.5/19.3' },
      { question: 'A wooden block floats with half its volume underwater. If its volume is 100 cm³, what is its mass?', answer: '50', hint: 'If half is underwater, its density is 0.5, so m = 0.5 × 100' },
      { question: 'You have 500 mL of a liquid with mass 650g. What is its density?', answer: '1.3', hint: 'D = 650/500' }
    ],
    quiz: [
      { type: 'fill-in-blank', question: 'The formula for density is D = m ÷ ___', correctAnswer: 'V' },
      { type: 'multiple-choice', question: 'A substance with density 0.7 g/mL will ___ in water', options: ['float', 'sink', 'dissolve', 'evaporate'], correctAnswer: 'float' },
      { type: 'fill-in-blank', question: 'An object has mass 60g and volume 20mL. Density = ___ g/mL', correctAnswer: '3' },
      { type: 'multiple-choice', question: 'To find volume of an irregular solid, use:', options: ['A ruler', 'Water displacement', 'A scale', 'Estimation'], correctAnswer: 'Water displacement' },
      { type: 'fill-in-blank', question: 'If D = 8 g/mL and V = 5 mL, then mass = ___ g', correctAnswer: '40' },
      { type: 'multiple-choice', question: 'When reading a graduated cylinder, you should read at the:', options: ['Top of the curve', 'Bottom of the meniscus', 'Middle of the liquid', 'Highest point'], correctAnswer: 'Bottom of the meniscus' },
      { type: 'fill-in-blank', question: 'Water has a density of ___ g/mL', correctAnswer: '1' },
      { type: 'multi-select', question: 'Which objects will FLOAT in water? (Select all)', options: ['Ice (0.92)', 'Aluminum (2.7)', 'Cork (0.24)', 'Iron (7.9)', 'Oil (0.9)'], correctAnswers: ['Ice (0.92)', 'Cork (0.24)', 'Oil (0.9)'] },
      { type: 'fill-in-blank', question: 'A graduated cylinder reads 25 mL. After adding an object, it reads 31 mL. The object\'s volume is ___ mL', correctAnswer: '6' },
      { type: 'multiple-choice', question: 'If you need to find mass, the formula is:', options: ['m = D/V', 'm = V/D', 'm = D × V', 'm = D + V'], correctAnswer: 'm = D × V' },
      { type: 'fill-in-blank', question: 'A liquid with mass 75g and volume 50mL has density ___ g/mL', correctAnswer: '1.5' },
      { type: 'multi-select', question: 'Which are correct about density? (Select all)', options: ['It\'s mass divided by volume', 'Objects denser than water sink', 'Ice is denser than water', 'Density doesn\'t change with amount of substance'], correctAnswers: ['It\'s mass divided by volume', 'Objects denser than water sink', 'Density doesn\'t change with amount of substance'] },
      { type: 'fill-in-blank', question: 'If density = 2.5 g/cm³ and mass = 100g, then volume = ___ cm³', correctAnswer: '40' },
      { type: 'multiple-choice', question: 'Why does ice float on water?', options: ['Ice is colder', 'Ice has lower density', 'Water is heavier', 'Ice has air bubbles'], correctAnswer: 'Ice has lower density' },
      { type: 'fill-in-blank', question: 'A metal block is 4cm × 3cm × 2cm and has mass 192g. Its density is ___ g/cm³', correctAnswer: '8' },
      { type: 'multi-select', question: 'Select ALL true statements:', options: ['1 mL = 1 cm³', 'Density of water = 1 g/mL', 'Mass = Density × Volume', 'Heavier objects always sink'], correctAnswers: ['1 mL = 1 cm³', 'Density of water = 1 g/mL', 'Mass = Density × Volume'] },
      { type: 'fill-in-blank', question: 'Gold (D=19.3) is ___ times denser than water', correctAnswer: '19.3' }
    ]
  }
};

if (typeof module !== 'undefined') module.exports = labSkillsModule;
