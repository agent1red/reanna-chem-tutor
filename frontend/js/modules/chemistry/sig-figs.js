// Significant Figures Module - Chemistry
const sigFigsModule = {
  id: 'sig-figs',
  subject: 'chemistry',
  emoji: '🔢',
  title: 'Significant Figures',
  description: 'Learn the rules for significant figures and how to use them in calculations.',
  
  content: {
    video: {
      url: 'https://www.youtube.com/embed/eCJ76hz7jPM',
      title: 'Significant Figures Made Easy'
    },
    reading: {
      sections: [
        {
          id: 'intro',
          title: 'Introduction to Significant Figures',
          audioFile: 'sig-figs-intro.mp3'
        },
        {
          id: 'rules',
          title: 'The Five Essential Rules',
          audioFile: 'sig-figs-rules.mp3'
        },
        {
          id: 'calculations',
          title: 'Calculations with Sig Figs',
          audioFile: 'sig-figs-calculations.mp3'
        },
        {
          id: 'scientific',
          title: 'Scientific Notation',
          audioFile: 'sig-figs-scientific.mp3'
        },
        {
          id: 'tips',
          title: 'Pro Tips and Common Mistakes',
          audioFile: 'sig-figs-tips.mp3'
        }
      ],
      html: `
        <div class="reading-section" id="section-intro">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-primary">🎯 Introduction to Significant Figures</h3>
            <button onclick="playAudio('sig-figs-intro.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">In the world of science, precision matters more than you might think. When scientists conduct experiments and take measurements, they need a way to communicate exactly how precise their measurements are. This is where significant figures come into play. Significant figures, often called "sig figs" for short, are the digits in a measurement that carry meaningful information about the precision of that measurement. They tell other scientists—and you—exactly how much confidence you can have in a number.</p>
          
          <p class="mb-4">Think about this real-world example: imagine you're measuring the length of your desk with a standard ruler that shows centimeters and millimeters. You might read the length as 75.3 centimeters. That last digit, the 3, is your best estimate between the millimeter marks. You couldn't honestly say it's 75.3482 centimeters because your ruler simply cannot measure that precisely. The number 75.3 has three significant figures, and that's all the precision you can claim. If you reported more digits, you'd be making up precision that your measuring tool cannot provide.</p>
          
          <p class="mb-4">The concept of significant figures developed as science became more quantitative in the 17th and 18th centuries. Scientists realized they needed a standardized way to report measurements that would clearly indicate reliability. A measurement from a crude wooden ruler needed to be distinguished from one taken with a precise micrometer. Today, significant figures remain essential in every scientific field, from chemistry and physics to engineering and medicine. They ensure that when scientists share data, everyone understands exactly what was measured and how reliable those numbers are.</p>
          
          <p class="mb-4">Understanding significant figures is also crucial for performing calculations. When you multiply, divide, add, or subtract measurements, your answer cannot magically become more precise than your least precise measurement. Sig figs provide the rules for determining how many digits to keep in your final answer. This prevents you from claiming false precision and keeps your scientific communication honest and meaningful. As you'll see, mastering sig figs is not just about following rules—it's about understanding what your measurements really mean.</p>
          
          <p class="mb-4">In chemistry specifically, significant figures appear everywhere: in measuring masses on balances, reading volumes in graduated cylinders, recording temperatures from thermometers, and calculating results from experimental data. A chemist who ignores significant figures might report meaningless numbers or, worse, draw incorrect conclusions from data. By the end of this lesson, you'll understand not just the rules of sig figs, but why they matter and how to apply them confidently in any scientific context.</p>
        </div>

        <div class="reading-section mt-8" id="section-rules">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-secondary">📋 The Five Essential Rules</h3>
            <button onclick="playAudio('sig-figs-rules.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Now that you understand why significant figures matter, let's dive into the five essential rules for counting them. These rules might seem like a lot to memorize at first, but once you practice them, they become second nature. The key is understanding the logic behind each rule, not just memorizing it. Each rule exists because of how our number system works and what different digits tell us about measurement precision.</p>
          
          <p class="mb-4"><strong>Rule 1: All non-zero digits are ALWAYS significant.</strong> This is the most straightforward rule. Any digit from 1 through 9 carries meaningful information about your measurement. The number 523 has exactly 3 significant figures. The number 1.7 has 2 significant figures. The number 89,452 has 5 significant figures. Non-zero digits are never placeholders—they always represent measured quantities. When you see a 7 or a 3 or a 9, that digit is telling you something specific about the measurement.</p>
          
          <p class="mb-4"><strong>Rule 2: Zeros between non-zero digits (called "captive zeros" or "sandwiched zeros") are ALWAYS significant.</strong> These zeros are trapped between other significant digits, so they must be significant too. Consider the number 4007. You measured something to be more than 4006 but less than 4008—that middle zeros carry real information. So 4007 has 4 significant figures. Similarly, 50.08 has 4 significant figures, and 20,003 has 5 significant figures. The zeros in the middle are not placeholders; they're essential parts of the measurement.</p>
          
          <p class="mb-4"><strong>Rule 3: Leading zeros are NEVER significant.</strong> These are the zeros that appear before the first non-zero digit. They're just placeholders that help locate the decimal point. Consider 0.0042. Without those leading zeros, we couldn't write this small number, but they don't represent measured quantities. Only the 4 and 2 are significant, giving us 2 significant figures. The number 0.00000789 might look impressive with all those zeros, but it only has 3 significant figures. Leading zeros tell us about magnitude (how small the number is), not precision.</p>
          
          <p class="mb-4"><strong>Rule 4: Trailing zeros AFTER a decimal point ARE significant.</strong> When someone writes 2.50 instead of 2.5, that trailing zero is intentional and meaningful. It says, "I measured this to the hundredths place, and it was exactly zero." So 2.50 has 3 significant figures, while 2.5 has only 2. The number 100.00 has 5 significant figures because all those trailing zeros after the decimal indicate precision. Scientists include these zeros deliberately to communicate measurement precision.</p>
          
          <p class="mb-4"><strong>Rule 5: Trailing zeros in a whole number WITHOUT a decimal point are ambiguous.</strong> This is the tricky one. When you see 2500, you can't tell if it has 2, 3, or 4 significant figures without more context. Was it measured to the nearest thousand (2 sig figs), the nearest hundred (3 sig figs), or the nearest unit (4 sig figs)? Scientists solve this problem by using scientific notation: 2.5 × 10³ clearly has 2 sig figs, 2.50 × 10³ has 3, and 2.500 × 10³ has 4. Alternatively, adding a decimal point (2500.) indicates all four digits are significant.</p>
        </div>

        <div class="reading-section mt-8" id="section-calculations">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-success">➕✖️ Calculations with Sig Figs</h3>
            <button onclick="playAudio('sig-figs-calculations.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Knowing how to count significant figures is only half the battle. The real application comes when you perform calculations with measured values. Here's the key principle: your answer cannot be more precise than your least precise measurement. If you multiply a very precise measurement by a rough estimate, your answer is only as good as that rough estimate. There are different rules for different types of operations, so let's break them down.</p>
          
          <p class="mb-4"><strong>For multiplication and division:</strong> Your answer should have the same number of significant figures as the measurement with the FEWEST significant figures. Let's say you're calculating density: you measured a mass of 45.67 grams (4 sig figs) and a volume of 15.2 mL (3 sig figs). When you divide 45.67 by 15.2, your calculator shows 3.0046052631... But your answer can only have 3 significant figures because your least precise measurement (15.2) has only 3. So you round to 3.00 g/mL. Another example: 4.56 × 1.4 = 6.384 on your calculator, but since 1.4 has only 2 sig figs, your answer is 6.4.</p>
          
          <p class="mb-4"><strong>For addition and subtraction:</strong> Here the rule is different—focus on decimal places, not total sig figs. Your answer should have the same number of DECIMAL PLACES as the measurement with the FEWEST decimal places. For example: 12.52 + 1.7 = 14.22 on your calculator. But 1.7 only has one decimal place, so your answer is 14.2. Another example: 150.0 − 0.234 = 149.766, but since 150.0 has one decimal place, your answer is 149.8. The logic here is about where the uncertainty lies: if one measurement is uncertain in the tenths place, your sum or difference can't be more certain than that.</p>
          
          <p class="mb-4"><strong>Important: Do calculations first, then round at the end.</strong> A common mistake is rounding intermediate steps. If you have a multi-step calculation, carry all the digits through your work and only round the final answer. Rounding too early introduces small errors that can accumulate and throw off your result. Keep track of how many sig figs your final answer should have, but let your calculator hold all those extra digits until you're done.</p>
          
          <p class="mb-4"><strong>Exact numbers have unlimited significant figures.</strong> Some numbers are not measurements—they're definitions or counts. There are exactly 12 eggs in a dozen, exactly 100 centimeters in a meter, and exactly 2.54 centimeters in an inch. When you use these conversion factors or count discrete objects (like 3 apples), these numbers have infinite sig figs and never limit your answer's precision. Only measured quantities—things you actually determined with instruments—limit precision.</p>
        </div>

        <div class="reading-section mt-8" id="section-scientific">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-accent">🔬 Scientific Notation</h3>
            <button onclick="playAudio('sig-figs-scientific.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Scientific notation is a powerful tool that solves one of the biggest problems with significant figures: the ambiguity of trailing zeros in whole numbers. Beyond that, it makes it much easier to work with very large or very small numbers. In scientific notation, numbers are written as a coefficient between 1 and 10, multiplied by a power of 10. For example, 6,500,000 becomes 6.5 × 10⁶, and 0.00045 becomes 4.5 × 10⁻⁴.</p>
          
          <p class="mb-4">The beauty of scientific notation for significant figures is that all the digits in the coefficient are significant. There's no ambiguity about trailing zeros because you only write the zeros you mean to include. If you want to indicate that a measurement of 2500 has 3 significant figures, write it as 2.50 × 10³. If it has 4 significant figures, write 2.500 × 10³. The coefficient clearly shows your precision, while the power of 10 handles the magnitude.</p>
          
          <p class="mb-4">Converting to scientific notation is straightforward. Move the decimal point until you have a number between 1 and 10, then count how many places you moved it. If you moved left, the exponent is positive; if you moved right, it's negative. For example, 45,000 becomes 4.5 × 10⁴ (decimal moved 4 places left). The number 0.00067 becomes 6.7 × 10⁻⁴ (decimal moved 4 places right). Practice this conversion until it becomes automatic—you'll use it constantly in chemistry.</p>
          
          <p class="mb-4">When calculating with scientific notation, handle the coefficients and powers of 10 separately. For multiplication: multiply the coefficients and add the exponents. So (3.0 × 10⁴) × (2.0 × 10³) = 6.0 × 10⁷. For division: divide the coefficients and subtract the exponents. The answer (4.8 × 10⁵) ÷ (1.6 × 10²) = 3.0 × 10³. For addition and subtraction, you must first convert both numbers to the same power of 10, then add or subtract the coefficients.</p>
          
          <p class="mb-4">Avogadro's number is a perfect example of scientific notation in chemistry: 6.022 × 10²³. This famous constant tells us there are about 602,200,000,000,000,000,000,000 particles in one mole of any substance. Written in scientific notation, it's clear, compact, and shows exactly 4 significant figures. You'll encounter scientific notation everywhere in chemistry—molar masses, concentrations, equilibrium constants, and more. Master it now, and these topics will be much easier later.</p>
        </div>

        <div class="reading-section mt-8" id="section-tips">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-warning">💡 Pro Tips and Common Mistakes</h3>
            <button onclick="playAudio('sig-figs-tips.mp3')" class="px-4 py-2 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
              <span>🔊</span> Listen
            </button>
          </div>
          
          <p class="mb-4">Now that you know the rules, let's talk about strategies that make applying them easier and mistakes to avoid. First, try the <strong>Atlantic-Pacific Rule</strong> as a memory aid. If the decimal point is ABSENT, count from the Atlantic (right) side, starting with the first non-zero digit. If the decimal point is PRESENT, count from the Pacific (left) side, starting with the first non-zero digit. For example, in 4500 (decimal absent), count from the right: 0, 0, 5, 4—only the 5 and 4 are definitely significant (2 sig figs, though it's ambiguous). In 0.00450 (decimal present), count from the left: 0, 0, 0, 4, 5, 0—the 4, 5, and trailing 0 are significant (3 sig figs).</p>
          
          <p class="mb-4"><strong>Underline or highlight significant figures</strong> as you count them. This simple technique prevents miscounting, especially in numbers with many digits. Write 0.004̲5̲0̲ with the significant digits marked. It takes just a second and dramatically reduces errors. When you're starting out, do this for every number until it becomes second nature. Many students lose points on tests not because they don't understand the rules, but because they miscount in their haste.</p>
          
          <p class="mb-4"><strong>Watch out for these common mistakes:</strong> Don't confuse leading zeros (never significant) with trailing zeros after a decimal (always significant). The numbers 0.0500 and 500 look similar, but 0.0500 clearly has 3 sig figs while 500 is ambiguous. Another common error is applying the multiplication/division rule to addition/subtraction problems or vice versa. Remember: addition/subtraction focuses on decimal places, while multiplication/division focuses on total sig figs.</p>
          
          <p class="mb-4"><strong>For complex calculations:</strong> First identify which operations you're doing. If your calculation involves both types, apply the rules step by step but don't round until the very end. Keep track of what your final sig figs should be by noting the limiting measurement at each step. Many chemistry problems involve multiple calculations, and knowing when to round is crucial for getting the right answer.</p>
          
          <p class="mb-4">Finally, <strong>practice is everything</strong>. Significant figures become intuitive with repetition. Work through problems until counting sig figs feels automatic. Pay attention to how your chemistry textbook handles sig figs in example problems—you'll notice consistent patterns. And remember, in lab, always estimate one digit beyond what your instrument clearly shows. If a thermometer shows marks at every degree, estimate to the nearest tenth. That estimated digit is your last significant figure, and it's part of honest scientific measurement.</p>
        </div>

        <div class="bg-purple-50 rounded-xl p-6 mt-8">
          <h4 class="font-bold text-primary mb-4">📝 Quick Reference Summary</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold mb-2">Counting Rules</h5>
              <ul class="text-sm space-y-1">
                <li>• Non-zeros: ALWAYS count</li>
                <li>• Captive zeros: ALWAYS count</li>
                <li>• Leading zeros: NEVER count</li>
                <li>• Trailing zeros after decimal: ALWAYS count</li>
                <li>• Trailing zeros, no decimal: AMBIGUOUS</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-4">
              <h5 class="font-bold mb-2">Calculation Rules</h5>
              <ul class="text-sm space-y-1">
                <li>• × ÷ → Use fewest sig figs</li>
                <li>• + − → Use fewest decimal places</li>
                <li>• Round at the END only</li>
                <li>• Exact numbers = infinite sig figs</li>
              </ul>
            </div>
          </div>
        </div>
      `
    }
  },
  
  questionPools: {
    practice: [
      { id: 'p1', question: 'How many sig figs in 0.00456?', answer: '3', hint: 'Leading zeros don\'t count!' },
      { id: 'p2', question: 'How many sig figs in 1.020?', answer: '4', hint: 'Captive AND trailing zeros count' },
      { id: 'p3', question: 'How many sig figs in 8000?', answer: '1', hint: 'Trailing zeros without decimal are ambiguous - assume minimum' },
      { id: 'p4', question: 'How many sig figs in 8000.?', answer: '4', hint: 'The decimal point makes ALL zeros significant!' },
      { id: 'p5', question: 'How many sig figs in 0.0030?', answer: '2', hint: 'Only 3 and the final 0 count' },
      { id: 'p6', question: 'How many sig figs in 10.00?', answer: '4', hint: 'All trailing zeros after decimal count' },
      { id: 'p7', question: 'How many sig figs in 5.00 × 10³?', answer: '3', hint: 'Scientific notation makes it clear!' },
      { id: 'p8', question: 'How many sig figs in 0.007?', answer: '1', hint: 'Only the 7 counts' },
      { id: 'p9', question: 'How many sig figs in 1000.00?', answer: '6', hint: 'Decimal makes all digits significant' },
      { id: 'p10', question: 'How many sig figs in 40.070?', answer: '5', hint: 'All zeros are captive or trailing' },
      { id: 'p11', question: 'Round 45.678 to 3 sig figs:', answer: '45.7', hint: 'Look at the 4th digit to round' },
      { id: 'p12', question: 'Round 0.004562 to 2 sig figs:', answer: '0.0046', hint: 'Leading zeros stay' },
      { id: 'p13', question: 'Round 99.999 to 3 sig figs:', answer: '100.', hint: 'Decimal shows precision' },
      { id: 'p14', question: 'Calculate: 2.5 × 3.42 = ? (correct sig figs)', answer: '8.6', hint: '2.5 has 2 sig figs' },
      { id: 'p15', question: 'Calculate: 15.234 + 2.1 = ? (correct sig figs)', answer: '17.3', hint: '2.1 has 1 decimal place' },
      { id: 'p16', question: 'Calculate: 100.0 ÷ 3.0 = ? (correct sig figs)', answer: '33', hint: 'Both have 2 sig figs' },
      { id: 'p17', question: 'Calculate: 7.5 - 0.823 = ? (correct sig figs)', answer: '6.7', hint: '7.5 has 1 decimal place' },
      { id: 'p18', question: 'Calculate: 6.022 × 2.0 = ? (correct sig figs)', answer: '12', hint: '2.0 has 2 sig figs' },
      { id: 'p19', question: 'How many sig figs in 6.02 × 10²³?', answer: '3', hint: 'Avogadro\'s number' },
      { id: 'p20', question: 'Round 0.09996 to 3 sig figs:', answer: '0.100', hint: 'Trailing zeros show precision' }
    ],
    quiz: [
      { id: 'q1', type: 'multiple-choice', question: 'How many significant figures are in 0.00340?', options: ['2', '3', '4', '5'], correctAnswer: '3' },
      { id: 'q2', type: 'multiple-choice', question: 'How many significant figures are in 100.0?', options: ['1', '2', '3', '4'], correctAnswer: '4' },
      { id: 'q3', type: 'multiple-choice', question: 'For addition/subtraction, round to the:', options: ['Least sig figs', 'Most sig figs', 'Least decimal places', 'Most decimal places'], correctAnswer: 'Least decimal places' },
      { id: 'q4', type: 'multiple-choice', question: 'How many sig figs in 0.007?', options: ['1', '2', '3', '4'], correctAnswer: '1' },
      { id: 'q5', type: 'multiple-choice', question: 'In 0.00470, which zeros are significant?', options: ['All of them', 'Only the last one', 'Only the middle ones', 'None of them'], correctAnswer: 'Only the last one' },
      { id: 'q6', type: 'fill-in-blank', question: 'How many significant figures are in 2.050?', correctAnswer: '4' },
      { id: 'q7', type: 'fill-in-blank', question: 'Calculate with correct sig figs: 4.0 + 2.55 = ?', correctAnswer: '6.6' },
      { id: 'q8', type: 'fill-in-blank', question: 'Round 3.678 to 2 significant figures:', correctAnswer: '3.7' },
      { id: 'q9', type: 'fill-in-blank', question: 'How many sig figs in 1000.00?', correctAnswer: '6' },
      { id: 'q10', type: 'fill-in-blank', question: 'Calculate: 25.5 ÷ 5.0 = ? (correct sig figs)', correctAnswer: '5.1' },
      { id: 'q11', type: 'multi-select', question: 'Which numbers have exactly 3 sig figs?', options: ['0.0250', '2.50', '2500', '25.0', '0.250'], correctAnswers: ['0.0250', '2.50', '25.0', '0.250'] },
      { id: 'q12', type: 'multi-select', question: 'Which rules are TRUE?', options: ['Non-zero digits always count', 'Leading zeros never count', 'Trailing zeros always count', 'Captive zeros always count'], correctAnswers: ['Non-zero digits always count', 'Leading zeros never count', 'Captive zeros always count'] },
      { id: 'q13', type: 'multiple-choice', question: 'Calculate: 3.0 × 4.00 with correct sig figs', options: ['12', '12.0', '12.00', '12.000'], correctAnswer: '12' },
      { id: 'q14', type: 'multiple-choice', question: '4.00 × 10² has how many sig figs?', options: ['1', '2', '3', '5'], correctAnswer: '3' },
      { id: 'q15', type: 'fill-in-blank', question: 'Calculate: 12.11 - 0.2 = ? (correct sig figs)', correctAnswer: '11.9' },
      { id: 'q16', type: 'fill-in-blank', question: 'Round 0.09996 to 3 sig figs:', correctAnswer: '0.100' },
      { id: 'q17', type: 'multiple-choice', question: 'Which is NOT a sig fig rule?', options: ['Non-zeros always count', 'Captive zeros count', 'Leading zeros count', 'Trailing zeros after decimal count'], correctAnswer: 'Leading zeros count' },
      { id: 'q18', type: 'fill-in-blank', question: 'How many sig figs in 0.0101?', correctAnswer: '3' },
      { id: 'q19', type: 'multiple-choice', question: 'What makes 2500 different from 2500.?', options: ['They\'re the same', 'First is ambiguous, second has 4 sig figs', 'First has 4, second has 5', 'Second is larger'], correctAnswer: 'First is ambiguous, second has 4 sig figs' },
      { id: 'q20', type: 'fill-in-blank', question: 'Calculate: 8.0 × 5.00 = ? (correct sig figs)', correctAnswer: '40.' }
    ]
  },
  
  questionsPerPractice: 10,
  questionsPerQuiz: 12
};

if (typeof window !== 'undefined') {
  window.sigFigsModule = sigFigsModule;
}
