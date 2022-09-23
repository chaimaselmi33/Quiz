var quizArray = 
[{
    question : "The day on which the Sun’s direct rays cross the celestial equator is called:",
    choice1 : "the equinox",
    choice2 : "the solstice",
    choice3 :"the aphelion",
    correctAns : "ch1"
},
{
    question : "Who invented the telescope?",
    choice1 : "Galileo",
    choice2 : "Hans Lippershey",
    choice3 :"Hypatia",
    correctAns : "ch2"
},
{
    question : "What is the visible part of the Sun called?",
    choice1 : "the stratosphere",
    choice2 : "the lithosphere",
    choice3 :"the photosphere",
    correctAns : "ch3"
},
{
    question : "What is the smallest planet in the solar system by mass?",
    choice1 : "Mercury",
    choice2 : "Jupiter",
    choice3 :"Neptune",
    correctAns : "ch1"
}];

var button = document.getElementById('button');
var question = document.getElementById('Question');
var choice1 = document.getElementById('ch1');
var choice2 = document.getElementById('ch2');
var choice3 = document.getElementById('ch3');
var radioArr = document.getElementsByClassName('radio');
var container = document.querySelector('.container');

var quizCounter = 0;

function displayQuiz(){
    question.innerHTML = quizArray[quizCounter].question;
    choice1.innerHTML = quizArray[quizCounter].choice1;
    choice2.innerHTML = quizArray[quizCounter].choice2;
    choice3.innerHTML = quizArray[quizCounter].choice3;
    
}

function deselectRadioBtn(){
 for (let r of radioArr)
 {
    r.checked = false;
 }
}

function selectedAns(){
    let answer = undefined;
        for (let r of radioArr)
        {
            if (r.checked == true)
                {
                    answer = r.value;
                }
        }
    return answer;
}


function getScore(answer)
{
    if(answer == quizArray[quizCounter].correctAns)
    {
        score+=10;
    }
}

displayQuiz();

var score = 0;
button.addEventListener('click', () => {

    const answer = selectedAns();

    if (answer){

    getScore(answer);
    console.log("the score now is :", score);

    deselectRadioBtn();
    quizCounter++;
    if(quizCounter < quizArray.length)
    {
    displayQuiz();
    }
    else
    {
       container.innerHTML = `
       <h1 style="text-align:center; color:#646FD4">You have finished the quiz with ${score} out of 40 points</h1>
       <br>
       <button class="btn" onclick="location.reload()">Restart</button>
       ` ;
    }
   }
   else
   {
    alert("please select an answer !")
   }

});

