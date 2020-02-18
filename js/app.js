// Declaring variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
let missed = 0;

// Declaring an array of phrases
const phrases =  [
    "Thats the way the cookie crumbles",
    "Go back to the drawing board",
    "Call it a day",
    "Beat around the bush",
    "Its not rocket science"
]

// Return a random phrase from an array
const getRandomPhraseAsArray = arr => {
    let randomNumber = Math.floor((Math.random() * phrases.length));
    return phrases[randomNumber];
}

// Listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

console.log(getRandomPhraseAsArray(phrases));