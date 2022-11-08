

var questionDiv = document.getElementById("question");
var choices =document.getElementById("choiceList");
var btnStart=document.getElementById("btnStart");
var ans = document.getElementById("checkans");
var Qsection=document.getElementById("sectionQ");
var scoreSection=document.getElementById("sectionScore");
var totScore=document.getElementById("totalScore");
var currentQues = 0;
var totalScore=0;

var questionList = [
    {
        question: "String values must be enclosed within _________ when being assigned to variables.",
        option: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c"
    },
    {
        question: "Commonly used data types DO NOT include:",
        option: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c"
    },
    {
        question: "How do you create a function in JavaScript",
        option: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b"
    },
    {
        question: "How do you call a function named myFunction?",
        option: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use _______.",
        option: ["a. =", "b. ==", "c. 'equals'", "d. !="],
        answer: "b"
    },
    {
        question: "The first index of an array is ________.",
        option: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        option: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        option: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a"
    }
];


var remainingTime=document.getElementById("timer");

var sec=60;

function startTimer() {
    var timer = setInterval(function () {
        sec--;
        remainingTime.textContent = "Time left: " + sec + " s"

        if (sec <=0) {
            clearInterval(timer);
            sec.textContent="Time is Up";
            endQuiz();
        }
        else if(currentQues >= questionList.length-1) {
            clearInterval(timer);
            endQuiz();
        }
        
    },1000)
};

function displayQuestion(questionNum) {
    choices.innerHTML="";
    choices.style.display="block";
    questionDiv.innerHTML= questionList[questionNum].question;
    for (let index = 0; index < questionList[questionNum].option.length; index++) {
        var li = document.createElement("li");
        var btnEL=document.createElement("button");
        btnEL.textContent=questionList[questionNum].option[index];
        //btnEL.setAttribute("data-id",index);
        btnEL.id="btn"+(index+1);
        btnEL.value = questionList[questionNum].option[index].charAt(0);
        btnEL.classList.add("options");
        btnEL.classList.add("btn");
        choices.appendChild(li);
        li.appendChild(btnEL);
    }
    currentQues=questionNum;
}

function startQuiz() {
    Qsection.style.display = "block";
    currentQues=0;
    startTimer();
    displayQuestion(currentQues);
}

function endQuiz() {
    Qsection.style.display = "none";
    scoreSection.style.display="block";
    totScore.textContent="Your score is : " + totalScore;
    remainingTime.style.display="none";
}

function userInput(event) {
    event.preventDefault();
    if (questionList[currentQues].answer == event.target.value) {
        ans.textContent="Correct.";
        totalScore=totalScore+1;
    }
    else {
        sec = sec - 5 ;
        ans.textContent = "Wrong!";
    }
    choices.innerHTML="";
    if (currentQues < questionList.length-1) {
        displayQuestion(currentQues+1);
    }
    else {
        endQuiz();
    }
}







btnStart.addEventListener("click",startQuiz);
choices.addEventListener(`click`, userInput); 
