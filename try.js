//This file was used to test the constructors
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var firstPresident = BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back);

console.log("----------------");

var firstPresidentCloze = ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

console.log("----------------");

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = ClozeCard("This doesn't work", "oops");