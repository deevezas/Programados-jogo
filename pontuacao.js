const highScoresList = document.getElementById('highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []


const resultado = highScores.map(score => {
    return `<li class='high-score'>${score.name} - ${score.score}</li>`
}).join(" ")

highScoresList.innerHTML = resultado

/** Mostrar o nome e pontuação**/
