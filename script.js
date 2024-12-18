// a place to store the game board

// factory for making players

// function that keeps track of player turn

// function that places a mark for a player

// function to check game over after each round


const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", ()=> {
    //Game.start();
})

const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", "",]

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`
        })
    }
    document.getElementById("gameboard").innerHTML = boardHTML;

    return {
        render,
    }
})();

const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}

const Game = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameOver = false;

    const start = () => {
        players = [
            createPlayer(document.getElementById("player1").value, "X"),
            createPlayer(document.getElementById("player2").value, "O")
        ]
    }

})();










