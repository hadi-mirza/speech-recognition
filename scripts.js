window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const mic = document.querySelector(".mic")
let words = document.querySelector(".words")

recognition.interimResults = true;

mic.addEventListener("click", (event) => {
    recognition.start();
});

recognition.addEventListener("result", (e) => {
    words.innerHTML = e.results[0][0].transcript
});