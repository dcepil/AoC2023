import { lines } from "./input.js";

const reverseString = (input) => [...input].reverse().join("");
const sum = lines.reduce((prev, curr) => {
  const firstNumber = curr.charAt(curr.search(/\d/g));
  const secondNumber = reverseString(curr).charAt(
    reverseString(curr).search(/\d/g)
  );
  return (prev += parseInt(`${firstNumber}${secondNumber}`));
}, 0);

console.log(sum);
