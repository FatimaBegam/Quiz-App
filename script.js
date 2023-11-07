const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionData = quizData[currentQuestion];
  questionContainer.textContent = questionData.question;

  optionsContainer.innerHTML = "";

  questionData.options.forEach((option) => {
    const optionElement = document.createElement("button");
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(optionElement);
  });
}

function checkAnswer(selectedOption) {
  const questionData = quizData[currentQuestion];
  if (selectedOption === questionData.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.style.display = "none";
  optionsContainer.style.display = "none";
  submitButton.style.display = "none";
  resultContainer.style.display = "block";
  scoreDisplay.textContent = score;
}

loadQuestion();

submitButton.addEventListener("click", () => checkAnswer());
