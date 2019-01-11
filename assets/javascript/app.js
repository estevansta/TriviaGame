
//setting up quetions in an array of objects/questions with an answer key
// multiple choice question trivia game
// only allowed to choose one answer

var myQuestions = [
    {
   question: "What year did the Chicago Fire take place?",
    options:{
        a: "1860",
        b: "1871",
        c: "1900",
        d: "1920"
    },
    answer: "b"
    },
    {
    question: "What does LSD Stand for?",
    options:{
        a: "Lysergic acid diethylamide",
        b: "Laugh Smile and Dance",
        c: "Long Sugar Donut",
        d: "Lake Shore Drive"
    },
    answer: "d"
    },
    {
    question: "Who has the best Deep Dish Pizza?",
    options:{
        a: "Lou Malnatis",
        b: "Peqouds",
        c: "Giordanos",
        d: "Gino's East"
    },
    answer: "a"
    },
{
    question: "Tallest Building in Chicago?",
    options:{
        a: "Willis Tower",
        b: "John Hancock Tower",
        c: "Sears Tower",
        d: "Trump Tower"
    },
    answer: "c"
    },
{
    question: "What town is not in the City of Chicago?",
    options:{
        a: "Wicker Park",
        b: "Streeterville",
        c: "South Loop",
        d: "Chicago Heights"
    },
    answer: "d"
    },
]
    console.log(myQuestions);

// creating containers for the quiz questions, the sumbit button and the results

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
//declare the function to generate the quiz and its contents; 

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    // declare function that shows the questions
    function showQuestions(questions, quizContainer){

        // declare an empty array for the stored output and answer options delcaration
        var output = [];
        var options;
        // begin for loop for each question in the array, show each set of available options
        for(var i=0; i<questions.length; i++){
            options = [];
            // for each available option
            for(letter in questions[i].options){
                // add an html tag for a radio button to show question + adding the options below
                options.push(
				'<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].options[letter]
                + '</label>'
                    );
                }
                // allows to have options sit 
                output.push(
                    '<h2><div class="question">' + questions[i].question + '</div></h2>'
                    + '<div class="options">' + options.join('') + '</div>'
                );
                quizContainer.innerHTML = output.join('');
        }
    }
    // declare function that shows the results and records the answers
    function showResults(questions, quizContainer, resultsContainer){
            var answerContainers = quizContainer.querySelectorAll('.options');
            //user inputs for answers and correct answers
            var userAnswer = '';
            var numCorrect = 0;
            for(var i=0; i<questions.length; i++){
                // allows us to have an empty answer
                userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                // if user answers correctly +1 to the result
                if(userAnswer===questions[i].answer){
                    numCorrect++;
                }
            }
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
            
    }
        
        // call to the showQuestions function
        showQuestions(questions, quizContainer);
//*********************************errror below some how unable to get my submit buttont to work and display results as well as
// using the timer function at the same time.
        // submitButton.onclick = function(){
        //     showResults(questions, quizContainer, resultsContainer);
        // }
    
}


// user sumbits form via button and we tell them correctly answered questions, incorrect, # of unanswered




// timer that counts down as you start the game; closes game when time is up
//timer

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    window.onload = function () {
        var oneMinutes = 60 * 1,
            display = document.querySelector('#time');
        startTimer(oneMinutes, display);
    };
