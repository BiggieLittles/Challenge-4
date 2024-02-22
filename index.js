var question1 = {
    question: "Who won the superbowl this year?",
    options: ["Panthers", "CowGirls", "Bills", "Refs"],
    answer: "Refs"
};

document.getElementById("question").innerText = question1.question;
document.getElementById("option1").innerText = question1.options[0];
document.getElementById("option2").innerText = question1.options[1];
document.getElementById("option3").innerText = question1.options[2];
document.getElementById("option4").innerText = question1.options[3];

function checkAnswer(userAnswer) {
    if (userAnswer === question1.answer) {
        alert("Correct!");
    } else {
        alert("Sorry, that's not correct.");
    }
}var score = 0;

function checkAnswer(userAnswer) {
    if (userAnswer === question1.answer) {
        alert("Correct!");
        score = score + 1;
    } else {
        alert("Sorry, that's not correct.");
    }
}

function nextQuestion(question2) {
    document.getElementById("question").innerText = question2.question;
    document.getElementById("option1").innerText = question2.options[0];
    document.getElementById("option2").innerText = question2.options[1];
    document.getElementById("option3").innerText = question2.options[2];
    document.getElementById("option4").innerText = question2.options[3];
}


var question2 = {
    question: "Who won the superbowl this year?",
    options: ["Panthers", "CowGirls", "Bills", "Refs"],
    answer: "Refs"
};


var currentQuestion = 0;

function checkAnswer(userAnswer) {
    if (userAnswer === questions[currentQuestion].answer) {
        alert("Correct!");
        score = score + 1;
    } else {
        alert("Sorry, that's not correct.");
    }

    currentQuestion = currentQuestion + 1;
    nextQuestion(questions[currentQuestion]);
}


var div = document.createElement('div');
div.setAttribute(
    'style', 
    'font-size: 48px; width: 200px; height: 200px; display: flex; background-color: aqua; justify-content: right;'
);

document.body.appendChild(div);

var time = 60;
 
var countdown = function () {
time--;
  console.log(time);
  div.textContent= time;
  if (time < 0) {
    // stop the timer
    clearInterval(intervalRef)
  }
};

countdown();
var intervalRef = setInterval(countdown, 500)
