module.exports = {
  stringToWordsArray: function(text) {
    return text.match(/[a-zÀ-ú]+/gmui);
  },
  
  wordFrequency: function(doc, word) {
    doc = doc.toLowerCase();
    word = word.toLowerCase();
  
    const words = this.stringToWordsArray(doc);
  
    let count = 0;
      for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
          count++;
        }
      }
  
      return count;
  },

  wordSentences: function (doc, word) {
    const sentence = doc.sentence ? doc.sentence : doc;
    const sentenceLength = sentence.length;
    const stopChars = ['.', ':', ';', '\n'];
    let phrase = '';
    let arrayOfPhrases = [];

    for (let i = 0; i < sentenceLength; i++) {
        phrase += sentence[i];

        if (stopChars.includes(sentence[i])) {
            const isIncluded = phrase.toLowerCase().includes(word.toLowerCase());

            if (isIncluded) {
                const indexOfFirstCapitalLetter = phrase.search(/[A-Z]/);
                const finalPhraseResult = phrase.substring(indexOfFirstCapitalLetter,);

                arrayOfPhrases.push(finalPhraseResult);
            }

            phrase = '';
        }
    }

    return arrayOfPhrases;
},
   
  topWords: function(doc, count, minWordLength) {
    const words = this.stringToWordsArray(doc);
  
    const longWords = words.filter(word => word.length >= minWordLength);
  
    const wordCounts = {};
    for (let i = 0; i < longWords.length; i++) {
      const word = longWords[i].toLowerCase();
      if (!wordCounts[word]) {
        wordCounts[word] = 1;
      } else {
        wordCounts[word]++;
      }
    }
  
    const wordCountsArray = [];
    for (const word in wordCounts) {
      wordCountsArray.push([word, wordCounts[word]]);
    }
  
    wordCountsArray.sort((a, b) => b[1] - a[1]);
  
    const topWordsArray = wordCountsArray.slice(0, count);
  
    const topWords = topWordsArray.map(pair => pair[0]);
  
    return topWords;
  }  
};
  