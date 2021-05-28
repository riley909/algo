// NOTE: 문자열 내 마음대로 정렬하기
// https://programmers.co.kr/learn/courses/30/lessons/12915
// ["sun", "bed", "car"], n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 배열 정렬

function solution(strings, n) {
  const so = strings.sort((a, b) => {
    if (a[n] !== b[n]) {
      // (a[n]>b[n]) - (a[n]<b[n])
      // true - false = 1
      if (a[n] < b[n]) return -1;
      else if (a[n] > b[n]) return 1;
      else return 0;
    } else {
      return (a > b) - (a < b);
    }
  });
  return so;
}

const strings1 = ["sun", "bed", "car"];
const strings2 = ["abce", "abcd", "cdx"];
const strings3 = ["12d", "11b", "11c", "11a", "11d"];

console.log(solution(strings1, 1));
console.log(solution(strings2, 2));
console.log(solution(strings3, 2));
