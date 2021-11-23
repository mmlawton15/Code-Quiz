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
//when start button is clicked, time starts counting down from 60.
//simultaneously they're presented with the first question and 4 multiple choice buttons (answers)


// timer countdown
// every seconde
// -- reach into the html, grab the current time
// -- change it to a number
// -- decrease it by one
// -- put it back into the html
// continue that until 0
// clear the timer

const timerValue = document.getElementById("timerStart");
String(timerValue); //turn timer value from the HTML document into a string

// countdown = setInterval(function() { //funciton for after start button is clickedthe timer starts counting down from 60
//     seconds = parseInt(timer%60);
//     seconds = seconds <10?"0" + seconds : seconds;
//     if (--timerValue < 0){ //I got this code off google and tried to modify it to match what i want it to do...not great
//         timer = duration;
//     }
// }, 1000)

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function() {
        seconds = parseInt(timer % 60,10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function() {
    display = document.querySelector("timerStart");
    startTimer(timerValue, display);
}
 



document.getElementById("startButton").addEventListener("click",function() {
    document.getElementById("timerStart");
    if (timerValue <= 60) {
        timerValue --;
    } else if (timerValue <= 0) {
        
    }

});

