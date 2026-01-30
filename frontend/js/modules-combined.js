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
        
        <p class="mb-4">In science, we can't just throw around random numbers with endless decimal places. When you measure something, your answer is only as precise as your measuring tool allows. Significant figures (or "sig figs" because scientists love shortcuts) tell us exactly how precise a measurement actually is. They represent the digits in a number that carry meaningful information about the precision of that measurement. Understanding sig figs is essential because they help us communicate scientific data honestly and accurately.</p>
        
        <p class="mb-4">Think about it this way: if you're measuring your height with a ruler that only shows inches, you can't suddenly claim you're 5 feet 7.3847362 inches tall. That would be making up precision that your tool simply cannot provide! The ruler might let you estimate to maybe half an inch, but certainly not to millionths of an inch. Significant figures keep us honest about what we actually measured versus what we're just guessing at. They're the scientific community's way of saying "here's what I know for sure, plus one estimated digit."</p>
        
        <p class="mb-4">The concept of significant figures dates back to the development of modern scientific measurement in the 17th and 18th centuries. Scientists realized they needed a standardized way to report measurements that would clearly show how much confidence they had in their numbers. Today, every scientific discipline from chemistry to physics to biology uses significant figures to ensure that calculations don't claim more precision than the original measurements warrant. When you see a value like 3.14159 in a textbook, those six digits each carry meaning about how precisely that number is known.</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">The Five Rules You Need to Know 📋</h4>
        
        <div class="bg-purple-50 rounded-xl p-5 mb-5">
          <p class="mb-3"><strong>Rule #1: Non-zero digits ALWAYS count.</strong></p>
          <p class="mb-4 text-gray-600">This is the most straightforward rule and the foundation of counting significant figures. Any digit from 1 through 9 is always significant, no matter where it appears in the number. The number 523 has 3 sig figs, and the number 1.7 has 2 sig figs. These digits represent actual measured values and carry real information about the quantity being measured. Whether the non-zero digit is before or after the decimal point makes no difference—it always counts.</p>
          
          <p class="mb-3"><strong>Rule #2: Zeros sandwiched between non-zeros count.</strong></p>
          <p class="mb-4 text-gray-600">These are called "captive zeros" or "trapped zeros" because they're stuck between significant digits. In the number 4007, that zero is sandwiched between the 4 and the 7, so it counts as significant, giving us 4 sig figs total. The reason these zeros count is that they represent an actual measured value of zero in that decimal place. If someone reports 4007 instead of 4017, that zero communicates specific information about the measurement. Similarly, in 30.08, both the zero before and after the decimal are captive zeros, making all four digits significant.</p>
          
          <p class="mb-3"><strong>Rule #3: Leading zeros are just placeholders — they DON'T count.</strong></p>
          <p class="mb-4 text-gray-600">Those zeros at the beginning of small decimal numbers are only there to show you where the decimal point is—they're not actual measurements. In 0.0042, only the 4 and 2 are significant, giving us just 2 sig figs, not 4. These leading zeros would disappear entirely if we wrote the number in scientific notation (4.2 × 10⁻³). Think of them as scaffolding that holds the significant digits in the right place but doesn't contribute to the measurement itself. The number 0.00000567 has only three significant figures despite having eight digits total.</p>
          
          <p class="mb-3"><strong>Rule #4: Trailing zeros AFTER a decimal point DO count.</strong></p>
          <p class="mb-4 text-gray-600">This is where things get interesting and where many students make mistakes. If someone writes 2.50 instead of 2.5, they're telling you they measured to the hundredths place and found it to be exactly zero. That trailing zero matters because it communicates precision! So 2.50 has 3 sig figs while 2.5 only has 2. The presence of that extra zero indicates the measurer used a more precise instrument. Similarly, 7.000 has four significant figures—each of those zeros after the decimal tells us something about the precision of the measurement.</p>
          
          <p class="mb-3"><strong>Rule #5: Trailing zeros WITHOUT a decimal are sketchy.</strong></p>
          <p class="text-gray-600">The number 2500 is frustratingly ambiguous when written this way. Does it have 2 sig figs (just the 2 and 5)? Does it have 3? Or does it have 4? We literally cannot tell from the number alone, which is why scientists use scientific notation to be crystal clear. Writing 2.5 × 10³ means 2 sig figs, 2.50 × 10³ means 3 sig figs, and 2.500 × 10³ means 4 sig figs. Some textbooks use a decimal point after the number (like 2500.) to indicate all four digits are significant, but scientific notation is the most reliable method. When in doubt about a number like 2500 on a test, assume minimum significance unless context suggests otherwise.</p>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Understanding Measurement and Precision 📏</h4>
        
        <p class="mb-4">Every measurement in science involves some degree of uncertainty. When you use a ruler to measure an object, you can read the marked divisions exactly, but you have to estimate between the smallest marks. This estimated digit is the last significant figure in your measurement. For example, if a ruler shows centimeter marks with millimeter subdivisions, you might measure an object as 3.45 cm—the 3 and 4 are certain because you can see them on the ruler, but the 5 is your best estimate of where the object falls between the 4mm and 5mm marks.</p>
        
        <p class="mb-4">The precision of a measuring instrument determines how many significant figures you can report. A bathroom scale that reads to the nearest pound gives you fewer significant figures than a laboratory balance that reads to the nearest 0.001 grams. Scientists always choose instruments appropriate for their needs—you don't need a micrometer to measure the length of a football field, but you definitely need one to measure the thickness of a human hair. The goal is to match your measurement precision to the requirements of your experiment.</p>
        
        <p class="mb-4">It's important to understand the difference between accuracy and precision. Accuracy refers to how close a measurement is to the true value, while precision refers to how reproducible the measurement is. Significant figures primarily communicate precision, not accuracy. A broken thermometer might give you very precise readings (always showing exactly 72.45°F) that are completely inaccurate. Good scientific practice requires instruments that are both accurate AND precise, with significant figures properly representing the limits of that precision.</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">Let's Practice Counting! 🔢</h4>
        <div class="bg-white border-2 border-gray-100 rounded-xl p-4 mb-5">
          <table class="w-full">
            <thead>
              <tr class="border-b-2"><th class="p-2 text-left">Number</th><th class="p-2 text-center">Sig Figs</th><th class="p-2 text-left">Why?</th></tr>
            </thead>
            <tbody class="text-sm">
              <tr class="border-b"><td class="p-2">45.83</td><td class="p-2 text-center font-bold text-primary">4</td><td class="p-2">All non-zero digits count</td></tr>
              <tr class="border-b"><td class="p-2">0.00250</td><td class="p-2 text-center font-bold text-primary">3</td><td class="p-2">Leading zeros don't count, trailing does</td></tr>
              <tr class="border-b"><td class="p-2">1002</td><td class="p-2 text-center font-bold text-primary">4</td><td class="p-2">Captive zeros count</td></tr>
              <tr class="border-b"><td class="p-2">0.070</td><td class="p-2 text-center font-bold text-primary">2</td><td class="p-2">Only 7 and final 0 count</td></tr>
              <tr><td class="p-2">3.00</td><td class="p-2 text-center font-bold text-primary">3</td><td class="p-2">Trailing zeros after decimal count</td></tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Math with Sig Figs (The Part Everyone Messes Up) ➕✖️</h4>
        
        <p class="mb-4">When you perform calculations with measured values, your answer cannot be more precise than your least precise measurement—that would be claiming knowledge you don't actually have. This is why we have rules for significant figures in calculations. The fundamental principle is that mathematical operations cannot create precision out of nothing. If you multiply a number known to two significant figures by a number known to six significant figures, your answer is still only reliable to two significant figures.</p>
        
        <p class="mb-4">There are two different rules depending on what mathematical operation you're performing, and mixing them up is one of the most common mistakes students make. Addition and subtraction follow one rule, while multiplication and division follow another. The reason for different rules comes from how uncertainty propagates through calculations. In addition and subtraction, it's the absolute uncertainty (position of the decimal) that matters. In multiplication and division, it's the relative uncertainty (number of significant figures) that matters.</p>
        
        <p class="mb-4">Here's an important tip: when doing multi-step calculations, keep extra digits in your intermediate answers and only round at the very end. Rounding too early can cause your final answer to be significantly different from what it should be—a problem called "rounding error accumulation." Your calculator will happily carry many decimal places through the calculation; just remember to round appropriately when you report your final answer.</p>
        
        <div class="grid md:grid-cols-2 gap-4 mb-5">
          <div class="bg-green-50 rounded-xl p-4">
            <h5 class="font-bold text-success mb-2">Adding & Subtracting</h5>
            <p class="text-sm mb-3">Round to the <strong>least number of decimal places</strong>. This rule focuses on the rightmost significant digit, not the total count.</p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p>12.52 + 1.7 = 14.22</p>
              <p class="text-gray-500">1.7 has 1 decimal place (the least)</p>
              <p class="font-bold text-success">Answer: 14.2</p>
            </div>
          </div>
          <div class="bg-blue-50 rounded-xl p-4">
            <h5 class="font-bold text-accent mb-2">Multiplying & Dividing</h5>
            <p class="text-sm mb-3">Round to the <strong>least number of sig figs</strong>. Count the total significant figures in each number.</p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p>4.56 × 1.4 = 6.384</p>
              <p class="text-gray-500">1.4 has 2 sig figs (the least)</p>
              <p class="font-bold text-accent">Answer: 6.4</p>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Scientific Notation: Your Best Friend 🔬</h4>
        
        <p class="mb-4">Scientific notation isn't just a fancy way to write big or small numbers—it's actually the clearest way to communicate significant figures. When you write a number in scientific notation, the coefficient (the number before the × 10) contains exactly the significant figures, no more and no less. This eliminates all ambiguity about trailing zeros and makes your precision crystal clear to anyone reading your work.</p>
        
        <p class="mb-4">For example, the number 0.00450 in standard notation becomes 4.50 × 10⁻³ in scientific notation. Now it's obvious there are three significant figures. Similarly, if you want to show that 45000 has four significant figures, you write it as 4.500 × 10⁴. The zeros in the coefficient are clearly significant because you chose to include them. This is why scientific notation is the preferred format in most scientific publications and laboratory reports.</p>
        
        <p class="mb-4">Converting to and from scientific notation is a skill worth mastering. To convert to scientific notation, move the decimal point until you have one non-zero digit before it, then count how many places you moved (positive exponent if you moved left, negative if you moved right). To convert back, just reverse the process. For example, 6.022 × 10²³ (Avogadro's number) would require moving the decimal 23 places to the right, giving us 602,200,000,000,000,000,000,000. Scientific notation is clearly more practical!</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">Pro Tips from Students Who've Been There 💡</h4>
        <div class="bg-yellow-50 rounded-xl p-4">
          <ul class="space-y-2 text-sm">
            <li>• <strong>When in doubt, underline the sig figs</strong> as you count them—physically marking them helps prevent mistakes</li>
            <li>• <strong>Atlantic-Pacific rule:</strong> If decimal is Absent, start counting from Atlantic (right). If decimal is Present, start from Pacific (left). Start counting at the first non-zero.</li>
            <li>• <strong>For calculations:</strong> Do the math first, THEN round at the very end—never round intermediate steps</li>
            <li>• <strong>Exact numbers</strong> (like counting 3 apples or conversion factors like 12 inches = 1 foot) have infinite sig figs—they don't limit your answer</li>
            <li>• <strong>When converting units:</strong> The number of sig figs should stay the same (25.0 cm = 0.250 m, both have 3 sig figs)</li>
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
        
        <p class="mb-4">Chemists needed a systematic way to name the millions of different compounds that exist, and that's where nomenclature comes in—it's literally just a fancy word for "naming stuff." Before standardized naming rules existed, chemicals had common names that varied by region and didn't tell you anything about what was actually in the compound. Imagine trying to do chemistry when "muriatic acid" in England was the same as "spirits of salt" in Germany! The modern naming system, developed by IUPAC (International Union of Pure and Applied Chemistry), gives every compound a unique, descriptive name that scientists worldwide can understand.</p>
        
        <p class="mb-4">The beauty of systematic chemical nomenclature is that once you learn the patterns, you can name almost any compound you encounter—and better yet, you can figure out a compound's formula just from hearing its name. This is incredibly powerful because it means you're not just memorizing random names; you're learning a logical system that reveals the composition of substances. When you hear "carbon dioxide," you immediately know it's one carbon and two oxygens. When you hear "iron(III) chloride," you know it's iron with a +3 charge bonded to chloride ions.</p>
        
        <p class="mb-4">There are three main types of binary compounds (compounds made of two elements) that you'll learn to name, and each follows its own set of rules. Type I compounds involve metals that always have the same charge, Type II compounds involve metals that can have multiple charges, and Type III compounds are made of two nonmetals. Knowing which type you're dealing with is the first step to naming any compound correctly. We'll also touch on polyatomic ions, which are groups of atoms that act as a single charged unit.</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">Type I: The Easy Ionic Compounds 🔵</h4>
        <div class="bg-blue-50 rounded-xl p-5 mb-5">
          <p class="mb-3">Type I ionic compounds are formed between metals that always have the same charge (called "predictable" metals) and nonmetals. These are the easiest compounds to name because the metal's charge never changes, so you don't need any special notation to indicate it. The metals in this category are mainly found in Groups 1, 2, and 13 of the periodic table, plus a few transition metals like zinc and silver that happen to have only one common charge.</p>
          
          <p class="mb-3">The reason these metals always have the same charge relates to their electron configuration. Group 1 metals (like sodium and potassium) always lose one electron to become +1, Group 2 metals (like calcium and magnesium) always lose two electrons to become +2, and aluminum always loses three electrons to become +3. Zinc is an interesting case—even though it's a transition metal, its electron configuration makes +2 its only stable ionic state. Silver similarly is always +1 in its common compounds.</p>
          
          <p class="mb-3"><strong>The Formula:</strong> Metal name + Nonmetal with "-ide" ending. That's it! No Roman numerals, no prefixes, just the straightforward names.</p>
          
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
          
          <p class="text-sm bg-blue-100 rounded-lg p-3"><strong>Common Type I Metals:</strong> Na⁺, K⁺, Li⁺ (Group 1 = always +1), Ca²⁺, Mg²⁺, Ba²⁺ (Group 2 = always +2), Al³⁺ (always +3), Zn²⁺ (always +2), Ag⁺ (always +1)</p>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Type II: The Tricky Transition Metals 🟣</h4>
        <div class="bg-purple-50 rounded-xl p-5 mb-5">
          <p class="mb-3">Type II compounds involve metals (mostly transition metals) that can form ions with different charges depending on the chemical situation. Iron is the classic example—it can be Fe²⁺ in some compounds and Fe³⁺ in others. This happens because transition metals have electrons in their d orbitals that can be lost in various combinations, allowing for multiple stable ionic states. Without some way to distinguish between these possibilities, we'd have no idea which compound someone was talking about!</p>
          
          <p class="mb-3">The solution is Roman numerals placed in parentheses immediately after the metal name. The Roman numeral indicates the charge on the metal ion in that particular compound. This is called the Stock system, named after German chemist Alfred Stock who proposed it in 1919. So "iron(II)" means Fe²⁺ and "iron(III)" means Fe³⁺. The Roman numeral is part of the metal's name and must always be included for Type II metals—leaving it out is like leaving out part of someone's name.</p>
          
          <p class="mb-3"><strong>The Formula:</strong> Metal name(Roman numeral) + Nonmetal with "-ide" ending. The key skill is figuring out what the Roman numeral should be!</p>
          
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
            <p class="mb-2">Use the anion's charge to work backwards! Since the compound must be electrically neutral (total positive charge = total negative charge), you can calculate the metal's charge.</p>
            <p class="mb-2">Example: In FeCl₃, chlorine is always -1. Three chlorines = -3 total charge. For the compound to be neutral, iron must be +3 to balance it out. Hence Iron(III).</p>
            <p>Example: In Cu₂O, oxygen is always -2. For two copper atoms to balance one oxygen (-2), each copper must be +1. Hence Copper(I).</p>
          </div>
          
          <p class="text-sm mt-3"><strong>Common Type II Metals:</strong> Fe (iron), Cu (copper), Pb (lead), Sn (tin), Co (cobalt), Ni (nickel), Cr (chromium), Mn (manganese), Au (gold), Hg (mercury)</p>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Type III: Covalent (Molecular) Compounds 🟢</h4>
        <div class="bg-green-50 rounded-xl p-5 mb-5">
          <p class="mb-3">Type III compounds are formed when two nonmetals bond together, creating molecules rather than ionic compounds. These are called covalent or molecular compounds because the atoms share electrons rather than transferring them completely. Since neither element forms ions in the traditional sense, we can't use the ionic naming approach. Instead, we use Greek prefixes to specify exactly how many of each atom are present in one molecule of the compound.</p>
          
          <p class="mb-3">The prefix system dates back to early chemistry when scientists needed a way to distinguish between different compounds made from the same two elements. Carbon and oxygen, for example, can form both CO (carbon monoxide) and CO₂ (carbon dioxide)—two very different substances! Carbon monoxide is a deadly, odorless gas, while carbon dioxide is what you exhale and what plants need for photosynthesis. The prefixes make it absolutely clear which compound you're discussing.</p>
          
          <p class="mb-3">Understanding when to use Type III nomenclature is crucial: it's ONLY for two nonmetals bonding together. If you see a metal anywhere in the formula, it's NOT Type III. Common nonmetals you'll encounter include C, N, O, S, P, and the halogens (F, Cl, Br, I). Hydrogen is a special case—when it bonds with nonmetals, we often use Type III naming (like hydrogen sulfide), but there are exceptions.</p>
          
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
          
          <p class="text-sm bg-green-100 rounded-lg p-3"><strong>Important Rule:</strong> Don't use "mono" for the FIRST element—we say "carbon dioxide" not "monocarbon dioxide." This is a convention that makes the names less clunky. However, DO use "mono" for the second element when needed, as in "carbon monoxide" (CO). Also, when a prefix ends in 'a' or 'o' and the element name starts with 'a' or 'o', we often drop the vowel for easier pronunciation: "monoxide" not "monooxide."</p>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Polyatomic Ions: The Bonus Round 🎁</h4>
        <div class="bg-yellow-50 rounded-xl p-5 mb-5">
          <p class="mb-3">Polyatomic ions are groups of covalently bonded atoms that carry an overall electrical charge and act as a single unit in ionic compounds. Unlike simple ions like Na⁺ or Cl⁻, polyatomic ions contain multiple atoms held together by covalent bonds, but the entire group has either gained or lost electrons. The most common example is sulfate (SO₄²⁻), which contains one sulfur and four oxygens covalently bonded, with an overall -2 charge on the whole group.</p>
          
          <p class="mb-3">When naming compounds containing polyatomic ions, you simply treat the polyatomic ion as you would any other ion—you don't break it apart or add prefixes. If the metal is Type II (variable charge), you still use Roman numerals. The polyatomic ion keeps its own name regardless of how many of them are in the formula. For example, Ca(NO₃)₂ is calcium nitrate (not calcium dinitrate), and Fe(OH)₃ is iron(III) hydroxide.</p>
          
          <p class="mb-3">There are patterns to help you remember polyatomic ions. Most end in "-ate" or "-ite," where "-ate" has more oxygen atoms than "-ite." For example, nitrate (NO₃⁻) has more oxygen than nitrite (NO₂⁻), and sulfate (SO₄²⁻) has more than sulfite (SO₃²⁻). The "hypo-" prefix means even fewer oxygens, and the "per-" prefix means more. So the chlorine oxyanions go: hypochlorite (ClO⁻), chlorite (ClO₂⁻), chlorate (ClO₃⁻), perchlorate (ClO₄⁻).</p>
          
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold mb-2">Common Polyatomic Ions:</p>
              <ul class="space-y-1">
                <li>• NO₃⁻ = nitrate</li>
                <li>• NO₂⁻ = nitrite</li>
                <li>• SO₄²⁻ = sulfate</li>
                <li>• SO₃²⁻ = sulfite</li>
                <li>• CO₃²⁻ = carbonate</li>
                <li>• PO₄³⁻ = phosphate</li>
                <li>• OH⁻ = hydroxide</li>
                <li>• NH₄⁺ = ammonium (positive!)</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold mb-2">Examples with Polyatomics:</p>
              <ul class="space-y-1">
                <li>• NaNO₃ → Sodium nitrate</li>
                <li>• CaSO₄ → Calcium sulfate</li>
                <li>• K₂CO₃ → Potassium carbonate</li>
                <li>• Fe(OH)₃ → Iron(III) hydroxide</li>
                <li>• NH₄Cl → Ammonium chloride</li>
                <li>• (NH₄)₂SO₄ → Ammonium sulfate</li>
              </ul>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">The Decision Tree 🌳</h4>
        
        <p class="mb-4">When you encounter an unknown compound to name, the first step is always to determine what TYPE of compound it is. This decision tree will guide you through the process logically. With practice, this becomes automatic—you'll instantly recognize which naming rules to apply just by glancing at the formula.</p>
        
        <p class="mb-4">The key is looking at the first element in the formula. If it's a metal, you're dealing with an ionic compound (Type I or II). If it's a nonmetal, you're dealing with a covalent compound (Type III). For ionic compounds, the second decision point is whether the metal has a variable charge—if it does, you need Roman numerals.</p>
        
        <div class="bg-gray-100 rounded-xl p-4">
          <p class="mb-2"><strong>Step 1:</strong> Does it contain a metal?</p>
          <p class="ml-4 mb-2">→ NO: It's <span class="text-green-600 font-bold">Type III</span> (use prefixes)</p>
          <p class="ml-4 mb-2">→ YES: Go to Step 2</p>
          <p class="mb-2"><strong>Step 2:</strong> Is the metal one that ALWAYS has the same charge?</p>
          <p class="ml-4 mb-2">→ YES: It's <span class="text-blue-600 font-bold">Type I</span> (no Roman numerals needed)</p>
          <p class="ml-4">→ NO: It's <span class="text-purple-600 font-bold">Type II</span> (must use Roman numerals)</p>
        </div>
        
        <p class="mt-4 text-sm text-gray-600">Remember: Practice is key! The more compounds you name, the faster you'll get at identifying types and applying the correct rules. Try to name compounds you see in everyday life—the active ingredients in medications, chemicals in cleaning products, or compounds mentioned in the news.</p>
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
        
        <p class="mb-4">Look around you right now—your phone, the air you breathe, your water bottle, the chair you're sitting on, even your own body. All of these things are matter. Matter is defined as anything that has mass (amount of stuff) and takes up space (volume). This simple definition encompasses virtually everything in our physical universe, from the tiniest atom to the largest star. The only things that aren't matter are forms of pure energy, like light, heat, and radio waves.</p>
        
        <p class="mb-4">Understanding matter is the absolute foundation of chemistry—it's literally what chemistry studies! Every chemical reaction involves matter changing from one form to another. When you burn wood, matter (wood and oxygen) transforms into different matter (ash, carbon dioxide, and water vapor). The atoms don't disappear; they just rearrange into new combinations. This principle, called the conservation of mass, was established by Antoine Lavoisier in the 1780s and is fundamental to all of chemistry.</p>
        
        <p class="mb-4">At the most basic level, all matter is made of atoms—incredibly tiny particles that are far too small to see even with the most powerful optical microscopes. A single drop of water contains approximately 1.67 sextillion atoms (that's 1,670,000,000,000,000,000,000). Despite their small size, atoms are the building blocks that combine in countless ways to create every substance in the universe, from simple elements like gold to complex molecules like DNA. Understanding how these atoms are structured and how they combine is the key to understanding chemistry.</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">How We Classify Matter 📊</h4>
        
        <p class="mb-4">Scientists organize matter into categories based on its composition and properties. This classification system helps us understand and predict how different substances will behave. The first major division is between pure substances (which have a definite, fixed composition) and mixtures (which are combinations of substances that can vary in proportion). Within pure substances, we further divide into elements and compounds, and mixtures are divided into homogeneous and heterogeneous types.</p>
        
        <p class="mb-4">The key difference between pure substances and mixtures lies in how they're put together. In a pure substance, every sample you take will have exactly the same composition. Pure water is always H₂O—two hydrogens and one oxygen in every single molecule, everywhere in the universe. Mixtures, however, can vary. A cup of salt water might have a lot of salt or a little—it's still salt water either way. This variability is the hallmark of mixtures.</p>
        
        <p class="mb-4">Another crucial distinction is between physical combinations and chemical bonds. In mixtures, the components are physically combined but not chemically bonded—you could theoretically separate them back into their original components. In compounds, elements are chemically bonded together and can only be separated by chemical reactions. This is why you can easily separate salt from water by evaporation, but separating hydrogen from oxygen in water requires passing electricity through it.</p>
        
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 mb-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold text-primary mb-2">🔷 Pure Substances</h5>
              <p class="text-sm mb-3">Have a definite, fixed composition. Always the same throughout, no matter where or when you sample them.</p>
              
              <div class="bg-blue-50 rounded p-3 mb-2">
                <p class="font-semibold">Elements</p>
                <p class="text-sm">Made of only ONE type of atom. Cannot be broken down into simpler substances by chemical means. There are 118 known elements, organized in the periodic table. Each element has unique properties determined by its atomic structure.</p>
                <p class="text-xs text-gray-500 mt-1">Examples: Gold (Au), Oxygen (O₂), Iron (Fe), Carbon (C), Helium (He)</p>
              </div>
              
              <div class="bg-purple-50 rounded p-3">
                <p class="font-semibold">Compounds</p>
                <p class="text-sm">Two or more elements chemically bonded in a fixed ratio. Have properties completely different from the elements that make them up. Can be broken down into elements by chemical reactions.</p>
                <p class="text-xs text-gray-500 mt-1">Examples: Water (H₂O), Salt (NaCl), Sugar (C₆H₁₂O₆), Carbon dioxide (CO₂)</p>
              </div>
            </div>
            
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold text-secondary mb-2">🔶 Mixtures</h5>
              <p class="text-sm mb-3">Two or more substances physically combined (NOT chemically bonded). Can be separated by physical means.</p>
              
              <div class="bg-green-50 rounded p-3 mb-2">
                <p class="font-semibold">Homogeneous (Solutions)</p>
                <p class="text-sm">Uniform throughout—looks the same no matter where you sample it. The components are so well-mixed they appear as one substance. Cannot see the individual parts even with a microscope.</p>
                <p class="text-xs text-gray-500 mt-1">Examples: Salt water, air, coffee, brass and bronze (metal alloys), rubbing alcohol</p>
              </div>
              
              <div class="bg-yellow-50 rounded p-3">
                <p class="font-semibold">Heterogeneous</p>
                <p class="text-sm">NOT uniform—you can see different parts or regions. The composition varies from one location to another. May be obviously chunky or require a microscope to see the different phases.</p>
                <p class="text-xs text-gray-500 mt-1">Examples: Salad, pizza, trail mix, sand, blood, Italian dressing, granite</p>
              </div>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Physical vs Chemical: The Big Distinction ⚡</h4>
        
        <p class="mb-4">One of the most important concepts in chemistry is understanding the difference between physical and chemical properties and changes. This distinction comes up constantly—on tests, in labs, and in understanding everyday phenomena. Physical properties can be observed without changing what the substance fundamentally IS, while chemical properties describe how a substance interacts with other substances or transforms into entirely new substances.</p>
        
        <p class="mb-4">Think of it this way: physical changes are like changing your clothes—you're still the same person underneath. Chemical changes are more like metamorphosis—a caterpillar becoming a butterfly is a fundamental transformation into something new. When ice melts into water, it's still H₂O—just in a different state. But when wood burns, the cellulose molecules react with oxygen to produce completely different substances: carbon dioxide, water vapor, and ash. You can't "unburn" wood!</p>
        
        <p class="mb-4">Recognizing signs of chemical change is a practical skill you'll use throughout chemistry. The most common indicators are: a color change (like iron rusting from silver to red-brown), production of gas bubbles (like antacid fizzing in water), formation of a precipitate (a solid forming in a liquid mixture), release or absorption of energy (heat or light), and the production of a new smell. However, be careful—some physical changes like boiling also produce bubbles, so you need to consider the whole picture.</p>
        
        <div class="grid md:grid-cols-2 gap-4 mb-5">
          <div class="bg-blue-50 rounded-xl p-4">
            <h5 class="font-bold text-accent mb-2">Physical Properties & Changes</h5>
            <p class="text-sm mb-3">Can be observed WITHOUT changing what the substance IS. The chemical composition stays exactly the same.</p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p class="font-semibold mb-1">Physical Properties:</p>
              <ul class="list-disc list-inside space-y-1">
                <li>Color, odor, taste</li>
                <li>Melting/boiling point</li>
                <li>Density</li>
                <li>Hardness</li>
                <li>Electrical/thermal conductivity</li>
                <li>Solubility</li>
                <li>State of matter (solid, liquid, gas)</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-3 text-sm mt-2">
              <p class="font-semibold mb-1">Physical Changes:</p>
              <p>Melting, freezing, boiling, condensing, dissolving, cutting, crushing, bending</p>
              <p class="text-xs text-gray-500 mt-1">The substance is still the same thing! Water is H₂O whether it's ice, liquid, or steam.</p>
            </div>
          </div>
          
          <div class="bg-red-50 rounded-xl p-4">
            <h5 class="font-bold text-danger mb-2">Chemical Properties & Changes</h5>
            <p class="text-sm mb-3">Describe how a substance REACTS or transforms into completely NEW substances with different compositions.</p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p class="font-semibold mb-1">Chemical Properties:</p>
              <ul class="list-disc list-inside space-y-1">
                <li>Flammability (ability to burn)</li>
                <li>Reactivity with acids</li>
                <li>Reactivity with oxygen (oxidation)</li>
                <li>Reactivity with water</li>
                <li>Toxicity</li>
                <li>Radioactivity</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-3 text-sm mt-2">
              <p class="font-semibold mb-1">Signs of Chemical Change:</p>
              <p>Color change, gas bubbles, precipitate forms, energy released/absorbed (heat, light), new smell produced</p>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Inside the Atom ⚛️</h4>
        
        <p class="mb-4">Atoms are the fundamental building blocks of all matter, but they're not the smallest things that exist. Each atom is made up of even tinier subatomic particles: protons, neutrons, and electrons. The discovery of these particles in the late 1800s and early 1900s revolutionized our understanding of matter and led to technologies we rely on every day, from smartphones to medical imaging. Understanding atomic structure is essential for everything that follows in chemistry.</p>
        
        <p class="mb-4">The modern model of the atom, sometimes called the "electron cloud" model, pictures a tiny, dense nucleus at the center containing protons and neutrons, surrounded by a much larger region where electrons are found. The nucleus is incredibly small compared to the whole atom—if an atom were the size of a football stadium, the nucleus would be about the size of a marble on the 50-yard line! Yet the nucleus contains almost all of the atom's mass. Electrons are so light they contribute virtually nothing to the mass but occupy most of the volume.</p>
        
        <p class="mb-4">The electrical charges of these particles determine how atoms behave. Protons carry a positive charge (+1), electrons carry a negative charge (-1), and neutrons have no charge (neutral). In a neutral atom, the number of protons equals the number of electrons, so the charges balance out. The attraction between the positive nucleus and negative electrons is what holds atoms together, while the repulsion between electrons in different atoms is what keeps solid objects from passing through each other.</p>
        
        <div class="bg-gray-100 rounded-xl p-4 mb-5">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b-2"><th class="p-2 text-left">Particle</th><th class="p-2 text-center">Symbol</th><th class="p-2 text-center">Charge</th><th class="p-2 text-center">Mass (amu)</th><th class="p-2 text-left">Location</th></tr>
            </thead>
            <tbody>
              <tr class="border-b"><td class="p-2 font-semibold">Proton</td><td class="p-2 text-center">p⁺</td><td class="p-2 text-center text-green-600 font-bold">+1</td><td class="p-2 text-center">1</td><td class="p-2">Nucleus (center)</td></tr>
              <tr class="border-b"><td class="p-2 font-semibold">Neutron</td><td class="p-2 text-center">n⁰</td><td class="p-2 text-center">0</td><td class="p-2 text-center">1</td><td class="p-2">Nucleus (center)</td></tr>
              <tr><td class="p-2 font-semibold">Electron</td><td class="p-2 text-center">e⁻</td><td class="p-2 text-center text-red-600 font-bold">-1</td><td class="p-2 text-center">~0 (1/1836)</td><td class="p-2">Electron cloud (orbiting)</td></tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">The Numbers You Need to Know 🔢</h4>
        
        <p class="mb-4">Every element is defined by specific numbers that tell us about its atomic structure. The most important of these is the atomic number, which equals the number of protons in an atom's nucleus. This number is absolutely fundamental—it determines what element an atom is. All hydrogen atoms have 1 proton, all carbon atoms have 6 protons, all gold atoms have 79 protons. If you change the number of protons, you change the element entirely. This is why atomic number is sometimes called the element's "identity number."</p>
        
        <p class="mb-4">The mass number is another crucial value, representing the total number of protons plus neutrons in the nucleus. Since protons and neutrons each have a mass of approximately 1 atomic mass unit (amu), the mass number gives you a good estimate of the atom's mass. Electrons are so light (about 1/1836 the mass of a proton) that they don't significantly contribute to the mass number. The mass number is always a whole number because you can only have whole protons and neutrons.</p>
        
        <p class="mb-4">To find the number of neutrons, simply subtract the atomic number from the mass number: Neutrons = Mass Number - Atomic Number. For example, carbon-14 has a mass number of 14 and an atomic number of 6, so it has 14 - 6 = 8 neutrons. This calculation is used constantly in chemistry, so practice it until it becomes automatic. Remember: atomic number is on the periodic table, but mass number often needs to be given or calculated.</p>
        
        <div class="bg-yellow-50 rounded-xl p-5 mb-5">
          <div class="space-y-3">
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold text-primary">Atomic Number (Z)</p>
              <p class="text-sm">= Number of protons</p>
              <p class="text-sm">= Number of electrons (in a neutral atom)</p>
              <p class="text-xs text-gray-500">This defines what element it is! All carbon atoms have 6 protons, all oxygen atoms have 8. Change the protons, change the element.</p>
            </div>
            
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold text-secondary">Mass Number (A)</p>
              <p class="text-sm">= Protons + Neutrons</p>
              <p class="text-xs text-gray-500">This is the total count of "heavy" particles (nucleons) in the nucleus. It's approximately equal to the atom's mass in amu.</p>
            </div>
            
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold text-accent">Finding Neutrons</p>
              <p class="text-sm">Neutrons = Mass Number - Atomic Number (n = A - Z)</p>
              <p class="text-xs text-gray-500">This formula is used constantly! Memorize it and practice applying it.</p>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Isotopes: Same Element, Different Mass 🔄</h4>
        
        <p class="mb-4">Isotopes are atoms of the SAME element (same number of protons) but with DIFFERENT numbers of neutrons. This means they have different mass numbers but identical chemical behavior. The word "isotope" comes from Greek words meaning "same place"—because isotopes of an element occupy the same place on the periodic table. Most elements exist naturally as a mixture of isotopes; for example, carbon in nature is about 98.9% carbon-12 and 1.1% carbon-13, with traces of carbon-14.</p>
        
        <p class="mb-4">Isotopes are named by writing the element name followed by the mass number, like "carbon-14" or "uranium-235." All isotopes of an element have virtually identical chemical properties because chemical behavior depends on electrons, and neutral atoms of all isotopes have the same number of electrons. However, isotopes can have different physical properties (slightly different mass, different nuclear stability) which makes them useful in various applications from dating ancient artifacts to treating cancer.</p>
        
        <p class="mb-4">Some isotopes are stable, meaning their nuclei remain unchanged indefinitely. Others are radioactive—their nuclei are unstable and will eventually decay, emitting radiation in the process. Carbon-14 is a famous radioactive isotope used in carbon dating; it has a half-life of about 5,730 years, making it useful for dating organic materials up to about 50,000 years old. Medical isotopes like technetium-99m are used in diagnostic imaging, while uranium-235 is the isotope used in nuclear power plants and atomic weapons.</p>
        
        <div class="bg-purple-50 rounded-xl p-5 mb-5">
          <div class="bg-white rounded-lg p-4">
            <p class="font-bold mb-2">Carbon Isotopes Example:</p>
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b"><th class="p-2">Isotope</th><th class="p-2">Protons</th><th class="p-2">Neutrons</th><th class="p-2">Mass #</th><th class="p-2">Stable?</th></tr>
              </thead>
              <tbody>
                <tr class="border-b"><td class="p-2">Carbon-12</td><td class="p-2 text-center">6</td><td class="p-2 text-center">6</td><td class="p-2 text-center">12</td><td class="p-2 text-center">Yes</td></tr>
                <tr class="border-b"><td class="p-2">Carbon-13</td><td class="p-2 text-center">6</td><td class="p-2 text-center">7</td><td class="p-2 text-center">13</td><td class="p-2 text-center">Yes</td></tr>
                <tr><td class="p-2">Carbon-14</td><td class="p-2 text-center">6</td><td class="p-2 text-center">8</td><td class="p-2 text-center">14</td><td class="p-2 text-center">No (radioactive)</td></tr>
              </tbody>
            </table>
            <p class="text-xs text-gray-500 mt-2">They're ALL carbon because they ALL have 6 protons. The number after the dash is the mass number. What makes them different isotopes is the number of neutrons.</p>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Ions: When Atoms Get Charged ⚡</h4>
        
        <p class="mb-4">While neutral atoms have equal numbers of protons and electrons, atoms can gain or lose electrons to become ions—atoms with a net electrical charge. This happens because electrons are on the outside of the atom and can be transferred between atoms relatively easily, while protons are locked in the nucleus and don't change (changing protons would change the element). When an atom loses electrons, it has more protons than electrons and becomes positively charged. When it gains electrons, it has more electrons than protons and becomes negatively charged.</p>
        
        <p class="mb-4">Cations are positively charged ions, formed when atoms LOSE electrons. The name comes from the Greek word for "going down" because cations move toward the negative electrode (cathode) in an electric field. Metals typically form cations because they have loosely held outer electrons that are easily removed. Sodium readily loses one electron to become Na⁺, and calcium loses two to become Ca²⁺. The superscript shows both the magnitude of the charge and its sign.</p>
        
        <p class="mb-4">Anions are negatively charged ions, formed when atoms GAIN electrons. The name comes from the Greek word for "going up" because anions move toward the positive electrode (anode). Nonmetals typically form anions because they have nearly full outer electron shells and readily accept additional electrons to complete them. Chlorine gains one electron to become Cl⁻, and oxygen gains two to become O²⁻. Understanding ion formation is crucial for understanding ionic bonding, which we'll cover in a later unit.</p>
        
        <div class="bg-cyan-50 rounded-xl p-4">
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold text-green-600">Cations (+) - "Positive Cats"</p>
              <p>Lost electrons → more protons than electrons → positive charge</p>
              <p class="mb-2">Metals typically form cations by losing their outer electrons.</p>
              <p class="text-xs text-gray-500">Na → Na⁺ (lost 1 electron, went from 11e⁻ to 10e⁻)</p>
              <p class="text-xs text-gray-500">Ca → Ca²⁺ (lost 2 electrons)</p>
              <p class="text-xs text-gray-500">Al → Al³⁺ (lost 3 electrons)</p>
            </div>
            <div class="bg-white rounded-lg p-3">
              <p class="font-bold text-red-600">Anions (-) - "Negative Onions"</p>
              <p>Gained electrons → more electrons than protons → negative charge</p>
              <p class="mb-2">Nonmetals typically form anions by gaining electrons.</p>
              <p class="text-xs text-gray-500">Cl → Cl⁻ (gained 1 electron, went from 17e⁻ to 18e⁻)</p>
              <p class="text-xs text-gray-500">O → O²⁻ (gained 2 electrons)</p>
              <p class="text-xs text-gray-500">N → N³⁻ (gained 3 electrons)</p>
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
        
        <p class="mb-4">Density might sound like a boring topic at first, but it's actually one of the most useful properties in all of chemistry and physics. Density tells us how much mass is packed into a given volume, and this simple measurement helps us do everything from identifying unknown substances to predicting whether objects will float or sink. It's also an intensive property, meaning it doesn't depend on how much of a substance you have—a tiny gold nugget and a massive gold bar have exactly the same density.</p>
        
        <p class="mb-4">Scientists and engineers use density constantly in their work. Geologists use density to identify minerals in the field. Jewelers use it to detect fake gold (which has a different density than real gold). Brewers measure the density of their beer to track fermentation. Oceanographers study how differences in water density drive ocean currents. Even your body uses density—it's why the cream rises to the top of milk and why oil floats on water when you're making salad dressing.</p>
        
        <p class="mb-4">The concept of density was famously explored by Archimedes around 250 BCE, who allegedly discovered the principle of water displacement while trying to determine if King Hiero's crown was pure gold. The story goes that he was so excited by his discovery that he ran through the streets shouting "Eureka!" (meaning "I found it!"). Whether or not that story is true, the principle he discovered—that the volume of an irregular object can be measured by how much water it displaces—is still used in labs today.</p>

        <h4 class="text-lg font-bold mb-3 text-secondary">The Magic Formula ✨</h4>
        
        <p class="mb-4">The density formula is beautifully simple: Density equals mass divided by volume, or D = m/V. This equation tells you that density measures how much "stuff" (mass) is squeezed into a given space (volume). The more mass you pack into the same volume, the higher the density. Think of the difference between a bowling ball and a beach ball—they might be similar sizes (similar volume), but the bowling ball has much more mass packed in, so it has much higher density.</p>
        
        <p class="mb-4">The units of density reflect its definition: it's mass units divided by volume units. In chemistry, we typically use grams per milliliter (g/mL) or grams per cubic centimeter (g/cm³)—and these are actually identical since 1 mL = 1 cm³ for any substance. In physics, you might see kilograms per cubic meter (kg/m³), which is the SI unit. Being comfortable converting between these units is an important skill, though for most of your chemistry work, g/mL or g/cm³ will be the standard.</p>
        
        <p class="mb-4">One crucial thing to remember: density is a ratio, not just a number. This means it stays constant regardless of how much material you have. If you have 10 mL of water, its density is 1.0 g/mL. If you have 1000 mL of water, its density is still 1.0 g/mL. This makes density incredibly useful for identifying substances—if you measure an unknown metal and find its density is 19.3 g/cm³, you can confidently say it's likely gold, because that's gold's characteristic density.</p>
        
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
        
        <p class="mb-4">You won't always be solving for density—sometimes you'll know the density and need to find mass or volume. The beauty of the density equation is that it can be rearranged to solve for any of the three variables. If you know density and volume, multiply them to get mass (m = D × V). If you know mass and density, divide to get volume (V = m / D). Being able to fluently rearrange this equation is essential for solving density problems.</p>
        
        <p class="mb-4">A helpful tool for remembering these relationships is the "density triangle." Write D in the bottom left, m in the top, and V in the bottom right, with horizontal and vertical lines separating them. To find any variable, cover it up and do what's left: cover D and you see m over V (divide); cover m and you see D next to V (multiply); cover V and you see m over D (divide). This visual trick helps many students remember the relationships until they become second nature.</p>
        
        <p class="mb-4">When solving density problems, always start by identifying what you're given and what you're solving for. Write down the formula you'll use, substitute your values with units, and solve. Always include units in your work—they help you catch errors and are essential for full credit on tests. Finally, ask yourself if your answer makes sense. If you calculated that a rock has a density of 0.001 g/cm³, something's wrong—rocks are much denser than that!</p>
        
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
              <p class="text-xs text-gray-500 mt-2">This density matches aluminum—our metal cube is likely aluminum!</p>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-xl p-4">
            <p class="font-semibold text-secondary mb-2">Example 2: Finding Mass</p>
            <p class="text-sm mb-2">A liquid has a density of 1.5 g/mL. What is the mass of 30 mL of this liquid?</p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p>m = D × V</p>
              <p>m = 1.5 g/mL × 30 mL</p>
              <p class="font-bold text-secondary">m = 45 g</p>
              <p class="text-xs text-gray-500 mt-2">Notice how the mL units cancel, leaving us with grams.</p>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-xl p-4">
            <p class="font-semibold text-accent mb-2">Example 3: Finding Volume</p>
            <p class="text-sm mb-2">A rock has a mass of 100 g and a density of 2.5 g/cm³. What is its volume?</p>
            <div class="bg-white rounded-lg p-3 text-sm">
              <p>V = m ÷ D</p>
              <p>V = 100 g ÷ 2.5 g/cm³</p>
              <p class="font-bold text-accent">V = 40 cm³</p>
              <p class="text-xs text-gray-500 mt-2">This is how much water the rock would displace.</p>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold mb-3 text-secondary">Float or Sink? 🌊</h4>
        
        <p class="mb-4">One of the most practical applications of density is predicting whether an object will float or sink in a fluid. The rule is simple: objects less dense than the fluid float, objects more dense than the fluid sink. Since water has a density of 1.0 g/mL, anything with a density less than 1.0 will float on water, and anything greater than 1.0 will sink. This is why ice (density 0.92 g/cm³) floats on water, and why steel ships sink when they fill with water but float when their air-filled hulls give them an overall density less than water.</p>
        
        <p class="mb-4">This principle explains many everyday phenomena. Oil floats on water because oil has a density of about 0.92 g/mL—less than water's 1.0 g/mL. This is why oil spills spread across the water surface rather than sinking, and why oil and vinegar salad dressing separates with oil on top. Helium balloons float in air because helium's density is much less than air's. Hot air balloons work because hot air is less dense than cool air, providing lift.</p>
        
        <p class="mb-4">The concept of buoyancy is related to density differences. When an object is submerged in a fluid, it experiences an upward buoyant force equal to the weight of the fluid it displaces (this is Archimedes' principle). If this buoyant force exceeds the object's weight, the object floats. If the object's weight exceeds the buoyant force, it sinks. Objects that are neutrally buoyant (like a submarine at a fixed depth) have matched the surrounding fluid's density exactly through careful ballast control.</p>
        
        <div class="bg-blue-50 rounded-xl p-5 mb-5">
          <div class="bg-white rounded-lg p-4 mb-3">
            <p class="text-center mb-2"><strong>Water's density = 1.0 g/mL (at 4°C)</strong></p>
            <p class="text-center text-sm mb-3">This is the reference point for all float/sink comparisons in water.</p>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="text-center p-3 bg-green-100 rounded-lg">
                <p class="font-bold text-green-600">FLOATS ⬆️</p>
                <p>Density &lt; 1.0 g/mL</p>
                <p class="text-xs mt-1">Object is less dense than water</p>
              </div>
              <div class="text-center p-3 bg-red-100 rounded-lg">
                <p class="font-bold text-red-600">SINKS ⬇️</p>
                <p>Density &gt; 1.0 g/mL</p>
                <p class="text-xs mt-1">Object is more dense than water</p>
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
        
        <p class="mb-4">Laboratory skills are essential for any chemistry student, and many of them relate directly to density measurements. Being able to accurately measure mass and volume is fundamental to calculating density, identifying substances, and performing quantitative experiments. These skills require practice to master—the more you work in the lab, the more precise and confident you'll become. Let's explore the key techniques you'll need.</p>
        
        <div class="bg-green-50 rounded-xl p-5 mb-5">
          <h5 class="font-bold mb-3">Measuring Volume of Liquids 💧</h5>
          
          <p class="mb-3 text-sm">Accurate volume measurement of liquids requires proper technique and the right equipment. Graduated cylinders are the go-to tool for most volume measurements because they're more accurate than beakers or flasks (which are designed for mixing, not measuring). The key to accurate readings is understanding the meniscus—the curve that forms at the liquid's surface due to surface tension between the liquid and the container walls.</p>
          
          <p class="mb-3 text-sm">Water and most aqueous solutions form a concave meniscus that curves downward in the center. You should always read the volume at the BOTTOM of this curve, not the edges where the liquid climbs up the glass walls. Mercury is an exception—it forms a convex (upward-curving) meniscus and should be read at the top. Getting your eyes at the exact same level as the meniscus is crucial; looking from above or below will give you an incorrect reading due to parallax error.</p>
          
          <div class="bg-white rounded-lg p-4 mb-3">
            <ul class="space-y-2 text-sm">
              <li>• Use a <strong>graduated cylinder</strong> for accurate measurements (not beakers)</li>
              <li>• Read at the <strong>meniscus</strong> (the bottom of the curve for water)</li>
              <li>• Keep your eyes at the <strong>same level</strong> as the liquid surface to avoid parallax error</li>
              <li>• Record to the correct number of significant figures based on the cylinder's markings</li>
              <li>• Choose a cylinder size close to your volume—a 10mL cylinder is more precise than using a 100mL one for small volumes</li>
            </ul>
          </div>
          <p class="text-sm text-gray-600">Pro tip: The meniscus curves because water molecules are more attracted to the glass walls (adhesion) than to each other (cohesion). This same property allows water to climb up thin tubes through capillary action!</p>
        </div>

        <div class="bg-yellow-50 rounded-xl p-5 mb-5">
          <h5 class="font-bold mb-3">Water Displacement Method 🪨</h5>
          
          <p class="mb-3 text-sm">For irregular objects like rocks, metal chunks, or anything that can't be easily measured with a ruler, we use the water displacement method. This technique relies on the fact that when you submerge an object in water, it pushes aside (displaces) a volume of water exactly equal to its own volume. By measuring how much the water level rises, you can determine the object's volume. This is the same principle Archimedes supposedly discovered in his bathtub over 2,000 years ago!</p>
          
          <p class="mb-3 text-sm">The method is straightforward but requires attention to detail. Start with enough water to fully submerge your object but not so much that it will overflow when you add the object. Record this initial volume carefully—this is V₁. Then gently lower the object into the water (don't drop it, as splashing causes errors) and make sure it's completely submerged with no air bubbles clinging to it. Air bubbles are a common source of error because they make the volume reading artificially high. Record the new water level as V₂.</p>
          
          <div class="bg-white rounded-lg p-4">
            <ol class="space-y-2 text-sm list-decimal list-inside">
              <li>Fill a graduated cylinder partway with water and record the volume (V₁)</li>
              <li>Carefully lower the object into the water (no splashing!)</li>
              <li>Make sure the object is fully submerged with no air bubbles</li>
              <li>Record the new water level (V₂)</li>
              <li>Calculate: <strong>Object's volume = V₂ - V₁</strong></li>
            </ol>
          </div>
          <p class="text-sm text-gray-600 mt-3">Why it works: The object pushes the water up by exactly its own volume. If V₁ = 50 mL and V₂ = 58 mL, the object's volume is 8 mL (or 8 cm³).</p>
          <p class="text-sm text-gray-600 mt-2">Limitation: This only works for objects denser than water (they must sink) and objects that don't absorb water or dissolve in it.</p>
        </div>

        <div class="bg-purple-50 rounded-xl p-5">
          <h5 class="font-bold mb-3">Using a Balance ⚖️</h5>
          
          <p class="mb-3 text-sm">Accurate mass measurement is just as important as volume measurement for density calculations. Modern laboratories use electronic balances that can measure mass to 0.01g, 0.001g, or even finer for analytical work. Unlike volume measurements where you estimate one digit, balances give you a direct digital readout—but they still require proper technique to get accurate results. Understanding how to use, care for, and troubleshoot a balance is essential lab skill.</p>
          
          <p class="mb-3 text-sm">Before measuring anything, you need to "zero" or "tare" the balance. This resets the display to zero, compensating for any containers or weighing paper on the balance pan. If you forget to tare, your mass readings will include the container's mass. When weighing chemicals, NEVER place them directly on the balance pan—use a weighing boat, beaker, or weighing paper. This protects the balance from corrosion and contamination and makes it easier to transfer your sample.</p>
          
          <div class="bg-white rounded-lg p-4 text-sm">
            <ul class="space-y-2">
              <li>• Always <strong>zero/tare</strong> the balance before measuring (this accounts for container mass)</li>
              <li>• Never place chemicals directly on the balance pan—use a container or weighing paper</li>
              <li>• Record mass to the precision of the balance (all digits shown plus units)</li>
              <li>• Keep the balance clean—small residues affect readings</li>
              <li>• Make sure the balance is on a level, stable surface away from drafts</li>
              <li>• Close the balance doors (if present) when taking readings to prevent air currents</li>
              <li>• Wait for the reading to stabilize before recording</li>
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
