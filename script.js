
//Buttons variables
var startBtn = document.querySelector("#start-btn");
var submitBtn = document.querySelector("#submit-btn");
var clearBtn = document.querySelector("#clear-btn");
var backBtn = document.querySelector("#back-btn");
//
var timeEl = document.querySelector(".time");
var timeLeft = 60;
var scoreEl = document.querySelector(".highscores");
var initials = [""];



var questions = ["____ is the main character in Demon Slayer.", "Nezuko was turned into a demon by ______.", "Muzan Kibutsuji is able to ______ demons?", "What colors are Rengoku's hair?", "Kagaya is the _____ of the Hashira.", "What did Rui want most of all?", "What kind of mask does Inosuke wear?", "How many Hashira are there in the demon slayer corps?", "What rank is Gyutaro among the demons?", "What color was Tanjiro's sword after it was made?"];

var answers = ["Tanjiro", "Muzan", "All of the above", "Yellow and Red", "Leader", "A family", "Boar mask", "Nine", "Upper Six", "Black"];


startBtn.addEventListener("click", startGame);

function startGame() {
console.log("started");

}

backBtn.addEventListener("click", starOver);

function starOver () {
console.log("return");
}

submitBtn.addEventListener("click", results);

function results() {
    console.log("the results");
}


clearBtn.addEventListener("click", erase);

function erase() {
    console.log("deleted");
}

startButton.addEventListener("click", function(setTime) {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = "Time:" + timeLeft;

        

        if (timeLeft === 0) {
            
            clearInterval(timerInterval);
        
            sendMessage();
        }

    }, 1000);
});




setTime();


