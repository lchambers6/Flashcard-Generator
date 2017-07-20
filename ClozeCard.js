module.exports = ClozeCard;

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
