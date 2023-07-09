// defining set of questions
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
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
var mainStart = document.querySelector("#main-start");
var startBtn = document.querySelector("#start-btn");
var viewHighscore = document.querySelector("#viewHighScore");

// question container related var
var questionContainer = document.querySelector("#question-container")
var questionText = document.querySelector("#question-text");
var options = document.querySelector("#options");
var choiceA = document.querySelector("#choice-A");
var choiceB = document.querySelector("#choice-B");
var choiceC = document.querySelector("#choice-C");
var choiceD = document.querySelector("#choice-D");
var answerCheck = document.querySelector("#answer-check");

// results container related var
var results = document.querySelector("#results");
var score = document.querySelector("#score");
var initials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit-btn");

//declaring var
var questionArray = 0;
var correctAnswer = 0;

var timeCountdown = 45;
var timePenalty = 10;


// start timer function
startBtn.addEventListener("click", startTimer);

function startTimer() {
    timerInterval = setInterval(function () {
        timeCountdown--;
        timeLeft.textContent = timeCountdown;

        if (timeCountdown <= 0) {
            clearInterval(timerInterval);
            timeContainer.textContent = "Time's Up!";
            if (questionArray < questions.length - 1) {
                endQuiz();
            }
        }
    }, 1000);
    startQuiz();
}

// initiating questions
function startQuiz() {
    mainStart.style.display = "none";
    questionContainer.hidden = false;
    nextQuestion();
}

// function to display questions
function nextQuestion() {
    questionText.textContent = questions[questionArray].question;
    choiceA.textContent = questions[questionArray].choices[0];
    choiceB.textContent = questions[questionArray].choices[1];
    choiceC.textContent = questions[questionArray].choices[2];
    choiceD.textContent = questions[questionArray].choices[3];
}

// quiz options button function
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

function chooseA() { checkAnswer(0); }
function chooseB() { checkAnswer(1); }
function chooseC() { checkAnswer(2); }
function chooseD() { checkAnswer(3); }

// function to check answers
function checkAnswer(answer) {
    // add point to score if answer is correct
    if (questions[questionArray].answer === questions[questionArray].choices[answer]) {
        correctAnswer++;
        answerCheck.textContent = "✔️ Correct!"

        // deduct 10s if answer is incorrect
    } else {
        timeCountdown -= timePenalty;
        answerCheck.textContent = "❌ Incorrect! The correct answer is " + questions[questionArray].answer;
    }

    questionArray++;
    if (questionArray < questions.length) {
        nextQuestion();
    } else {
        endQuiz();
    }
}

// ends quiz when all questions are answered or time reaches 0
function endQuiz() {
    results.hidden = false;
    questionContainer.hidden = true;
    timeCountdown = 0
    score.textContent = correctAnswer;
    // console.log(correctAnswer);
}

// enter initials and store score into local storage
submitBtn.addEventListener("click", function(event){ 
    storeScore(event);
});

function storeScore(event) {
    event.preventDefault();

    if (initials.value === "") {
        alert("Please enter your initials.");
        return;
    }

    var savedScores = localStorage.getItem("savedScores");

    if (savedScores === null) {
        savedScores = [];
    } else {
        savedScores = JSON.parse(savedScores)
    }

    var userScore = {
        initials: initials.value,
        finalscore: score.textContent
    };

    savedScores.push(userScore);

    var scorelistString = JSON.stringify(savedScores);
    window.localStorage.setItem("savedScores", scorelistString);

    location.replace("assets/highscore.html");
}