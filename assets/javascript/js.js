//populateQuestions variables
var currentQuestion = "";
var currentIndex = 0;

//variable to store time
var remainingTime = 75;
var startClick = document.getElementById("start-btn");
startClick.addEventListener("click", startQuiz);
// Quiz Section variable
var feedback = document.querySelector('.feedback');
var quizButtons = document.querySelector(".answers");

var answerButtonOne = document.getElementById("answer-one");
var answerButtonTwo = document.getElementById("answer-two");
var answerButtonThree = document.getElementById("answer-three");
var answerButtonFour = document.getElementById("answer-four");

//variable to track whether timer is running or not
var isStopped = true;

//Action Start
const startButton = document.getElementById("start-quiz");
const countContainer = document.getElementById("timerDisplay");

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




//stop timer
const stopTimer = () => {
    isStopped = true;
    if (timer) {
        clearInterval(timer);
    }
};


document.querySelector(".quiz").hidden = true;

function startQuiz () {
    
    document.querySelector(".main").hidden = true;
    document.querySelector(".quiz").hidden = false;

    startTimer();
    populateQuestions();
}


function populateQuestions() {
    if(currentIndex > questionsArray.length - 1 || remainingTime === 0) {
        clearInterval(timer);
        //endQuiz();
    }
    if(currentIndex > questionsArray.length) return;

currentQuestion=questionsArray[currentIndex]
document.querySelector(".questions").textContent = questionsArray[currentIndex].question
document.querySelector("#answer-one").textContent = questionsArray[currentIndex].options[0]
document.querySelector("#answer-two").textContent = questionsArray[currentIndex].options[1]
document.querySelector("#answer-three").textContent = questionsArray[currentIndex].options[2]
document.querySelector("#answer-four").textContent = questionsArray[currentIndex].options[3]
currentIndex++

answerButtonOne.addEventListener('click', checkAnswer)
answerButtonTwo.addEventListener('click', checkAnswer)
answerButtonThree.addEventListener('click', checkAnswer)
answerButtonFour.addEventListener('click', checkAnswer)

}

function checkAnswer(e) {
e.preventDefault()
console.log('im in the check answer function')
if (currentQuestion.answer === e.target.innerText) {
console.log("correct!")
feedback.textContent="Correct!"
remainingTime += 10;
setTimeout(function() {
    populateQuestions();
}, 1000);
} else {
    console.log("incorrect!")
    feedback.textContent="Incorrect!"
    if(remainingTime > 15) {
    remainingTime -= 15;
    console.log(remainingTime)
    setTimeout(function() {
        populateQuestions();
    }, 1000);
    } else {
            clearInterval(timer);
            //endQuiz();
    }
} }


//function endQuiz() {
//hide quiz section
//show high score
//make form and button to submit
//stop timer (clearInterval)
//}

function endQuiz () {
    
    document.querySelector(".quiz").hidden = true;

}