import { getQuestions } from "./module/APIQuestion.js"

const startEl = document.querySelector("#start")
const questionHTML = `
<div id="quizContainer">
    <div id="question"></div>
    <div>
        <ul>
            <li><button id="answer1" class="answerBtn"></button></li>
            <li><button id="answer2" class="answerBtn"></button></li>
            <li><button id="answer3" class="answerBtn"></button></li>
            <li><button id="answer4" class="answerBtn"></button></li>
        </ul>
    </div>
</div>`

//
startEl.addEventListener("click", () => {
    
    document.querySelector("#startdiv").style.display = "none";

    document.querySelector("body").innerHTML += questionHTML;    
    
    getQuestions();
})

