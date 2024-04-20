const quizData = [
  {
      question: "What is the capital of France?",
      choices: ["Paris", "Berlin", "London", "Madrid"],
      correctAnswer: "Paris"
  },
  {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
  },
  {
      question: "What is the chemical symbol for water?",
      choices: ["H2O", "CO2", "NaCl", "O2"],
      correctAnswer: "H2O"
  },
  {
      question: "Who wrote 'To Kill a Mockingbird'?",
      choices: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Stephen King"],
      correctAnswer: "Harper Lee"
  },
  {
      question: "What year did the Titanic sink?",
      choices: ["1908", "1912", "1916", "1920"],
      correctAnswer: "1912"
  }
];

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

let currentQuestion = 0;
let score = 0;

// Load question
function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  choicesElement.innerHTML = "";
  currentQuizData.choices.forEach(choice => {
      const li = document.createElement('li');
      li.innerText = choice;
      li.addEventListener('click', () => selectAnswer(choice));
      choicesElement.appendChild(li);
  });
}

// Select answer
function selectAnswer(choice) {
  const currentQuizData = quizData[currentQuestion];
  if (choice === currentQuizData.correctAnswer) {
      score++;
      resultElement.innerText = "Correct!";
  } else {
      resultElement.innerText = "Wrong!";
  }
  showCorrectAnswer();
}

// Show correct answer
function showCorrectAnswer() {
  const currentQuizData = quizData[currentQuestion];
  const choices = choicesElement.children;
  for (let i = 0; i < choices.length; i++) {
      if (choices[i].innerText === currentQuizData.correctAnswer) {
          choices[i].style.color = "green";
      } else {
          choices[i].style.color = "red";
      }
  }
  submitButton.disabled = true;
  currentQuestion++;
  setTimeout(nextQuestion, 1500);
}

// Load next question
function nextQuestion() {
  if (currentQuestion < quizData.length) {
      loadQuestion();
      resultElement.innerText = "";
      submitButton.disabled = false;
  } else {
      endQuiz();
  }
}

// End quiz
function endQuiz() {
  questionElement.innerText = "Quiz completed!";
  choicesElement.innerHTML = "";
  resultElement.innerText = "Your Score: " + score + " out of " + quizData.length;
  scoreElement.innerText = "Percentage: " + ((score / quizData.length) * 100).toFixed(2) + "%";
  submitButton.style.display = "none";
}

// Initial load
loadQuestion();
