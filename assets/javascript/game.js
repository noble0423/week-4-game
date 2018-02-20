
// VARIABLES
//=======================================================================================================
// ... we generate a random number for computer
var randomNum = Math.floor(Math.random() * 101) + 19;
// ... we generate a random number for ea crystal
var randomGreen = Math.floor(Math.random() * 12) + 1;
var randomOrange = Math.floor(Math.random() * 12) + 1;
var randomPink = Math.floor(Math.random() * 12) + 1;
var randomYellow = Math.floor(Math.random() * 12) + 1;
var counter = 0;
var winCounter = 0;
var lossCounter = 0;
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


// Start Game

// Reset



// MAIN PROCESS
//=======================================================================================================
$(document).ready(function() {

    //generateRandomValue();

    // When random-button is clicked...
    $("#random-button").on("click", function() {
        //console.log("random number is " + randomNum + ".");
        // ... and then dump the random number into our random-number div.
        //$("#random-number").text(randomNum);
        console.log("Random computer # is " + randomNum + ".");
        $("#random-number").text(randomNum);

    });

    // When crystals are clicked...
    //$(".crystal-image").on("click", function() {
    //    console.log("button clicked");
    //});

    // When green crystal is picked...
    $("#green-crystal").on("click", function() {
        // Assign var randomGreen to crystal
        //console.log("green clicked and assigned " + randomGreen + ".");
        counter += randomGreen;
        //console.log("New score: " + counter + ".");
        $("#score").text(counter);
        if (counter === randomNum) {
            alert("You win!");
            winCounter++;
            //console.log("Win counter = " + winCounter + ".");
            $("#winCounter").text(winCounter);
        }

        else if (counter >= randomNum) {
            alert("You Lose");
            lossCounter++;
            //console.log("Loss counter = " + lossCounter + ".");
            $("#lossCounter").text(lossCounter);
        }
        //var runningScore = score + randomGreen;
        //console.log("total score = " + runningScore + ".");
        
    });

    // When orange crystal is picked...
    $("#orange-crystal").on("click", function() {
        // Assign var randomOrange to crystal
        console.log("orange clicked and assigned " + randomOrange + ".");
        counter += randomOrange;
        console.log("New score: " + counter + ".");
        $("#score").text(counter);
        if (counter === randomNum) {
            alert("You win!");
            winCounter++;
            //console.log("Win counter = " + winCounter + ".");
            $("#winCounter").text(winCounter);           
        }

        else if (counter >= randomNum) {
            alert("You Lose");
            lossCounter++;
            //console.log("Loss counter = " + lossCounter + ".");
            $("#lossCounter").text(lossCounter);
        }

    });

    // When pink crystal is picked...
    $("#pink-crystal").on("click", function() {
        // Assign var randomPink to crystal
        console.log("pink clicked and assigned " + randomPink + ".");
        counter += randomPink;
        console.log("New score: " + counter + ".");
        $("#score").text(counter);
        if (counter === randomNum) {
            alert("You win!");
            winCounter++;
            //console.log("Win counter = " + winCounter + ".");
            $("#winCounter").text(winCounter);
        }

        else if (counter >= randomNum) {
            alert("You Lose");
            lossCounter++;
            //console.log("Loss counter = " + lossCounter + ".");
            $("#lossCounter").text(lossCounter);
        }

    });

    // When yellow crystal is picked...
    $("#yellow-crystal").on("click", function() {
        // Assign var randomYellow to crystal
        console.log("yellow clicked and assigned " + randomYellow + ".");
        counter += randomYellow;
        console.log("New score: " + counter + ".");
        $("#score").text(counter);
        if (counter === randomNum) {
            alert("You win!");
            winCounter++;
            //console.log("Win counter = " + winCounter + ".");
            $("#winCounter").text(winCounter);
        }

        else if (counter >= randomNum) {
            alert("You Lose");
            lossCounter++;
            //console.log("Loss counter = " + lossCounter + ".");
            $("#lossCounter").text(lossCounter);
        }

    });

});
