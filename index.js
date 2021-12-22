const languageSelector = document.getElementById("language-selector")
const greetingDisplay = document.getElementById("greeting-text")

languageSelector.addEventListener("change", translate)

const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!"
    },
    {
        language: "French",
        greeting: "Joyeux Noël!"
    },
    {
        language: "German",
        greeting: "Frohe Weinachten!"
    },
    {
        language: "Italian",
        greeting: "Buon Natale!"
    },
    {
        language: "Japanese",
        greeting: "メリークリスマス!"
    },
    {
        language: "Polish",
        greeting: "Wesołych świąt Bożego Narodzenia!"
    },
    {
        language: "Spanish",
        greeting: "¡Feliz Navidad!"
    },
    {
        language: "Swedish",
        greeting: "God Jul!"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!"
    }
]
// Task: 
// - Write a function to display the correct greeting when a language is selected.

function translate() {
    const selectedLanguage = languageSelector.value
    for (let i = 0; i < greetingsArr.length; i++) {
        if (greetingsArr[i].language === selectedLanguage) {
            greetingDisplay.innerText = greetingsArr[i].greeting
            greetingDisplay.style.animation = 'textAnimate 8s infinite';
        }
    }
}
// Stretch goals:
// - Animate the message.
