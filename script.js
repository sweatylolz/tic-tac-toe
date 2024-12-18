// a place to store the game board

// factory for making players

// function that keeps track of player turn

// function that places a mark for a player

// function to check game over after each round


let currentPlayer = "X";

gameBoard = {
    board: [
        ["","",""], 
        ["","",""], 
        ["","",""]
    ]
}

function createPlayer(name, currentPlayer) {
    return {
        name: name,
        token: currentPlayer,
        getName() {
            return "player " + name + " is using " + "'" + token + "'";
        },
    };
}

function gameplay() {

}





