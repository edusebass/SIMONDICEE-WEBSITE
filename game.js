
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = []; //here the pattern of that game is saved

//At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

//Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

    //Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");

    //Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);

    //console.log(userClickedPattern);

    //In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
    playSound(userChosenColour);

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

    
}

///function called playSound() that takes a single input parameter called name.
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