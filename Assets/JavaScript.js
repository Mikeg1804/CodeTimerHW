var question1 = "Commonly used data type DO NOT include:"
let question1Options = ["  Strings"," Boolean"," Alert","Numbers "]
let answers = ["Alert","parentheses", "all of the above","console.log"]
var question2 = "The condition in an if/else statement is enclosed within___."
let question2Options = [" quotes", " curly brackets"," parentheses", " square brackets"]
var question3 = "Arrays in JavaScript can be used to store ___."
let question3Options = ["numbers and strings", "other arrays", "booleans", "all of the above"]
var question4 = "A very useful tool used during development and debugging for printing content to teh debugger is:"
let question4Options =["JavaScript", "terminal/bash", "for loops", "console.log"]
var finish = "All done!"
let finalScore = "Your final score is"
const initials = "Enter initals:"
var highscores = "Highscores"
let scoreDisplay = []

var questionNumber = 1

var timerInterval;
var timeEl = document.getElementById ("timer")
var questionEl = document.getElementById("question")
var optionsEl = document.getElementById("options")

var start = document.getElementById("button")

var secondsLeft = 50;

start.addEventListener("click", function () {
    setTime()
    setQuestion()
    start.classList.add("hide");
})   

function setTime() {
    secondsLeft =50;
    // Sets interval in variable
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
    
      }
  
    }, 1000);
  }

  //question.textContent = [question1+unCommonDataType]
  function setQuestion() {
    var questionTitle='';
    var options = []
    if(questionNumber ===1) {
    questionTitle=question1;
    options=question1Options;
    }
    else if(questionNumber ===2) {
        questionTitle=question2;
        options=question2Options;
        }
    else if(questionNumber ===3) {
        questionTitle=question3;
        options=question3Options;
        }
    else if(questionNumber ===4) {
        questionTitle=question4;
        options=question4Options;
        }
    questionEl.textContent=questionTitle
    optionsEl.innerHTML=''
    for (let index = 0; index < options.length; index++) {
        const element = options[index];
        var button = document.createElement('button') 
        button.textContent = element
        button.addEventListener("click",checkAnswer)
        optionsEl.append(button)   
    }
  }
  function checkAnswer(event){
    var useranswer=event.target.innerText
    var answer = answers [questionNumber -1]
    if(useranswer===answer){
        alert("correct")
    }
    else {
        alert("incorrect")
        secondsLeft=secondsLeft-5
    }
    questionNumber++
    setQuestion()
  }