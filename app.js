const questions = [
    {
        question: 'Wer ist der coolste?!',
        answers: ['Rick', 'Popeye', 'Teletubby', 'Captain Hero'],
        correctAnswer: 'Rick'
    },
    {
        question: 'Welche Farbe hat die Black Order?',
        answers: ['Blau', 'Gau', 'Lila', 'Schwarz'],
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

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("qanswer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}