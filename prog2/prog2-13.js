// NOTE: H-Index
// https://programmers.co.kr/learn/courses/30/lessons/42747
// H-Index = 과학자의 생산성과 영향력을 나타내는 지표
// 어떤 연구자의 h 지수는 그 사람이 쓴 모든 논문 중 n회 이상 인용된 논문이 n개 이상일 때, 이 둘을 동시에 만족하는 n의 최대값으로 한다.
// citations = 발표한 논문의 인용 횟수 배열

// citations = [3, 0, 6, 1, 5]
// 발표한 논문 = citations.length, 5
// [0, 1, 3, 5, 6]
// h번 이상 인용된 논문이 h편 이상
//  => 3번 이상 인용된 논문이 3편 이상
//  => 3, 5, 6
// 나머지 논문이 h번 이하 인용
//  => 나머지 논문 = 2개
//  => 0번, 1번 인용되었으므로 3번 이하
// h = 3

function solution(citations) {
  let answer = 0;
  return answer;
}

const citations = [3, 0, 6, 1, 5];

console.log(solution(citations));
