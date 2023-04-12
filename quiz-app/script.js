const quizData = [
    {
        question: 'How old is Arya?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'a'
    },{
        question: 'What is the most used programming language in 2010?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'JavaScript',
        correct:'d'
    },{
        question:'Who is the current President of India?',
        a:'Droupadi Murmu',
        b:'Ram Nath Kovind',
        c:'Pranab Mukharji',
        d:'Pratibha Patil',
        correct:'a'
    },{
        question:'What does HTML stand for?',
        a:'Hypertext Markup Language',
        b:'Cascading Style Sheet',
        c:'Jason Object Notation',
        d:'High Markup lang',
        correct:'a'
    },{
        question:'What year was JavaScript launched?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'none of the above',
        correct:'b'
    }
]

const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    

}

function getSelected() {
    const answers = document.querySelectorAll(".answer");

    answers.forEach((answers) =>{
        console.log(answers.value);
    });
}

submitBtn.addEventListener('click',() =>{
    currentQuiz++;

    getSelected();

    // if(currentQuiz < quizData.length){
    //     loadQuiz();
    // }else{
    //     //TODO: Show results
    //     alert('You finished! Get yourself an Orange Lemonade');
    // }

});