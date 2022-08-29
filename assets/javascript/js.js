//variable to store time
var remainingTime = 75;
var startClick = document.getElementById("start-btn");
startClick.addEventListener("click", startQuiz);

const questionsArray = [
    {
        question: 'Which one is a correct tag in HTML?',
        answer: 'All of the Above',
        options: ['Div', 'p', 'h1', 'All of the Above']
},
{
        question: 'Which is a coding language?',
        answer: 'Javascript',
       options: ['coffee', 'Mocha', 'Javascript', 'Beans'],
},
    {
        question: 'how tall is lebron?',
        answer: '6 foot 8 in',
        options: ['6 foot 8 in', '5 foot 9', 'tall af', 'big'] 
    },
    {
        question: 'how tall is lebron?',
        answer: '6 foot 8 in',
        options: ['6 foot 8 in', '5 foot 9', 'tall af', 'big'] 
    },
    {
        question: 'how tall is lebron?',
        answer: '6 foot 8 in',
        options: ['6 foot 8 in', '5 foot 9', 'tall af', 'big'] 
    }
];
//start timer
const startTimer = () => {
    if (isStopped) {
        isStopped = false;
        countContainer.innerHTML = remainingTime;
        timer = setInterval(1000);
    }
}
//variable to track whether timer is running or not
var isStopped = true;

//Action Start
const startButton = document.getElementById("start-quiz");
const countContainer = document.getElementById("timerDisplay");

//stop timer
const stopTimer = () => {
    isStopped = true;
    if (timer) {
        clearInterval(timer);
    }
};



var quizButtons = document.querySelector(".answers");

var answerButtonOne = document.getElementById("answer-one");
var answerButtonTwo = document.getElementById("answer-two");
var answerButtonThree = document.getElementById("answer-three");
var answerFour = document.getElementById("answer-four");




document.querySelector(".quiz").hidden = true;

function startQuiz () {
    
    document.querySelector(".main").hidden = true;
    document.querySelector(".quiz").hidden = false;

    startTimer();
    populateQuestions();
}


function populateQuestions() {
    if(currentIndex > questions.length - 1 || remainingTime === 0) {
        clearInterval(timer);

    }
    if(currentIndex > questions.length) return;

document.querySelector(".questions").textContent = questionsArray.question[currentIndex]
document.querySelector("#answer-one").textContent = questionsArray.options[currentIndex]
document.querySelector("#answer-two").textContent = questionsArray.options[currentIndex]
document.querySelector("#answer-three").textContent = questionsArray.options[currentIndex]
document.querySelector("#answer-four").textContent = questionsArray.options[currentIndex]


}

function checkAnswer(e) {
    
}

