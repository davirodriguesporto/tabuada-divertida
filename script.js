let selectedTabuada = 1;
let score = 0;
let currentQuestion = 1;

function startGame(tabuada) {
    selectedTabuada = tabuada;
    score = 0;
    currentQuestion = 1;

    document.getElementById("game-stage").classList.add("hidden");
    document.getElementById("game-board").classList.remove("hidden");
    document.getElementById("character").classList.remove("hidden");

    generateQuestion();
}

function generateQuestion() {
    const questionText = `${selectedTabuada} x ${currentQuestion} = ?`;
    document.getElementById("question").textContent = questionText;
    document.getElementById("answer-input").value = "";
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer-input").value);
    const correctAnswer = selectedTabuada * currentQuestion;

    if (userAnswer === correctAnswer) {
        score += 1;
        document.getElementById("score").textContent = score;
        updateBridge();

        if (currentQuestion < 10) {
            currentQuestion++;
            generateQuestion();
        } else {
            endGame();
        }
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

function updateBridge() {
    const bridgeWidth = (currentQuestion * 10) + "%";
    document.getElementById("bridge").style.width = bridgeWidth;

    const characterPosition = (currentQuestion - 1) * 10 + "%";
    document.getElementById("character").style.left = characterPosition;
}

function endGame() {
    document.getElementById("game-board").classList.add("hidden");
    document.getElementById("game-over").classList.remove("hidden");
    document.getElementById("character").classList.add("hidden");
}

function resetGame() {
    document.getElementById("game-over").classList.add("hidden");
    document.getElementById("game-stage").classList.remove("hidden");
    document.getElementById("bridge").style.width = "0%";
    document.getElementById("character").style.left = "0";
}
