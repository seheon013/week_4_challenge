var all_questions = [{
    question_string: "What color is the sky?",
    choices: {
      correct: "Blue",
      wrong: ["Pink", "Orange", "Green"]
    }
  }, {
    question_string: "Which of the following elements aren’t introduced in HTML5?",
    choices: {
      correct: "<input>",
      wrong: ["<article>", "<footer>", "<hgroup>"]
    }
  }, {
    question_string: "How many wheels are there on a tricycle?",
    choices: {
      correct: "Three",
      wrong: ["One", "Two", "Four"]
    }
  }, {
    question_string: 'Who is the main character of Harry Potter?',
    choices: {
      correct: "Harry Potter",
      wrong: ["Hermione Granger", "Ron Weasley", "Voldemort"]
    }
}, {
    question_string: 'In 1768, Captain James Cook set out to explore which ocean?',
    choices: {
      correct: "Pacific Ocean",
      wrong: ["Atlantic", "Indian", "Arctic"]
    }
}, {
    question_string: 'What is actually electricity?',
    choices: {
      correct: "Water",
      wrong: ["Air", "Electron", "Atoms"]
    }
}, {
    question_string: 'Which of the following is not an international organisation?',
    choices: {
      correct: "FBI",
      wrong: ["FIFA", "NATO", "ASEAN"]
    }
}, {
    question_string: 'What is the speed of sound?',
    choices: {
      correct: "1200km/h",
      wrong: ["120km/h", "12km/m", "120m/s"]
    }
}, {
    question_string: 'How many days in a year?',
    choices: {
      correct: "365",
      wrong: ["366", "150", "125"]
    }
}, {
    question_string: 'How many minutes in a hour?',
    choices: {
      correct: "60",
      wrong: ["50", "70", "30"]
    }
}];
  
var timeEl = document.getElementById('timeleft');
var questionEl = document.querySelector("#question")
var option1El = document.querySelector("#option1")
var option2El = document.querySelector("#option2")
var option3El = document.querySelector("#option3")
var option4El = document.querySelector("#option4")
var quizEl = document.querySelector("#quiz")
var scoreEl = document.querySelector("#highscore")
var score = 0
var q = 0
var play = true 
var correctEl = document.getElementById('correct')
var startEl = document.querySelector("#startbtn")
function countdown() {
    var timeLeft = 10;
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timeEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
   
        timeEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timeEl.textContent = ' ';
        questionEl.textContent = all_questions[0].question_string;
        clearInterval(timeInterval);
        displayMessage();      
      }
    }, 1000);
  }
function displayMessage(){
    questionEl.textContent = "TIME OUT"
    option1El.remove()
    option2El.remove()
    option3El.remove()
    option4El.remove()
}
function quizstart() {
    countdown()
    questionstart(0)
    check()
}
function questionstart(q){
    questionEl.textContent = all_questions[q].question_string;
    option1El.textContent = 'a. '+ all_questions[q].choices.correct;
    option2El.textContent = 'b '+ all_questions[q].choices.wrong[0]
    option3El.textContent = 'c '+ all_questions[q].choices.wrong[1]
    option4El.textContent = 'd '+ all_questions[q].choices.wrong[2]
    console.log(score)
}
function right() {
    correctEl.textContent = "correct"
    questionstart(q+1)
    check()
    q = q+1
    score = score +1
    scoreadd()
}
function wrong() {
    correctEl.textContent = "wrong"
    questionstart(q+1)
    check()
    q = q+1
}
function check() {
    option1El.addEventListener("click", right)
    option2El.addEventListener("click", wrong)
    option3El.addEventListener("click", wrong)
    option4El.addEventListener("click", wrong)
}
function scoreadd(){
    scoreEl.textContent = "Current score: "+ score 
}
startEl.addEventListener("click",quizstart);