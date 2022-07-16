const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull');




let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

/**perguntas de exemplo */

const questions = [
    {
        title: "Qual foi sua materia favorita no ensino médio?",
        choicesQuestion: [
            { option: "Matematica", score: 100 },
            { option: "Portugues", score: 70 },
            { option: "Historia", score: 30 },
            { option: "Biologia", score: 20 }
        ],
    },
    {
        title: "Quanto é 4 + 4?",
        choicesQuestion: [
            { option: "2", score: 0 },
            { option: "4", score: 0 },
            { option: "8", score: 100 },
            { option: "17", score: 0 }
        ],
    },
    {
        title: "Quanto é 4 + 4?",
        choicesQuestion: [
            { option: "2", score: 0 },
            { option: "4", score: 0 },
            { option: "8", score: 100 },
            { option: "17", score: 0 }
        ],
    },
    {
        title: "Quanto é 4 + 4?",
        choicesQuestion: [
            { option: "2", score: 0 },
            { option: "4", score: 0 },
            { option: "8", score: 100 },
            { option: "17", score: 0 }
        ],
    },
    {
        title: "Quanto é 4 + 4?",
        choicesQuestion: [
            { option: "2", score: 0 },
            { option: "4", score: 0 },
            { option: "8", score: 100 },
            { option: "17", score: 0 }
        ],
    },
    {
        title: "Quanto é 4 + 4?",
        choicesQuestion: [
            { option: "2", score: 0 },
            { option: "4", score: 0 },
            { option: "8", score: 100 },
            { option: "17", score: 0 }
        ],
    },
    {
        title: "Quanto é 4 + 4?",
        choicesQuestion: [
            { option: "2", score: 0 },
            { option: "4", score: 0 },
            { option: "8", score: 100 },
            { option: "17", score: 0 }
        ],
    },
    {
        title: "Quanto é 4 + 4?",
        choicesQuestion: [
            { option: "2", score: 0 },
            { option: "4", score: 0 },
            { option: "8", score: 100 },
            { option: "17", score: 0 }
        ],
    },
    {
        title: "Quanto é 4 + 4?",
        choicesQuestion: [
            { option: "2", score: 0 },
            { option: "4", score: 0 },
            { option: "8", score: 100 },
            { option: "17", score: 0 }
        ],
    },
    {
        title: "Quanto é 4 + 4?",
        choicesQuestion: [
            { option: "2", score: 0 },
            { option: "4", score: 0 },
            { option: "8", score: 100 },
            { option: "17", score: 0 }
        ],
    },
]

/**Começo do jogo abaixo**/

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

/**retorno dps de responder as questões**/
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        window.location.href = 'end.html'
        return;
    }

    questionCounter++
    progressText.innerText = `Questão ${questionCounter} de ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    /**Logica que define as questões */
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    console.log(availableQuestions)
    const { title, choicesQuestion } = availableQuestions[questionsIndex]

    question.innerText = title

    let choicesAvailable = choicesQuestion

    var choicesShuffled = []
    while (choicesAvailable.length > 0) {
        const choicesIndex = Math.floor(Math.random() * choicesAvailable.length)
        choicesShuffled.push(choicesQuestion[choicesIndex])
        choicesAvailable.splice(choicesIndex, 1)
    }

    questionChoices = choicesShuffled
    currentQuestion = choicesShuffled

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = questionChoices[number - 1].option
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}



choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedIndex = selectedChoice.dataset['number'] - 1

        // let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        // if (classToApply === 'correct') {
        //     incrementScore(SCORE_POINTS)
        // }
        incrementScore(currentQuestion[selectedIndex].score)

        //selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            //selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}
startGame()
