const boxes = document.querySelectorAll('.box');
const gameStatus = document.getElementById('para');

let currentPlayer = "X";
let gameOver = false

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerHTML !== "" || gameOver) {
            return;
        }
        box.innerHTML = currentPlayer;
        
        if(!gameOver){
            if (currentPlayer === "X") {
                currentPlayer = "O";
                box.classList.add("X");
                gameStatus.innerHTML = currentPlayer + "'s turn";
            }
            else {
                currentPlayer = "X";
                box.classList.add("O");
                gameStatus.innerHTML = currentPlayer + "'s turn";
            }
        }
        checkWinner();  
    })
})
function checkWinner() {
    for (let pattern of winningPatterns) {
        let a = boxes[pattern[0]].innerHTML;
        let b = boxes[pattern[1]].innerHTML;
        let c = boxes[pattern[2]].innerHTML;

        

        if (a && a === b && b === c) {  
            boxes[pattern[0]].style.backgroundColor = "#97b0ec"
            boxes[pattern[1]].style.backgroundColor = "#97b0ec"
            boxes[pattern[2]].style.backgroundColor = "#a0b9f4ff"
            gameStatus.innerHTML = a + " wins!";
            gameOver = true;
            return;
            
        }
    }
    let draw = true;
    boxes.forEach((box) => {
        if (box.innerHTML === "") {
            draw = false;
        }
    })
    if (draw) {
        gameStatus.innerHTML = "Game is Draw!"
        gameOver = true
    }
}
function reset() {
    boxes.forEach(box => {box.innerHTML = ""
        box.classList.remove("X","O")
        box.style.backgroundColor = "white"
    })
    currentPlayer = "X";
    gameStatus.innerHTML = "X's turn";
    gameOver = false;
}