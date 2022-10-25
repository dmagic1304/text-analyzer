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
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element){
    if (element.toLowerCase().includes(word.toLowerCase())) {    // if args are same 
    return wordCount++;             // count +1
  }
  return wordCount;               // else return = 0
  });
}


function omitBadWords(text) {
  // convert text to an array of items
  const textArray = text.split(" ");

  // declare a variable set equal to the bad word
  const badWordArray =  ["zoinks", "muppeteer","biffaroni","loopdaloop"];
  // let displayArray = [ ];

  // compare the text array to the bad word
  badWordArray.forEach(function(element){
    if(textArray.includes(element)) {
      let index = textArray.indexOf(element);
      textArray.splice(index, 1);
    }
    return textArray;
  });
  console.log(textArray);
  // if there's a match, omit the bad word (.remove()) .concat or .push
  // rejoin the text array and display it
}

// if (element.includes(badWordArray)){

//       if (element, text) {
//         if (element === text) {
//           return element++;
//         }
//         return element;
//       }
//         // console.log("Look at this offensive word I found!: " + badWord);
//         displayArray.push(element);
//         console.log("Display & displayArray rez: ", displayArray);
//         return display;
//     }