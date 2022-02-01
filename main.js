window.onload = domLoaded();

function domLoaded(){
    console.log("hello")
}

//Create the game objects: Player 1 - 2, Game observer
let player = {
    turn: null,
    symbol: null,
}

let game = function(){

    //Store game history
    let game = [[0,0,0],
                [0,0,0],
                [0,0,0]
    ];

    //Cache Dom
    let cells = document.querySelectorAll(".canvas__button");


    //Render the game
    function _render(){
    }

}

