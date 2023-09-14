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

  const answerInput = document.getElementById('answerInput').value.toLowerCase();

  // Get the correct answer for the current page, like question[0] will take the first question
  const correctAnswer = questions[pageNumber].answer.toLowerCase();

  if (answerInput === correctAnswer) {
    score++
  }

  // add pageNumber when clicked submitAnswer()
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

  // Show question to webpage
  questionText.innerHTML = questions[pageNumber].question;

  // Clear the answer input field for the next question
  document.getElementById('answerInput').value = '';
}

function showScore() {
  const result = document.getElementById('result');

  result.innerHTML = `Your score is ${score}/${questions.length}`;

  // Hide the whole questionContainer after showScore()
  document.getElementById('questionContainer').style.display = 'none'
}

function checkEnter(event) {
  if (event.keyCode === 13) {
    submitAnswer();
  }
}

displayQuestion();


