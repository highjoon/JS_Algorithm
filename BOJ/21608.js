// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let N = Number(input[0]);
  input = input.slice(1);
}

// console.log(solution(input));
console.log(
  solution([
    "3",
    "4 2 5 1 7",
    "3 1 9 4 5",
    "9 8 1 2 3",
    "8 1 9 3 4",
    "7 2 3 4 8",
    "1 9 2 5 7",
    "6 5 2 3 4",
    "5 1 9 2 8",
    "2 9 3 1 4",
  ])
);
console.log(
  solution([
    "3",
    "4 2 5 1 7",
    "2 1 9 4 5",
    "5 8 1 4 3",
    "1 2 9 3 4",
    "7 2 3 4 8",
    "9 8 4 5 7",
    "6 5 2 3 4",
    "8 4 9 2 1",
    "3 9 2 1 4",
  ])
);
