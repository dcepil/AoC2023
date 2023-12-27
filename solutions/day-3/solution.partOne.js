import { lines } from "./input.js";

const sum = lines.reduce((prev, curr, index, array) => {
  [...curr.matchAll(/[^\d.]/g)]?.forEach((symbolMatch) => {
    const charIndex = symbolMatch.index;
    [
      ...array[index - 1].matchAll(/\d+/g),
      ...curr.matchAll(/\d+/g),
      ...array[index + 1].matchAll(/\d+/g),
    ].forEach((match) => {
      if (
        match.index + match[0].length >= charIndex &&
        match.index <= charIndex + 1
      ) {
        prev += parseInt(match[0]);
      }
    });
  });

  return prev;
}, 0);

console.log(sum);
