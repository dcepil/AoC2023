import { lines } from "./input.js";

const redMax = 12;
const greenMax = 13;
const blueMax = 14;

const gameIdRegex = /(?:game (\d+): )/i;
const gameDataRegex = /(\d+) ([greenredblue]+)/gi;

const sum = lines.reduce((prev, curr) => {
  let isValidGame = true;
  const gameId = parseInt(curr.match(gameIdRegex)[1]);
  const roundList = curr
    .substring(curr.indexOf(":") + 1)
    .split(";")
    .map((g) => g.trim());
  roundList.forEach((round) => {
    const results = [...round.matchAll(gameDataRegex)];
    results.forEach((result) => {
      const amount = result[1];
      const color = result[2];
      if (
        (color === "red" && amount > redMax) ||
        (color === "green" && amount > greenMax) ||
        (color === "blue" && amount > blueMax)
      ) {
        isValidGame = false;
      }
    });
  });

  if (isValidGame) {
    return (prev += gameId);
  }

  return prev;
}, 0);

console.log(sum);
