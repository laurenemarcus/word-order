var wordOrder = function(subjectStr) {
  var words = subjectStr.toLowerCase().split(" ");
  var wordList = [];
  var uniqueWords = [];
  var orderAry = [];
  var freqCount = 0;
  var freqSortedAry = 0;
  var wordsObj = {};


  words.forEach(function(word) {
    if ((words.indexOf(word) != -1) && (wordList.indexOf(word) === -1)) {
      wordList.push(word);
    }
  });

  wordList.forEach(function(listedWord) {
    freqCount = 0;

    words.forEach(function(word) {
      if (word === listedWord) {
        freqCount++;
      }
    });

    orderAry.push(freqCount);
  });
  for (var i = 0; i < orderAry.length; i++) {
    wordsObj[wordList[i]] = orderAry[i];
  }

  var sortable = [];
  for (var word in wordsObj) {
    sortable.push([word, wordsObj[word]]);
    sortable.sort(function(a,b) {return b[1] - a[1]});
  }

  var sortedWords = [];
  sortable.forEach(function(orderedWord) {
    sortedWords.push(orderedWord[0]);
  });

return sortedWords;
}

$(document).ready(function () {
  $("form#wordForm").submit(function(event) {
    var words = $("#words").val();
    var wordOrders = wordOrder(words);


    wordOrders.forEach(function(word) {
        $("ul").append("<li>" + word + "</li>");
    });

    event.preventDefault();


  });

});
