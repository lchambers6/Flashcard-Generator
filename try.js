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

var secondPresident = BasicCard(
    "Who was the second president of the United States?", "John Adams");

// "Who was the first president of the United States?"
console.log(secondPresident.front); 

// "George Washington"
console.log(secondPresident.back);

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

var secondPresidentCloze = ClozeCard(
    "John Adams was the first president of the United States.", "John Adams");

// "George Washington"
console.log(secondPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(secondPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(secondPresidentCloze.fullText);

console.log("----------------");

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = ClozeCard("This doesn't work", "oops");