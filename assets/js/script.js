// Add questions and global variables that reference html elements
var quizQuestions = [
    {
     title: "Commonly used data types DO NOT include:",
     choices: ["strings", "booleans", "alerts", "numbers"],
     answer: "alerts"
    },
    {
     title: "The condition in an if / else statement is enclosed within ____.",
     choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
     answer: "parentheses"
    }
   ]
var questions = document.getElementById("questions");
var timerdisplay= document.getElementById("time");
var questionchoices = document.getElementById("choices");
var submit = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var QuestionIndex = 0;
var time = 60;
var timestate;
// Define time increments
function Incrementtime(){
time = time - 1
timerdisplay.textContent=time
if(time<=0){console.log("Quiz is over")}

}

// Start function that hide starts screen, starts time, and unhide questions
function StartQuiz(){
var startScreen = document.getElementById("start-screen")
startScreen.setAttribute("class", "hide")
timestate = setInterval(Incrementtime, 1000)
timerdisplay.textContent = time
questions.removeAttribute("class")
// call question function
displayQuestions ()
}
// Function to display questions
function displayQuestions(){
var QuestionIndex = 0;
var currentQuestion = quizQuestions[QuestionIndex]
var title = document.getElementById("question-title")
title.textContent = currentQuestion.title
}

// Function to check if question is right or wrong, penalize if wrong, cycle to next questions, and if no more questions, end quiz

// End quiz function





// line 19 html and line 6 script.js
startBtn.onclick = StartQuiz