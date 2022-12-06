//Button variables
var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var submitBtn = document.getElementById("submit-btn");
var clearBtn = document.getElementById("clear-btn");
var backBtn = document.getElementById("back-btn");
var introEl = document.getElementById("intro");
var btn = document.getElementById("answer-buttons");
//
var titleEl = document.getElementsByClassName("title");
var questionContainerElement = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer-buttons");
var timeEl = document.querySelector(".time");
var timeLeft = 60;
var scoreEl = document.querySelector(".highscores");
var initials = [""];
let shuffledQuestions, currentQuestionIndex;

//start button listener as well as the function that it runs

startBtn.addEventListener("click", startGame);

function startGame() {
   console.log("started");
   startBtn.classList.add("hide");
   introEl.classList.add("hide");
   shuffledQuestions = question.sort(() => Math.random() - .5);
   currentQuestionIndex = 0;
   questionContainerElement.classList.remove("hide");


   nextQuestion();
}

// goes to next question

nextBtn.addEventListener("click", () => {
   currentQuestionIndex++;
   nextQuestion();
});

function nextQuestion() {
   resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex]);
}


// function that grabs each question and also randomizes them

function showQuestion(question) {
   questionEl.innerText = question.question;
   question.answers.forEach(answer => {
      var button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
         button.dataset.correct = answer.correct
      }
      button.addEventListener("click", selectAnswer);
      answerEl.appendChild(button);
   })
}

function resetState() {
   nextBtn.classList.add("hide");
   while (answerEl.firstChild) {
      answerEl.removeChild
         (answerEl.firstChild);
   }
}
function selectAnswer(e) {
   var selectedBtn = e.target
   var correct = selectedBtn.dataset.correct
   Array.from(answerEl.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
   })
   if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextBtn.classList.remove("hide")
   } else {
      startBtn.innerText = "Go Back"
      startBtn.classList.remove("hide");
   }
}

function setStatusClass(element, correct) {
   clearStatusClass(element);
   if (correct) {
      element.classList.add("correct")
   } else {
      element.classList.add("wrong");
   }

}

function clearStatusClass(element) {
   element.classList.remove("correct")
   element.classList.remove("wrong")
}

backBtn.addEventListener("click", starOver);

function starOver() {
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




// This is my array of objects that hold all of my questions, answers, as well as true and false responses

const question = [
   {
      question: "____ is the main character in Demon Slayer.",
      answers: [
         { text: "Tanjiro", correct: true },
         { text: "nezuko", correct: false },
         { text: "Inoskue", correct: false },
         { text: "Muzan", correct: false }
      ]
   },

   {
      question: "Nezuko was turned into a demon by ______.",
      answers: [
         { text: "Hotaru", correct: false },
         { text: "Her mother", correct: false },
         { text: "Rui", correct: false },
         { text: "Muzan", correct: true }
      ]
   },

   {
      question: "Muzan Kibutsuji is able to ______ demons?",
      answers: [
         { text: "Turn people into demons", correct: false },
         { text: "Heal", correct: false },
         { text: "All of the above", correct: true },
         { text: "Make demons stronger", correct: false }
      ]
   },

   {
      question: "What colors are Rengoku's hair?",
      answers: [
         { text: "Yellow and Red", correct: true },
         { text: "Blue", correct: false },
         { text: "Orange", correct: false },
         { text: "Orange and green", correct: false }
      ]
   },

   {
      question: "Kagaya is the _____ of the Hashira.",
      answers: [
         { text: "Maid", correct: false },
         { text: "Leader", correct: true },
         { text: "Assasin", correct: false },
         { text: "Medical aid", correct: false }
      ]
   },

   {
      question: "What did Rui want most of all?",
      answers: [
         { text: "Money", correct: false },
         { text: "Power", correct: false },
         { text: "Vengence", correct: false },
         { text: "family", correct: true }
      ]
   },

   {
      question: "What kind of mask does Inosuke wear?",
      answers: [
         { text: "Elephant", correct: false },
         { text: "Boar", correct: true },
         { text: "Eagle", correct: false },
         { text: "Snake", correct: false }
      ]
   },

   {
      question: "How many Hashira are there in the demon slayer corps?",
      answers: [
         { text: "Seven", correct: false },
         { text: "Nine", correct: true },
         { text: "Twelve", correct: false },
         { text: "Four", correct: false }
      ]
   },

   {
      question: "What rank is Gyutaro among the demons?",
      answers: [
         { text: "Upper Twelve", correct: false },
         { text: "Upper Eight", correct: false },
         { text: "Lower Sex", correct: false },
         { text: "Upper Six", correct: true }
      ]
   },

   {
      question: "What color was Tanjiro's sword after it was made?",
      answers: [
         { text: "Red", correct: false },
         { text: "Black", correct: true },
         { text: "Purple", correct: false },
         { text: "Green", correct: false }
      ]
   }
]



















startBtn.addEventListener("click", function (setTime) {

   var timerInterval = setInterval(function () {
      timeLeft--;
      timeEl.textContent = "Time:" + timeLeft;



      if (timeLeft === 0) {

         clearInterval(timerInterval);

         sendMessage();
      }

   }, 1000);
});




//setTime();


