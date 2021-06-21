// NOTE: N개의 최소공배수
// https://programmers.co.kr/learn/courses/30/lessons/12953
// 최소공배수 = LCM = Least Common Multiple
// 최대공약수 = GCD = Greatest Common Divisor

// arr = 숫자 배열
// arr의 요소들의 최소공배수 리턴하기
// 최대공약수를 이용해서 최소공배수 구하기

// https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95

// 1. GCD 함수 작성
//    유클리드 호제법 알고리즘
//    두 수 a, b (a > b)
//    1. b === 0 이면 a 출력후 종료
//    2. a % b === 0 이면 b 출력후 종료
//    3. 아니라면 a % b 를 a에 대입하고 a, b를 바꿈
//       3번으로 돌아온다
//         a = a % b
//         temp = b
//         b = a
//         a = temp
// 2. LCM 함수 작성
//    LCM = a * b / GCD
// 3. arr의 요소만큼 반복하면서 최소공배수 구하기
//    arr = [2, 6, 8, 14]
//    c = lcm(2, 6)
//    c = lcm(c, 8)
//    c = lcm(c, 14)

function gcd(a, b) {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  // b가 0보다 작으면 탈출
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}

const arr1 = [2, 6, 8, 14];
const arr2 = [1, 2, 3];

console.log(solution(arr1));
console.log(solution(arr2));

// NOTE: Reference
const gcdRef = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcdRef(b, a % b);
};
//하나씩 전진하면서 최대공약수를 구해서 두수의 곱에 최대공약수를 나눈 최소공배수를 구해준다.
return arr.reduce((acc, cur) => (acc * cur) / gcdRef(acc, cur));
