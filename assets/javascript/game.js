var solution, wins, losses, guessesLeft;

// set starting values and start new round on page load
wins = 0;
losses = 0;
newRound();

// returns a random letter from the alphabet
function getRandomLetter() {
	// "a".charCodeAt() = 97
	// random number from 97 to 122 inclusive
	var code = Math.floor(Math.random() * (26)) + 97; 
	return String.fromCharCode(code);
}

function newRound() {
	guessesLeft = 9;
	solution = getRandomLetter();
	lettersUsed = [];
}

document.onkeyup = function(event) {
	var letterGuessed;

	letterGuessed = event.key.toLowerCase();

	// if event.key is in lettersUsed then
	if ( lettersUsed.indexOf(letterGuessed) > -1 ) {
		alert("You already used " + letterGuessed + ".");

	// else if event.key lowercase === solution 
	} else if ( letterGuessed === solution ) {
		// then game is won
		wins++;
		newRound();		
	
	// else decrement guessesLeft
	} else {
		guessesLeft++;
		lettersUsed.push(letterGuessed);
	}

	if ( guessesLeft === 0 ) {
		// the game is lost, increment losses and start new round
		losses++;
		newRound();
	}


	// update display
};
