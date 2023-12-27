import { lines } from "./input.js";

const sum = lines.reduce((prev, curr, index, array) => {
  [...curr.matchAll(/\*/g)]?.forEach((symbolMatch) => {
    const charIndex = symbolMatch.index;
    let matches = [];
    [
      ...array[index - 1].matchAll(/\d+/g),
      ...curr.matchAll(/\d+/g),
      ...array[index + 1].matchAll(/\d+/g),
    ].forEach((match) => {
      if (
        match.index + match[0].length >= charIndex &&
        match.index <= charIndex + 1
      ) {
        matches.push(parseInt(match[0]));
      }
    });
    if (matches.length === 2) {
      prev += matches[0] * matches[1];
    }
  });

  return prev;
}, 0);

console.log(sum);
