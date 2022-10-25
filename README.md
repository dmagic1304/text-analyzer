# Test Driven Development

#### By Dominic Magic, Luke Callahan, Vera Weikel

#### A TDD Environment


## Technologies Used

* Javascript

## Description
(Ep.Lesson)[https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/text-analyzer-with-tdd-wordcounter]

### Objectives 

Test Driven Development


### Goals
* Test Driven Development

Describe: wordCounter()

Test1: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test2: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test3: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test4: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test5: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Describe: omitBadWords(text);

Test: "It should identify if there is an offensive word "zoinks"
Code:
cosnt badWord = "zoinks";
const text = "zoinks and among other words as a sample string";
omitBadWords(text);
Expected Output: console.log("Look at this offensive word I found!: " + badWord);


Test: "It should omit any offensive words in the badWordArray
Code: omitBadWords()
const text = "zoinks and among other words as a sample string";
badWordArray =  ["zoinks","muppeteer"," biffaroni","loopdaloop"];
const displayArray = [];
omitBadWords(text);
Expected Output: "and among other words as a sample string"


Test: "It should omit the offensive words: zoinks, muppeteer, biffaroni, and loopdaloop."
Code:
const text = "zoinks, muppeteer, biffaroni, and loopdaloop among other words as a sample string";
const word = "sample";
omitBadWords(text);
Expected Output: "and among other words as a sample string"

Describe: boldPassage()

Test: "It should return null if no word or text is entered."
Code:
const text = "";
const word = "";
boldPassage(word, text);
Expected Output: null

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: <p>yo</p>

Test: "It should return a matching word in a strong tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong></p>

Test: "It should wrap words that match in strong tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong> there</p>

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

* No known bugs.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2022  Dominic Magic, Luke Callahan, Vera Weikel

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.