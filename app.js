const questions = [
    {
        question: 'Wer ist der coolste?!',
        answers: ['Rick', 'Popeye', 'Teletubby', 'Captain Hero'],
        correctAnswer: 'Rick'
    },
    {
        question: 'Welche Farbe hat die Black Order?',
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
        question: 'Wer war der letzte Kaiser Deutschlands?',
        answers: ['Bismarck', 'Beckenbauer', 'Franz', 'Wilhelm'],
        correctAnswer: 'Wilhelm'
    },
    {
        question: 'Wer ist der treuste Begleiter?',
        answers: ['Snoopy', 'Morty', 'Robin', 'Donald Trump'],
        correctAnswer: 'Morty'
    },
    {
        question: 'Wo brennts?',
        answers: ['In der Hütte', 'Im Wasser', 'Am Hintern', 'Im Ofen'],
        correctAnswer: 'Im Ofen'
    },
    {
        question: 'Warum mach ich das?',
        answers: ['*Affe der sich die Augen zuhält*', 'Weil ichs kann!', 'Weiß ich selbst net...', 'Nächste Frage bitte!'],
        correctAnswer: 'Weil ichs kann!'
    },
    {
        question: 'Na wie is das Quiz?',
        answers: ['Welches Quiz?', 'Bahnhof', 'nope', 'Fahrrad'],
        correctAnswer: 'Welches Quiz?'
    }
    
];

const questionElement = document.getElementById("question-box");
const answerButtonsElement = document.getElementById("answer-buttons");
const timerElement = document.getElementById("timer");

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let countdown;
let questionCount = 0;
let gameEnded = false; // Neue Variable für das Spielende

function startGame() {
  score = 0;
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
  startTimer();
}

function startTimer() {
  let timeLeft = 15;
  timerElement.innerText = `${timeLeft}`;
  countdown = setInterval(() => {
    timeLeft--;
    timerElement.innerText = `${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      Array.from(answerButtonsElement.children).forEach((button) => {
        if (button.dataset.correct) selectAnswer({ target: button });
      });
    }
  }, 1000);
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
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
  if (e) {
    selectedButton = e.target;
  } else {
    selectedButton = answerButtonsElement.children[0];
  }
  const correct = selectedButton.dataset.correct;
  
  // Überprüfen, ob eine Antwort ausgewählt wurde
  if (selectedButton) {
    if (correct) {
      score++;
      alert(`Richtig! Dein Punktestand ist jetzt ${score} Punkt(e) von 10 möglichen.`);
    } else {
      alert(`Falsch! Dein Punktestand bleibt bei ${score} von 10.`);
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
      alert(`Quiz beendet! Dein finaler Punktestand ist ${score} von 10.`);
      resetQuiz();
    }
  }
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function resetQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  questionCount = 0;
  setNextQuestion();
}

startGame();