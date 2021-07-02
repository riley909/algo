// NOTE: H-Index
// https://programmers.co.kr/learn/courses/30/lessons/42747
// H-Index = 과학자의 생산성과 영향력을 나타내는 지표
// 어떤 연구자의 h 지수는 그 사람이 쓴 모든 논문 중 n회 이상 인용된 논문이 n개 이상일 때, 이 둘을 동시에 만족하는 n의 최대값으로 한다.
// citations = 발표한 논문의 인용 횟수 배열
// h는 배열의 원소 중 하나가 아님

// citations = [3, 0, 6, 1, 5]
// 발표한 논문 = citations.length, 5
// [6, 5, 3, 1, 0]
// a번 이상 인용 논문 수 = b개
//    6회 이상 인용 논문 수 = 1개
//    5회 이상 인용 논문 수 = 2개
//    3회 이상 인용 논문 수 = 3개
//    1회 이상 인용 논문 수 = 4개
//    0회 이상 인용 논문 수 = 5개
// h = a, b중 작은값
//  h = [1, 2, 3, 1, 0]
// h-index = h들 중 최대값
//  h-index = 3

// [5, 5, 5, 5]
// a번 이상 = b개
//    5번이상 = 1개, 2개, 3개, 4개
// h = a, b중 작은값
//    h = [1, 2, 3, 4]
// h-index = h의 최대값 4

function solution(citations) {
  citations.sort((a, b) => b - a);
  console.log(citations);
  let h = [];

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) h.push(i + 1);
    else h.push(citations[i]);
  }
  return Math.max(...h);
}

const citations1 = [3, 0, 6, 1, 5];
const citations2 = [5, 5, 5, 5];

console.log(solution(citations1));
console.log(solution(citations2));

// NOTE: Reference
function solutionRef(citations) {
  citations = citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}
