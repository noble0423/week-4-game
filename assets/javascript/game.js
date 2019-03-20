// VARIABLES
//=======================================================================================================

var randomNum;
var randomGreen;
var randomOrange;
var randomPink;
var randomYellow;
var score;
var winCounter;
var lossCounter;


// FUNCTIONS
//=======================================================================================================

// Computer picks Random number
function computerRandomNumber () {
    randomNum = Math.floor(Math.random() * 102) + 19;
    $("#random-button").on("click", function() {
        $("#random-number").text(randomNum);
    });
}

function greenCrystalRandomNumber () {
    randomGreen = Math.floor(Math.random() * 12) + 1;
}

function orangeCrystalRandomNumber () {
    randomOrange = Math.floor(Math.random() * 12) + 1;
}

function pinkCrystalRandomNumber () {
    randomPink = Math.floor(Math.random() * 12) + 1;
}

function yellowCrystalRandomNumber () {
    randomYellow = Math.floor(Math.random() * 12) + 1;
}

// Start Game brand new
function startGame() {
    score = 0;
    $("#score").text(score);
    
    winCounter = 0;
    $("#winCounter").text(winCounter);
    
    lossCounter = 0;
    $("#lossCounter").text(lossCounter);
    
    computerRandomNumber();
    greenCrystalRandomNumber();
    orangeCrystalRandomNumber();
    pinkCrystalRandomNumber();
    yellowCrystalRandomNumber();

}

// Reset Game after a win or a loss
function resetGame() {
    score = 0;
    $("#score").text(score);

    $("#random-number").text("???");

    computerRandomNumber();
    greenCrystalRandomNumber();
    orangeCrystalRandomNumber();
    pinkCrystalRandomNumber();
    yellowCrystalRandomNumber();
}



// MAIN PROCESS
//=======================================================================================================
$(document).ready(function() {

    startGame();

    // When green crystal is picked...
    $("#green-crystal").on("click", function() {
        score += randomGreen;
        $("#score").text(score);
        if (score === randomNum) {
            alert("You win!");
            winCounter++;
            $("#winCounter").text(winCounter);
            resetGame();
        }

        else if (score >= randomNum) {
            alert("You Lose");
            lossCounter++;
            $("#lossCounter").text(lossCounter);
            resetGame();
        }
        
    });

    // When orange crystal is picked...
    $("#orange-crystal").on("click", function() {
        score += randomOrange;
        $("#score").text(score);
        if (score === randomNum) {
            alert("You win!");
            winCounter++;
            $("#winCounter").text(winCounter); 
            resetGame();          
        }

        else if (score >= randomNum) {
            alert("You Lose");
            lossCounter++;
            $("#lossCounter").text(lossCounter);
            resetGame();
        }

    });

    // When pink crystal is picked...
    $("#pink-crystal").on("click", function() {
        score += randomPink;
        $("#score").text(score);
        if (score === randomNum) {
            alert("You win!");
            winCounter++;
            $("#winCounter").text(winCounter);
            resetGame();
        }

        else if (score >= randomNum) {
            alert("You Lose");
            lossCounter++;
            $("#lossCounter").text(lossCounter);
            resetGame();
        }

    });

    // When yellow crystal is picked...
    $("#yellow-crystal").on("click", function() {
        score += randomYellow;
        $("#score").text(score);
        if (score === randomNum) {
            alert("You win!");
            winCounter++;
            $("#winCounter").text(winCounter);
            resetGame();
        }

        else if (score >= randomNum) {
            alert("You Lose");
            lossCounter++;
            $("#lossCounter").text(lossCounter);
            resetGame();
        }

    });

});
