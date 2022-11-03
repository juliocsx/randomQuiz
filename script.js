const startEl = document.querySelector("#start")

startEl.addEventListener("click", () => {
    document.querySelector("#startdiv").style.display = "none"
    const body = document.querySelector("body")
    
    body.innerHTML += `
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
    
    const url = "https://the-trivia-api.com/api/questions?limit=1&region=BR&difficulty=easy"
    
    const questionEl = document.querySelector("#question");
    const answer1El = document.getElementById("answer1");
    const answer2El = document.getElementById("answer2");
    const answer3El = document.getElementById("answer3");
    const answer4El = document.getElementById("answer4");
    const quizContainerEl = document.querySelector("#quizContainer")
    
    //Get questions
    async function getQuestions() {
        const response = await fetch(url);
        const data = await response.json();
    
        
        data.map((quiz) => {
            
            var tempArray = [quiz.incorrectAnswers[0], quiz.incorrectAnswers[1], quiz.incorrectAnswers[2], quiz.correctAnswer]
    
            function shuffle(array) {
                let currentIndex = array.length,  randomIndex;
              
                // While there remain elements to shuffle.
                while (currentIndex != 0) {
              
                  // Pick a remaining element.
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex--;
              
                  // And swap it with the current element.
                  [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
                }
              
                return array;
              }
    
            shuffle(tempArray)  
            questionEl.innerText = quiz.question
            answer1El.innerText = tempArray[0]
            answer2El.innerText = tempArray[1]
            answer3El.innerText = tempArray[2]
            answer4El.innerText = tempArray[3]
            
            answer1El.addEventListener("click", () => {
                if (answer1El.innerText === quiz.correctAnswer) {
                    alert ("Acertou!")
                } else {
                    alert (`Errou! Resposta correta: ${quiz.correctAnswer}`)
                }
            })
            answer2El.addEventListener("click", () => {
                if (answer2El.innerText === quiz.correctAnswer) {
                    alert ("Acertou!")
                } else {
                    alert (`Errou! Resposta correta: ${quiz.correctAnswer}`)
                }
            })
            answer3El.addEventListener("click", () => {
                if (answer3El.innerText === quiz.correctAnswer) {
                    alert ("Acertou!")
                } else {
                    alert (`Errou! Resposta correta: ${quiz.correctAnswer}`)
                }
            })
            answer4El.addEventListener("click", () => {
                if (answer4El.innerText === quiz.correctAnswer) {
                    alert ("Acertou!")
                } else {
                    alert (`Errou! Resposta correta: ${quiz.correctAnswer}`)
                }
            })
        })
    }
    
    getQuestions();
})


