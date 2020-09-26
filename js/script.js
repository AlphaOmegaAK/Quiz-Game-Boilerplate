// ? Start Game + Start Button
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', start);

// ? Questions
const questionContEl = document.getElementById('question-container');


function start() {
    console.log("Started");
    startBtn.classList.add('hide');

    questionContEl.classList.remove('hide')
};

function nextQues() {

};

function selAnswer() {

};