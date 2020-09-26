// ? Start Game + Start Button
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', start);

// ? Questions Container
const questionContEl = document.getElementById('question-container');


function start() {
    console.log("Started");
    startBtn.classList.add('hide');

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