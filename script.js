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
questions = [ "Arrays in Javascript can be used to store ___?"
// , "Commonly used Data Types include ___.", 
// "The condidtion in an if/else statement is enclosed with a ___", "A very useful tool used during development and debugging",
// "String values must be enclosed with ___ when being assigned to variables.", "DOM stands for ___?",
// "What is the difference between Javascript and HTML?", "CSS stands for ___?", "Which of the following are NOT forms of the command line?",
// "Who created the World Wide Web?" 
]
answers = []
arrayOfAnswers = []


 var listOfQuestionsAndAnswers = [["Arrays in Javascript can be used to store ___?",["Booleans", "Numbers and Strings", "Other Arrays", "All of the above"]],
// ["Commonly used Data Types include ___.", ["Booleans", "Strings", "Arrays", "All of the Above"]],
// ["The condidtion in an if/else statement is enclosed with a ___", ["Bracket", "Curly Brace", "Parenthesis", "All of the above"]],
// ["A very useful tool used during development and debugging",["Google", "For Loops", "Debugger", "all of the above"]],
// ["String values must be enclosed with ___ when being assigned to variables.", ["curly braces", "square brackets", "parentheses", "curly braces and parentheses"]],
// ["DOM stands for ___?",["Direct Optimized Model", "document Object Model", "Document Oblivion Matches", "Diligent Obtuse Monkey"]],
// ["What is the difference between Javascript and HTML?",["Javascript is the primary structure of a website, HTML adds dynamic content to the code", "HTML provides the primary structure of a website, while Javascript adds dynamic content to that HTML code", "HTML is ugly and javascript is pretty", "Javascript is easy and HTML is difficult"]],
// ["CSS stands for ___?",["Cartridge Section Styler", "Colorful Sheet Styler", "Cascading Style Sheets", "Card structure stylizer"]],
// ["Which of the following are NOT forms of the command line?", ["Kanban", "bash", "terminal", "all of the above"]],
// ["Who created the World Wide Web?", ["Tim Berners-Lee, Steve Jobs, Elon Musk, Benjamin Franklin"]

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
    var pDisplaySetting = pFormatting.style.display;
    if (displaySetting == 'block'){
        pFormatting.style.display = "none";
    } else {
        pFormatting.style.display = 'block';
    }

//randomized questions and answers function
    //randomized question function
    function randomQuestions(questions) {
        return questions[Math.floor(Math.random()*questions.length)];
    }
    var chosenQuestion = randomQuestions(questions);
    document.getElementById("questionPlaceholderSpace").innerHTML = chosenQuestion;

    //answers in button function. i would like to make the order of these random but need to figure out how to change the content inside of them first
    function answersInButton(listOfQuestionsAndAnswers){
        if (chosenQuestion = listOfQuestionsAndAnswers[0]) { //if the question matches the question above, reference the array inside of this element of the list of questions and answers array
            console.log(listOfQuestionsAndAnswers[0][0]);
            document.getElementById("option1").innerText = (listOfQuestionsAndAnswers[0][0])
            console.log(listOfQuestionsAndAnswers[0][1]);
            document.getElementById("option2").innerText = (listOfQuestionsAndAnswers[0][1])//make button values equal to the items in the array of the question
            console.log(listOfQuestionsAndAnswers[0][2]);
            document.getElementById("option3").innerText = (listOfQuestionsAndAnswers[0][2])
            console.log(listOfQuestionsAndAnswers[0][3]);
            document.getElementById("option4").innerText = (listOfQuestionsAndAnswers[0][3])
        };
    }
    












});//END OF START BUTTON CODE








