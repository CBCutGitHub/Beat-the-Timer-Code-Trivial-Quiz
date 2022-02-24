// Quiz questions and answer
var quizQuestions = [
    {
      title: "Which best describes a wireframe",
      selectFrom: ["conversion", "image holder", "schematic", "path"],
      answer: "alerts"
    },
    {
      title: "which is a responsive concept?",
      selectFrom: ["callout", "RWD", "card", "square brackets"],
      answer: "RWD"
    },
    {
      title: "div has no meaning but represents:",
      selectFrom: ["input", "children", "output", "submit"],
      answer: "children"
    },
    {
      title: "src attribute specifies the what of an external script:",
      selectFrom: ["webpage", "service", "URL", "link"],
      answer: "URL"
    },
    {
      title: "Input element represents what kind of data:",
      selectFrom: ["array data", "autofill data", "optional data", "typed data"],
      answer: "typed data"
    },
    {
      title: "What can floats be used for?",
      selectFrom: ["data storage", "images inside blocks", "place holders", "display lighter objects"],
      answer: "images inside blocks"
    }
    ]
var questions = document.getElementById("questions");
var timerdisplay= document.getElementById("time");
var questionchoices = document.getElementById("selectFrom");
var submit = document.getElementById("submitScores");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var score = document.getElementById ("final-score");
var QuestionIndex = 0;
var time = 60;
var timestate;
// Define time increments; no seconds left, quiz over and clear
function Incrementtime(){
time = time - 1
timerdisplay.textContent=time
if(time<=0){console.log("Quiz is over")
clearInterval(timestate)
}

}

// Start function that hide starts screen, starts time, and unhide questions
function StartQuiz(){
var startScreen = document.getElementById("start-screen")
startScreen.setAttribute("class", "hide")
timestate = setInterval(Incrementtime, 1000)
timerdisplay.textContent = time
questions.removeAttribute("class")
// call question function
displayQuestion ()
}
// Function to display questions
function displayQuestion(){

var currentQuestion = quizQuestions[QuestionIndex]
var title = document.getElementById("question-title")
title.textContent = currentQuestion.title
questionchoices.innerHTML = ""

// 
currentQuestion.selectFrom.forEach((choice) => {
    // create each choices as a button
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choices");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = choice;
    // create an event listener for each choices
    choiceNode.onclick = checkQuestion;
    // show on page
    questionchoices.appendChild(choiceNode);
})
}
// Function to check if question is right or wrong, penalize if wrong, cycle to next questions, and if no more questions, end quiz
function checkQuestion (){
    if (this.value !== quizQuestions[QuestionIndex].answer) {
        // time penalty
        time -= 10;
        if (time < 0) {
          time = 0;
        }
        // display updated time
        timerdisplay.textContent = time;
    alert("Incorrect! (review topic)")
      } else {
    alert("Correct!")
      }
      // move to next question
      QuestionIndex++;
      if (QuestionIndex === quizQuestions.length) {
        endQuiz()

          } else {
        displayQuestion();
      }
}
// End quiz function
function endQuiz(){console.log("quiz is over")
var endScreen=document.getElementById("end-screen")
endScreen.removeAttribute("class")
questions.setAttribute("class", "hide")
score.textContent=time
clearInterval(timestate)
}
function reloadQuiz(){
  window.location.reload()
}
//** WORKING on resolving the final score and functionality of the 
//initials, submit and save to local storage.
function saveScore (){

  var getinitials = initialsEl.value
  var userScore = {
    score:time,
    userName:getinitials
  }
// Upon load, get value in local storage; if no value, leave as empty array
  var scoreDisplay = JSON.parse(localStorage.getItem("userscores"))|| []
// If there is a new userscore, push to scoreDisplay array
    scoreDisplay.push(userScore)
// Set any userscores into localStorage with the label userscores
    localStorage.setItem("userscores", JSON.stringify(scoreDisplay))
  
}
function showscoreTable(){
  var scoreDisplay = JSON.parse(localStorage.getItem("userscores"))|| []
    scoreDisplay.forEach(function(newScore){
  var scoreList = document.getElementById("showscores")
  var scorelistItem = document.createElement("li")
    scorelistItem.textContent = newScore.userName + ": "+ newScore.score
    scoreList.appendChild(scorelistItem)
})
}
showscoreTable()
  startBtn.onclick = StartQuiz
  submit.onclick = saveScore