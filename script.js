// DONE - GIVEN I am taking a code quiz
// WHEN I click the start button
// DONE - THEN a timer starts 
// SIMULTANEOUSLY I am presented with a question
// THIS question has 4 multiple choise questions
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score





// TIMER CODE
var time = 60
var timerInterval;

function tickTime() {
    time = time -1
    document.getElementById('timerStart').innerHTML = time;
}


//START BUTTON CODE
document.getElementById("startButton").addEventListener("click",function() { 
    timerInterval = setInterval(() => {
        if (time > 0) {
            tickTime();
        } else {
            clearInterval(timerInterval);
        }
    }, 1000)
    //add first question prompt code here
});
