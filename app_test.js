/*
const questions = [
     {
        question: 'Wer ist der coolste?!',
        answers: [
            { text: "Rick", correct: true},
            { text: "Popeye", correct: false},
            { text: "Teletubby", correct: false},
            { text: "Captain Hero", correct: false},
        ]
    },
    {
        question: 'Welche Farbe hat die Black Order?',
        answers: [
            { text: "Blau", correct: false },
            { text: "Grau", correct: false },
            { text: "Lila", correct: false },
            { text: "Schwarz", correct: true }
        ]
    },
    {
        question: 'Wer ist Chef?',
        answers: [
            { text: "Garfield", correct: false },
            { text: "Batman", correct: false },
            { text: "Martin Dubb", correct: true },
            { text: "Chefkoch", correct: false }
        ]
    },
    {
        question: 'Ey man, wo ist mien Auto?',
        answers: [
            { text: "vor der Tür", correct: false },
            { text: "Garage", correct: false },
            { text: "Shaweet", correct: false },
            { text: "Dude", correct: true }
        ]
    },
    {
        question: 'Was wächst nicht?',
        answers: [
            { text: "Unkraut", correct: false },
            { text: "Bohnenranken", correct: false },
            { text: "Wachs", correct: true },
            { text: "Fuss", correct: false }
        ]
    },
    {
        question: 'Wer war der letzte Kaiser Deutschlands?',
        answers: [
            { text: "Bismarck", correct: false },
            { text: "Beckenbauer", correct: false },
            { text: "Franz", correct: false },
            { text: "Wilhelm", correct: true }
        ]
    },
    {
        question: 'Wer ist der treuste Begleiter?',
        answers: [
            { text: "Snoopy", correct: false },
            { text: "Morty", correct: true },
            { text: "Robin", correct: false },
            { text: "Donald Trump", correct: false }
        ]
    },
    {
        question: 'Wo brennts?',
        answers: [
            { text: "In der Hütte", correct: false },
            { text: "Im Wasser", correct: false },
            { text: "Am Hintern", correct: false },
            { text: "Im Ofen", correct: true }
        ]
    },
    {
        question: 'Warum mach ich das?',
        answers: [
            { text: "*Affe der sich die Augen zuhält*", correct: false },
            { text: "Weil ichs kann!", correct: false },
            { text: "Weiß ich selbst net...", correct: false },
            { text: "Nächste Frage bitte!", correct: true }
        ]
    },
    {
        question: 'Na wie war das Quiz?',
        answers: [
            { text: "Welches Quiz?", correct: false },
            { text: "Bahnhof", correct: false },
            { text: "Lass einfach sein jetzt!", correct: true },
            { text: "Fahrrad", correct: false }
        ]
    }
  ];
  
  const questionElement = document.getElementById("question-box");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const timerElement = document.getElementById("timer");
  const nextButton = document.getElementById("next-button");
  
  let shuffledQuestions, currentQuestionIndex;
  let score = 0;
  let countdown;
  
  function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Nächste Frage";
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }
  
  function startTimer() {
    let timeLeft = 15;
    timerElement.innerText = `${timeLeft}`;
    countdown = setInterval(() => {
      timeLeft--;
      timerElement.innerText = `${timeLeft}`;
      if(timeLeft <= 0) {
          clearInterval(countdown);
          Array.from(answerButtonsElement.children).forEach(button => {
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
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
    startTimer();
  }
  
  function selectAnswer(e) {
    clearInterval(countdown);
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide');
    } else {
      nextButton.innerText = 'Neustart';
      nextButton.classList.remove('hide');
    }
  }
  
  function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
  function showScore() {
    questionElement.innerText = 'Du hast ' + score + ' von ' + questions.length + ' möglichen Punkten!';
    nextButton.innerText = "Neustart";
    nextButton.classList.remove('hide');
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('incorrect');
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
  });
  
  startGame();

  */

  const questions = [
    {
        question: 'Wer ist der coolste?!',
        answers: [
            { text: "Rick", correct: true},
            { text: "Popeye", correct: false},
            { text: "Teletubby", correct: false},
            { text: "Captain Hero", correct: false},
        ]
    },
    {
        question: 'Welche Farbe hat die Black Order?',
        answers: [
            { text: "Blau", correct: false },
            { text: "Grau", correct: false },
            { text: "Lila", correct: false },
            { text: "Schwarz", correct: true }
        ]
    },
    {
        question: 'Wer ist Chef?',
        answers: [
            { text: "Garfield", correct: false },
            { text: "Batman", correct: false },
            { text: "Martin Dubb", correct: true },
            { text: "Chefkoch", correct: false }
        ]
    },
    {
        question: 'Ey man, wo ist mien Auto?',
        answers: [
            { text: "vor der Tür", correct: false },
            { text: "Garage", correct: false },
            { text: "Shaweet", correct: false },
            { text: "Dude", correct: true }
        ]
    },
    {
        question: 'Was wächst nicht?',
        answers: [
            { text: "Unkraut", correct: false },
            { text: "Bohnenranken", correct: false },
            { text: "Wachs", correct: true },
            { text: "Fuss", correct: false }
        ]
    },
    {
        question: 'Wer war der letzte Kaiser Deutschlands?',
        answers: [
            { text: "Bismarck", correct: false },
            { text: "Beckenbauer", correct: false },
            { text: "Franz", correct: false },
            { text: "Wilhelm", correct: true }
        ]
    },
    {
        question: 'Wer ist der treuste Begleiter?',
        answers: [
            { text: "Snoopy", correct: false },
            { text: "Morty", correct: true },
            { text: "Robin", correct: false },
            { text: "Donald Trump", correct: false }
        ]
    },
    {
        question: 'Wo brennts?',
        answers: [
            { text: "In der Hütte", correct: false },
            { text: "Im Wasser", correct: false },
            { text: "Am Hintern", correct: false },
            { text: "Im Ofen", correct: true }
        ]
    },
    {
        question: 'Warum mach ich das?',
        answers: [
            { text: "*Affe der sich die Augen zuhält*", correct: false },
            { text: "Weil ichs kann!", correct: false },
            { text: "Weiß ich selbst net...", correct: false },
            { text: "Nächste Frage bitte!", correct: true }
        ]
    },
    {
        question: 'Na wie war das Quiz?',
        answers: [
            { text: "Welches Quiz?", correct: false },
            { text: "Bahnhof", correct: false },
            { text: "Lass einfach sein jetzt!", correct: true },
            { text: "Fahrrad", correct: false }
        ]
    }
  ];
  
  const questionElement = document.getElementById("question-box");
