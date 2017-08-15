var solution, wins, losses, guessesLeft;

// set starting values
guessesLeft = 9;
wins = 0;
losses = 0;
solution = getRandomLetter();


// returns a random letter from the alphabet
function getRandomLetter() {
	// "a".charCodeAt() = 97
	// random number from 97 to 122 inclusive
	var code = Math.floor(Math.random() * (26)) + 97; 
	return String.fromCharCode(code);
}


document.onkeyup = function(event) {







};