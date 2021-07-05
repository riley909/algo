// NOTE: 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410
// 아이디 규칙
//    3 - 15자, 소문자, 숫자, "-", "_", "." 사용가능
//    "."는 처음과 끝에 사용불가. 연속사용 불가.
// 아이디 검사 후 새 아이디 추천

// 검사, 변환과정
//  1. 모든 대문자를 대응되는 소문자로 치환.
//  2. 소문자, 숫자, "-", "_", "." 제외한 문자 제거.
//  3. 2번 이상 연속된 "." => 하나로 합치기.
//  4. "." 가 처음이나 끝에 위치한다면 제거.
//  5. new_id가 빈 문자열이라면, "a" 대입.
//  6. 길이가 16이상이면, 15자 제외하고 다 제거.
//    6-1. 제거 후 "." 가 끝에 위치하면 "." 제거.
//  7. 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될 때까지 반복.

function solution(new_id) {
  var answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");

  return answer.length > 2
    ? answer
    : answer + answer[answer.length - 1].repeat(3 - answer.length);
}

const id1 = "...!@BaT#*..y.abcdefghijklm";
const id2 = "z-+.^.";
const id3 = "=.=";
const id4 = "123_.def";
const id5 = "abcdefghijklmn.p";

console.log(solution(id1));
console.log(solution(id2));
console.log(solution(id3));
console.log(solution(id1));
console.log(solution(id5));
