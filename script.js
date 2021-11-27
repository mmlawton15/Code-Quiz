// DONE - GIVEN I am taking a code quiz
// WHEN I click the start button
// DONE - THEN a timer starts 
// SIMULTANEOUSLY I am presented with a question
// THIS question has 4 multiple choice questions
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score



//ARRAY OF QUESTIONS AND THEIR INITIAL STATUS

var questions = [
    {
        questionOne: "Arrays in Javascript can be used to store ___?",
        answersOne: ("Booleans", "Numbers and Strings", "Other Arrays", "All of the above"),
        correctAnswerOne: "All of the Above"
    },
    {   question: "Commonly used Data Types include ___.",
        answers: ("Booleans", "Strings", "Arrays", "All of the Above"),
        correctAnswer: "All of the Above"
    },
    {
        question: "The condidtion in an if/else statement is enclosed with a ___",
        answers: ("Bracket", "Curly Brace", "Parenthesis", "All of the above"),
        correctAnswer: "Parenthesis"
    },
    {
        question: "A very useful tool used during development and debugging",
        answers: ("Google", "For Loops", "Debugger", "all of the above"),
        correctAnswer: "All of the above"
    },
    {
        question: "String values must be enclosed with ___ when being assigned to variables.",
        answers: ("curly braces", "square brackets", "parentheses", "curly braces and parentheses"),
        correctAnswer: "Curly braces"
    },
    {
        question: "DOM stands for ___?",
        answers: ("Direct Optimized Model", "document Object Model", "Document Oblivion Matches", "Diligent Obtuse Monkey"),
        correctAnswer: "Document Object Model"
    },
    {
        question: "What is the difference between Javascript and HTML?",
        answers: ("Javascript is the primary structure of a website, HTML adds dynamic content to the code", "HTML provides the primary structure of a website, while Javascript adds dynamic content to that HTML code", "HTML is ugly and javascript is pretty", "Javascript is easy and HTML is difficult"),
        correctAnswer: "HTML provides the primary structure of a website, while Javascript adds dynamic content to that HTML code"
    },
    {
        question: "CSS stands for ___?",
        answers: ("Cartridge Section Styler", "Colorful Sheet Styler", "Cascading Style Sheets", "Card structure stylizer"),
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which of the following are NOT forms of the command line?",
        answers: ("Kanban", "bash", "terminal", "all of the above"),
        correctAnswer: "Kanban"
    },
    {
        question: "Who created the World Wide Web?",
        answers: "Tim Berners-Lee, Steve Jobs, Elon Musk, Benjamin Franklin",
        correctAnswer: "Tim Berners-Lee"
    },
];


//VARIABLES
var score = 0;






//LOOP FOR QUESTIONS
// for (var i=0; i <questions.length; i++){
//     var answers = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer){
//         score++;
//         alert("Correct");
//     } else {
//         alert("Incorrect");
//         //deduct time here
//     }
// }
// alert("You got " + score + "of " + questions.length);





// TIMER CODE
var time = 60
var timerInterval;
function tickTime() {
    time = time -1
    document.getElementById('timerStart').innerHTML = time;
}


//START BUTTON CODE
document.getElementById("startButton").addEventListener("click",function() { 
    timerInterval = setInterval(() => { //start timer once the button is clicked
        if (time > 0) {
            tickTime();
        } else {
            clearInterval(timerInterval);
        }
    }, 1000)
//make the welcome dissappear when the button is clicked
    const initialWelcomeNotice = document.getElementById("initialWelcome") 
    if (initialWelcomeNotice.style.display !== "none"){
        initialWelcomeNotice.style.display = "none";
    } else {
        initialWelcomeNotice.style.display = "block";
    }
//make the question section visible
    var questionFormatting = document.getElementById("questionFormattingID"); //get the question section
    var displaySetting = questionFormatting.style.display; //get the current value of the div's display
    if (displaySetting =='block'){
        questionFormatting.style.display = "none"; //if the section is showing, hide it
    } else {
        questionFormatting.style.display = "block"; //if the section is not showing, show it
    }
});


//FIRST QUESTION CODE
questionSpot = document.getElementsByTagName("questionPlaceholderSpace");





