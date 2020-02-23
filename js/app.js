///////////////// DEV NOTES ///////////////// 
// Create functionality so the hearts are removed or changes if the player guesses wrong
// Add CSS transitions for each letter in the phrase display as they are revealed
// Create a reset game button on the win or lose screen


// Declaring variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');
let missed = 0;

// Declaring an array of phrases
const phrases =  [
    "thats the way the cookie crumbles",
    "go back to the drawing board",
    "call it a day",
    "beat around the bush",
    "its not rocket science"
]

// Return a random phrase from an array
const getRandomPhraseAsArray = arr => {
    let randomNumber = Math.floor((Math.random() * arr.length));
    return arr[randomNumber].split('');
}

// Add each character of the random phrase to the DOM
const addPhraseToDisplay = arr => {
    const phraseUL = phrase.querySelector('ul');
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        phraseUL.appendChild(li);
        if (li.textContent !== ' ') {
            li.classList.add('letter');
        } else {
            li.classList.add('space');
        }
    }
}

const checkLetter = button => {
    const letters = phrase.querySelectorAll('.letter')
    let matchedLetter;
    for (let i = 0; i < letters.length; i++) {
        if (button.textContent === letters[i].textContent) {
            letters[i].classList.add('show');
            matchedLetter = button.textContent;
        } 
    }
    if (matchedLetter) {
        return matchedLetter;
    } else {
        return null;
    }
}

const checkWin = missed => {
    const numberOfLetters = document.querySelectorAll('.letter').length;
    const numberOfLettersShown = document.querySelectorAll('.show').length;
    const overlayTitle = overlay.querySelector('h2');
    if (missed >= 5) {
        overlayTitle.textContent = 'You Lose!';
        overlay.classList.add('lose');
        overlay.style.display = 'flex';
        startButton.style.display = 'none';
    } else {
        if (numberOfLetters === numberOfLettersShown) {
            overlayTitle.textContent = 'You Win!';
            overlay.classList.add('win');
            overlay.style.display = 'flex';
            startButton.style.display = 'none';
        }
    }
}

// Listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
        e.target.disabled = 'true';
        let letterFound = checkLetter(e.target)
        if (letterFound === null) {
            missed += 1;
        }
        checkWin(missed);
    }
})

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


