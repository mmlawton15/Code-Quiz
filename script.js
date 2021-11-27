// DONE - GIVEN I am taking a code quiz
// DONE - WHEN I click the start button
// DONE - THEN a timer starts 
// DONE - SIMULTANEOUSLY I am presented with a question
// DONE - THIS question has 4 multiple choice ANSWRS
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score



//ARRAY OF QUESTIONS AND THEIR INITIAL STATUS
var questionDisplay = document.getElementById("questionPlaceholderSpace");
var buttonDisplay = document.getElementById("banana");
var buttonOneDisplay = document.getElementById("banana1");
var buttonTwoDisplay = document.getElementById("banana2");
var buttonThreeDisplay = document.getElementById("banana3");
var listOfQuestionsAndAnswers = [
     {
         question: "Arrays in Javascript can be used to store ___?",
         answerArray: ["Booleans", "Numbers and Strings", "Other Arrays", "All of the above"], answer: "All of the above"
     },
     {
        question: "Commonly used Data Types include ___.",
        answerArray: ["Booleans", "Strings", "Arrays", "All of the Above"], answer: "All of the Above"
    },
    {
        question: "The condidtion in an if/else statement is enclosed with a ___",
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
        answerArray: ["HTML adds colors and fonts to a website", "HTML provides the basic layout of websites", "HTML adds logic to a website", "HTMl adds colors and logic to a website"], answer: "HTML proveds the basic layout of a website"
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
    var pFormatting = document.getElementById("correctOrIncorrect");
    if (displaySetting == 'block'){
        pFormatting.style.display = "none";
    } else {
        pFormatting.style.display = 'block';
    }



//randomized questions and answers in text areasfunction
    function randomQuestions(listOfQuestionsAndAnswers) { //function pulling data from listOfQuestionsAndAnswers array
        return listOfQuestionsAndAnswers[Math.floor(Math.random()*listOfQuestionsAndAnswers.length)];
    }

    var chosenQuestion = randomQuestions(listOfQuestionsAndAnswers); //code to set the text elements to the objects inside the array
    questionDisplay.innerHTML = chosenQuestion.question;
    buttonDisplay.innerHTML = chosenQuestion.answerArray[0]; //set the text in the button to the first object in the array
    //get the value of this button in preparation to check it against the answer
    buttonOneDisplay.innerHTML = chosenQuestion.answerArray[1];
    buttonTwoDisplay.innerHTML = chosenQuestion.answerArray[2];
    buttonThreeDisplay.innerHTML = chosenQuestion.answerArray[3];
    

//code for if a button is clicked, present a new question





//code loop for playing the quiz    
    // while (time >= 0); {//need to add the or statement for OR all the questions have looped through, run the code for the quiz    
    // }





});//END OF START BUTTON CODE








