import { lines } from "./input.js";

const gameDataRegex = /(\d+)\s(\w+)/gi;

const sum = lines.reduce((prev, curr) => {
  let redCubes = 0,
    greenCubes = 0,
    blueCubes = 0;
  const roundList = curr
    .substring(curr.indexOf(":") + 1)
    .split(";")
    .map((g) => g.trim());
  roundList.forEach((round) => {
    [...round.matchAll(gameDataRegex)].forEach((result) => {
      const amount = parseInt(result[1]);
      const color = result[2];
      if (color === "red" && redCubes < amount) {
        redCubes = amount;
      }

      if (color === "green" && greenCubes < amount) {
        greenCubes = amount;
      }

      if (color === "blue" && blueCubes < amount) {
        blueCubes = amount;
      }
    });
  });

  return (prev += redCubes * greenCubes * blueCubes);
}, 0);

console.log(sum);
