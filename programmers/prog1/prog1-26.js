// NOTE: 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484
// 1부터 45까지 번호 중 6개를 찍는 복권
// 1등 = 6개 / 2등 = 5개 / 3등 = 4개 / 4등 = 3개 / 5등 = 2개 / 6등 = 1개 이하(낙첨)
// 일부 번호를 알 수 없는 경우 가능한 최고순위와 최저순위
// 모르는 번호는 0 표기

// EXAMPLE)
// 당첨 번호 = [31, 10, 45, 1, 6, 19]
// 구매 번호 = [44, 1, 0, 0, 31, 25]
// 일치하는 번호 = [1, 31], 2개
// 모르는 번호 2개
// 최고 = 일치 2개 + 모르는 2개를 일치한다고 가정 => 4개, 3등
// 최저 = 일치 2개 + 모르는 2개를 틀렸다고 가정 => 2개, 5등

// 당첨 번호 = [38, 19, 20, 40, 15, 25]
// 구매 번호 = [0, 0, 0, 0, 0, 0]
// 일치하는 번호 = 0개
// 모르는 번호 6개
// 최고 = 일치 0개 + 모르는 6개를 일치한다고 가정 => 6개, 1등
// 최저 = 일치 0개 + 모르는 6개를 틀렸다고 가정 => 0개, 6등
// 모르는 번호가 6개면 최고1, 최저 6

// 당첨 번호 = [20, 9, 3, 45, 4, 35]
// 구매 번호 = [45, 4, 35, 20, 3, 9]
// 일치하는 번호 = [45, 4, 35, 20, 3, 9], 6개
// 모르는 번호 0개
// 일치 6개 + 모르는 0개를 일치한다고 가정 => 6개, 1등
// 모르는 번호가 0개면 최고와 최저가 같음

// NOTE: 풀이
// answer = [0, 0]
// 당첨번호와 구매번호 비교해서 포함하는 번호만 가져오기
// 0이 몇개인지 구하기
//    0이 없으면 최고순위 === 최저순위
//    0이 6개면 최고순위 = 1, 최저순위 = 6
// 최고 = 7 - (0개수 + 일치 번호 개수)
// 최저 = 7 - 일치 번호 개수
// answer = [최고, 최저]

function solution(lottos, win_nums) {
  const answer = [0, 0];
  const win = lottos.filter((el) => win_nums.includes(el));
  const zero = lottos.filter((el) => el === 0);
  console.log(win);
  console.log(zero);
  let max = 0;
  let min = 0;

  if (win.length >= 2) min = 7 - win.length;
  else min = 6;

  if (zero.length === 0) max = min;
  else max = 7 - (win.length + zero.length);

  [answer[0], answer[1]] = [max, min];
  console.log(max, min);
  console.log(answer);
  return answer;
}

const lottos1 = [44, 1, 0, 0, 31, 25];
const win1 = [31, 10, 45, 1, 6, 19];

const lottos2 = [0, 0, 0, 0, 0, 0];
const win2 = [38, 19, 20, 40, 15, 25];

const lottos3 = [45, 4, 35, 20, 3, 9];
const win3 = [20, 9, 3, 45, 4, 35];

const lottos4 = [45, 4, 35, 20, 3, 9];
const win4 = [1, 2, 7, 16, 32, 41];

console.log(solution(lottos1, win1));
console.log(solution(lottos2, win2));
console.log(solution(lottos3, win3));
console.log(solution(lottos4, win4));

// NOTE: Reference
function solutionRef(lottos, win_nums) {
  let defScore = lottos.filter((item) => win_nums.includes(item)); //당첨 확정
  let result = ['', '']; //결과 저장
  //최악
  result[1] = defScore.length >= 2 ? 7 - defScore.length : 6;
  //최선
  result[0] =
    lottos.sort().lastIndexOf(0) >= 0
      ? 6 - (defScore.length + lottos.sort().lastIndexOf(0))
      : result[1];
  return result;
}
