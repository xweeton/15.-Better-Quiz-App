const questions = [
  {
    question: "What is the capital of Malaysia?",
    answer: "Kuala Lumpur"
  },
  {
    question: "What is the largest mammal?",
    answer: "Blue Whale",
  }
];

let score = 0;
let pageNumber = 0;

function submitAnswer() {
   // Get the correct answer for the current page (question) and convert it to lowercase.
  const answerInput = document.getElementById('answerInput').value.toLowerCase();

  const correctAnswer = questions[pageNumber].answer.toLowerCase();

  if (answerInput === correctAnswer) {
    score++
  }

pageNumber++;

  // Check if there are more questions to display.
  if (pageNumber < questions.length) {
    displayQuestion();
  } else {
    showScore();
  }
}

function displayQuestion() {
  const questionText = document.getElementById('questionText');

   // Set the text content of the element to the current question.
  questionText.textContent = questions[pageNumber].question;

// Clear the answer input field for the next question
document.getElementById('answerInput').value = '';
}

function showScore() {
  const result = document.getElementById('result');
  
  result.innerHTML = `Your score is ${score}/${questions.length}`;

  document.getElementById('questionContainer').style.display = 'none'
}

displayQuestion();


