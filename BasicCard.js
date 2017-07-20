module.exports = BasicCard;
module.exports = ClozeCard;

function BasicCard(front, back) {
    if (this instanceof BasicCard){
        this.front = front;
        this.back = back;
    } else {        
        return new BasicCard(front, back);    
  } 
};

function ClozeCard(text, cloze) {
    if (this instanceof ClozeCard){
        if (text.indexOf(cloze) >= 0) {
            this.fullText = text;
            this.cloze = cloze;
            this.partial = text.replace(cloze, "");
        } else {
            return console.log('"' + cloze + '" does not appear in "' + text + '"');
        }
    } else {        
        return new ClozeCard(text, cloze);    
  } 
};

var firstPresident = BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = ClozeCard("This doesn't work", "oops");