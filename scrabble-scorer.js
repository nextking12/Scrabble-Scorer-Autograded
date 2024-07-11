// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!\n");
   //let initialAnswer = input.question("Enter a word: ");
     //return initialAnswer;
 //  console.log(oldScrabbleScorer (initialAnswer));
};

//let initialAnswer = initialPrompt;
//console.log(initialPrompt())
//let firstAnswer = initialPrompt();
//console.log(firstAnswer)

let newPointStructure

let simpleScorer = function (word) {
   let wordScore = 0;
      for (let i = 0; i < word.length; i++){
         wordScore += 1;
     //return wordScore;
   }
   return wordScore;
   
};



let vowelBonusScorer = function (vowels) {
   vowels = vowels.toUpperCase();
   let arrayVowels = [];
    arrayVowels = vowels.split("")
    console.log(arrayVowels)

   //let knownVowels = ["A", "E", "I", "O", "U"];
   let bonusScore = 0;
   //let numOfVowels = []
   //console.log(numOfVowels)

  for (let i = 0; i < arrayVowels.length; i++) {
    if (arrayVowels[i] === "A" || arrayVowels[i] === "E" || arrayVowels[i] === "I" || arrayVowels[i] ==="O" ||arrayVowels [i] === "U") {
      bonusScore += 3
    }
    else if (arrayVowels[i] !== "A" || arrayVowels[i] !== "E" || arrayVowels[i] !== "I" || arrayVowels[i] !=="O" ||arrayVowels [i] !=="U"){
      bonusScore += 1
    }
   }
    return bonusScore
}
   



let scrabbleScorer;

const scoringAlgorithms = [

{name: "Simple Score",
 description : "Each letter is worth 1 point",
 scorerFunction: simpleScorer,
 },

 {name: "Bonus Vowels",
 description : "Vowels are 3 points, consonants are 1 point",
 scorerFunction: vowelBonusScorer,
 },

 {name: "Scrabble",
 description : "Traditional scoring algorithm",
 scorerFunction : oldScrabbleScorer,
 }


];

function scorerPrompt() {
    let initialAnswer = input.question("Enter a word: ");
    console.log(`Which scoring algorithm would you like to use?\n\n`);

     for (let i = 0; i < scoringAlgorithms.length; i++) {
      console.log(i + "- " + scoringAlgorithms[i].name + ": " + scoringAlgorithms[i].description);
     }

      let scorerInput = input.question(`Please select 0, 1, or 2: `)
      if (scorerInput === "0") {
         console.log(`Your score for ${initialAnswer} is: ${scoringAlgorithms[0].scorerFunction(initialAnswer)}`)

      } else if (scorerInput === "1"){
        console.log(`Your score for ${initialAnswer} is: ${scoringAlgorithms[1].scorerFunction(initialAnswer)}`)
      }
      }
      
   


function transform() {};

function runProgram() {
   initialPrompt(), scorerPrompt();
   
};

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
