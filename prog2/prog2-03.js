// NOTE: 올바른 괄호
// https://programmers.co.kr/learn/courses/30/lessons/12909
// '(' 또는 ')' 로만 이루어진 문자열 s
// 문자열 s가 올바른 괄호이면 true, 올바르지 않은 괄호이면 false를 return

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // 닫는괄호가 먼저 나올 수 없으므로
    // '('일때 push
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      // 스택이 비었을 경우
      if (stack.length === 0) return false;

      // 아니면 pop
      stack.pop();
    }
  }

  // 스택의 길이가 0이 아니면 괄호의 짝이 맞지 않는 것
  if (stack.length !== 0) {
    return false;
  }
  return true;
}

const s1 = '()()';
const s2 = '(())()';
const s3 = ')()(';
const s4 = '(()(';

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));
