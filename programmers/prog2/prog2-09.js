// NOTE: 위장
// https://programmers.co.kr/learn/courses/30/lessons/42578
// 하루에 최소 한 개의 옷은 입어야 함.
// 다른 날에는 옷이 추가되거나 다른 옷으로 바뀌어야 함.
// 조합의 수 리턴하기.
// 이차원배열 clothes = [[의상이름, 의상 종류], ...]

// 같은 이름을 가진 의상은 없으므로 옷 이름은 고려하지 않음
// 옷 종류는 겹치면 안되기 때문에 옷 종류별로 나눠야 함
// {의상 종류 : 의상 이름}
// 키값이 의상 종류인 것의 개수 세기
//[
// ['yellowhat', 'headgear'],
// ['bluesunglasses', 'eyewear'],
// ['green_turban', 'headgear'],
// ]
// headgear는 2, eyewear는 1 = 2 * 1
// 1. (yellowhat + bluesunglasses)
// 2. (green_turban + bluesunglasses)
// 보통은 이렇게 2가지 경우의 수로 계산
// 한가지만 입을 수도 있다고 했으므로
// 3. (yellowhat)
// 4. (green_turban)
// 5. (bluesunglasses)

// 각 경우에서 하나만 입는 경우 1을 더하고
// 아무것도 안입는 경우 1을 제외
// (2 + 1) * (1 + 1) - 1

function solution(clothes) {
  let answer = 1;
  let obj = {};
  for (let i = 0; i < clothes.length; i++) {
    // obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    if (obj[clothes[i][1]] >= 1) obj[clothes[i][1]]++;
    else obj[clothes[i][1]] = 1;
  }
  for (let key in obj) {
    // 개수 세기
    answer *= obj[key] + 1;
  }
  console.log(answer);
  console.log(obj);
  return answer - 1;
}

const clothes1 = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

const clothes2 = [
  ['crowmask', 'face'],
  ['bluesunglasses', 'face'],
  ['smoky_makeup', 'face'],
];

console.log(solution(clothes1));
// console.log(solution(clothes2));
