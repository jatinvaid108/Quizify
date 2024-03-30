const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');


const numberOfQuestions = parseInt(prompt('Enter the number of questions for the quiz:'), 10);
const questions = [];


for (let i = 0; i < numberOfQuestions; i++) {
    const questionText = prompt(`Enter question ${i + 1}:`);
    const numberOfOptions = parseInt(prompt(`Enter the number of options for question ${i + 1}:`), 10);
    const options = [];

   
    for (let j = 0; j < numberOfOptions; j++) {
        const option = prompt(`Enter option ${j + 1} for question ${i + 1}:`);
        options.push(option);
    }

   
    const correctAnswer = prompt(`Enter the correct answer for question ${i + 1}:`);

    
    const questionObject = {
        question: questionText,
        options: options,
        correctAnswer: correctAnswer
    };

    
    questions.push(questionObject);
}

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

        question.options.forEach((option, optionIndex) => {
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;
            optionInput.id = `q${index}o${optionIndex}`;

            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;
            optionLabel.htmlFor = `q${index}o${optionIndex}`;

            questionDiv.appendChild(optionInput);
            questionDiv.appendChild(optionLabel);
        });

        quizContainer.appendChild(questionDiv);
    });
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('input:checked');
    let score = 0;

    answerContainers.forEach((answerContainer, index) => {
        const selectedAnswer = answerContainer.value;
        const correctAnswer = questions[index].correctAnswer;

        if (selectedAnswer === correctAnswer) {
            score++;
        }
    });

    alert(`You scored ${score} out of ${questions.length}`);
}

buildQuiz();

submitButton.addEventListener('click', showResults);