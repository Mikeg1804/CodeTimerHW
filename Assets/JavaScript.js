//variables for question and answers.
var question1 = "Commonly used data type DO NOT include:";
let question1Options = ["  Strings", " Boolean", " Alert", "Numbers "];
let answers = ["Alert", "parentheses", "all of the above", "console.log"];
var question2 = "The condition in an if/else statement is enclosed within___.";
let question2Options = [
  " quotes",
  " curly brackets",
  " parentheses",
  " square brackets",
];
var question3 = "Arrays in JavaScript can be used to store ___.";
let question3Options = [
  "numbers and strings",
  "other arrays",
  "booleans",
  "all of the above",
];
var question4 =
  "A very useful tool used during development and debugging for printing content to teh debugger is:";
let question4Options = [
  "JavaScript",
  "terminal/bash",
  "for loops",
  "console.log",
];

//Variables for score and name entries used at the end.
var score = "Score";
var nameRequest = "Enter Name";

var questionNumber = 1;

// Variables used to link various things to HTML
var timerInterval;
var timeEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var nameEl = document.getElementById("name");
var start = document.getElementById("button");
var nameInputEl = document.getElementById("nameinput");
var nameInputElHide = nameInputEl.classList.add("hide");
var saveScoreEl = document.getElementById("submit")
saveScoreEl.classList.add("hide")

var secondsLeft = 50;

// Event Listenter function to start quiz and hide star quiz button.
start.addEventListener("click", function () {
  setTime();
  setQuestion();
  start.classList.add("hide");
});

function setTime() {
  secondsLeft = 50;

  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
    if (questionNumber > 4) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
    // moves time as score to the place where question options used to show up
    if (questionNumber > 4) {
      optionsEl.textContent = secondsLeft;
    }
    // makes the work score comes out.
    if (questionNumber > 4) {
      questionEl.textContent = score;
    }
    // Makes the phrase Enter Name shows
    if (questionNumber > 4) {
      nameEl.textContent = nameRequest;
    }
    // Makes the Entry box show up
    if (questionNumber > 4) {
      saveScoreEl.classList.remove("hide")
      nameInputElHide = nameInputEl.classList.remove("hide");
    }
    // Hides time on the top right coner since time is now in the middle as score.
    if (questionNumber > 4) {
      timeEl.classList.add("hide");
    }
  }, 1000);
}

// Function to display various answers with the right quesitons.
function setQuestion() {
  var questionTitle = "";
  var options = [];
  if (questionNumber === 1) {
    questionTitle = question1;
    options = question1Options;
  } else if (questionNumber === 2) {
    questionTitle = question2;
    options = question2Options;
  } else if (questionNumber === 3) {
    questionTitle = question3;
    options = question3Options;
  } else if (questionNumber === 4) {
    questionTitle = question4;
    options = question4Options;
  }
  questionEl.textContent = questionTitle;
  optionsEl.innerHTML = "";

  //This for loop below embed the event listener that captures the answers from the user.
  for (let index = 0; index < options.length; index++) {
    const element = options[index];
    var button = document.createElement("button");
    button.textContent = element;
    button.addEventListener("click", checkAnswer);
    optionsEl.append(button);
  }
}

// function to check answers once they are answered.
function checkAnswer(event) {
  var useranswer = event.target.innerText;
  var answer = answers[questionNumber - 1];
  if (useranswer === answer) {
    alert("correct");
  } else {
    alert("incorrect");
    secondsLeft = secondsLeft - 5;
  }
  questionNumber++;
  setQuestion();
}


saveScoreEl.addEventListener("click",function(){
  var user = nameInputEl.value
  var highScoreList = JSON.parse(localStorage.getItem("highScore")) || []
  highScoreList.push({
    user:user,score:secondsLeft
  })
  localStorage.setItem("highScore",JSON.stringify(highScoreList))
  saveScoreEl.classList.add("hide")
  document.querySelector("table").classList.remove("hide")
  var htmlText = ""
  for(let i=0;i<highScoreList.length;i++){
    htmlText += `<tr>
    <td>${highScoreList[i].user}</td>
    <td>${highScoreList[i].score}</td>`
  }
  document.getElementById("score-list").innerHTML = htmlText
}
)