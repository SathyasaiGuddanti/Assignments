function reverseWordsInSentence(sentence){
    const words = sentence.split(' ');

    const reversedSentence = words.map(reverseWord).join(' ');
    return reversedSentence;
}
function reverseWord(word){
    return word.split('').reverse().join('');
}

const sentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(sentence);

console.log("Reversed Sentence: ", reversedSentence);
