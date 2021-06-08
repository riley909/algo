// NOTE: 카펫
// https://programmers.co.kr/learn/courses/30/lessons/42842
// 가운데 노란격자
// 테두리 갈색격자
// w >= h
// [w, h] 리턴하기

// brown + yellow = 사각형 넓이
//                = w * h
// brown = 사각형 둘레
//       = 2(w + h) - 4 // 겹치는 모서리 한칸씩 빼기

// w = brown + yellow / i
// w 를 구하기 위해서 반복문을 돈다
// h는 갈색1 + 노랑1 + 갈색1  = 3 적어도 3이어야함
// w는 h보다 크거나 같으므로 i는 3부터 시작
//  for(let i = 3; i < 12; i++)
//   3, 4, 6, 12 => 약수들
// 가로길이가 넓이와 같을수는 없으므로 범위는 (b + y)/2

function solution(brown, yellow) {
  const answer = [];
  const total = brown + yellow;
  for (let i = 3; i < total / 2; i++) {
    const width = total / i;
    if (width * i === total) {
      if (width + i === (brown + 4) / 2) {
        answer[0] = i;
        answer[1] = width;
      }
    }
  }
  return answer;
}

const br1 = 10;
const yw1 = 2;

const br2 = 8;
const yw2 = 1;

const br3 = 24;
const yw3 = 24;

console.log(solution(br1, yw1));
// console.log(solution(br2, yw2));
// console.log(solution(br3, yw3));
