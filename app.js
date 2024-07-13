// Step 1: Questions
export const questions = [
    {
        question: "What is TypeScript primarily used for?",
        options: [
            "Writing server-side applications",
            "Enhancing JavaScript with static types",
            "Generating HTML templates",
            "Managing databases"
        ],
        correctAnswer: 1 // Index of the correct answer in the options array
    },
    {
        question: "Who developed TypeScript?",
        options: [
            "Google",
            "Microsoft",
            "Apple",
            "Facebook"
        ],
        correctAnswer: 1
    },
    {
        question: "When was TypeScript first released?",
        options: [
            "2009",
            "2012",
            "2015",
            "2018"
        ],
        correctAnswer: 1
    },
    {
        question: "What is 'strong typing' in TypeScript?",
        options: [
            "Allowing any type to be used freely",
            "Ensuring variables are always of a specific type",
            "Ignoring type errors during compilation",
            "Using dynamic typing for performance"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a TypeScript syntax error?",
        options: [
            "Using let instead of var",
            "Assigning a number to a variable declared as string",
            "Importing a module from a non-existent path",
            "Using === instead of =="
        ],
        correctAnswer: 2
    },
    {
        question: "What causes a TypeScript type error?",
        options: [
            "Syntax errors in TypeScript code",
            "Incorrect usage of TypeScript keywords",
            "Mismatch between expected and actual types",
            "Failure to declare variable types"
        ],
        correctAnswer: 2
    },
    {
        question: "Which statement is true about JSON objects in TypeScript?",
        options: [
            "JSON objects are identical to JavaScript objects",
            "JSON stands for JavaScript Object Notation",
            "JSON objects cannot be used in TypeScript",
            "JSON objects support dynamic typing"
        ],
        correctAnswer: 1
    },
    {
        question: "Are JavaScript objects and JSON objects the same?",
        options: [
            "Yes",
            "No"
        ],
        correctAnswer: 1
    },
    {
        question: "What does JSON stand for?",
        options: [
            "JavaScript Object Notation",
            "JavaScript Oriented Network",
            "Java Serialized Object Notation",
            "JavaScript Object Network"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is an assignability error in TypeScript?",
        options: [
            "Assigning a string to a variable declared as number",
            "Declaring a constant with const keyword",
            "Using for loop instead of forEach method",
            "Importing a module without exporting it"
        ],
        correctAnswer: 0
    },
    {
        question: "In TypeScript, what does a type error indicate?",
        options: [
            "A mistake in function parameters",
            "A mismatch between declared and actual types",
            "Incorrect usage of class keyword",
            "Undefined variable usage"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a common use case for TypeScript?",
        options: [
            "Developing hardware drivers",
            "Creating browser games",
            "Building scalable web applications",
            "Writing mobile apps in Swift"
        ],
        correctAnswer: 2
    },
    {
        question: "Which TypeScript feature helps catch errors early in development?",
        options: [
            "Dynamic typing",
            "Static typing",
            "Abstract classes",
            "Inline comments"
        ],
        correctAnswer: 1
    },
    {
        question: "What happens if you try to assign a number to a variable declared as string in TypeScript?",
        options: [
            "It compiles without any issues",
            "It throws a syntax error",
            "It causes a type error",
            "It converts the number to string implicitly"
        ],
        correctAnswer: 2
    },
    {
        question: "Which keyword in TypeScript allows you to declare a variable whose type is not determined until runtime?",
        options: [
            "var",
            "let",
            "any",
            "unknown"
        ],
        correctAnswer: 2
    },
    {
        question: "What is a syntax error in TypeScript?",
        options: [
            "An error in the program logic",
            "An error in the type declaration",
            "An error in the syntax of the code",
            "An error in the function execution"
        ],
        correctAnswer: 2
    },
    {
        question: "What causes a type error in TypeScript?",
        options: [
            "Syntax errors in TypeScript code",
            "Incorrect usage of TypeScript keywords",
            "Mismatch between expected and actual types",
            "Failure to declare variable types"
        ],
        correctAnswer: 2
    },
    {
        question: "Which of the following is an example of an assignability error in TypeScript?",
        options: [
            "Assigning a number to a variable declared as string",
            "Declaring a constant with const keyword",
            "Using for loop instead of forEach method",
            "Importing a module without exporting it"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you declare a variable with an explicit type in TypeScript?",
        options: [
            "let x = 10;",
            "let x: number = 10;",
            "let x = '10';",
            "let x: string = 10;"
        ],
        correctAnswer: 1
    },
    {
        question: "What happens if you try to assign null to a variable declared as number in TypeScript?",
        options: [
            "It causes a syntax error",
            "It compiles without any issues",
            "It throws a type error",
            "It converts null to number implicitly"
        ],
        correctAnswer: 2
    },
    {
        question: "Which TypeScript feature helps in catching errors early during development?",
        options: [
            "Dynamic typing",
            "Static typing",
            "Abstract classes",
            "Interface inheritance"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you fix an assignability error in TypeScript?",
        options: [
            "By ignoring the error during compilation",
            "By using any type for the variable",
            "By converting the variable to a different type",
            "By assigning a compatible type to the variable"
        ],
        correctAnswer: 3
    },
    {
        question: "In TypeScript, what does a type assertion (<Type>variable) indicate?",
        options: [
            "Forcing a variable to be of a specified type",
            "Checking if a variable is null or undefined",
            "Assigning a value to a constant variable",
            "Converting a string to a number implicitly"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the role of TypeScript in a large-scale web application?",
        options: [
            "Enhancing dynamic typing",
            "Simplifying syntax for JavaScript",
            "Adding strong typing to JavaScript",
            "Providing support for outdated browsers"
        ],
        correctAnswer: 2
    },
    {
        question: "Which error in TypeScript occurs due to a mismatch between declared and actual types?",
        options: [
            "Syntax error",
            "Type error",
            "Runtime error",
            "Logical error"
        ],
        correctAnswer: 1
    }

];


// Step 2: JavaScript Initialization
const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = 
document.querySelectorAll("#question, option_1, option_2, option_3, option_4 ");

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// Step 3: Load Quiz function

const loadQuiz = () => {
    const {question, options} = questions[currentQuiz];

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption));
};

loadQuiz();

// Step 4: Get selected answer function on button click

const getSelectedOption = () => {
    let answerElement = Array.from(answerElm)
    return answerElement.findIndex((curElement) => curElement.checked );
};

const deselectedAnswer = () => {
    answerElm.forEach((curElm) => (curElm.checked = false));
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();

    if (selectedOptionIndex === questions[currentQuiz].correctAnswer) {
        score++;
    }
    currentQuiz++; 
    deselectedAnswer();
    if (currentQuiz < questions.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<div class="result">
        <h2>🏆🥇 Your Score: ${score}/${questions.length} Correct Answers</h2>
        <P>🎊✨ Congratulations on compeleting the quiz!</p>
        <p>Don't loose hope and never give up! You can do it 💪🏻</p>
        <button class = "reload-button" onclick = "window.location.reload()"> Restart </button>
        </div>`;
    }

});


