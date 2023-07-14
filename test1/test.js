const questions = [
    {
        question: 'Wer ist der coolste?!',
        answers: ['Rick', 'Popeye', 'Teletubby', 'Captain Hero'],
        correctAnswer: 'Rick'
    },
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
        question: 'Ey man, wo ist mien Auto?',
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
        correctAnswer: 'Nächste Frage bitte!'
    },
    {
        question: 'Na wie war das Quiz?',
        answers: ['Welches Quiz?', 'Bahnhof', 'Lass einfach sein jetzt!', 'Fahrrad'],
        correctAnswer: 'Lass einfach sein jetzt!'
    }
    
];

const questionElement = document.getElementById("question-box");
const answerButtonsElement = document.getElementById("answer-buttons");
const timerElement = document.getElementById("timer");

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let countdown;

function startGame() {
    score = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
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
        button.innerText = answer;
        button.classList.add('btn');
        if (answer === question.correctAnswer) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    clearInterval(countdown);
    let selectedButton;
    if(e){
        selectedButton = e.target;
    } else {
        selectedButton = answerButtonsElement.children[0];
    }
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
        alert(`Richtig! Dein Punktestand ist jetzt ${score}.`);
    } else {
        alert(`Falsch! Dein Punktestand bleibt bei ${score}.`);
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;
        setNextQuestion();
    } else {
        alert(`Quiz beendet! Dein endgültiger Punktestand ist ${score}.`);
    }
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

startGame();