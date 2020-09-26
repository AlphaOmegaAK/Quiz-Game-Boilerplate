// ? Start Game + Start Button
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', start);

// ? Questions Container
const questionContEl = document.getElementById('question-container');


// Questions - Shuffle (undefined is what we need)
const shuffleQuestions, currQuestionIdx

function start() {
    console.log("Started");
    startBtn.classList.add('hide');

    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currQuestionIdx = 0;

    questionContEl.classList.remove('hide')

    // Starts showing questions
    nextQues();
};

function nextQues() {

};

function selAnswer() {

};

const questions = [{
    question: "What is 2 + 2?",
    answers: [{
            text: '4, correct: true'
        },
        {
            text: '22',
            correct: false
        }
    ]
}]



// * Side Notes 

//- Shuffle Questions - setting the shuffled question to the shuffled array, so we take the current question array and sort it which takes a function, if its a negative number it is going ot sort it certain way, if positive a different way. if random number of below or above zero, using math,random() which will give us a number between 1 and 0, if you subtract .5 that will give us number above or below zero 50% of the time which gives us the random questions,

// Then we set the question array index at zero to start us at the beginning of the questions list 