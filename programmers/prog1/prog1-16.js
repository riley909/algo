// NOTE: 서울에서 김서방 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12919
// String 배열 seoul의 원소 중 'Kim'의 위치 x 찾기
// '김서방은 x에 있다' 리턴하기

function solution(seoul) {
  const x = seoul.indexOf("Kim");
  return `김서방은 ${x}에 있다`;
}

const seoul = ["Jane", "Kim"];

console.log(solution(seoul));
