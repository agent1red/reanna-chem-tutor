// Significant Figures Module Content
const sigFigsModule = {
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
        <h3 class="text-xl font-bold mb-4 text-primary">What Even Are Significant Figures? 🤔</h3>
        <p class="mb-4">Okay so here's the deal — in science, we can't just throw around random numbers. When you measure something, your answer is only as good as your measuring tool. Significant figures (or "sig figs" because we're lazy) tell us how precise a measurement actually is.</p>
        
        <p class="mb-4">Think about it this way: if you're measuring your height with a ruler that only shows inches, you can't suddenly claim you're 5 feet 7.3847362 inches tall. That's just making stuff up! Sig figs keep us honest about what we actually measured.</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">The Five Rules You Need to Know 📋</h4>
        
        <div class="bg-purple-50 rounded-xl p-5 mb-5">
          <p class="mb-3"><strong>Rule #1: Non-zero digits ALWAYS count.</strong></p>
          <p class="mb-4 text-gray-600">This one's easy. If you see a number that isn't zero, it's significant. Period. The number 523 has 3 sig figs. The number 1.7 has 2 sig figs. Simple.</p>
          
          <p class="mb-3"><strong>Rule #2: Zeros sandwiched between non-zeros count.</strong></p>
          <p class="mb-4 text-gray-600">These are called "captive zeros" (they're trapped!). In 4007, that zero is stuck between 4 and 7, so it counts. That's 4 sig figs total.</p>
          
          <p class="mb-3"><strong>Rule #3: Leading zeros are just placeholders — they DON'T count.</strong></p>
          <p class="mb-4 text-gray-600">Those zeros at the beginning of small decimals? They're just showing you where the decimal point is. In 0.0042, only the 4 and 2 are significant. That's just 2 sig figs, not 4.</p>
          
          <p class="mb-3"><strong>Rule #4: Trailing zeros AFTER a decimal point DO count.</strong></p>
          <p class="mb-4 text-gray-600">This is where it gets spicy. If someone writes 2.50 instead of 2.5, they're telling you they measured to the hundredths place. That trailing zero matters! So 2.50 has 3 sig figs.</p>
          
          <p class="mb-3"><strong>Rule #5: Trailing zeros WITHOUT a decimal are sketchy.</strong></p>
          <p class="text-gray-600">The number 2500 is ambiguous. Does it have 2 sig figs? 3? 4? We literally can't tell. That's why scientists use scientific notation to be clear (like 2.50 × 10³ for 3 sig figs).</p>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Let's Practice Counting! 🔢</h4>
        <div class="bg-white border-2 border-gray-100 rounded-xl p-4 mb-5">
          <table class="w-full">
            <thead>
              <tr class="border-b-2"><th class="p-2 text-left">Number</th><th class="p-2 text-center">Sig Figs</th><th class="p-2 text-left">Why?</th></tr>
            </thead>
            <tbody class="text-sm">
              <tr class="border-b"><td class="p-2">45.83</td><td class="p-2 text-center font-bold text-primary">4</td><td class="p-2">All non-zero digits</td></tr>
              <tr class="border-b"><td class="p-2">0.00250</td><td class="p-2 text-center font-bold text-primary">3</td><td class="p-2">Leading zeros don't count, trailing does</td></tr>
              <tr class="border-b"><td class="p-2">1002</td><td class="p-2 text-center font-bold text-primary">4</td><td class="p-2">Captive zeros count</td></tr>
              <tr class="border-b"><td class="p-2">0.070</td><td class="p-2 text-center font-bold text-primary">2</td><td class="p-2">Only 7 and final 0 count</td></tr>
              <tr><td class="p-2">3.00</td><td class="p-2 text-center font-bold text-primary">3</td><td class="p-2">Trailing zeros after decimal count</td></tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Math with Sig Figs (The Part Everyone Messes Up) ➕✖️</h4>
        <p class="mb-4">When you do calculations, your answer can't be more precise than your least precise measurement. There are two different rules depending on what math you're doing:</p>
        
        <div class="grid md:grid-cols-2 gap-4 mb-5">
          <div class="bg-green-50 rounded-xl p-4">
            <h5 class="font-bold text-success mb-2">Adding & Subtracting</h5>
            <p class="text-sm mb-3">Round to the <strong>least number of decimal places</strong></p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p>12.52 + 1.7 = 14.22</p>
              <p class="text-gray-500">1.7 has 1 decimal place (the least)</p>
              <p class="font-bold text-success">Answer: 14.2</p>
            </div>
          </div>
          <div class="bg-blue-50 rounded-xl p-4">
            <h5 class="font-bold text-accent mb-2">Multiplying & Dividing</h5>
            <p class="text-sm mb-3">Round to the <strong>least number of sig figs</strong></p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p>4.56 × 1.4 = 6.384</p>
              <p class="text-gray-500">1.4 has 2 sig figs (the least)</p>
              <p class="font-bold text-accent">Answer: 6.4</p>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Pro Tips from Students Who've Been There 💡</h4>
        <div class="bg-yellow-50 rounded-xl p-4">
          <ul class="space-y-2 text-sm">
            <li>• <strong>When in doubt, underline the sig figs</strong> as you count them</li>
            <li>• <strong>Atlantic-Pacific rule:</strong> If decimal is Absent, start counting from Atlantic (right). If decimal is Present, start from Pacific (left). Start counting at the first non-zero.</li>
            <li>• <strong>For calculations:</strong> Do the math first, THEN round at the very end</li>
            <li>• <strong>Exact numbers</strong> (like counting 3 apples) have infinite sig figs — they don't limit your answer</li>
          </ul>
        </div>
      `
    },
    practice: [
      { question: 'How many sig figs in 0.00456?', answer: '3', hint: 'Leading zeros don\'t count!' },
      { question: 'How many sig figs in 1.020?', answer: '4', hint: 'Captive zero AND trailing zero after decimal both count' },
      { question: 'How many sig figs in 8000?', answer: '1', hint: 'Trailing zeros without decimal are ambiguous - assume minimum' },
      { question: 'How many sig figs in 8000.?', answer: '4', hint: 'The decimal point makes ALL zeros significant!' },
      { question: 'How many sig figs in 0.0030?', answer: '2', hint: 'Only 3 and the final 0 count' },
      { question: 'Round 45.678 to 3 sig figs:', answer: '45.7', hint: 'Look at the 4th digit (7) to round the 3rd' },
      { question: 'Round 0.004562 to 2 sig figs:', answer: '0.0046', hint: 'Leading zeros stay, round after first 2 significant digits' },
      { question: 'Calculate: 2.5 × 3.42 = ? (with correct sig figs)', answer: '8.6', hint: '2.5 has 2 sig figs, so answer needs 2' },
      { question: 'Calculate: 15.234 + 2.1 = ? (with correct sig figs)', answer: '17.3', hint: 'Addition uses decimal places - 2.1 has 1 decimal place' },
      { question: 'Calculate: 100.0 ÷ 3.0 = ? (with correct sig figs)', answer: '33', hint: 'Both have 2 sig figs minimum, answer needs 2' },
      { question: 'How many sig figs in 5.00 × 10³?', answer: '3', hint: 'Scientific notation makes it clear!' },
      { question: 'Calculate: 7.5 - 0.823 = ? (with correct sig figs)', answer: '6.7', hint: '7.5 has 1 decimal place (the least)' },
      { question: 'How many sig figs in 10.00?', answer: '4', hint: 'All trailing zeros after decimal count' },
      { question: 'Calculate: 6.022 × 2.0 = ? (with correct sig figs)', answer: '12', hint: '2.0 has 2 sig figs, limiting the answer' },
      { question: 'Round 99.999 to 3 sig figs:', answer: '100.', hint: 'When rounding up creates a new digit, add decimal to show sig figs' }
    ],
    quiz: [
      { type: 'multiple-choice', question: 'How many significant figures are in 0.00340?', options: ['2', '3', '4', '5'], correctAnswer: '3' },
      { type: 'multiple-choice', question: 'How many significant figures are in 100.0?', options: ['1', '2', '3', '4'], correctAnswer: '4' },
      { type: 'fill-in-blank', question: 'How many significant figures are in 2.050?', correctAnswer: '4' },
      { type: 'multiple-choice', question: 'For addition and subtraction, you round to the:', options: ['Least sig figs', 'Most sig figs', 'Least decimal places', 'Most decimal places'], correctAnswer: 'Least decimal places' },
      { type: 'fill-in-blank', question: 'Calculate with correct sig figs: 4.0 + 2.55 = ?', correctAnswer: '6.6' },
      { type: 'multiple-choice', question: 'How many sig figs in 0.007?', options: ['1', '2', '3', '4'], correctAnswer: '1' },
      { type: 'fill-in-blank', question: 'Round 3.678 to 2 significant figures:', correctAnswer: '3.7' },
      { type: 'multi-select', question: 'Which numbers have exactly 3 significant figures? (Select all that apply)', options: ['0.0250', '2.50', '2500', '25.0', '0.250'], correctAnswers: ['0.0250', '2.50', '25.0', '0.250'] },
      { type: 'multiple-choice', question: 'Calculate: 3.0 × 4.00 with correct sig figs', options: ['12', '12.0', '12.00', '12.000'], correctAnswer: '12' },
      { type: 'fill-in-blank', question: 'How many sig figs in 1000.00?', correctAnswer: '6' },
      { type: 'multiple-choice', question: 'In 0.00470, which zeros are significant?', options: ['All of them', 'Only the last one', 'Only the middle ones', 'None of them'], correctAnswer: 'Only the last one' },
      { type: 'fill-in-blank', question: 'Calculate: 25.5 ÷ 5.0 = ? (with correct sig figs)', correctAnswer: '5.1' },
      { type: 'multi-select', question: 'Which rules are TRUE about sig figs? (Select all)', options: ['Non-zero digits always count', 'Leading zeros never count', 'Trailing zeros always count', 'Captive zeros always count'], correctAnswers: ['Non-zero digits always count', 'Leading zeros never count', 'Captive zeros always count'] },
      { type: 'fill-in-blank', question: 'Calculate: 12.11 - 0.2 = ? (with correct sig figs)', correctAnswer: '11.9' },
      { type: 'multiple-choice', question: 'The number 4.00 × 10² has how many sig figs?', options: ['1', '2', '3', '5'], correctAnswer: '3' },
      { type: 'fill-in-blank', question: 'Round 0.09996 to 3 sig figs:', correctAnswer: '0.100' },
      { type: 'multi-select', question: 'Select ALL correct statements:', options: ['5.0 has 2 sig figs', '500 has 1 sig fig (ambiguous)', '0.050 has 2 sig figs', '5.00 has 3 sig figs'], correctAnswers: ['5.0 has 2 sig figs', '500 has 1 sig fig (ambiguous)', '0.050 has 2 sig figs', '5.00 has 3 sig figs'] }
    ]
  }
};

if (typeof module !== 'undefined') module.exports = sigFigsModule;
// Chemical Nomenclature Module Content
const nomenclatureModule = {
  id: 'nomenclature',
  emoji: '🏷️',
  title: 'Chemical Nomenclature',
  description: 'Master naming Type I, II, and III chemical compounds.',
  content: {
    video: {
      url: 'https://www.youtube.com/embed/m_VeGsR60nA',
      title: 'Naming Compounds - Chad\'s Prep'
    },
    reading: {
      html: `
        <h3 class="text-xl font-bold mb-4 text-primary">Chemical Naming: It's Like Learning a New Language 🗣️</h3>
        <p class="mb-4">Alright, so chemists needed a way to name the millions of different compounds out there without everyone getting confused. They came up with a system called nomenclature (fancy word for "naming stuff"). Once you learn the patterns, it's actually pretty straightforward!</p>
        
        <p class="mb-4">There are three main types of compounds you'll deal with, and each has its own naming rules. Let's break them down.</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">Type I: The Easy Ionic Compounds 🔵</h4>
        <div class="bg-blue-50 rounded-xl p-5 mb-5">
          <p class="mb-3">These are ionic compounds where the metal ALWAYS has the same charge. Think of metals like sodium, calcium, and aluminum — they're consistent and predictable.</p>
          
          <p class="mb-3"><strong>The Formula:</strong> Metal name + Nonmetal with "-ide" ending</p>
          
          <div class="bg-white rounded-lg p-4 mb-3">
            <p class="font-bold mb-2">Examples:</p>
            <ul class="space-y-1 text-sm">
              <li>• NaCl → Sodium chloride (table salt!)</li>
              <li>• CaBr₂ → Calcium bromide</li>
              <li>• K₂O → Potassium oxide</li>
              <li>• MgF₂ → Magnesium fluoride</li>
              <li>• Al₂O₃ → Aluminum oxide</li>
            </ul>
          </div>
          
          <p class="text-sm bg-blue-100 rounded-lg p-3"><strong>Common Type I Metals:</strong> Na⁺, K⁺, Li⁺, Ca²⁺, Mg²⁺, Ba²⁺, Al³⁺, Zn²⁺ (always +2), Ag⁺ (always +1)</p>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Type II: The Tricky Transition Metals 🟣</h4>
        <div class="bg-purple-50 rounded-xl p-5 mb-5">
          <p class="mb-3">Here's where it gets interesting. Some metals (especially transition metals) can have DIFFERENT charges depending on the situation. Iron can be Fe²⁺ or Fe³⁺, copper can be Cu⁺ or Cu²⁺. How do we tell them apart? Roman numerals!</p>
          
          <p class="mb-3"><strong>The Formula:</strong> Metal name(Roman numeral) + Nonmetal with "-ide" ending</p>
          
          <div class="bg-white rounded-lg p-4 mb-3">
            <p class="font-bold mb-2">Examples:</p>
            <ul class="space-y-1 text-sm">
              <li>• FeCl₂ → Iron(II) chloride (Fe is +2 here)</li>
              <li>• FeCl₃ → Iron(III) chloride (Fe is +3 here)</li>
              <li>• CuO → Copper(II) oxide</li>
              <li>• Cu₂O → Copper(I) oxide</li>
              <li>• PbO₂ → Lead(IV) oxide</li>
              <li>• SnCl₂ → Tin(II) chloride</li>
            </ul>
          </div>
          
          <div class="bg-purple-100 rounded-lg p-3 text-sm">
            <p class="font-bold mb-1">How to figure out the Roman numeral:</p>
            <p>Use the anion's charge to work backwards! In FeCl₃, chlorine is always -1. Three chlorines = -3 total. So iron must be +3 to balance it out. Hence Iron(III).</p>
          </div>
          
          <p class="text-sm mt-3"><strong>Common Type II Metals:</strong> Fe, Cu, Pb, Sn, Co, Ni, Cr, Mn, Au, Hg</p>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Type III: Covalent (Molecular) Compounds 🟢</h4>
        <div class="bg-green-50 rounded-xl p-5 mb-5">
          <p class="mb-3">When two nonmetals bond, they share electrons (covalent bonding). Since neither is a metal, we can't use the metal-first approach. Instead, we use PREFIXES to tell us how many of each atom there are.</p>
          
          <div class="bg-white rounded-lg p-4 mb-3">
            <p class="font-bold mb-2">The Prefixes (memorize these!):</p>
            <div class="grid grid-cols-5 gap-2 text-sm text-center">
              <div class="bg-green-100 rounded p-1">1 = mono</div>
              <div class="bg-green-100 rounded p-1">2 = di</div>
              <div class="bg-green-100 rounded p-1">3 = tri</div>
              <div class="bg-green-100 rounded p-1">4 = tetra</div>
              <div class="bg-green-100 rounded p-1">5 = penta</div>
              <div class="bg-green-100 rounded p-1">6 = hexa</div>
              <div class="bg-green-100 rounded p-1">7 = hepta</div>
              <div class="bg-green-100 rounded p-1">8 = octa</div>
              <div class="bg-green-100 rounded p-1">9 = nona</div>
              <div class="bg-green-100 rounded p-1">10 = deca</div>
            </div>
          </div>
          
          <p class="mb-3"><strong>The Formula:</strong> Prefix-first element + Prefix-second element-ide</p>
          
          <div class="bg-white rounded-lg p-4 mb-3">
            <p class="font-bold mb-2">Examples:</p>
            <ul class="space-y-1 text-sm">
              <li>• CO₂ → Carbon dioxide (not monocarbon!)</li>
              <li>• CO → Carbon monoxide</li>
              <li>• N₂O₄ → Dinitrogen tetroxide</li>
              <li>• PCl₅ → Phosphorus pentachloride</li>
              <li>• SF₆ → Sulfur hexafluoride</li>
              <li>• N₂O₃ → Dinitrogen trioxide</li>
            </ul>
          </div>
          
          <p class="text-sm bg-green-100 rounded-lg p-3"><strong>Important Rule:</strong> Don't use "mono" for the FIRST element. We say "carbon dioxide" not "monocarbon dioxide." But DO use mono for the second element when needed (carbon MONOxide).</p>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Polyatomic Ions: The Bonus Round 🎁</h4>
        <div class="bg-yellow-50 rounded-xl p-5 mb-5">
          <p class="mb-3">Sometimes you'll see groups of atoms that act as a single ion. These are polyatomic ions, and you just need to memorize the common ones:</p>
          
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold mb-2">Common Polyatomic Ions:</p>
              <ul class="space-y-1">
                <li>• NO₃⁻ = nitrate</li>
                <li>• SO₄²⁻ = sulfate</li>
                <li>• CO₃²⁻ = carbonate</li>
                <li>• PO₄³⁻ = phosphate</li>
                <li>• OH⁻ = hydroxide</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold mb-2">Examples with Polyatomics:</p>
              <ul class="space-y-1">
                <li>• NaNO₃ → Sodium nitrate</li>
                <li>• CaSO₄ → Calcium sulfate</li>
                <li>• K₂CO₃ → Potassium carbonate</li>
                <li>• Fe(OH)₃ → Iron(III) hydroxide</li>
              </ul>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">The Decision Tree 🌳</h4>
        <div class="bg-gray-100 rounded-xl p-4">
          <p class="mb-2"><strong>Step 1:</strong> Does it contain a metal?</p>
          <p class="ml-4 mb-2">→ NO: It's <span class="text-green-600 font-bold">Type III</span> (use prefixes)</p>
          <p class="ml-4 mb-2">→ YES: Go to Step 2</p>
          <p class="mb-2"><strong>Step 2:</strong> Is the metal one that ALWAYS has the same charge?</p>
          <p class="ml-4 mb-2">→ YES: It's <span class="text-blue-600 font-bold">Type I</span> (no Roman numerals)</p>
          <p class="ml-4">→ NO: It's <span class="text-purple-600 font-bold">Type II</span> (use Roman numerals)</p>
        </div>
      `
    },
    practice: [
      { question: 'Name: NaCl', answer: 'sodium chloride', hint: 'Type I - Na is always +1' },
      { question: 'Name: FeCl₃', answer: 'iron(III) chloride', hint: 'Type II - figure out iron\'s charge from chlorine' },
      { question: 'Name: CO₂', answer: 'carbon dioxide', hint: 'Type III - two nonmetals, use prefixes (but not mono for first element)' },
      { question: 'Name: N₂O₄', answer: 'dinitrogen tetroxide', hint: 'Type III - di = 2, tetra = 4' },
      { question: 'Name: CuO', answer: 'copper(II) oxide', hint: 'Oxygen is -2, so Cu must be +2' },
      { question: 'Name: MgBr₂', answer: 'magnesium bromide', hint: 'Type I - Mg is always +2' },
      { question: 'Name: PCl₅', answer: 'phosphorus pentachloride', hint: 'Type III - penta = 5' },
      { question: 'Name: SnO₂', answer: 'tin(IV) oxide', hint: 'Two oxygens = -4, so Sn = +4' },
      { question: 'Write the formula for: calcium fluoride', answer: 'CaF2', hint: 'Ca is +2, F is -1, need 2 fluorines' },
      { question: 'Write the formula for: dinitrogen monoxide', answer: 'N2O', hint: 'di = 2 nitrogen, mono = 1 oxygen' },
      { question: 'Name: Cu₂O', answer: 'copper(I) oxide', hint: 'O is -2, two Cu share that, so each Cu is +1' },
      { question: 'Write the formula for: iron(III) oxide', answer: 'Fe2O3', hint: 'Fe is +3, O is -2, need to balance charges' },
      { question: 'Name: SF₆', answer: 'sulfur hexafluoride', hint: 'Type III - hexa = 6' },
      { question: 'Write the formula for: aluminum oxide', answer: 'Al2O3', hint: 'Al is +3, O is -2' },
      { question: 'Name: PbCl₄', answer: 'lead(IV) chloride', hint: 'Four Cl⁻ = -4, so Pb = +4' },
      { question: 'Write the formula for: carbon tetrachloride', answer: 'CCl4', hint: 'tetra = 4' },
      { question: 'Name: K₂S', answer: 'potassium sulfide', hint: 'Type I - K is always +1' },
      { question: 'Name: N₂O₃', answer: 'dinitrogen trioxide', hint: 'di = 2, tri = 3' }
    ],
    quiz: [
      { type: 'multiple-choice', question: 'What type of compound is CuCl₂?', options: ['Type I', 'Type II', 'Type III'], correctAnswer: 'Type II' },
      { type: 'fill-in-blank', question: 'Name this compound: MgO', correctAnswer: 'magnesium oxide' },
      { type: 'fill-in-blank', question: 'Name this compound: CO', correctAnswer: 'carbon monoxide' },
      { type: 'multiple-choice', question: 'Which prefix means 4?', options: ['tri', 'tetra', 'penta', 'hexa'], correctAnswer: 'tetra' },
      { type: 'fill-in-blank', question: 'Write the formula for iron(II) sulfide:', correctAnswer: 'FeS' },
      { type: 'multiple-choice', question: 'N₂O₅ is named:', options: ['Nitrogen oxide', 'Nitrogen pentoxide', 'Dinitrogen pentoxide', 'Dinitrogen pentaoxide'], correctAnswer: 'Dinitrogen pentoxide' },
      { type: 'fill-in-blank', question: 'Name: PbO₂', correctAnswer: 'lead(IV) oxide' },
      { type: 'multi-select', question: 'Which are Type I compounds? (Select all)', options: ['NaCl', 'FeCl₂', 'CaBr₂', 'CuO', 'AlF₃'], correctAnswers: ['NaCl', 'CaBr₂', 'AlF₃'] },
      { type: 'fill-in-blank', question: 'Write the formula for: sulfur trioxide', correctAnswer: 'SO3' },
      { type: 'multiple-choice', question: 'In FeCl₃, what is iron\'s charge?', options: ['+1', '+2', '+3', '+4'], correctAnswer: '+3' },
      { type: 'fill-in-blank', question: 'Name: Ca₃N₂', correctAnswer: 'calcium nitride' },
      { type: 'multi-select', question: 'Which use prefixes in their names? (Select all)', options: ['CO₂', 'NaCl', 'N₂O₄', 'SF₆', 'MgO'], correctAnswers: ['CO₂', 'N₂O₄', 'SF₆'] },
      { type: 'fill-in-blank', question: 'Write the formula for: copper(I) chloride', correctAnswer: 'CuCl' },
      { type: 'multiple-choice', question: 'Which compound name is INCORRECT?', options: ['Sodium chloride', 'Monocarbon dioxide', 'Calcium bromide', 'Dinitrogen tetroxide'], correctAnswer: 'Monocarbon dioxide' },
      { type: 'fill-in-blank', question: 'Name: Mn₂O₃', correctAnswer: 'manganese(III) oxide' },
      { type: 'multi-select', question: 'Select ALL correctly named compounds:', options: ['NaBr = sodium bromide', 'FeCl₂ = iron chloride', 'PCl₃ = phosphorus trichloride', 'CuS = copper(II) sulfide'], correctAnswers: ['NaBr = sodium bromide', 'PCl₃ = phosphorus trichloride', 'CuS = copper(II) sulfide'] },
      { type: 'fill-in-blank', question: 'Write the formula for: barium sulfide', correctAnswer: 'BaS' }
    ]
  }
};

if (typeof module !== 'undefined') module.exports = nomenclatureModule;
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
