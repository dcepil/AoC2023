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

const reverseString = (input) => [...input].reverse().join("");
const mapWordToNumber = (input) => {
  let result = String();
  Object.keys(numbersAsWords).forEach((n) => {
    if (input.includes(n)) {
      result = input.replace(n, numbersAsWords[n]);
    }
  });
  return result;
};
const parse = (input, reverse = false) => {
  let charStack = String();
  const stringSpread = reverse ? reverseString(input) : input;
  [...stringSpread].forEach((char) => {
    charStack = charStack.concat(char);
    const wordToMap = reverse ? reverseString(charStack) : charStack;
    const mappedCharStack = mapWordToNumber(wordToMap);
    if (mappedCharStack?.length > 0) {
      charStack = reverse ? reverseString(mappedCharStack) : mappedCharStack;
    }
  });
  return charStack;
};

const sum = lines.reduce((prev, curr) => {
  const firstString = parse(curr);
  const firstNumber = firstString[firstString.search(/\d/g)];
  const secondString = parse(curr, true);
  const secondNumber = secondString[secondString.search(/\d/g)];
  return (prev += parseInt(`${firstNumber}${secondNumber}`));
}, 0);

console.log(sum);
