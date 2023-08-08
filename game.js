
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = []; //here the pattern of that game is saved


var userClickedPattern = []; //At the top of the game.js file, create a new empty array with the name userClickedPattern.

// You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

// Create a new variable called level and start at level 0.
var level = 0;

// Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
    if (!started) {

        //The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

//Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

    //Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");

    //Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);

    //console.log(userClickedPattern);

    //In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
    playSound(userChosenColour);
    //Change the class on CSS   
    animatePress(userChosenColour);

});

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // Use jQuery to select the button with the same id as the randomChosenColour
    // Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
    playSound(randomChosenColour);
    // Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence
    checkAnswer(userClickedPattern.length - 1)
    
}

function checkAnswer(currentLevel){ //function called checkAnswer(), it should take one input with the name currentLevel
    // Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        // If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){

        // Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
            nextSequence();
        }, 1000);

        }
    } else {
        console.log("wrong");
    }
}

function playSound(name) {

    //Take the code we used to play sound in the nextSequence() function and add it to playSound().
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    //Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $("#" + currentColour).addClass("pressed");

    //To figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}