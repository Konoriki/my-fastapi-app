document.addEventListener("DOMContentLoaded", function() {
  const boardEl = document.getElementById("board");
  const statusEl = document.getElementById("status");
  const restartBtn = document.getElementById("restart");

  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let gameActive = true;

    const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

    function renderBoard() {
    boardEl.innerHTML = "";
    board.forEach((value, i) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = value;
        cell.addEventListener("click", () => handleClick(i));
        boardEl.appendChild(cell);
    });
    }

    function handleClick(index) {
    if (!gameActive || board[index] !== "") return;
    board[index] = currentPlayer;
    renderBoard();
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (gameActive) {
        statusEl.textContent = `Tour du joueur ${currentPlayer}`;
    }
    }

    function checkWinner() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        statusEl.textContent = `🎉 Joueur ${board[a]} a gagné !`;
        gameActive = false;
        return;
        }
    }
    if (!board.includes("")) {
        statusEl.textContent = "Match nul 🤝";
        gameActive = false;
    }
    }

    restartBtn.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    statusEl.textContent = "Tour du joueur X";
    renderBoard();
    });

    renderBoard();
});