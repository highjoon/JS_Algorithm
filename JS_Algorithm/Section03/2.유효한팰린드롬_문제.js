function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/gi, "");
  let rev = s.split("").reverse().join("");
  if (s !== rev) return "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
