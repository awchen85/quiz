const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

const max_score = 5;

const highScores = JSON.parse (localStorage.getItem("highScores")) || [];
console.log(highScores);
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the sav button!");
    e.preventDefault();

const score = {
    score : mostRecentScore,
    name : username.value
};
highScores.push(score);
};