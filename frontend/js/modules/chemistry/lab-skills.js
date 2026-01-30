// Lab Skills Module
const labSkillsModule = {
  id: 'lab-skills',
  subject: 'chemistry',
  emoji: '🔬',
  title: 'Lab Skills',
  description: 'Master density calculations and lab techniques.',
  
  content: {
    video: {
      url: 'https://www.youtube.com/embed/REtBibhIqfo',
      title: 'Density Calculations'
    },
    reading: {
      sections: [
        {
          id: 'intro',
          title: 'Understanding Density',
          audioFile: 'lab-skills-intro.mp3'
        },
        {
          id: 'formula',
          title: 'The Density Formula',
          audioFile: 'lab-skills-formula.mp3'
        },
        {
          id: 'floating',
          title: 'Floating and Sinking',
          audioFile: 'lab-skills-floating.mp3'
        },
        {
          id: 'measurement',
          title: 'Measurement Techniques',
          audioFile: 'lab-skills-measurement.mp3'
        },
        {
          id: 'calculations',
          title: 'Problem-Solving with Density',
          audioFile: 'lab-skills-calculations.mp3'
        }
      ],
      html: `
        <div class="reading-section" id="section-intro">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-primary">📊 Understanding Density</h3>
            <button onclick="playAudio('lab-skills-intro.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Have you ever wondered why a massive steel ship floats while a small pebble sinks? Or why oil always floats on top of water when you try to mix them? The answer lies in one of the most useful properties in chemistry: density. Density describes how much mass is packed into a given amount of space. It's a measure of how "concentrated" matter is, and understanding it helps us explain and predict countless everyday phenomena.</p>
          
          <p class="mb-4">Density is defined as mass per unit volume—how many grams of material fit into one milliliter (or cubic centimeter) of space. Different materials have different densities because of how their atoms are arranged and how heavy those atoms are. Gold atoms are heavy and packed closely together, giving gold a high density of 19.3 g/mL. Cork is made of light elements arranged in a structure with lots of air pockets, giving it a very low density around 0.24 g/mL.</p>
          
          <p class="mb-4">One crucial thing about density: it's an <strong>intensive property</strong>, meaning it doesn't change with the amount of material you have. A tiny gold nugget has the same density as a gold bar weighing kilograms—both are 19.3 g/mL. This makes density incredibly useful for identifying unknown substances. If you find a shiny yellow metal and measure its density to be 19.3 g/mL, you have strong evidence it's real gold. If the density is much lower, it might be fool's gold (iron pyrite) or a gold-plated fake.</p>
          
          <p class="mb-4">Temperature affects density because it affects volume. When materials heat up, they usually expand—same mass in more space means lower density. This is why hot air rises (it's less dense than cool air) and why ice floats on water (water expands when it freezes, making ice less dense than liquid water). When working with density, always note the temperature, especially for precise scientific work.</p>
          
          <p class="mb-4">In the laboratory, density is used constantly. Chemists use it to identify substances, predict whether materials will float or sink, calculate masses needed for reactions, and check the purity of materials. In industry, density measurements help ensure product quality, from checking if gasoline is properly formulated to verifying that a pharmaceutical solution is correctly mixed. Mastering density calculations is essential for success in chemistry lab work.</p>
        </div>

        <div class="reading-section mt-8" id="section-formula">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-secondary">✨ The Density Formula</h3>
            <button onclick="playAudio('lab-skills-formula.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">The density formula is beautifully simple: <strong>D = m / V</strong>. Density (D) equals mass (m) divided by volume (V). In most chemistry contexts, mass is measured in grams (g) and volume in milliliters (mL) or cubic centimeters (cm³). Note that 1 mL exactly equals 1 cm³—these units are interchangeable for liquids and solids. So density is typically expressed in g/mL or g/cm³.</p>
          
          <p class="mb-4">This single formula can be rearranged to solve for any of the three variables. Need to find density? Use D = m ÷ V. Need to find mass when you know density and volume? Rearrange to m = D × V. Need to find volume when you know density and mass? Use V = m ÷ D. A helpful tool is the "density triangle": draw a triangle with m on top, and D and V on the bottom. Cover what you're solving for, and the remaining variables show you the formula.</p>
          
          <p class="mb-4">Let's work through examples of each case. <strong>Finding density:</strong> A rock has a mass of 150 grams and a volume of 50 mL. D = 150g ÷ 50mL = 3.0 g/mL. <strong>Finding mass:</strong> What's the mass of 25 mL of mercury, which has a density of 13.6 g/mL? m = 13.6 g/mL × 25 mL = 340 g. <strong>Finding volume:</strong> What volume does 500 g of aluminum occupy if aluminum's density is 2.7 g/cm³? V = 500g ÷ 2.7 g/cm³ = 185 cm³.</p>
          
          <p class="mb-4">Pay attention to units! If you're given mass in kilograms but density in g/mL, you'll need to convert. If you're asked for volume in liters but your calculation gives mL, don't forget to convert (1 L = 1000 mL). Dimensional analysis—tracking your units throughout the calculation—helps prevent errors. If your final units don't match what the problem asks for, something went wrong that needs to be fixed.</p>
          
          <p class="mb-4">When using density in calculations, apply significant figures rules. If mass is 45.2 g (3 sig figs) and volume is 15.0 mL (3 sig figs), your density is 45.2 ÷ 15.0 = 3.01 g/mL (3 sig figs). If volume is only 15 mL (2 sig figs), then density is 3.0 g/mL (2 sig figs). Your answer can only be as precise as your least precise measurement. Always round at the end, not during intermediate steps.</p>
        </div>

        <div class="reading-section mt-8" id="section-floating">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-success">🌊 Floating and Sinking</h3>
            <button onclick="playAudio('lab-skills-floating.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Understanding density allows you to predict whether objects will float or sink in liquids. The rule is simple: if an object's density is LESS than the liquid's density, it floats; if its density is MORE than the liquid's density, it sinks. Since water has a density of 1.0 g/mL, anything with a density less than 1.0 will float in water, and anything with a density greater than 1.0 will sink.</p>
          
          <p class="mb-4">This explains many everyday observations. Ice (density 0.92 g/mL) floats in water because 0.92 < 1.0. This is actually unusual—most solids are denser than their liquid forms. Water's unusual behavior is why ice forms on top of lakes instead of sinking, which is crucial for aquatic life surviving winter. Oil (approximately 0.9 g/mL) also floats on water, which is why oil spills spread across the water's surface.</p>
          
          <p class="mb-4">Cork (about 0.24 g/mL), wood (varies, 0.4-0.8 g/mL), and many plastics float in water. Rocks (typically 2-3 g/mL), metals (iron is 7.9 g/mL, gold is 19.3 g/mL), and glass (about 2.5 g/mL) sink. But remember, the comparison is between the object's density and the liquid's density. A steel ship floats because the ship's average density (including all the air inside) is less than water. If that ship fills with water, the average density increases above 1.0, and it sinks.</p>
          
          <p class="mb-4">You can also predict layering when liquids are mixed. Pour oil and water together, and they separate with oil on top (less dense) and water on the bottom (more dense). Add honey (density about 1.4 g/mL), and it sinks below the water. This principle is used in density columns—beautiful demonstrations where multiple liquids layer according to their densities, often with solid objects floating at different levels.</p>
          
          <p class="mb-4">Temperature plays a role in floating and sinking too. Warm water is less dense than cold water, which is why warm water rises. This creates convection currents in heated liquids. In lakes, warm water stays near the surface in summer while cold water stays at the bottom—this temperature layering affects where fish and other organisms live. Understanding density and buoyancy is essential in fields from marine engineering to weather prediction.</p>
        </div>

        <div class="reading-section mt-8" id="section-measurement">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-accent">🥼 Measurement Techniques</h3>
            <button onclick="playAudio('lab-skills-measurement.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">To calculate density, you need accurate measurements of both mass and volume. Mass is measured using a balance or scale. Before measuring, always "zero" or "tare" the balance—this resets it to read zero before you add your sample. If you're using a container to hold your sample, place the empty container on the balance first and tare it, so the balance reads only the sample's mass, not container plus sample.</p>
          
          <p class="mb-4">Measuring volume depends on the sample's state. For liquids, use a graduated cylinder, which is more accurate than beakers or flasks for volume measurements. Pour the liquid carefully and read the volume at the <strong>meniscus</strong>—the curve the liquid makes at the surface. Water curves downward (concave meniscus), so read at the BOTTOM of the curve. Your eyes should be level with the liquid surface to avoid parallax errors. Mercury curves upward (convex meniscus), so read at the top of its curve.</p>
          
          <p class="mb-4">For regular solids with simple shapes (cubes, cylinders, rectangles), you can calculate volume from dimensions. A rectangular block's volume is length × width × height. A cylinder's volume is πr²h (pi times radius squared times height). A sphere's volume is (4/3)πr³. Measure dimensions with a ruler or caliper, then calculate. Remember that 1 cm³ = 1 mL, so if you measure in centimeters, your calculated volume in cm³ equals volume in mL.</p>
          
          <p class="mb-4">For irregular solids (rocks, oddly-shaped metal pieces), use <strong>water displacement</strong>. Fill a graduated cylinder partway with water and record the initial volume (V₁). Carefully submerge the object (tilt the cylinder and slide the object in to avoid splashing), then record the new volume (V₂). The object's volume equals V₂ − V₁. For example, if water starts at 45 mL and rises to 52 mL when the rock is added, the rock's volume is 52 − 45 = 7 mL.</p>
          
          <p class="mb-4">Accurate measurement requires care. For balances: make sure the surface is level, close drafts that might affect the reading, and wait for the display to stabilize before recording. For graduated cylinders: ensure the cylinder is on a flat surface, wait for the liquid to stop moving, and always read at eye level. Record all digits that are certain plus one estimated digit. With a cylinder marked in 1 mL increments, you should read to the nearest 0.1 mL.</p>
        </div>

        <div class="reading-section mt-8" id="section-calculations">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-warning">🧮 Problem-Solving with Density</h3>
            <button onclick="playAudio('lab-skills-calculations.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Density problems come in many varieties, but they all rely on the same fundamental relationship: D = m/V. The key to solving any density problem is identifying what you know and what you need to find. Let's walk through several types of problems you might encounter, building your problem-solving skills step by step.</p>
          
          <p class="mb-4"><strong>Direct calculation:</strong> "A block of aluminum has a mass of 81.0 g and dimensions of 3.0 cm × 2.0 cm × 5.0 cm. What is its density?" First, calculate volume: V = 3.0 × 2.0 × 5.0 = 30.0 cm³. Then apply the formula: D = 81.0g ÷ 30.0cm³ = 2.70 g/cm³. This matches aluminum's known density, confirming the block is pure aluminum.</p>
          
          <p class="mb-4"><strong>Finding mass or volume:</strong> "How much would 150 mL of mercury weigh?" Mercury's density is 13.6 g/mL. Using m = D × V: m = 13.6 g/mL × 150 mL = 2040 g (or about 2.04 kg!). "What volume of gold has a mass of 386 g?" Gold's density is 19.3 g/mL. Using V = m ÷ D: V = 386g ÷ 19.3 g/mL = 20.0 mL. That's a pretty small volume—gold is remarkably dense!</p>
          
          <p class="mb-4"><strong>Using water displacement data:</strong> "A student measures a metal chunk's mass as 56.8 g. Water in a graduated cylinder starts at 25.0 mL and rises to 32.1 mL when the metal is submerged. What is the metal's density, and what might it be?" Volume = 32.1 − 25.0 = 7.1 mL. Density = 56.8g ÷ 7.1mL = 8.0 g/cm³. Looking at a density table, this matches iron (7.9 g/cm³) closely—the sample is likely iron.</p>
          
          <p class="mb-4"><strong>Predicting behavior:</strong> "Will a block with a mass of 75 g and volume of 100 cm³ float or sink in water?" First find density: D = 75g ÷ 100cm³ = 0.75 g/cm³. Since 0.75 < 1.0 (water's density), the block will float. "Will it float in olive oil (D = 0.92 g/mL)?" Since 0.75 < 0.92, yes, it floats in olive oil too. "Will it float in gasoline (D = 0.70 g/mL)?" Since 0.75 > 0.70, no, it will sink in gasoline.</p>
          
          <p class="mb-4"><strong>Multi-step problems:</strong> "A hollow sphere has an outer diameter of 10.0 cm and an inner diameter of 9.0 cm. The sphere's mass is 350 g. What is the density of the material?" Volume of outer sphere: (4/3)π(5.0)³ = 523.6 cm³. Volume of inner hollow: (4/3)π(4.5)³ = 381.7 cm³. Volume of material = 523.6 − 381.7 = 141.9 cm³. Density = 350g ÷ 141.9cm³ = 2.47 g/cm³, approximately matching aluminum (2.70 g/cm³) or possibly a plastic or composite material.</p>
        </div>

        <div class="bg-purple-50 rounded-xl p-6 mt-8">
          <h4 class="font-bold text-primary mb-4">📝 Quick Reference Summary</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold mb-2">Density Formulas</h5>
              <ul class="text-sm space-y-1">
                <li>• D = m ÷ V (find density)</li>
                <li>• m = D × V (find mass)</li>
                <li>• V = m ÷ D (find volume)</li>
                <li>• Common units: g/mL or g/cm³</li>
                <li>• 1 mL = 1 cm³</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold mb-2">Float or Sink?</h5>
              <ul class="text-sm space-y-1">
                <li>• Water density = 1.0 g/mL</li>
                <li>• D < liquid → FLOATS</li>
                <li>• D > liquid → SINKS</li>
                <li>• Ice (0.92) floats in water</li>
                <li>• Metals sink in water</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold mb-2">Measuring Volume</h5>
              <ul class="text-sm space-y-1">
                <li>• Liquids: graduated cylinder</li>
                <li>• Read at meniscus (bottom of curve)</li>
                <li>• Regular solids: L × W × H</li>
                <li>• Irregular solids: water displacement</li>
                <li>• V = V₂ (final) − V₁ (initial)</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold mb-2">Common Densities (g/mL)</h5>
              <ul class="text-sm space-y-1">
                <li>• Cork: 0.24</li>
                <li>• Oil: ~0.9</li>
                <li>• Ice: 0.92</li>
                <li>• Water: 1.0</li>
                <li>• Aluminum: 2.7</li>
                <li>• Iron: 7.9</li>
                <li>• Gold: 19.3</li>
              </ul>
            </div>
          </div>
        </div>
      `
    }
  },
  
  questionPools: {
    practice: [
      { id: 'p1', question: 'Mass 50g, volume 20mL. Density?', answer: '2.5', hint: 'D = m/V = 50/20' },
      { id: 'p2', question: 'Density 1.5 g/mL. Mass of 10 mL?', answer: '15', hint: 'm = D × V' },
      { id: 'p3', question: 'Volume of 200g water? (D=1.0)', answer: '200', hint: 'V = m ÷ D' },
      { id: 'p4', question: 'Mass 81g, D=2.7 g/cm³. Volume?', answer: '30', hint: 'V = m ÷ D' },
      { id: 'p5', question: 'Mercury D=13.6. Mass of 5 mL?', answer: '68', hint: 'm = D × V' },
      { id: 'p6', question: 'D=0.8 g/cm³ - float or sink in water?', answer: 'float', hint: '0.8 < 1.0' },
      { id: 'p7', question: 'D=1.2 g/mL - float or sink in water?', answer: 'sink', hint: '1.2 > 1.0' },
      { id: 'p8', question: 'Will ice (D=0.92) float in water?', answer: 'float', hint: '0.92 < 1.0' },
      { id: 'p9', question: 'Cylinder: 45 mL → 52 mL. Object volume?', answer: '7', hint: '52 - 45' },
      { id: 'p10', question: 'Cylinder: 25 mL → 31 mL. Object volume?', answer: '6', hint: '31 - 25' },
      { id: 'p11', question: 'Cube 2×2×2 cm, mass 21.6g. Density?', answer: '2.7', hint: 'V=8, D=21.6/8' },
      { id: 'p12', question: 'Aluminum D=2.7, V=15 cm³. Mass?', answer: '40.5', hint: 'm = D × V' },
      { id: 'p13', question: 'Gold D=19.3. Volume of 96.5g?', answer: '5', hint: 'V = m/D' },
      { id: 'p14', question: 'Mass 36g, volume 30mL. Density?', answer: '1.2', hint: 'D = 36/30' },
      { id: 'p15', question: 'D=1.2 g/mL - float or sink?', answer: 'sink', hint: '1.2 > 1.0' },
      { id: 'p16', question: 'Read graduated cylinder at the ___', answer: 'bottom', hint: 'Of the meniscus' },
      { id: 'p17', question: '1 mL equals how many cm³?', answer: '1', hint: 'They\'re equal' },
      { id: 'p18', question: 'Block 4×3×2 cm, mass 192g. Density?', answer: '8', hint: 'V=24, D=192/24' },
      { id: 'p19', question: 'D=8 g/mL, V=5 mL. Mass?', answer: '40', hint: 'm = D × V' },
      { id: 'p20', question: 'Object D=2.5, mass 100g. Volume?', answer: '40', hint: 'V = 100/2.5' }
    ],
    quiz: [
      { id: 'q1', type: 'multiple-choice', question: 'D=0.7 g/mL will ___ in water', options: ['float', 'sink', 'dissolve', 'evaporate'], correctAnswer: 'float' },
      { id: 'q2', type: 'multiple-choice', question: 'Irregular solid volume - use:', options: ['Ruler', 'Water displacement', 'Scale', 'Estimation'], correctAnswer: 'Water displacement' },
      { id: 'q3', type: 'multiple-choice', question: 'Read graduated cylinder at:', options: ['Top of curve', 'Bottom of meniscus', 'Middle', 'Highest point'], correctAnswer: 'Bottom of meniscus' },
      { id: 'q4', type: 'multiple-choice', question: 'Why does ice float?', options: ['Ice is cold', 'Ice has lower density', 'Water is heavy', 'Ice has bubbles'], correctAnswer: 'Ice has lower density' },
      { id: 'q5', type: 'multiple-choice', question: 'To find mass:', options: ['m = D/V', 'm = V/D', 'm = D × V', 'm = D + V'], correctAnswer: 'm = D × V' },
      { id: 'q6', type: 'fill-in-blank', question: 'Density formula: D = m ÷ ___', correctAnswer: 'V' },
      { id: 'q7', type: 'fill-in-blank', question: 'Mass 60g, volume 20mL. D = ___ g/mL', correctAnswer: '3' },
      { id: 'q8', type: 'fill-in-blank', question: 'D=8 g/mL, V=5 mL. Mass = ___ g', correctAnswer: '40' },
      { id: 'q9', type: 'fill-in-blank', question: 'Water density = ___ g/mL', correctAnswer: '1' },
      { id: 'q10', type: 'fill-in-blank', question: 'Cylinder 25→31 mL. Object V = ___ mL', correctAnswer: '6' },
      { id: 'q11', type: 'multi-select', question: 'Which FLOAT in water?', options: ['Ice (0.92)', 'Aluminum (2.7)', 'Cork (0.24)', 'Iron (7.9)', 'Oil (0.9)'], correctAnswers: ['Ice (0.92)', 'Cork (0.24)', 'Oil (0.9)'] },
      { id: 'q12', type: 'multi-select', question: 'True about density:', options: ['Mass ÷ volume', 'Denser than water sinks', 'Ice is denser than water', 'Doesn\'t change with amount'], correctAnswers: ['Mass ÷ volume', 'Denser than water sinks', 'Doesn\'t change with amount'] },
      { id: 'q13', type: 'multi-select', question: 'TRUE statements:', options: ['1 mL = 1 cm³', 'Water D = 1 g/mL', 'Mass = D × V', 'Heavy always sinks'], correctAnswers: ['1 mL = 1 cm³', 'Water D = 1 g/mL', 'Mass = D × V'] },
      { id: 'q14', type: 'fill-in-blank', question: 'Mass 75g, V=50mL. D = ___ g/mL', correctAnswer: '1.5' },
      { id: 'q15', type: 'fill-in-blank', question: 'D=2.5, mass=100g. V = ___ cm³', correctAnswer: '40' },
      { id: 'q16', type: 'fill-in-blank', question: 'Block 4×3×2, mass 192g. D = ___', correctAnswer: '8' },
      { id: 'q17', type: 'fill-in-blank', question: 'Gold (19.3) is ___ × denser than water', correctAnswer: '19.3' },
      { id: 'q18', type: 'multiple-choice', question: 'Density is mass divided by:', options: ['Time', 'Volume', 'Temperature', 'Area'], correctAnswer: 'Volume' },
      { id: 'q19', type: 'multiple-choice', question: 'Before measuring mass:', options: ['Heat balance', 'Zero/tare balance', 'Calibrate with water', 'Shake sample'], correctAnswer: 'Zero/tare balance' },
      { id: 'q20', type: 'fill-in-blank', question: 'Mass of 25mL at D=2.0 = ___ g', correctAnswer: '50' }
    ]
  },
  
  questionsPerPractice: 10,
  questionsPerQuiz: 12
};

if (typeof window !== 'undefined') {
  window.labSkillsModule = labSkillsModule;
}
