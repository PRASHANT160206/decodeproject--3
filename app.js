// ==========================================
// DecodeLabs - Frontend Project 3
// Interactive Web Elements
// ==========================================


// ==========================================
// 1. DARK / LIGHT MODE
// ==========================================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

});


// ==========================================
// 2. SHOW MESSAGE BUTTON
// ==========================================

const messageBtn = document.getElementById("messageBtn");

const message = document.getElementById("message");

messageBtn.addEventListener("click", function () {

    message.textContent =
        "Great! JavaScript is working successfully. ⚡";

    messageBtn.textContent = "Message Shown ✓";


    setTimeout(function () {

        message.textContent = "";

        messageBtn.textContent = "Show Message";

    }, 2500);

});


// ==========================================
// 3. COUNTER
// ==========================================

let count = 0;

const counter = document.getElementById("counter");

const counterText =
    document.getElementById("counterText");

const increase =
    document.getElementById("increase");

const decrease =
    document.getElementById("decrease");

const reset =
    document.getElementById("reset");


// UPDATE COUNTER FUNCTION

function updateCounter() {

    counter.textContent = count;

    if (count === 1) {

        counterText.textContent =
            "You have clicked the button 1 time.";

    } else {

        counterText.textContent =
            `You have clicked the button ${count} times.`;

    }

}


// INCREASE

increase.addEventListener("click", function () {

    count++;

    updateCounter();

});


// DECREASE

decrease.addEventListener("click", function () {

    if (count > 0) {

        count--;

        updateCounter();

    }

});


// RESET

reset.addEventListener("click", function () {

    count = 0;

    updateCounter();

});


// ==========================================
// 4. DYNAMIC GREETING
// ==========================================

const nameInput =
    document.getElementById("nameInput");

const greetBtn =
    document.getElementById("greetBtn");

const greeting =
    document.getElementById("greeting");


function greetUser() {

    const name = nameInput.value.trim();


    if (name === "") {

        greeting.textContent =
            "Please enter your name first.";

        return;

    }


    greeting.textContent =
        `Hello, ${name}! Welcome to DecodeLabs. 🚀`;

}


// BUTTON CLICK

greetBtn.addEventListener("click", greetUser);


// ENTER KEY

nameInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        greetUser();

    }

});


// ==========================================
// 5. RANDOM FRONTEND TIPS
// ==========================================

const tipBtn =
    document.getElementById("tipBtn");

const tip =
    document.getElementById("tip");


const tips = [

    "Practice JavaScript and DOM manipulation regularly.",

    "Use semantic HTML to create better webpages.",

    "Keep your CSS organized and reusable.",

    "Use browser DevTools to debug JavaScript errors.",

    "Build small projects to improve your frontend skills.",

    "Learn one JavaScript concept and practice it with code."

];


// GENERATE RANDOM TIP

tipBtn.addEventListener("click", function () {

    const randomNumber =
        Math.floor(Math.random() * tips.length);

    tip.textContent = tips[randomNumber];

});
