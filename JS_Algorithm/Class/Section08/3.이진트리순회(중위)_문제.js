function solution(n) {
  const answer = [];
  function DFS(num) {
    if (num > 7) return;
    DFS(num * 2);
    answer.push(num);
    DFS(num * 2 + 1);
  }
  DFS(n);
  return answer.join(" ");
}

console.log(solution(1));
