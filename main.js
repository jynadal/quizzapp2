const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0

  
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
    resetState()
  showQuestion(shuffledQuestion[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
  
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusclass(document.body, correct)
Array.from(answerButtonsElement.chidren).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearstatusClass(elemenet)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
const questions = [
      {
        "id": 1,
        "question": "Chez l'Homme, de combien de dents se compose une dentition adulte complète ?",
        "propositions": [
          "32",
          "40",
          "44",
          "36"
        ],
        "réponse": "32",
        "anecdote": "La dent est formée de trois parties distinctes : la couronne (visible), la racine (dans l'os) et le desmodonte qui relie la racine à l'os."
      },
      {
        "id": 2,
        "question": "Quel type de thermomètre médical fut interdit d'utilisation en France en 1999 ?",
        "propositions": [
          "À retournement",
          "De Galilée",
          "À mercure",
          "Infrarouge"
        ],
        "réponse": "À mercure",
        "anecdote": "Le reproche fait au thermomètre à mercure vient du fait qu'il représente un danger en cas de bris, ce qui arrive très fréquemment."
      },
      {
        "id": 3,
        "question": "En cas de stress, quelle hormone est libérée dans l'organisme face au danger ?",
        "propositions": [
          "Dopamine",
          "Éphédrine",
          "Mescaline",
          "Adrénaline"
        ],
        "réponse": "Adrénaline",
        "anecdote": "Entraînant une accélération du rythme cardiaque, l'adrénaline répond à un besoin d'énergie pour faire face au danger."
      },
      {
        "id": 4,
        "question": "Quel traitement permet de soigner les maux du corps par l'eau de mer ?",
        "propositions": [
          "Thalassothérapie",
          "Sophrologie",
          "Naturopathie",
          "Réflexologie"
        ],
        "réponse": "Thalassothérapie",
        "anecdote": "Les établissements thermaux offrent (aussi) des soins non médicalisés (de confort) appelés souvent remise en forme."
      },
      {
        "id": 5,
        "question": "À quelle fréquence doit-on idéalement se faire vacciner contre la grippe ?",
        "propositions": [
          "Tous les 5 ans",
          "Tous les ans",
          "Tous les 2 ans",
          "Tous les 10 ans"
        ],
        "réponse": "Tous les ans",
        "anecdote": "Le virus grippal infecte d'autres mammifères que l'Homme, mais c'est chez l'oiseau qu'elle est la plus fréquente."
      },
      {
        "id": 6,
        "question": "Quelle est la première cause de mortalité évitable en France ?",
        "propositions": [
          "Drogue",
          "Sucre",
          "Tabac",
          "Alcool"
        ],
        "réponse": "Tabac",
        "anecdote": "Outre la dépendance, le tabagisme est responsable de nombreuses maladies dont plus d'une dizaine de cancers différents."
      },
      {
        "id": 7,
        "question": "Par quoi les os sont-ils reliés entre eux au niveau des articulations ?",
        "propositions": [
          "Tendons",
          "Gaines",
          "Bourses",
          "Ligaments"
        ],
        "réponse": "Ligaments",
        "anecdote": "Un ligament est une courte bande de tissu conjonctif fibreux composée principalement de longues molécules de collagène."
      },
      {
        "id": 8,
        "question": "Quel médicament est censé agir sur le malade par autosuggestion ?",
        "propositions": [
          "Fistule",
          "Insuline",
          "Placebo",
          "Dermatose"
        ],
        "réponse": "Placebo",
        "anecdote": "Le placebo a une efficacité prouvée avec une moyenne de patients ressentant un effet de 15 à 25 %, selon les études."
      },
      {
        "id": 9,
        "question": "Quels globules de notre organisme assurent le transport de l'oxygène dans le sang ?",
        "propositions": [
          "Blancs",
          "Bleus",
          "Jaunes",
          "Rouges"
        ],
        "réponse": "Rouges",
        "anecdote": "La moelle osseuse assure le renouvellement des cellules du sang : les globules et plaquettes sont produits au coeur des os."
      },
      {
        "id": 10,
        "question": "Que peut faire un sportif pour éviter l'arrivée inopinée de crampes ?",
        "propositions": [
          "Dormir",
          "Manger",
          "Fumer",
          "Boire"
        ],
        "réponse": "Boire",
        "anecdote": "La boisson (une demi-cuillerée à café de sel par litre d'eau) apporte les sels minéraux nécessaires au contrôle de la tension musculaire."
      }
    ]