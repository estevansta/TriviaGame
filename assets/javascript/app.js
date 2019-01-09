// timer that counts down as you start the game; closes game when time is up
// multiple choice question trivia game
// only allowed to choose one answer
// change screen to reveal correct answer questions, incorrect, # of unanswered

// timer testing function

setTimeout(fiveSeconds, 1000 * 5);
function fiveSeconds() {
$(".timeStart").append("<h2>About 10 Seconds Left!</h2>");
console.log("10 seconds left");
}

setTimeout(timeUp, 1000 * 15);
    function timeUp() {
    console.log("done");
    $(".timeLeft").append("<h2>Time's Up!</h2>");
    console.log("time is up");
}