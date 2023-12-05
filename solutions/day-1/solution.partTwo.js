import { lines } from "./input.js";

const numbersAsWords = {
  zero: 0, // never occurs
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const slicedLines = lines.slice(0, 20);

const reverseString = (input) => [...input].reverse().join("");
const mapWordsToNumbers = (input) =>
  Object.keys(numbersAsWords)
    .map((n) => (input = input.replace(n, numbersAsWords[n])))
    .at(-1);
// problem with word->number mapping being sequential
console.log(mapWordsToNumbers("eightwothree")); // this needs to become 8wo3, not eigh23
const sum = slicedLines.reduce((prev, curr) => {
  curr = mapWordsToNumbers(curr);
  //   console.log(curr);
  const firstNumber = curr.charAt(curr.search(/\d/g));
  const secondNumber = reverseString(curr).charAt(
    reverseString(curr).search(/\d/g)
  );
  //   console.log(parseInt(`${firstNumber}${secondNumber}`));
  return (prev += parseInt(`${firstNumber}${secondNumber}`));
}, 0);

// console.log(sum);
