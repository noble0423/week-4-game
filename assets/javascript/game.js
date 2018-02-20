
// VARIABLES
//=======================================================================================================
var randomNum;
// ... we generate a random number for ea crystal
var randomGreen;
var randomOrange;
var randomPink;
var randomYellow;
var score;
var winCounter;
var lossCounter;
//var testNumber = 50;


// FUNCTIONS
//=======================================================================================================
// Generate random computer pick

// Generate random point value for ea crystal 
//function generateRandomValue() {
//    var numOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
//        for (i = 0; i < 4; i++) {
//            numOptions = Math.floor(Math.random());  
//            console.log(numOptions);
        
//        }
// Computer picks Random number
function computerRandomNumber () {
    // ... we generate a random number for computer
    randomNum = Math.floor(Math.random() * 101) + 19;
    console.log("Computer's random number is " + randomNum + ".");
    $("#random-button").on("click", function() {
        // ... and then dump the random number into our random-number div.
        //console.log("Random computer # is " + randomNum + ".");
        $("#random-number").text(randomNum);

    });
}

function greenCrystalRandomNumber () {
    // ... we generate a random number for green crystal
    randomGreen = Math.floor(Math.random() * 12) + 1;
    //console.log("Green crystal equals " + randomGreen + ".");
}

function orangeCrystalRandomNumber () {
    // ... we generate a random number for green crystal
    randomOrange = Math.floor(Math.random() * 12) + 1;
    //console.log("Orange crystal equals " + randomOrange + ".");
}

function pinkCrystalRandomNumber () {
    // ... we generate a random number for green crystal
    randomPink = Math.floor(Math.random() * 12) + 1;
    //console.log("Pink crystal equals " + randomPink + ".");
}

function yellowCrystalRandomNumber () {
    // ... we generate a random number for green crystal
    randomYellow = Math.floor(Math.random() * 12) + 1;
    //console.log("Yellow crystal equals " + randomYellow + ".");
}

// Start Game brand new
function startGame() {
    score = 0;
    //console.log("score STARTS at " + score + ".");
    $("#score").text(score);
    
    winCounter = 0;
    //console.log("win counter STARTS at " + winCounter + ".");
    $("#winCounter").text(winCounter);
    
    lossCounter = 0;
    //console.log("loss counter STARTS at " + lossCounter + ".");
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
    //console.log("score is RESET " + score + ".");
    $("#score").text(score);
    //console.log("computer's # and all crystal's #'s have been RESET.")

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

    // When random-button is clicked...
    //$("#random-button").on("click", function() {
        //console.log("random number is " + randomNum + ".");
        // ... and then dump the random number into our random-number div.
        //$("#random-number").text(randomNum);
        //console.log("Random computer # is " + randomNum + ".");
        //$("#random-number").text(randomNum);

    //});

    // When crystals are clicked...
    //$(".crystal-image").on("click", function() {
    //    console.log("button clicked");
    //});

    // When green crystal is picked...
    $("#green-crystal").on("click", function() {
        // Assign var randomGreen to crystal
        //console.log("green clicked and assigned " + randomGreen + ".");
        score += randomGreen;
        //console.log("New score: " + score + ".");
        $("#score").text(score);
        if (score === randomNum) {
            alert("You win!");
            winCounter++;
            //console.log("Win counter = " + winCounter + ".");
            $("#winCounter").text(winCounter);
            resetGame();
        }

        else if (score >= randomNum) {
            alert("You Lose");
            lossCounter++;
            //console.log("Loss counter = " + lossCounter + ".");
            $("#lossCounter").text(lossCounter);
            resetGame();
        }
        //var runningScore = score + randomGreen;
        //console.log("total score = " + runningScore + ".");
        
    });

    // When orange crystal is picked...
    $("#orange-crystal").on("click", function() {
        // Assign var randomOrange to crystal
        //console.log("orange clicked and assigned " + randomOrange + ".");
        score += randomOrange;
        //console.log("New score: " + score + ".");
        $("#score").text(score);
        if (score === randomNum) {
            alert("You win!");
            winCounter++;
            //console.log("Win counter = " + winCounter + ".");
            $("#winCounter").text(winCounter); 
            resetGame();          
        }

        else if (score >= randomNum) {
            alert("You Lose");
            lossCounter++;
            //console.log("Loss counter = " + lossCounter + ".");
            $("#lossCounter").text(lossCounter);
            resetGame();
        }

    });

    // When pink crystal is picked...
    $("#pink-crystal").on("click", function() {
        // Assign var randomPink to crystal
        //console.log("pink clicked and assigned " + randomPink + ".");
        score += randomPink;
        //console.log("New score: " + score + ".");
        $("#score").text(score);
        if (score === randomNum) {
            alert("You win!");
            winCounter++;
            //console.log("Win counter = " + winCounter + ".");
            $("#winCounter").text(winCounter);
            resetGame();
        }

        else if (score >= randomNum) {
            alert("You Lose");
            lossCounter++;
            //console.log("Loss counter = " + lossCounter + ".");
            $("#lossCounter").text(lossCounter);
            resetGame();
        }

    });

    // When yellow crystal is picked...
    $("#yellow-crystal").on("click", function() {
        // Assign var randomYellow to crystal
        //console.log("yellow clicked and assigned " + randomYellow + ".");
        score += randomYellow;
        //console.log("New score: " + score + ".");
        $("#score").text(score);
        if (score === randomNum) {
            alert("You win!");
            winCounter++;
            //console.log("Win counter = " + winCounter + ".");
            $("#winCounter").text(winCounter);
            resetGame();
        }

        else if (score >= randomNum) {
            alert("You Lose");
            lossCounter++;
            //console.log("Loss counter = " + lossCounter + ".");
            $("#lossCounter").text(lossCounter);
            resetGame();
        }

    });

});
