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

    wordSentences: function(doc, word){
      throw new Error("Not implemented exception")
  },
      
    topWords: function(doc, count, minWordLength) {
      throw new Error("Not implemented exception");
    }
  };
  