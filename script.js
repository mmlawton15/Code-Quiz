// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score



//when user opens application, they're presented with 2 buttons and instructions to start quiz
// done - when start button is clicked, time starts counting down from 60.
//simultaneously they're presented with the first question and 4 multiple choice buttons (answers)


// TIMER CODE
var time = 60
var timerInterval;

function tickTime() {
    time = time -1
    document.getElementById('timerStart').innerHTML = time;
}

document.getElementById("startButton").addEventListener("click",function() { //is this conflicting with the above code?
    timerInterval = setInterval(() => {
        if (time > 0) {
            tickTime();
        } else {
            clearInterval(timerInterval);
        }
    }, 1000)
});
