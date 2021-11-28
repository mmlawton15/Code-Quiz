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
let questionDisplay = document.getElementById("questionPlaceholderSpace");
var buttonZero = (document.getElementById("banana"));
var buttonOne = (document.getElementById("banana1"));
var buttonTwo = (document.getElementById("banana2"));
var buttonThree = (document.getElementById("banana3"));
var currentQuestionIndex = 0;
var currentQuestion;
var emptyButtonArray = []//push all the buttons into this array. answerArray.answer. IM CONFUSED WHY I WOULD DO THIS, is it to set all of the values of the buttons to whatever array number they're assigned to?

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
    
};



//END GAME FUNCTION
function endGame() {

}


//questions and answers in text areas function
    questionDisplay.innerHTML = listOfQuestionsAndAnswers[0].question;
    buttonZero.textContent = listOfQuestionsAndAnswers[0].answerArray[0]; //set the text in the button to the first object in the array
    buttonOne.textContent = listOfQuestionsAndAnswers[0].answerArray[1];
    buttonTwo.textContent = listOfQuestionsAndAnswers[0].answerArray[2];
    buttonThree.textContent = listOfQuestionsAndAnswers[0].answerArray[3];
    
    questionDisplay.innerHTML = listOfQuestionsAndAnswers[1].question;
    buttonZero.textContent = listOfQuestionsAndAnswers[1].answerArray[0]; //set the text in the button to the first object in the array
    buttonOne.textContent = listOfQuestionsAndAnswers[1].answerArray[1];
    buttonTwo.textContent = listOfQuestionsAndAnswers[1].answerArray[2];
    buttonThree.textContent = listOfQuestionsAndAnswers[1].answerArray[3];  

    questionDisplay.innerHTML = listOfQuestionsAndAnswers[2].question;
    buttonZero.textContent = listOfQuestionsAndAnswers[2].answerArray[0]; //set the text in the button to the first object in the array
    buttonOne.textContent = listOfQuestionsAndAnswers[2].answerArray[1];
    buttonTwo.textContent = listOfQuestionsAndAnswers[2].answerArray[2];
    buttonThree.textContent = listOfQuestionsAndAnswers[2].answerArray[3];

    questionDisplay.innerHTML = listOfQuestionsAndAnswers[3].question;
    buttonZero.textContent = listOfQuestionsAndAnswers[3].answerArray[0]; //set the text in the button to the first object in the array
    buttonOne.textContent = listOfQuestionsAndAnswers[3].answerArray[1];
    buttonTwo.textContent = listOfQuestionsAndAnswers[3].answerArray[2];
    buttonThree.textContent = listOfQuestionsAndAnswers[3].answerArray[3];

    questionDisplay.innerHTML = listOfQuestionsAndAnswers[4].question;
    buttonZero.textContent = listOfQuestionsAndAnswers[4].answerArray[0]; //set the text in the button to the first object in the array
    buttonOne.textContent = listOfQuestionsAndAnswers[4].answerArray[1];
    buttonTwo.textContent = listOfQuestionsAndAnswers[4].answerArray[2];
    buttonThree.textContent = listOfQuestionsAndAnswers[4].answerArray[3];

    questionDisplay.innerHTML = listOfQuestionsAndAnswers[5].question;
    buttonZero.textContent = listOfQuestionsAndAnswers[5].answerArray[0]; //set the text in the button to the first object in the array
    buttonOne.textContent = listOfQuestionsAndAnswers[5].answerArray[1];
    buttonTwo.textContent = listOfQuestionsAndAnswers[5].answerArray[2];
    buttonThree.textContent = listOfQuestionsAndAnswers[5].answerArray[3];

    questionDisplay.innerHTML = listOfQuestionsAndAnswers[6].question;
    buttonZero.textContent = listOfQuestionsAndAnswers[6].answerArray[0]; //set the text in the button to the first object in the array
    buttonOne.textContent = listOfQuestionsAndAnswers[6].answerArray[1];
    buttonTwo.textContent = listOfQuestionsAndAnswers[6].answerArray[2];
    buttonThree.textContent = listOfQuestionsAndAnswers[6].answerArray[3];

    questionDisplay.innerHTML = listOfQuestionsAndAnswers[7].question;
    buttonZero.textContent = listOfQuestionsAndAnswers[7].answerArray[0]; //set the text in the button to the first object in the array
    buttonOne.textContent = listOfQuestionsAndAnswers[7].answerArray[1];
    buttonTwo.textContent = listOfQuestionsAndAnswers[7].answerArray[2];
    buttonThree.textContent = listOfQuestionsAndAnswers[7].answerArray[3];

    questionDisplay.innerHTML = listOfQuestionsAndAnswers[8].question;
    buttonZero.textContent = listOfQuestionsAndAnswers[8].answerArray[0]; //set the text in the button to the first object in the array
    buttonOne.textContent = listOfQuestionsAndAnswers[8].answerArray[1];
    buttonTwo.textContent = listOfQuestionsAndAnswers[8].answerArray[2];
    buttonThree.textContent = listOfQuestionsAndAnswers[8].answerArray[3];

    questionDisplay.innerHTML = listOfQuestionsAndAnswers[9].question;
    buttonZero.textContent = listOfQuestionsAndAnswers[9].answerArray[0]; //set the text in the button to the first object in the array
    buttonOne.textContent = listOfQuestionsAndAnswers[9].answerArray[1];
    buttonTwo.textContent = listOfQuestionsAndAnswers[9].answerArray[2];
    buttonThree.textContent = listOfQuestionsAndAnswers[9].answerArray[3];


        //for loop with event listeners for each button



function grabQuestion() {
    console.log(time);
    currentQuestion = listOfQuestionsAndAnswers[currentQuestionIndex].question;
    questionDisplay.textContent = currentQuestion;
    console.log(currentQuestion); //how do i make the buttons match the items on the array?

    // questionDisplay = listOfQuestionsAndAnswers[currentQuestionIndex].question; //set the question space to equal the question
    // while(currentQuestionIndex < listOfQuestionsAndAnswers.length || time >0){ //while we haven't filtered through all the questions and the timer is running
    //     for (let i = 0; i < listOfQuestionsAndAnswers[currentQuestionIndex].answerArray.length; i++){  //as long as i is less than the length of teh questions, keep going
    //         answer = listOfQuestionsAndAnswers[currentQuestionIndex].answerArray[i];
    //         //emptyButtonArray.addEventListener("click", answerCheck);
    //     }
    // }{
    //     endGame();
    // }   
}



function answerCheck (){ //function to check if the answer is correct
    console.log(answer);
    if (answer == listOfQuestionsAndAnswers[currentQuestionIndex].answer){
        currentQuestionIndex++;
        score +1;
        document.getElementById("correctOrIncorrect").innerHTML = "CORRECT";
    } else {
        time = time -10;
        currentQuestionIndex++;
        document.getElementById("correctOrIncorrect").innerHTML - "INCORRECT";
    }
}







startGame();
grabQuestion();


