// NOTE: 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901
// 두 수를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴
// 요일의 이름 = SUN, MON, TUE, WED, THU, FRI, SAT
// 2016년은 윤년. 1월 1일은 금요일

// 30일 = 4, 6, 9, 11, 29일 = 2
// 31일 = 1, 3, 5, 7, 8, 10, 12

function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const today = new Date(`2016-${a}-${b}`).getDay();
  return day[today];
}

const a = 5;
const b = 24;
console.log(solution(a, b));
