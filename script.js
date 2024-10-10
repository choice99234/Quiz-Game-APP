const questions = [
    {
        question: "What is the first book in the bible?",
        answers: [
            { text: "Revelation", correct: false },
            { text: "Genesis", correct: true },
            { text: "Malachi", correct: false },
            { text: "Matthew", correct: false }
        ]
    },
    {
        question: "In the beginning God created the heavens and the earth?",
        answers: [
            { text: "Genesis 1:1", correct: true },
            { text: "Genesis 2:27", correct: false },
            { text: "Malachi 3:4", correct: false },
            { text: "Matthew 19:26", correct: false }
        ]
    },
    {
        question: "Adam and Eve were living peacefully in the garden of?",
        answers: [
            { text: "Gethsemane", correct: false },
            { text: "Horeb", correct: false },
            { text: "Eden", correct: true },
            { text: "Sinai", correct: false }
        ]
    },
    {
        question: "What made Adam and Eve sin against God?",
        answers: [
            { text: "The Serpent", correct: true },
            { text: "A Fruit", correct: false },
            { text: "Lions", correct: false },
            { text: "Moon and Stars", correct: false }
        ]
    },
    {
        question: "Who were the first sons of Adam and Eve?",
        answers: [
            { text: "Joseph and Benjamin", correct: false },
            { text: "Esau and Jacob", correct: false },
            { text: "Isaac and Ishmael", correct: false },
            { text: "Cain and Abel", correct: true }
        ]
    },
    {
        question: "Who killed Abel?",
        answers: [
            { text: "Abraham", correct: false },
            { text: "David", correct: false },
            { text: "Cain", correct: true },
            { text: "Ishmael", correct: false }
        ]
    },
    {
        question: "Who was the wife of Abraham?",
        answers: [
            { text: "Rebecca", correct: false },
            { text: "Sarah", correct: true },
            { text: "Ruth", correct: false },
            { text: "Naomi", correct: false }
        ]
    },
    {
        question: "Who led the Israelites out of Egypt?",
        answers: [
            { text: "Aaron", correct: false },
            { text: "Moses", correct: true },
            { text: "Joshua", correct: false },
            { text: "David", correct: false }
        ]
    },
    {
        question: "Where did Moses receive the Ten Commandments?",
        answers: [
            { text: "Mount Sinai", correct: true },
            { text: "Mount Horeb", correct: false },
            { text: "Mount Zion", correct: false },
            { text: "Mount Carmel", correct: false }
        ]
    },
    {
        question: "Who was swallowed by a great fish?",
        answers: [
            { text: "Jonah", correct: true },
            { text: "Elijah", correct: false },
            { text: "Moses", correct: false },
            { text: "David", correct: false }
        ]
    },
    {
        question: "What did David use to defeat Goliath?",
        answers: [
            { text: "A spear", correct: false },
            { text: "A sword", correct: false },
            { text: "A sling and stone", correct: true },
            { text: "A bow and arrow", correct: false }
        ]
    },
    {
        question: "Who was the strongest man in the Bible?",
        answers: [
            { text: "Goliath", correct: false },
            { text: "Samson", correct: true },
            { text: "David", correct: false },
            { text: "Saul", correct: false }
        ]
    },
    {
        question: "How many days did God take to create the world?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Who was thrown into the lions' den?",
        answers: [
            { text: "Daniel", correct: true },
            { text: "Elijah", correct: false },
            { text: "Moses", correct: false },
            { text: "Joseph", correct: false }
        ]
    },
    {
        question: "How many disciples did Jesus have?",
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "11", correct: false },
            { text: "14", correct: false }
        ]
    },
    {
        question: "What is the longest book in the Bible?",
        answers: [
            { text: "Psalms", correct: true },
            { text: "Genesis", correct: false },
            { text: "Isaiah", correct: false },
            { text: "Exodus", correct: false }
        ]
    },
    {
        question: "Who was the first king of Israel?",
        answers: [
            { text: "David", correct: false },
            { text: "Solomon", correct: false },
            { text: "Saul", correct: true },
            { text: "Samuel", correct: false }
        ]
    },
    {
        question: "Who was the father of King Solomon?",
        answers: [
            { text: "Saul", correct: false },
            { text: "David", correct: true },
            { text: "Samuel", correct: false },
            { text: "Nathan", correct: false }
        ]
    },
    {
        question: "How many people were on Noah's ark?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false }
        ]
    },
    {
        question: "Who betrayed Jesus for 30 pieces of silver?",
        answers: [
            { text: "Peter", correct: false },
            { text: "Judas", correct: true },
            { text: "John", correct: false },
            { text: "Thomas", correct: false }
        ]
    },
    {
        question: "What is the shortest verse in the Bible?",
        answers: [
            { text: "Jesus wept.", correct: true },
            { text: "God is love.", correct: false },
            { text: "In the beginning.", correct: false },
            { text: "Pray without ceasing.", correct: false }
        ]
    },
    {
        question: "Who was the mother of Jesus?",
        answers: [
            { text: "Ruth", correct: false },
            { text: "Sarah", correct: false },
            { text: "Mary", correct: true },
            { text: "Martha", correct: false }
        ]
    },
    {
        question: "Who built the temple in Jerusalem?",
        answers: [
            { text: "David", correct: false },
            { text: "Solomon", correct: true },
            { text: "Samuel", correct: false },
            { text: "Saul", correct: false }
        ]
    },
    {
        question: "How many plagues did God send on Egypt?",
        answers: [
            { text: "7", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Who was known for his wisdom?",
        answers: [
            { text: "Saul", correct: false },
            { text: "David", correct: false },
            { text: "Solomon", correct: true },
            { text: "Moses", correct: false }
        ]
    },
    {
        question: "Who was the wife of Isaac?",
        answers: [
            { text: "Rachel", correct: false },
            { text: "Sarah", correct: false },
            { text: "Rebecca", correct: true },
            { text: "Leah", correct: false }
        ]
    },
    {
        question: "What was the first miracle Jesus performed?",
        answers: [
            { text: "Healing the blind man", correct: false },
            { text: "Turning water into wine", correct: true },
            { text: "Feeding the 5000", correct: false },
            { text: "Walking on water", correct: false }
        ]
    },
    {
        question: "Where was Jesus born?",
        answers: [
            { text: "Nazareth", correct: false },
            { text: "Jerusalem", correct: false },
            { text: "Bethlehem", correct: true },
            { text: "Galilee", correct: false }
        ]
    },
    {
        question: "Who anointed Jesus' feet with expensive perfume?",
        answers: [
            { text: "Mary", correct: true },
            { text: "Martha", correct: false },
            { text: "Sarah", correct: false },
            { text: "Rachel", correct: false }
        ]
    },
    {
        question: "Who was the father of John the Baptist?",
        answers: [
            { text: "Joseph", correct: false },
            { text: "Zachariah", correct: true },
            { text: "Isaac", correct: false },
            { text: "Abraham", correct: false }
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score-display");  // For score display
const levelElement = document.getElementById("level-display");  // For level display
const totalQuestionsElement = document.getElementById("total-questions-display");  // For total questions display per level

let currentQuestionIndex = 0;
let score = 0;
let level = 1;
let questionCount = 0;
const questionsPerLevel = 10;  // 10 questions per level

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    level = 1;
    questionCount = 0;
    nextButton.innerHTML = "Next";
    scoreElement.innerHTML = `Score: ${score}/${questionsPerLevel}`;  // Initialize score display for the level
    levelElement.innerHTML = `Level: ${level}`;  // Initialize level display
    totalQuestionsElement.innerHTML = `Total Questions: ${questionsPerLevel}`;  // Initialize total questions display per level
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = (questionCount % questionsPerLevel) + 1;
    questionElement.innerHTML = `Level ${level}: Question ${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        scoreElement.innerHTML = `Score: ${score}/${questionsPerLevel}`;  // Update score display
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score}/${questionsPerLevel} for Level ${level}.`;
    nextButton.innerHTML = "Next Level ";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    questionCount++;

    if (questionCount % questionsPerLevel === 0) {
        if (score === questionsPerLevel) {
            alert(`Great job! You've completed Level ${level} without failing!`);
            levelUp();
        } else {
            alert(`You've completed Level ${level}.`);
            showScore();
        }
    } else {
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            currentQuestionIndex = 0;  // Reset index if all questions are done
            showQuestion();
        }
    }
}

function levelUp() {
    level++;
    score = 0;  // Reset score for the new level
    questionCount = 0;  // Reset the question count for the new level
    nextButton.innerHTML = `Start Level ${level}`;
    scoreElement.innerHTML = `Score: ${score}/${questionsPerLevel}`;  // Reset score display for the new level
    levelElement.innerHTML = `Level: ${level}2`;  // Update level display
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();