const questions = [
  {
  question: 'Wer ist der coolste?!',
  answers: ['Rick', 'Popeye', 'Teletubby', 'Captain Hero'],
  correctAnswer: 'Rick'
},
{
  question: 'Welche Farbe \n hat die Black Order?',
  answers: ['Blau', 'Grau', 'Lila', 'Schwarz'],
  correctAnswer: 'Schwarz'
},
{
  question: 'Wer ist Chef?',
  answers: ['Garfield', 'Batman', 'Martin Dubb', 'Chefkoch'],
  correctAnswer: 'Martin Dubb'
},
{
  question: 'Ey man, wo ist mein Auto?',
  answers: ['vor der Tür', 'Garage', 'Shaweet', 'Dude'],
  correctAnswer: 'Dude'
},
{
  question: 'Was wächst nicht?',
  answers: ['Unkraut', 'Bohnenranken', 'Wachs', 'Fuss'],
  correctAnswer: 'Wachs'
},
{
  question: 'Wer war der \n letzte Kaiser \n Deutschlands?',
  answers: ['Bismarck', 'Beckenbauer', 'Franz', 'Wilhelm'],
  correctAnswer: 'Wilhelm'
},
{
  question: 'Wer ist der \n treuste Begleiter?',
  answers: ['Snoopy', 'Morty', 'Robin', 'Donald Trump'],
  correctAnswer: 'Morty'
},
{
  question: 'Wo brennts?',
  answers: ['In der Hütte', 'Im Wasser', 'Am Hintern', 'Im Ofen'],
  correctAnswer: 'Im Ofen'
},
{
  question: 'Ist der Himmel blau?',
  answers: ['Ne, Scharlachrot!', 'Ja', 'Nein'],
  correctAnswer: 'Ja'
},
{
  question: 'Ist dir das zu blöd?',
  answers: ['Nein', 'Ja'],
  correctAnswer: 'Ja'
}
];

const questionElement = document.getElementById("question-box");
const answerButtonsElement = document.getElementById("answer-buttons");
const timerElement = document.getElementById("timer");
const scoreElement = document.querySelector(".Score_Zahl");
const skipButton = document.getElementById("skip");
const startButton = document.querySelector(".Start_Button");

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let countdown;
let questionCount = 0;
let gameEnded = false;

skipButton.addEventListener("click", () => {
questionCount++;
if (shuffledQuestions.length > currentQuestionIndex + 1 && questionCount < 10) {
clearInterval(countdown);
alert(`Skipped! - Kein Punkt!`);
currentQuestionIndex++;
setNextQuestion();
startTimer();
} else {
if (!gameEnded) {
gameEnded = true;
alert(`Quiz beendet! - Final Score ${score} von 10.`);
startButton.innerText = "Start";
}
}
});

startButton.addEventListener("click", () => {
startButton.innerText = "Live";
if (gameEnded || !shuffledQuestions) {
startGame();
}
});

function startGame() {
score = 0;
scoreElement.textContent = `${score}/10`;
shuffledQuestions = questions.sort(() => Math.random() - 0.5);
currentQuestionIndex = 0;
setNextQuestion();
startTimer();
questionCount = 0;
gameEnded = false;
}

function startTimer() {
let timeLeft = 15;
timerElement.innerText = `${timeLeft}`;
countdown = setInterval(() => {
timeLeft--;
timerElement.innerText = `${timeLeft}`;
if (timeLeft === 0) {
clearInterval(countdown);
selectAnswer();
}
}, 1000);
}

function setNextQuestion() {
const question = shuffledQuestions[currentQuestionIndex];
questionElement.innerText = question.question;
resetState();
question.answers.forEach((answer) => {
const button = document.createElement("button");
button.innerText = answer;
button.classList.add("btn");
if (answer === question.correctAnswer) {
button.dataset.correct = true;
}
button.addEventListener("click", selectAnswer);
answerButtonsElement.appendChild(button);
});
}

function selectAnswer(e) {
clearInterval(countdown);
let selectedButton;
let correct;

if (e) {
selectedButton = e.target;
correct = selectedButton.dataset.correct;
} else {
selectedButton = answerButtonsElement.children[0];
correct = false;  // Wenn die Zeit abläuft, wird die Antwort als falsch betrachtet
}

// Überprüfen, ob eine Antwort ausgewählt wurde
if (selectedButton && !gameEnded) {
if (correct) {
score++;
scoreElement.textContent = `${score}/10`;
alert(`Richtig!`);
} else {
alert(`Falsch!/Zu langsam! - Score unverändert.`);
}
}

questionCount++;
if (shuffledQuestions.length > currentQuestionIndex + 1 && questionCount < 10) {
currentQuestionIndex++;
setNextQuestion();
startTimer();
} else {
if (!gameEnded) {
gameEnded = true;
alert(`Quiz beendet! - Final Score ${score} von 10.`);
startButton.innerText = "Start";
}
}

if(gameEnded) {
startButton.innerText = "Start";  // Setzt die Beschriftung des Start-Buttons zurück, wenn das Spiel beendet ist
}
}

function resetState() {
answerButtonsElement.innerHTML = "";
}

// startGame();  // Das Spiel startet nicht mehr automatisch beim Laden der Seite