// on click of start button
// put first question in you h1
//  -- maybe have an array of questions or question objects


// put the options in you buttons
// for each option you need to grab a button off of the screen and changge labels or attr

// now you have a question and 4 butons

// listen for a click on the button
// addEventListener ?? 

// what happens when that event in triggered
// compare the select option w/ the real answer
// get the option the selected get the answer and compare the two

// if its right
// eval right
// else 
// eval wrong


let goButtonEl = document.querySelector('#go');
console.log(goButtonEl);
console.dir(goButtonEl);

goButtonEl.addEventListener('click', showMeTheButtonClicked)


function showMeTheButtonClicked(event) {
    console.log(event)
    event.targetEl.id
}
// {
//     targetEl: { tag: "button", id: "answer-one"}
// }

var startClick = document.getElementById("start-btn");
startClick.addEventListener("click", startQuiz);

(document).getElementbyId("questions");

function startQuiz (
    document.querySelector('#answer-one').innerHTML = 'Hide';
    document.querySelector('#answer-one').innerHTML = '';
)

