// NOTE: 다트 게임
// https://programmers.co.kr/learn/courses/30/lessons/17682
// 기회 3회. 점수 = 0 - 10 사이
// S영역 = 1제곱, D영역 = 2제곱, T영역 = 3제곱
// 옵션
//  스타상* = 해당 점수, 이전 점수 2배.
//           기회1 에서 나올경우 = 해당 점수만 2배(이전점수없음)
//           스타-스타 중첩 = 4배
//           스타-아차 중첩 = 해당 점수 마이너스 2배
//  아차상# = 해당 점수 마이너스

// 입력 = "점수|보너스|[옵션]" 3세트 (1S2D*3T)
//        1^1 * 2 + 2^2 * 2 + 3^3 = 37

function solution(dartResult) {
  const reg = dartResult.match(/\d{1,2}[SDT]{1}[*|#]?/g);
  console.log(reg);
  let score = [];

  for (let i = 0; i < 3; i++) {
    console.log(reg[i]);
    let num = reg[i].match(/\d{1,2}/g);
    const field = reg[i].match(/[SDT]{1}/g);
    const sym = reg[i].match(/[*|#]/g);

    if (field == "S") {
      num = Number(num);
    } else if (field == "D") {
      num = Math.pow(num, 2);
    } else if (field == "T") {
      num = Math.pow(num, 3);
    }

    if (sym == "*") {
      num = num * 2;
      if (i != 0) {
        score[i - 1] = score[i - 1] * 2;
      }
    } else if (sym == "#") {
      num = num * -1;
    }
    score.push(num);
  }
  const answer = score.reduce((acc, cur) => acc + cur);
  return answer;
}

const r1 = "1S2D*3T";
const r2 = "1D2S#10S";
const r3 = "1D2S0T";
const r4 = "1S*2T*3S";
const r5 = "1D#2S*3S";
const r6 = "1T2D3D#";
const r7 = "1D2S3T*";

console.log(solution(r1));
// console.log(solution(r2));
// console.log(solution(r3));
// console.log(solution(r4));
// console.log(solution(r5));
// console.log(solution(r6));
// console.log(solution(r7));
