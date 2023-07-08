// defining set of questions
var questions = [
    {
        question: "Is JavaScript case-sensitive?",
        choices: ["a. Yes", "b. No"],
        answer: "a. Yes"
    },

    {
        question: "Inside which HTML elemend do we put the JavaScript?",
        choices: ["a. <js>", "b. <script>", "c. <scripting>", "d. <javascript>"],
        answer: "b. <script>"
    },
    {
        question: "Where is the correct place to inser a Javascript?",
        choices: ["a. The <head> section", "b. The <body> section", "c. Both the <head> and <body> section", "d. The <footer> section"],
        answer: "c. Both the <head> and <body> section"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js?'",
        choices: ["a. <script href='xxx.js'>", "b. <script name='xxx.js'>", "c. <script src='xxx.js'>", "d. <script type='xxx.js'>"],
        answer: "c. <script src='xxx.js'>"
    },
    {
        question: "how do you write 'Hello World' in an alert box?",
        choices: ["a. alertBox('Hello World');", "b. msgBox('Hello World');", "c. msg('Hello World');", "d. alert('Hello World');"],
        answer: "d. alert('Hello World');"
    },
    {
        question: "How do you create a fucntion in JavaScript?",
        choices: ["a. function myFunction()", "b. function = myFunction()", "c. function:myFunction()", "d. create myFunction()"],
        answer: "a. function myFunction()"
    },
    {
        question: "How can you add a comment in JavaScript?",
        choices: ["a. <!--This is a comment-->", "b. 'This is a comment'", "c. //This is a comment", "d. /*This is a comment*/"],
        answer: "c. //This is a comment"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choices: ["a. var colors = ['red','green','blue']", "b. var colors = 'red','green','blue'", "c. var colors = (1:'red',2:'green',3:'blue')", "d. var colors = 1=('red'),2=('green'),3=('blue')"],
        answer: "a. var colors = ['red','green','blue']"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element",
        choices: ["a. onmouseclick", "b. onclick", "c. onmouseover", "d. onchange>"],
        answer: "b. onclick"
    },
    {
        question: "How do you declare a JavaScript variable?",
        choices: ["a. v carName;", "b. var carName;", "c. vrb carName;", "d. variable carName;>"],
        answer: "b. var carName;"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choices: ["a. -", "b. x", "c. *", "d. ="],
        answer: "d. ="
    },
]

// time related var
var timeContainer = document.querySelector("#time-container");
var timeLeft = document.querySelector("#time-left");

// start container related var
var starter = document.querySelector("#starter");
var startBtn = document.querySelector("#start-btn");
var viewHighscore = document.querySelector("#viewHighScore");

// question container related var
var questionContainer = document.querySelector("#question-container");
var question = document.querySelector("#question");
// var options = document.querySelector("#options");
var optionA = document.querySelector("#option-A");
var optionB = document.querySelector("#option-B");
var optionC = document.querySelector("#option-C");
var optionD = document.querySelector("#option-D");
var answerCheck = document.querySelector("#answer-check");

//declaring var
var score;
var questionArray;

var timeCountdown = 45;
var timePenalty = 10;


// start timer function

startBtn.addEventListener("click", startQuiz)

function startQuiz() {
        timerInterval = setInterval(function () {
            timeCountdown--;
            timeLeft.textContent = timeCountdown;

            if (timeLeft === 0) {
                clearInterval(timerInterval);
                timeLeft.textContent = "Time's Up!";
            }
        }, 1000);
};