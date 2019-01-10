// multiple choice question trivia game
// only allowed to choose one answer
// user sumbits form via button and we tell them correctly answered questions, incorrect, # of unanswered
// timer that counts down as you start the game; closes game when time is up

//setting up quetions in an array of objects/questions with an answer key
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

// creating constant containers for the quiz questions, the sumbit button and the results

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
                // add an html tag for a radio button
                options.push(
				'<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + questions[i].options[letter]
                + '</label>'
                );
                output.push(
                    '<div class="question">' + questions[i].question + '</div>'
                    + '<div class="options">' + options.join('') + '</div>'
                );
                quizContainer.innerHTML = output.join('');
            }
        }
    }
    // declare function that shows the results
    function showResults(questions, quizContainer, resultsContainer){
    }
    // call to the showQuestions function
    showQuestions(questions, quizContainer);
    // call the submit button with an onclick function thow shows the results
    submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
    }
}

