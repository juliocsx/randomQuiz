import { shuffle } from "./functions.js"

const questionAPIUrl = "https://the-trivia-api.com/api/questions?limit=1&region=BR&difficulty=easy"
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

async function getQuestions() {
    
    const response = await fetch(questionAPIUrl);
    const data = await response.json();
    
    
    data.map((quiz) => {
        
        let tempArray = quiz.incorrectAnswers.concat(quiz.correctAnswer) 
        shuffle(tempArray) 

        const quizContainerEl = document.querySelector("#quizContainer")
        const questionEl = document.querySelector("#question");
        const answer1El = document.querySelector("#answer1");
        const answer2El = document.querySelector("#answer2");
        const answer3El = document.querySelector("#answer3");
        const answer4El = document.querySelector("#answer4");

        questionEl.innerText = quiz.question;
        answer1El.innerText = tempArray[0];
        answer2El.innerText = tempArray[1];
        answer3El.innerText = tempArray[2];
        answer4El.innerText = tempArray[3];
        
        let selectedAnswersEl = [answer1El, answer2El, answer3El, answer4El]

        for (let i = 0; i < 5; i++) {
            
            selectedAnswersEl[i].addEventListener("click", () => {
                if (selectedAnswersEl[i].innerText === quiz.correctAnswer) {

                    quizContainerEl.innerHTML = `
                    <div id="quizContainer"><h1>Correct!</h1>
                    <img src="https://media3.giphy.com/media/114i7iKbd9Mkak/giphy.gif?cid=ecf05e47a4t0lzz4exg6uier3v983iq74smadsl1x4324ssh&rid=giphy.gif&ct=g">
                    <button id="repeat">Try again</button>
                    </div>`

                    const repeatEl = document.querySelector("#repeat")
                    repeatEl.addEventListener('click', () => {
                        document.querySelector("body").innerHTML = questionHTML;
                        getQuestions()
                    })
                } else {

                    quizContainerEl.innerHTML = `
                    <div id="quizContainer"><h1>Incorrect... The correct answer is: ${quiz.correctAnswer}</h1>
                    <img src="https://media1.giphy.com/media/a9xhxAxaqOfQs/giphy.gif?cid=ecf05e473xhuw1txko6m8z4n477unxlucohikh7r4wuv7k6s&rid=giphy.gif&ct=g">
                    <button id="repeat">Try again</button>
                    </div>`

                    const repeatEl = document.querySelector("#repeat")
                    repeatEl.addEventListener('click', () => {
                        document.querySelector("body").innerHTML = questionHTML;
                        getQuestions()
                    })
                }
            })
            
        }
    })
}

export { getQuestions }