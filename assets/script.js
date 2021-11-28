// DONE - GIVEN I am taking a code quiz
// DONE - WHEN I click the start button
// DONE - THEN a timer starts 
// DONE - SIMULTANEOUSLY I am presented with a question
// DONE - THIS question has 4 multiple choice ANSWRS
// DONE - WHEN I answer a question
// DONE - THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score



//ARRAY OF QUESTIONS AND THEIR INITIAL STATUS
let questionDisplay = document.getElementById("questionPlaceholderSpace");
let buttons = document.getElementById("optionButton");
var currentQuestionIndex = 0;
var currentQuestion;

let listOfQuestionsAndAnswers = [
     {
         question: "Arrays in Javascript can be used to store ___?",
         answerArray: ["Booleans", "Numbers and Strings", "Other Arrays", "All of the above"], answer: "All of the above"
     },
     {
        question: "Commonly used Data Types include ___.",
        answerArray: ["Booleans", "Strings", "Arrays", "All of the Above"], answer: "All of the Above"
    },
    {
        question: "The condition in an if/else statement is enclosed with a ___",
        answerArray: ["Bracket", "Curly Brace", "Parenthesis", "All of the above"], answer: "Parenthesis"
    },
    {
        question: "A very useful tool used during development and debugging",
        answerArray: ["Google", "For Loops", "Debugger", "all of the above"], answer: "All of the above"
    },
    {
        question: "String values must be enclosed with ___ when being assigned to variables.",
        answerArray: ["curly braces", "square brackets", "parentheses", "curly braces and parentheses"], answer: "Curly braces"
    },
    {
        question: "DOM stands for ___?",
        answerArray: ["Direct Optimized Model", "document Object Model", "Document Oblivion Matches", "Diligent Obtuse Monkey"], answer: "Document Object Model"
    },
    {
        question: "What is the point of HTML?",
        answerArray: ["HTML adds colors and fonts to a website", "HTML provides the basic layout of websites", "HTML adds logic to a website", "HTMl adds colors and logic to a website"], answer:"HTML proveds the basic layout of a website"
    },
    {
        question: "CSS stands for ___?",
        answerArray: ["Cartridge Section Styler", "Colorful Sheet Styler", "Cascading Style Sheets", "Card structure stylizer"], answer: "Cascading Style Sheets"
    },
    {
        question: "Which of the following are NOT forms of the command line?",
        answerArray: ["Kanban", "Bash", "Terminal", "All of the above"], answer: "Kanban"
    },
    {
        question: "Who created the World Wide Web?",
        answerArray: ["Tim Berners-Lee", "Steve Jobs", "Elon Musk", "Benjamin Franklin"], answer: "Tim Berners-Lee"
    }
 ]

var score = 0;

// TIMER CODE
var time = 60
var timerInterval;
function tickTime() {
    time = time -1
    document.getElementById('timerStart').innerHTML = time;
}

//START BUTTON CODE
function startGame(){
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
        var displaySetting = questionFormatting.style.display; //get the current value of the div's display style
        if (displaySetting =='block'){
            questionFormatting.style.display = "none"; //if the section is showing, hide it
        } else {
            questionFormatting.style.display = "block"; //if the section is not showing, show it
        }
        var pFormatting = document.getElementById("correctOrIncorrect");
        if (displaySetting == 'block'){
            pFormatting.style.display = "none";
        } else {
            pFormatting.style.display = 'block';
        }
    }
    ) 
    grabQuestion();
};



//END GAME FUNCTION
function endGame() {

}

function grabQuestion() {
    console.log(time);
    currentQuestion = listOfQuestionsAndAnswers[currentQuestionIndex].question;
    questionDisplay.textContent = currentQuestion;
    console.log(currentQuestion);

    buttons.innerHTML = ""; //set the buttons to an empty string so they don't hold onto previous data

        for (let i=0; i <listOfQuestionsAndAnswers[currentQuestionIndex].answerArray.length; i++){
            answer = listOfQuestionsAndAnswers[currentQuestionIndex].answerArray[i];
            console.log("answer: " + answer);
            let buttonBanana = document.createElement("button"); //create a button
            buttonBanana.innerHTML = answer;
            buttonBanana.type ="submit"; //sets it up tp submit a value when clicked
            buttonBanana.name = "formBtn"; //name
            buttons.appendChild(buttonBanana); //appends buttonBanana to buttons, or to the div in the html
            buttons.addEventListener("click", function(event) {
                let target = event.target;
                if (target.matches('button')){
                    value = target.innerHTML
                    console.log("the button was clicked " +value);
                };
                answerCheck();
            });
        }
}



function answerCheck (){ //function to check if the answer is correct
    console.log(answer);
    if (answer == listOfQuestionsAndAnswers[currentQuestionIndex].answer){ //if the answer is correct
        currentQuestionIndex++; //move to the next question
        score +1; //increase score
        console.log(score);
        document.getElementById("correctOrIncorrect").innerHTML = "CORRECT"; //make the p element reflect correct
    } else {
        time = time -10;
        currentQuestionIndex++;
        document.getElementById("correctOrIncorrect").innerHTML - "INCORRECT";
    }
    grabQuestion();
}


startGame();
//grabQuestion();


