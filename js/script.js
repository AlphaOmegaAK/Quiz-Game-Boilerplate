// ? Start Game + Start Button
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', start);

// ? Questions Container
const questionContEl = document.getElementById('question-container');

//  Question element
const questionEl = document.getElementById('question');
const answerBtnsEl = document.getElementById('answer-btns');
// Questions - Shuffle (undefined is what we need)
let shuffleQuestions, currQuestionIdx;

const nextBtn = document.getElementById('next-btn')

function start() {
    console.log("Started");
    startBtn.classList.add('hide');

    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currQuestionIdx = 0;

    questionContEl.classList.remove('hide');

    // Starts showing questions
    nextQues();
};

function nextQues() {
    resetState()

    showQues(shuffleQuestions[currQuestionIdx]);

};

function showQues(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selAnswer);
        answerBtnsEl.appendChild(button);
    })

};

function resetState() {
    nextBtn.classList.add('hide')

    while (answerBtnsEl.firstChild) {
        answerBtnsEl.removeChild(answerBtnsEl.firstChild);

    }
};

function selAnswer(e) {
    const selectBtn = e.target;
    const correct = selectBtn.dataset.correct;
    setStatusClass(document.body, correct);
    // Array gives us a live listing, which isn't necessarily a true "array" so we convert it to one
    Array.from(answerBtnsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        // set the data based on if that answer was correct
    });
    nextBtn.classList.remove('hide')
};

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
};

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');

};

const questions = [{
    question: "What is 2 + 2?",
    answers: [{
            text: '4',
            correct: 'true'
        },
        {
            text: '22',
            correct: false
        }
    ]
}];



// * Side Notes 

//- Shuffle Questions - setting the shuffled question to the shuffled array, so we take the current question array and sort it which takes a function, if its a negative number it is going ot sort it certain way, if positive a different way. if random number of below or above zero, using math,random() which will give us a number between 1 and 0, if you subtract .5 that will give us number above or below zero 50% of the time which gives us the random questions,

// Then we set the question array index at zero to start us at the beginning of the questions list 


// Only setting the data attribute so that it is easier to see which answers were correct, due to us getting back a string and not a boolean

// While loop - loop through all the answer element buttons if there is a child in the answer btn element then remove them