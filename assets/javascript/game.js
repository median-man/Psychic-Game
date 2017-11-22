// declare globals
var guessesLeft = 0;
var lettersUsed = [];
var losses = 0;
var max_guesses = 9;
var solution = '';
var wins = 0;

// returns a random letter from the alphabet
function getRandomLetter() {
	var code = Math.floor(Math.random() * (26)) + 97; 
	return String.fromCharCode(code);
}

// handle guess from player
function handleGuess(guessedLetter) {
  // compare the guess letter with the solution and
  // the previously guessed letters
	if ( lettersUsed.indexOf(guessedLetter) > -1 ) {
    alert('You already used ' + guessedLetter + '.');
	} else if ( guessedLetter === solution ) {
		wins++;
		newRound();
	} else {
    guessesLeft--;
		lettersUsed.push(guessedLetter);
  }
  
  // game is lost if there are no more guesses
	if ( guessesLeft === 0 ) {
		losses++;
		newRound();
	}
  
	// update display
	updateView(wins, losses, guessesLeft, lettersUsed);
}

// resets values for a new round
function newRound() {
  guessesLeft = max_guesses;
	solution = getRandomLetter();
	lettersUsed = [];
}

// updates data displayed on page
function updateView(wins, losses, remGuesses, arrLetters) {
  var lettersUsedElement = document.getElementById('letters-used');
  lettersUsedElement.innerHTML = '';
  arrLetters.forEach(function (letter) {
    appendLetterElement(letter, lettersUsedElement);
  });
	// document.querySelector('#letters-used').textContent = arrLetters.join(', ');
	document.querySelector('#wins').textContent = wins;
	document.querySelector('#losses').textContent = losses;
	document.querySelector('#guesses-left').textContent = remGuesses;
}

// appends a letter element to container
function appendLetterElement(letter, container) {
  container.innerHTML = container.innerHTML + '<span class="letter label label-default text-uppercase">' + letter + '</span>';
}

// runs game when key is pressed
document.onkeyup = function(event) {
  // key pressed is a to z inclusive
	if ( event.keyCode >= 65 && event.keyCode <= 90 ) {
    handleGuess(event.key.toLowerCase());
	}
};

// start game
newRound();
