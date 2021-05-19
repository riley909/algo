// NOTE: 문자열 다루기 기본
// https://programmers.co.kr/learn/courses/30/lessons/12918
// 문자열 s의 길이가 4 혹은 6
// 숫자로만 구성되어 있을 것
// 맞으면 true 아니면 false
// . 이 포함된 소수 안됨

function solution(s) {
  var answer = true;
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(Number(s[i]))) {
        answer = false;
        break;
      } else answer = true;
    }
  } else {
    answer = false;
  }
  return answer;
}

// 정규표현식 사용한 방법
function solutionRef(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

const s1 = "a234";
const s2 = "1234";
const s3 = "ad21241234";
const s4 = "1e22";

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));
