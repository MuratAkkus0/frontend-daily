// QUİZ UYGULAMASI

// Select Variables

let q1 = new Question("Almanya'nın Başkenti Neredir?", ['Berlin', 'Münih', 'Köln', 'Bayer'], 'Berlin');
let q2 = new Question("Türkiye'nin Başkenti Neredir?", ['Bursa', 'Ankara', 'Kırklareli', 'İstanbul'], 'Ankara');
let q3 = new Question("Veysel Bayar Nerelidir?", ['İstanbul', 'İzmir', 'Kore', 'Samsun'], 'Kore');

let questions = [q1, q2, q3];


function Question(quest, choices, answer) {
    this.question = quest;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer;
}

function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function (){
    return this.questions[this.questionIndex];
}
Quiz.prototype.isFinish = function (){
    return this.questions.length === this.questionIndex;
}
Quiz.prototype.guess = function (answer){
    let question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
    console.log(this.questionIndex)
}


let quiz = new Quiz(questions);

loadQuestion();
loadProccess()

function loadQuestion(){
    if (quiz.isFinish()){
        document.querySelector('.app-main').innerHTML = `<p class="title-text">Quiz Bitti.</p> <p class="title-text">Score: ${quiz.score}</p> `
    }else{
        let quest = quiz.getQuestion();
        document.querySelector('.quest-text').innerText = quest.question;

        let choices = document.querySelectorAll('.choice');
        for (let i=0;i<choices.length;i++){
            choices[i].innerText = quest.choices[i];
            choices[i].addEventListener('click',getAnswer);
        }
    }
}
function loadProccess(){
    if (!quiz.isFinish()) {
        let progress = document.querySelector('.footer-text');
        progress.innerText = `Question ${quiz.questionIndex + 1} of ${quiz.questions.length}`
    }
}
function getAnswer(event){
    console.log(event.target.textContent)
    quiz.guess(event.target.textContent);
    loadQuestion();
    loadProccess()
}
