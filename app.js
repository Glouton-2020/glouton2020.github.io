// console.log('Hello Scranton!');

//============
// Variables
//============

var wins = 0;
var guesses = 10;
var gameFinished = false;

//============
// Array of words
// ===========

var wordArray = ["kevin", "chili", "dwight", "beets", "jim", "michael"];
var wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(wordChoice);

var lettersUsed = [];

guessesFunction();

//========
// Start game when any key is pressed
//=======

document.onkeypress = function(event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    wordCheck(userGuess);
    drawPlaySpace();
};

// Remaining words function
function wordCheck(userGuess) {
    if (gameFinished === true) {
        resetFunction();
        return
    }
// AlphabetArray 
    var isItLetter = false;
    var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (i = 0; i < alphabetArray.length; i++) {
        if (userGuess === alphabetArray[i]) {
            isItLetter = true;
        }
    }
// Pick a letter function
// =======================
    if (isItLetter === false) {
        alert("No, God, Please No!, No!, No! Pick a letter");
        return;
    }

    var doesItMatch = false;
    for (i = 0; i < wordChoice.length; i++) {
        if (userGuess === wordChoice[i]) {
            doesItMatch = true;
            playSpace[i] = userGuess;
        }
    }

    var didWeWin = true;
    for (i = 0; i < wordChoice.length; i++) {
        if (playSpace[i] != wordChoice[i]) {
            didWeWin = false;
        }
    }
    if (didWeWin === true) {
        winnerFunction();
        return;
    }
    for (i = 0; i < lettersUsed.length; i++) {
    if (userGuess === lettersUsed[i]) {
        return;
        }
    }
    if (!doesItMatch) {
        guesses--;
        guessesFunction();
        lettersUsed.push(userGuess);
        lettersUsedFunction();
    }
    if (guesses === 0) {
        loserFunction();
        return;
    }
}

    function lettersUsedFunction() {
        document.getElementById("letters-used").innerHTML = lettersUsed;
    }

    function guessesFunction() {
        document.getElementById("guesses").innerHTML = guesses;
    }

    document.getElementById("current-word").innerHTML = playSpace;

    // Create Underscore 
    function drawBlanks() {
        var underscoreArray = [];
        for (i = 0; i < wordChoice.length; i++) {
            underscoreArray.push("_");
        }
        return underscoreArray;
    }

    var playSpace = drawBlanks();

    function drawPlaySpace() {
                for (i = 0; i < playSpace.length; i++) {
                    document.getElementById("current-word").innerHTML = playSpace.join(" ");
                }
            }

            drawPlaySpace();


// STATUS FUNCTION: WIN, LOSE DEFINED

    function winnerFunction() {
            switch (wordChoice) {

                    case "beets":
                        document.getElementById("wholeCast").style.visibility =  "hidden";
                        document.getElementById("beets").style.visibility =  "visible";
                        document.getElementById("textResultChange").innerHTML = "'Bears, Beets, Battlestar Galactica'";
                    break;

                    case "chili":
                        document.getElementById("wholeCast").style.visibility =  "hidden";
                        document.getElementById("chili").style.visibility =  "visible";
                        document.getElementById("textResultChange").innerHTML = "'The tragedy of Kevin's famous chili'";
                    break;

                    case "dwight":
                        document.getElementById("wholeCast").style.visibility =  "hidden";
                        document.getElementById("dwight").style.visibility =  "visible";
                        document.getElementById("textResultChange").innerHTML = "'Whenever i'm about to do something, I think, Would an idiot do that? And if they would, I do not do that thing.'";
                    break;

                    case "jim":
                        document.getElementById("wholeCast").style.visibility =  "hidden";
                        document.getElementById("jim").style.visibility =  "visible";
                        document.getElementById("textResultChange").innerHTML = "My job was to speak to clients about quantities and type of copier paper";
                    break;

                    case "kevin":
                        document.getElementById("wholeCast").style.visibility =  "hidden";
                        document.getElementById("kevin").style.visibility =  "visible";
                        document.getElementById("textResultChange").innerHTML = "I wanna be wined and dined and... sixty-nined";
                    break;

                    case "michael":
                        document.getElementById("wholeCast").style.visibility =  "hidden";
                        document.getElementById("michael").style.visibility =  "visible";
                        document.getElementById("textResultChange").innerHTML = "Would i rather be feared or loved? Easy - Both. I want people to be afraid of how much they love me";
                    break;
                }
                wins++;
                winsFunction();
            }

    function winsFunction() {
        document.getElementById("total-wins").innerHTML = wins;
        gameFinished = true;
    }

    function loserFunction() {
        if (guesses === 0) {
            document.getElementById("wholeCast").style.visibility = "hidden";
            document.getElementById("lost").style.visibility ="visible";
            document.getElementById("textResultChange").innerHTML = "Loser! Try Again!";
            gameFinished = true;
        }
    }

// Add Reset Function 

    function resetFunction() {

        document.getElementById("wholeCast").style.visibility = "visible";
        document.getElementById("lost").style.visibility = "hidden";
        document.getElementById("textResultChange").innerHTML ="";
        document.getElementById("beets").style.visibility = "hidden";
        document.getElementById("chili").style.visibility = "hidden";
        document.getElementById("dwight").style.visibility = "hidden";
        document.getElementById("jim").style.visibility = "hidden";
        document.getElementById("kevin").style.visibility = "hidden";
        document.getElementById("michael").style.visibility = "hidden";

        lettersUsed.length = 0;
        lettersUsedFunction();
        guesses = 10;
        guessesFunction();

        wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
        console.log(wordChoice);
        playSpace = drawBlanks();
        gameFinished = false;
    }