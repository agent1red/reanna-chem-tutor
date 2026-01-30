// Chemical Nomenclature Module
const nomenclatureModule = {
  id: 'nomenclature',
  subject: 'chemistry',
  emoji: '🏷️',
  title: 'Chemical Nomenclature',
  description: 'Master naming Type I, II, and III chemical compounds.',
  
  content: {
    video: {
      url: 'https://www.youtube.com/embed/m_VeGsR60nA',
      title: 'Naming Compounds'
    },
    reading: {
      sections: [
        {
          id: 'intro',
          title: 'Why Naming Matters',
          audioFile: 'nomenclature-intro.mp3'
        },
        {
          id: 'type1',
          title: 'Type I: Simple Ionic Compounds',
          audioFile: 'nomenclature-type1.mp3'
        },
        {
          id: 'type2',
          title: 'Type II: Transition Metal Compounds',
          audioFile: 'nomenclature-type2.mp3'
        },
        {
          id: 'type3',
          title: 'Type III: Covalent Compounds',
          audioFile: 'nomenclature-type3.mp3'
        },
        {
          id: 'polyatomic',
          title: 'Polyatomic Ions and Special Cases',
          audioFile: 'nomenclature-polyatomic.mp3'
        }
      ],
      html: `
        <div class="reading-section" id="section-intro">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-primary">🗣️ Why Naming Matters</h3>
            <button onclick="playAudio('nomenclature-intro.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Imagine trying to discuss chemistry if every scientist had their own names for compounds. One chemist might call H₂O "hydrogen oxide," another might call it "dihydrogen monoxide," and yet another might simply call it "water." Without a universal naming system, scientific communication would be chaos. That's why chemical nomenclature—the systematic naming of chemical compounds—was developed. It's like learning a new language, but once you master the rules, you can name millions of compounds correctly.</p>
          
          <p class="mb-4">The International Union of Pure and Applied Chemistry (IUPAC) established the rules that chemists worldwide follow today. These rules ensure that every compound has exactly one official name, and that name tells you exactly what atoms are present and in what proportions. When you read "iron(III) chloride," you immediately know this compound contains iron in its +3 oxidation state bonded to chloride ions. The name isn't arbitrary—it's informative.</p>
          
          <p class="mb-4">Chemical nomenclature also helps predict formulas from names and names from formulas. If someone asks for "calcium fluoride," you can write CaF₂ because you know calcium is +2 and fluorine is -1 in compounds. If you see the formula Na₂S, you can name it "sodium sulfide." This two-way translation between names and formulas is an essential skill in chemistry, used constantly in labs, pharmacies, and industries worldwide.</p>
          
          <p class="mb-4">In this module, we'll focus on three main types of compounds: Type I ionic compounds (metals with fixed charges), Type II ionic compounds (metals with variable charges, mainly transition metals), and Type III covalent compounds (two nonmetals sharing electrons). Each type follows its own naming rules, but don't worry—the patterns are logical and consistent. With practice, naming becomes almost automatic.</p>
          
          <p class="mb-4">Before diving into the rules, remember that understanding why elements behave the way they do makes naming easier. Metals lose electrons to form positive ions (cations), while nonmetals gain electrons to form negative ions (anions). The charges must balance in a compound—the positive and negative charges cancel out to make the compound neutral. This principle of charge balance is key to both writing formulas and verifying your names are correct.</p>
        </div>

        <div class="reading-section mt-8" id="section-type1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-secondary">🔵 Type I: Simple Ionic Compounds</h3>
            <button onclick="playAudio('nomenclature-type1.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Type I compounds are the easiest to name because they contain metals that ALWAYS have the same charge. These predictable metals include all of Group 1 (always +1), Group 2 (always +2), plus aluminum (always +3), zinc (always +2), and silver (always +1). Because their charges never vary, you don't need any special notation to indicate the metal's charge—the name tells you everything.</p>
          
          <p class="mb-4">The naming formula for Type I compounds is simple: <strong>Metal name + Nonmetal name with "-ide" ending</strong>. That's it! Take NaCl: sodium is the metal, chlorine is the nonmetal. Drop the "-ine" from chlorine and add "-ide" to get chloride. The compound is "sodium chloride." For CaBr₂: calcium is the metal, bromine becomes bromide. The compound is "calcium bromide." Notice that we don't include any numbers in the name—the charges determine the formula automatically.</p>
          
          <p class="mb-4">Let's practice with more examples. Al₂O₃: aluminum is the metal, oxygen becomes oxide. Name: "aluminum oxide." The formula has 2 aluminum and 3 oxygen because aluminum is +3 and oxygen is -2, and two +3's balance three -2's. But you don't say "dialuminum trioxide"—that prefix naming is only for Type III compounds. For Type I, just name the elements with the -ide ending for the nonmetal.</p>
          
          <p class="mb-4">To write a formula from a Type I name, identify the ions and balance charges. For "potassium sulfide": potassium (K) is +1, sulfide (S) is -2. You need two K⁺ to balance one S²⁻, so the formula is K₂S. For "magnesium nitride": magnesium (Mg) is +2, nitride (N) is -3. You need 3 Mg²⁺ (+6 total) to balance 2 N³⁻ (-6 total), giving Mg₃N₂. The criss-cross method works well: make the cation's charge the anion's subscript and vice versa, then reduce if needed.</p>
          
          <p class="mb-4">Here's a helpful tip: memorize the common Type I metals and their charges. Group 1: Li, Na, K, Rb, Cs are all +1. Group 2: Be, Mg, Ca, Sr, Ba are all +2. Then remember Al (+3), Zn (+2), and Ag (+1). For nonmetals, remember the common anion charges: O and S are -2; N and P are -3; F, Cl, Br, and I are all -1. With these charges memorized, you can name or write the formula for any Type I compound.</p>
        </div>

        <div class="reading-section mt-8" id="section-type2">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-success">🟣 Type II: Transition Metal Compounds</h3>
            <button onclick="playAudio('nomenclature-type2.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Type II compounds contain metals that can have VARIABLE charges—the same metal can form different ions with different charges. Most transition metals (the middle block of the periodic table) fall into this category: iron (Fe), copper (Cu), lead (Pb), tin (Sn), cobalt (Co), nickel (Ni), and many others. Because these metals can have multiple charges, we need a way to specify which charge the metal has in a particular compound.</p>
          
          <p class="mb-4">The solution is <strong>Roman numerals</strong>. The naming formula becomes: <strong>Metal name(Roman numeral) + Nonmetal with "-ide" ending</strong>. The Roman numeral indicates the metal's positive charge in that specific compound. FeCl₂ contains Fe²⁺, so it's "iron(II) chloride." FeCl₃ contains Fe³⁺, so it's "iron(III) chloride." Same elements, different charges, different names. The Roman numeral is written immediately after the metal name with no space, inside parentheses.</p>
          
          <p class="mb-4">But how do you figure out the metal's charge? Use the anion's charge and the formula! In FeCl₃, each chloride is -1, and there are three of them (-3 total). The compound must be neutral, so iron must be +3 to balance. In CuO, oxygen is -2, and there's one of each ion, so copper must be +2—this is "copper(II) oxide." In Cu₂O, oxygen is still -2, but two copper atoms share that charge, so each copper is +1—this is "copper(I) oxide."</p>
          
          <p class="mb-4">Some common variable-charge metals and their typical charges: Iron (Fe) is commonly +2 or +3. Copper (Cu) is commonly +1 or +2. Lead (Pb) is commonly +2 or +4. Tin (Sn) is commonly +2 or +4. Cobalt (Co) is commonly +2 or +3. Mercury (Hg) is commonly +1 or +2. When you see these metals in a formula, you'll need to calculate their charge from the anion and include the Roman numeral in the name.</p>
          
          <p class="mb-4">Writing formulas from Type II names is straightforward. For "cobalt(III) sulfide": cobalt is +3 (the Roman numeral tells you), sulfide is -2. Balance charges: 2 Co³⁺ (+6) with 3 S²⁻ (-6), giving Co₂S₃. For "lead(II) oxide": lead is +2, oxide is -2. One of each balances, giving PbO. Always check that your formula's charges balance to zero—that's your verification that both the name and formula are correct.</p>
        </div>

        <div class="reading-section mt-8" id="section-type3">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-accent">🟢 Type III: Covalent Compounds</h3>
            <button onclick="playAudio('nomenclature-type3.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Type III compounds are different from Type I and II because they contain TWO NONMETALS bonded together. These are covalent compounds—atoms share electrons rather than transferring them. Since nonmetals don't have fixed charges like metals, and the same pair of nonmetals can form multiple different compounds, we need Greek prefixes to specify exactly how many of each atom is present.</p>
          
          <p class="mb-4">Here are the essential Greek prefixes: <strong>1=mono, 2=di, 3=tri, 4=tetra, 5=penta, 6=hexa, 7=hepta, 8=octa, 9=nona, 10=deca</strong>. The naming formula is: <strong>Prefix + First element + Prefix + Second element with "-ide"</strong>. For CO₂: there's 1 carbon and 2 oxygen. One carbon would be "monocarbon," but here's an important exception—we DON'T use "mono" for the FIRST element. So CO₂ is simply "carbon dioxide." N₂O₄ is "dinitrogen tetroxide."</p>
          
          <p class="mb-4">Let's practice more examples. CO (one carbon, one oxygen): "carbon monoxide"—we use mono for the second element because it clarifies there's only one oxygen (not like in CO₂). N₂O is "dinitrogen monoxide." SF₆ is "sulfur hexafluoride." P₄O₁₀ is "tetraphosphorus decaoxide." Notice that when a prefix ends in 'a' or 'o' and the element name starts with 'a' or 'o', we sometimes drop the prefix's vowel for easier pronunciation: "monoxide" not "monooxide," "pentoxide" not "pentaoxide."</p>
          
          <p class="mb-4">Writing formulas from Type III names is the easiest of all—the prefixes tell you exactly how many atoms! "Dinitrogen pentoxide" means 2 nitrogen and 5 oxygen: N₂O₅. "Sulfur trioxide" means 1 sulfur (no prefix = 1) and 3 oxygen: SO₃. "Phosphorus trichloride" means 1 phosphorus and 3 chlorine: PCl₃. Unlike ionic compounds, there's no charge balancing to worry about—the prefixes directly give you the subscripts.</p>
          
          <p class="mb-4">A common question is: "How do I know if a compound is Type I, II, or III?" Look at the elements! If there's a metal from Group 1, 2, or one of the fixed-charge metals (Al, Zn, Ag), it's Type I. If there's a transition metal or variable-charge metal, it's Type II. If there are TWO NONMETALS, it's Type III. Carbon monoxide (C and O, both nonmetals) is Type III. Calcium oxide (Ca is Group 2, O is nonmetal) is Type I. Iron oxide (Fe is transition metal) is Type II.</p>
        </div>

        <div class="reading-section mt-8" id="section-polyatomic">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-warning">🎁 Polyatomic Ions and Special Cases</h3>
            <button onclick="playAudio('nomenclature-polyatomic.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Not all ions are single atoms. <strong>Polyatomic ions</strong> are groups of atoms that are covalently bonded together but carry an overall charge as a unit. The most important ones to memorize include: nitrate (NO₃⁻), sulfate (SO₄²⁻), carbonate (CO₃²⁻), phosphate (PO₄³⁻), hydroxide (OH⁻), and the only common positive polyatomic ion, ammonium (NH₄⁺). These ions appear frequently in chemistry and must be recognized as single units.</p>
          
          <p class="mb-4">When naming compounds with polyatomic ions, treat the polyatomic ion as a single unit. For NaNO₃: sodium (+1) plus nitrate (-1) gives "sodium nitrate." For CaCO₃: calcium (+2) plus carbonate (-2) gives "calcium carbonate." For (NH₄)₂SO₄: two ammonium ions (+1 each, +2 total) plus sulfate (-2) gives "ammonium sulfate." Notice that when multiple polyatomic ions are needed, we use parentheses around the ion and put the subscript outside.</p>
          
          <p class="mb-4">There are naming patterns among polyatomic ions that help with memorization. Ions ending in "-ate" often have a partner ending in "-ite" that has one fewer oxygen: sulfate (SO₄²⁻) vs. sulfite (SO₃²⁻), nitrate (NO₃⁻) vs. nitrite (NO₂⁻). The "hypo-" prefix means even fewer oxygens, and "per-" means more: perchlorate (ClO₄⁻), chlorate (ClO₃⁻), chlorite (ClO₂⁻), hypochlorite (ClO⁻). These patterns exist across many element families.</p>
          
          <p class="mb-4">Acids are another special case in nomenclature. When hydrogen is combined with an anion in an aqueous solution, it's an acid. Binary acids (hydrogen + one nonmetal) use the pattern "hydro-[element]-ic acid": HCl is "hydrochloric acid," H₂S is "hydrosulfuric acid." Oxyacids (hydrogen + polyatomic ion with oxygen) drop the hydrogen from naming and change the ending: "-ate" becomes "-ic acid" (nitrate → nitric acid), "-ite" becomes "-ous acid" (nitrite → nitrous acid).</p>
          
          <p class="mb-4">Finally, some compounds have common names that are widely used instead of systematic names. Water (H₂O), ammonia (NH₃), and methane (CH₄) are almost never called by their systematic names. "Sodium bicarbonate" is commonly used alongside "sodium hydrogen carbonate" (NaHCO₃). In this course, focus on systematic names, but be aware that common names exist and you'll encounter them in real-world chemistry contexts.</p>
        </div>

        <div class="bg-purple-50 rounded-xl p-6 mt-8">
          <h4 class="font-bold text-primary mb-4">📝 Quick Reference Summary</h4>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold text-blue-600 mb-2">Type I</h5>
              <p class="text-sm mb-2">Metal (fixed charge) + Nonmetal</p>
              <p class="text-xs text-gray-600">Metal name + -ide</p>
              <p class="text-xs">NaCl = sodium chloride</p>
            </div>
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold text-purple-600 mb-2">Type II</h5>
              <p class="text-sm mb-2">Metal (variable charge) + Nonmetal</p>
              <p class="text-xs text-gray-600">Metal(Roman #) + -ide</p>
              <p class="text-xs">FeCl₃ = iron(III) chloride</p>
            </div>
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold text-green-600 mb-2">Type III</h5>
              <p class="text-sm mb-2">Nonmetal + Nonmetal</p>
              <p class="text-xs text-gray-600">Prefix-element + prefix-element-ide</p>
              <p class="text-xs">CO₂ = carbon dioxide</p>
            </div>
          </div>
          <div class="mt-4 bg-white rounded-lg p-4">
            <h5 class="font-bold mb-2">Greek Prefixes</h5>
            <p class="text-xs">1=mono | 2=di | 3=tri | 4=tetra | 5=penta | 6=hexa | 7=hepta | 8=octa | 9=nona | 10=deca</p>
          </div>
        </div>
      `
    }
  },
  
  questionPools: {
    practice: [
      { id: 'p1', question: 'Name: NaCl', answer: 'sodium chloride', hint: 'Type I - Na is always +1' },
      { id: 'p2', question: 'Name: MgBr₂', answer: 'magnesium bromide', hint: 'Type I - Mg is always +2' },
      { id: 'p3', question: 'Name: K₂O', answer: 'potassium oxide', hint: 'Type I' },
      { id: 'p4', question: 'Name: FeCl₃', answer: 'iron(III) chloride', hint: '3 Cl⁻ = -3, so Fe = +3' },
      { id: 'p5', question: 'Name: CuO', answer: 'copper(II) oxide', hint: 'O is -2, so Cu = +2' },
      { id: 'p6', question: 'Name: Cu₂O', answer: 'copper(I) oxide', hint: '2 Cu share -2, each is +1' },
      { id: 'p7', question: 'Name: CO₂', answer: 'carbon dioxide', hint: 'Two nonmetals, use prefixes' },
      { id: 'p8', question: 'Name: N₂O₄', answer: 'dinitrogen tetroxide', hint: 'di = 2, tetra = 4' },
      { id: 'p9', question: 'Name: PCl₅', answer: 'phosphorus pentachloride', hint: 'penta = 5' },
      { id: 'p10', question: 'Name: SF₆', answer: 'sulfur hexafluoride', hint: 'hexa = 6' },
      { id: 'p11', question: 'Name: SnO₂', answer: 'tin(IV) oxide', hint: '2 O = -4, so Sn = +4' },
      { id: 'p12', question: 'Name: PbCl₄', answer: 'lead(IV) chloride', hint: '4 Cl⁻ = -4' },
      { id: 'p13', question: 'Write formula for: calcium fluoride', answer: 'CaF2', hint: 'Ca +2, F -1' },
      { id: 'p14', question: 'Write formula for: iron(III) oxide', answer: 'Fe2O3', hint: 'Fe +3, O -2' },
      { id: 'p15', question: 'Write formula for: dinitrogen monoxide', answer: 'N2O', hint: 'di = 2, mono = 1' },
      { id: 'p16', question: 'Write formula for: carbon tetrachloride', answer: 'CCl4', hint: 'tetra = 4' },
      { id: 'p17', question: 'Name: CO', answer: 'carbon monoxide', hint: 'mono for second element' },
      { id: 'p18', question: 'Name: Al₂O₃', answer: 'aluminum oxide', hint: 'Type I' },
      { id: 'p19', question: 'Write formula for: copper(I) chloride', answer: 'CuCl', hint: 'Cu +1, Cl -1' },
      { id: 'p20', question: 'Write formula for: sulfur trioxide', answer: 'SO3', hint: 'tri = 3' }
    ],
    quiz: [
      { id: 'q1', type: 'multiple-choice', question: 'What type is CuCl₂?', options: ['Type I', 'Type II', 'Type III'], correctAnswer: 'Type II' },
      { id: 'q2', type: 'multiple-choice', question: 'Which prefix means 4?', options: ['tri', 'tetra', 'penta', 'hexa'], correctAnswer: 'tetra' },
      { id: 'q3', type: 'multiple-choice', question: 'N₂O₅ is named:', options: ['Nitrogen oxide', 'Nitrogen pentoxide', 'Dinitrogen pentoxide'], correctAnswer: 'Dinitrogen pentoxide' },
      { id: 'q4', type: 'multiple-choice', question: 'In FeCl₃, iron\'s charge is:', options: ['+1', '+2', '+3', '+4'], correctAnswer: '+3' },
      { id: 'q5', type: 'multiple-choice', question: 'Which name is WRONG?', options: ['Sodium chloride', 'Monocarbon dioxide', 'Calcium bromide'], correctAnswer: 'Monocarbon dioxide' },
      { id: 'q6', type: 'fill-in-blank', question: 'Name: MgO', correctAnswer: 'magnesium oxide' },
      { id: 'q7', type: 'fill-in-blank', question: 'Name: CO', correctAnswer: 'carbon monoxide' },
      { id: 'q8', type: 'fill-in-blank', question: 'Formula for iron(II) sulfide:', correctAnswer: 'FeS' },
      { id: 'q9', type: 'fill-in-blank', question: 'Name: PbO₂', correctAnswer: 'lead(IV) oxide' },
      { id: 'q10', type: 'fill-in-blank', question: 'Formula for sulfur trioxide:', correctAnswer: 'SO3' },
      { id: 'q11', type: 'multi-select', question: 'Which are Type I?', options: ['NaCl', 'FeCl₂', 'CaBr₂', 'CuO', 'AlF₃'], correctAnswers: ['NaCl', 'CaBr₂', 'AlF₃'] },
      { id: 'q12', type: 'multi-select', question: 'Which use prefixes?', options: ['CO₂', 'NaCl', 'N₂O₄', 'SF₆', 'MgO'], correctAnswers: ['CO₂', 'N₂O₄', 'SF₆'] },
      { id: 'q13', type: 'fill-in-blank', question: 'Name: Ca₃N₂', correctAnswer: 'calcium nitride' },
      { id: 'q14', type: 'fill-in-blank', question: 'Formula for copper(I) chloride:', correctAnswer: 'CuCl' },
      { id: 'q15', type: 'fill-in-blank', question: 'Name: Mn₂O₃', correctAnswer: 'manganese(III) oxide' },
      { id: 'q16', type: 'multiple-choice', question: 'Which prefix means 7?', options: ['hexa', 'hepta', 'octa', 'nona'], correctAnswer: 'hepta' },
      { id: 'q17', type: 'multiple-choice', question: 'Roman numeral indicates:', options: ['Atoms', 'Metal charge', 'Nonmetal charge'], correctAnswer: 'Metal charge' },
      { id: 'q18', type: 'fill-in-blank', question: 'Formula for barium sulfide:', correctAnswer: 'BaS' },
      { id: 'q19', type: 'multiple-choice', question: 'Zn is which type?', options: ['Type I', 'Type II', 'Type III'], correctAnswer: 'Type I' },
      { id: 'q20', type: 'fill-in-blank', question: 'Formula for potassium nitrate:', correctAnswer: 'KNO3' }
    ]
  },
  
  questionsPerPractice: 10,
  questionsPerQuiz: 12
};

if (typeof window !== 'undefined') {
  window.nomenclatureModule = nomenclatureModule;
}
