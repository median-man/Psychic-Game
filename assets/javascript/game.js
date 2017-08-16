var solution, wins, losses, guessesLeft;

// set starting values and start new round on page load
wins = 0;
losses = 0;
newRound();

// returns a random letter from the alphabet
function getRandomLetter() {
	// random number for charCodes for a to z inclusive
	var code = Math.floor(Math.random() * (26)) + 97; 
	return String.fromCharCode(code);
}

// main function for game that handles a guess from player
function handleGuess(guessedLetter) {
	// if event.key is in lettersUsed then
	if ( lettersUsed.indexOf(guessedLetter) > -1 ) {
		alert("You already used " + guessedLetter + ".");

	// else if event.key lowercase === solution 
	} else if ( guessedLetter === solution ) {
		console.log("game won");
		// then game is won
		wins++;
		newRound();			
	// else decrement guessesLeft
	} else {
		guessesLeft--;
		lettersUsed.push(guessedLetter);
	}
	if ( guessesLeft === 0 ) {
		// the game is lost, increment losses and start new round
		losses++;
		newRound();
	}

	// update display
	updateView(wins, losses, guessesLeft, lettersUsed);
}

// resets values for a new round
function newRound() {
	guessesLeft = 9;
	solution = getRandomLetter();
	lettersUsed = [];
}

// updates data displayed on page
function updateView(w, l, remGuesses, arrLetters) {
	// join array with commas before rendering
	document.querySelector("#letters-used").textContent = arrLetters.join(", ");
	document.querySelector("#wins").textContent = w;
	document.querySelector("#losses").textContent = l;
	document.querySelector("#guesses-left").textContent = remGuesses;
}

// runs game when key is pressed
document.onkeyup = function(event) {
	// key pressed is a to z inclusive
	if ( event.keyCode >= 65 && event.keyCode <= 90 ) {
		handleGuess(event.key.toLowerCase());
	}
};
