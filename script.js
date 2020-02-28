// Initialize ALL global variables here
// allTheWords = []
// This code here selects a random word

const wordList = [
	"vis",
	"toeter",
	"developer",
	"telefoon",
	"moeder",
	"snoer",
	"geeuw"
];
const wordPicker = () => {
	let word = wordList[Math.floor(Math.random() * wordList.length)];

	console.log("wat ben ik?", word);
	return word;
};

const wordGuessed = function(word, inputs) {
	// remove all letters from word that are already guessed
	// We can do this with a for loop to.
	let remaining = word.filter(function(letter) {
		// If the letter is guessed return true (we want to remove that right away)
		return !inputs.includes(letter);
	});
	// If we have letters left, right?
	return remaining.length === 0;
};

const winTheGame = function() {
	document.querySelector(".win").style.display = "block";
	gameOver = true;
};

const loseGame = function() {
	document.querySelector(".lose").style.display = "block";
	gameOver = true;
};

function showWordGameLost(word) {
	document.querySelector(".lose p span").innerHTML = `${word}`;
}

function updateTriesDisplay(tries) {
	document.querySelector(".lives span").innerHTML = 5 - tries;
}

const letters = function(word, inputs) {
	let wrongLetters = inputs.filter(function(letter) {
		// If the letter is in the word return.... false/true (we want to remove that then)
		return !word.includes(letter);
	});
	document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const theWord = function(word, inputLetterWords) {
	let display = word.map(function(letter) {
		if (inputLetterWords.includes(letter)) {
			return letter;
		} else {
			return "_";
		}
	});
	document.querySelector(".the_word").innerHTML = display.join(" ");
};

const guessLetter = function() {
	if (gameOver) {
		return;
	}
	const chosenLetter = document.querySelector("input").value;
	document.querySelector("input").value = "";

	if (inputs.includes(chosenLetter) || chosenLetter === "") {
		return;
	}

	if (!word.includes(chosenLetter)) {
		tries++;
		document.querySelector(".lives span").innerHTML = 5 - tries;
	}

	inputs.push(chosenLetter);
	theWord(word, inputs);
	letters(word, inputs);

	if (letterGuessed(word, inputs)) {
		winTheGame();
	} else if (tries >= 5) {
		loseGame();
	}
};

function beginTheGameWithPlayer() {
	gameOver = false;
	document.querySelector(".win").style.display = "none";
	document.querySelector(".lose").style.display = "none";
	document.querySelector("input").value = "";

	word = wordPicker(wordList).split("");
	document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
	word;

	tries = 0;
	document.querySelector(".lives span").innerHTML = 5 - 0;

	inputs = [];
	theWord(word, inputs);
	letters(word, inputs);
}

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".guess").addEventListener("click", guessLetter);
	document
		.querySelector(".restart")
		.addEventListener("click", beginTheGameWithPlayer);
	beginTheGameWithPlayer();
});
