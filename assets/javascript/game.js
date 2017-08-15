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

	// letterGuessed = event.key to lowercase

	// if event.key is in lettersUsed then
		// tell user the letter has been used

	// else if event.key lowercase === solution 
		// then game is won, increment wins
		// start new round

	// else decrement guessesLeft

	// if guessesLeft === 0 then
		// the game is lost, increment losses and start new round






};
