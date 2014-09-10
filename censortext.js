var censorWords = ["sad" , "bad" , "mad"];
var customCensoredWords = []; 
function censor(inputString) {
    for (var idx in censorWords) {
    inputString = inputString.replace(censorWords[idx], "@#$%");
    }
    for (var index in customCensoredWords) {
    inputString = inputString.replace(customCensoredWords[index], "@#%&");
    }
    return inputString;
}
function addCensoredWord(word){
    customCensoredWords.push(word);
}
function getCensoredWords(){
    return censorWords.concat(customCensoredWords);
    }
exports.censor = censor;
exports.censorWords = addCensoredWord
exports.getCensoredWords = getCensoredWords;