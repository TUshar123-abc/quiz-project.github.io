var quizdata =[
    {
        question: 'which framework is belongs to javascript?',
        a: '.net',
        b: 'Flask',
        c: 'React',
        d: 'Laravel',
        correct: 'c'
    },
    {
        question: 'which is not a programming language?',
        a: 'HTML',
        b: 'Python',
        c: 'Java',
        d: 'JS',
        correct: 'a'
    },
    {
        question: 'which is not a framework?',
        a: 'React',
        b: 'Javascript',
        c: 'Angular',
        d: 'Django',
        correct: 'b'
    },
    {
        question: 'CSS stands for -',
        a: 'Cascading style state',
        b: 'Cascading style sheet',
        c: 'Cascading sheet of style',
        d: 'none',
        correct: 'b'
    },
]
var quiz = document.getElementById('quiz')
var question = document.getElementById('question')
var answer = document.querySelectorAll('.answer')

var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentquestion = 0
var quizscore = 0

loadquiz()

function loadquiz()
{
    deselect()
    question.textContent = quizdata[currentquestion].question
    option_a.textContent = quizdata[currentquestion].a
    option_b.textContent = quizdata[currentquestion].b
    option_c.textContent = quizdata[currentquestion].c
    option_d.textContent = quizdata[currentquestion].d
}
function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}
submitbtn.addEventListener('click' , () =>{
    var selectedoption;

    answer.forEach(answer =>{
        if(answer.checked)
        {
            selectedoption=answer.id
        }
    })
    if(selectedoption===quizdata[currentquestion].correct)
    {
        quizscore = quizscore + 1
    }
    currentquestion = currentquestion + 1
    
    if(currentquestion==quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML = `<h1>You have answered ${quizscore} correctly out of ${quizdata.length}</h1>`
    }
    else
    {
        loadquiz()
    }

})

