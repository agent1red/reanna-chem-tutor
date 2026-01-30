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
