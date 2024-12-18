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










