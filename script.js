// DONE - GIVEN I am taking a code quiz
// DONE - WHEN I click the start button
// DONE - THEN a timer starts 
// DONE - SIMULTANEOUSLY I am presented with a question
// THIS question has 4 multiple choice ANSWRS
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
        answerArray: ["Kanban", "bash", "terminal", "all of the above"], answer: "Kanban"
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

//randomized questions and answers function
    //randomized question function
    function randomQuestions(listOfQuestionsAndAnswers) { //function pulling data from listOfQuestionsAndAnswers array (of objects)
        return listOfQuestionsAndAnswers[Math.floor(Math.random()*listOfQuestionsAndAnswers.length)];// Does this just return the list of the questions or both questions and answers
    }
    JSON.stringify(listOfQuestionsAndAnswers);
    var chosenQuestion = randomQuestions(listOfQuestionsAndAnswers);
    document.getElementById("questionPlaceholderSpace").innerHTML = chosenQuestion;






    //answers in button function. i would like to make the order of these random but need to figure out how to change the content inside of them first
    // function answersInButton(listOfQuestionsAndAnswers){
    //     if (chosenQuestion = listOfQuestionsAndAnswers[0]) { //if the question matches the question above, reference the array inside of this element of the list of questions and answers array
    //         console.log(listOfQuestionsAndAnswers[0][0]);
    //         document.getElementById("option1").innerText = (listOfQuestionsAndAnswers[0][0])
    //         console.log(listOfQuestionsAndAnswers[0][1]);
    //         document.getElementById("option2").innerText = (listOfQuestionsAndAnswers[0][1])//make button values equal to the items in the array of the question
    //         console.log(listOfQuestionsAndAnswers[0][2]);
    //         document.getElementById("option3").innerText = (listOfQuestionsAndAnswers[0][2])
    //         console.log(listOfQuestionsAndAnswers[0][3]);
    //         document.getElementById("option4").innerText = (listOfQuestionsAndAnswers[0][3])
    //     };
    // }
    












});//END OF START BUTTON CODE








