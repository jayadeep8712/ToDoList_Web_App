let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function makeMove(row, col) {
    if (!gameOver && board[row * 3 + col] === '') {
        board[row * 3 + col] = currentPlayer;
        document.querySelector(`.cell:nth-child(${row * 3 + col + 1})`).textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
            gameOver = true;
            return;
        }
    }

    if (!board.includes('')) {
        document.getElementById('status').textContent = "It's a draw!";
        gameOver = true;
    }
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
    });

    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
}

document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;


function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            const winner = board[a];
            document.getElementById('status').textContent = `Player ${winner} wins!`;
            gameOver = true;
            return;
        }
    }

    if (!board.includes('')) {
        document.getElementById('status').textContent = "It's a draw!";
        gameOver = true;
    }
}
