let secretWord = 'dictionnaire'; 
let numOfLettersSecret = document.getElementById("numOfLetters");
let tryPlayer = document.getElementById("try");
let wellPlacedLetters = document.getElementById("well");
let missPlacedLetters = document.getElementById("miss");
let notInWordLetters = document.getElementById("not");
let winGame = document.getElementById("win");

numOfLettersSecret.innerText = `The secret word have ${secretWord.length} letters`;

function tryWord(wordPlayer, rightWord) {
	// TODO: fix jeu sensible à la casse.   

    let wellPlaced = [];
    let missPlaced = [];
    let notInWord = [];

    let secretArray = rightWord.split('');
    let wordArray = wordPlayer.split('');
    
    for (let i = 0; i < secretArray.length; i++) {
        if (secretArray[i] === wordArray[i]) {
            wellPlaced.push(wordArray[i]);
        } else if (secretArray.includes(wordArray[i]) === false) {
            notInWord.push(wordArray[i]);
        } else {
            missPlaced.push(wordArray[i]);
        }  
    }
    
    return { 
        wellPlaced: wellPlaced, 
        missPlaced: missPlaced,
        notInWord: notInWord 
    }
}

function guess() {
    winGame.innerText = '';

	let word = document.getElementById("word").value;

    if (wordLength(word, secretWord)) {
        numOfLettersSecret.innerText = `The secret word have ${secretWord.length} letters`;
        lettersPlaces(word, tryWord(word, secretWord));
        winning(word, secretWord);
    } else {
        resetPlaces();
        numOfLettersSecret.innerText = `Retry with ${secretWord.length} letters`;
    }
}

function winning(wordPlayer, rightWord) {
    if (wordPlayer === rightWord) {
        winGame.innerText = 'You win';
        resetPlaces();
    }
}

function resetPlaces() {
    numOfLettersSecret.innerText = '';
    document.getElementById("word").value = '';
    tryPlayer.innerText = '';
    wellPlacedLetters.innerText = '';
    missPlacedLetters.innerText = '';
    notInWordLetters.innerText = '';
}

function lettersPlaces(wordPlayer, wordTry) {
    document.getElementById("word").value = '';
    tryPlayer.innerText = `Your word: ${wordPlayer}`;
    wellPlacedLetters.innerText = 'Well placed: '+wordTry.wellPlaced.join(', ');
    missPlacedLetters.innerText = 'Miss placed: '+wordTry.missPlaced.join(', ');
    notInWordLetters.innerText = 'Not in the word: '+wordTry.notInWord.join(', ');
}

function wordLength(wordPlayer, rightWord) {
    if (wordPlayer.length === rightWord.length) {
        return true;
    } else {
        return false;
    }
}
