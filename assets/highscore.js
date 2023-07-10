// highscore var
var highscoreLi = document.querySelector("#highscore-list");
var backBtn = document.querySelector("#back-btn");
var clearBtn = document.querySelector("#clear-btn");


// retrieve local stroage 
var savedScores = localStorage.getItem("savedScores");
savedScores = JSON.parse(savedScores);


// setting stored items into list 
if (savedScores !== null) {

    // sorts stored scores from highest to lowest
    savedScores.sort(function (a, b) {
        return parseFloat(b.finalscore) - parseFloat(a.finalscore);
    });

    // appends score to the initials
    for (var i = 0; i < savedScores.length; i++) {

        var scoreLi = document.createElement("li");
        scoreLi.textContent = savedScores[i].initials + ": " + savedScores[i].finalscore;
        highscoreLi.appendChild(scoreLi);
    }
}

// event listener to move to index page
backBtn.addEventListener("click", function () {
    location.replace("../index.html");
});

// event listener to clear scores 
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});