function solution(s) {
  let answer = "YES";
  let low = s.toLowerCase();
  let rev = low.split("").reverse().join("");
  if (low !== rev) return "NO";
  return answer;
}

let str = "goooG";
console.log(solution(str));
