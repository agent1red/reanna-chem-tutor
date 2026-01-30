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
