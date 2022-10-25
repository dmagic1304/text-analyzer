// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (word.trim().length === 0) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}


function omitBadWords(text) {
  // convert text to an array of items
  const textArray = text.split(" ");

  // declare a variable set equal to the bad word
  const badWordArray =  ["zoinks", "muppeteer","biffaroni","loopdaloop"];
  let displayArray = [ ];

  // compare the text array to the bad word
  badWordArray.forEach(function(element){
    if(textArray.includes(element)) {
      let index = textArray.indexOf(element);
      textArray.splice(index, 1);
    }
    return textArray;
  });
 // displayArray = textArray.concat();
  // displayArray.concat(textArray);
  displayArray.join(textArray);
  textArray.join(" ");
  console.log("DArr & TArr = ", displayArray); //, textArray
  // if there's a match, omit the bad word (.remove()) .concat or .push
  // rejoin the text array and display it
}

// UI Logic

function boldPassage(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  console.log(occurrencesOfWord);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});