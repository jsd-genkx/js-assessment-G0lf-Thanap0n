"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;

		// Replace with your own code //
		// Set the home position at (0, 0) before the game starts
		this.positionRow = 0;
		this.positionCol = 0;
		this.field[this.positionRow][this.positionCol] = pathCharacter;
		
	}

	// Print field //
	print() {
		clear();

		for (let row of this.field) {
			console.log(row);
		}

		// Replace with your own code //
		// console.log(this.field); // Please REMOVE this line before you start your code!

		// console.log(this.map);
	}

	// Your Code //

	// Method direction (ควบคุมทิศทาง)
	direction () {
		if (direction === 'a') {
			this.moveRight()
		}

		else if (direction === 'd') {
			this.moveLeft()
		}

		else if (direction === 'w') {
			this.moveUp()
		}

		else if (direction === 's') {
			this.moveDown()
		}
	}

	moveRight() {
		this.positionCol++
	}
	
	moveLeft() {
		this.positionCol--
	}
	
	moveUp() {
		this.positionRow--
	}
	
	moveDown() {
		this.positionRow++
	}

}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);
newGame.print();