const answerButtonsElement = document.getElementById("answer-buttons");
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const startButtonText = document.getElementById("start-button-text");

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let countdown;

startButton.addEventListener('click', () => {
    startGame();
    startButton.style.visibility = 'hidden';
    startButtonText.style.visibility = 'hidden';
});

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function startTimer() {
    let timeLeft = 15;
    timerElement.innerText = `${timeLeft}`;
    countdown = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `${timeLeft}`;
        if(timeLeft <= 0) {
            clearInterval(countdown);
            timerElement.innerText = 'Zeit abgelaufen!';
            Array.from(answerButtonsElement.children).forEach(button => {
                button.disabled = true;
            });
        }
    }, 1000);
}

function setNextQuestion() {
    resetState();
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        showScore();
        startButton.style.visibility = 'visible';
        startButtonText.style.visibility = 'visible';
        startButtonText.innerText = 'Neustart';
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const button = document.getElementById(`answer-${index + 1}`);
        button.innerText = answer.text;
        button.dataset.correct = answer.correct;
        button.disabled = false;
        button.addEventListener('click', selectAnswer);
    });
    startTimer();
}

function selectAnswer(e) {
    clearInterval(countdown);
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    if (correct) {
        score++;
    }
    setTimeout(setNextQuestion, 1000);
}

function resetState() {
    clearInterval(countdown);
    timerElement.innerText = "15";
    Array.from(answerButtonsElement.children).forEach(button => {
        button.innerText = "";
        clearStatusClass(button);
        button.disabled = true;
        button.removeEventListener('click', selectAnswer);
    });
}

function showScore() {
    questionElement.innerText = 'Du hast ' + score + ' von ' + questions.length + ' möglichen Punkten!';
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}