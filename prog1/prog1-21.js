// NOTE: 비밀 지도
// https://programmers.co.kr/learn/courses/30/lessons/17681

// n = 지도의 한 변의 길이
// arr1, arr2 = 지도1, 지도2를 정수로 암호화한 배열
// 이진수로 부호화하면 가로줄기준 1이 벽 0이 공백임
// 두 지도 합쳐서 하나라도 벽이면 벽 둘다 공백이면 공백
// 이진수 변환했을 때 5자리 미만인 숫자는 앞에 0으로 채우기

function solution(n, arr1, arr2) {
  let answer = [];
  const bit1 = arr1.map((v) => {
    const bit = v.toString(2);
    return bit.length !== n ? "0".repeat(n - bit.length) + bit : bit;
  });
  const bit2 = arr2.map((v) => {
    const bit = v.toString(2);
    return bit.length !== n ? "0".repeat(n - bit.length) + bit : bit;
  });

  for (let i = 0; i < bit1.length; i++) {
    let temp = "";
    for (let j = 0; j < bit1[i].length; j++) {
      if (bit1[i][j] === "1" || bit2[i][j] === "1") {
        temp += "#";
      } else {
        temp += " ";
      }
    }
    answer.push(temp);
  }

  console.log(bit1);
  console.log(bit2);
  console.log(answer);
  return answer;
}

const n1 = 5;
const arr11 = [9, 20, 28, 18, 11];
const arr12 = [30, 1, 21, 17, 28];

const n2 = 6;
const arr21 = [46, 33, 33, 22, 31, 50];
const arr22 = [27, 56, 19, 14, 14, 10];

// console.log(solution(n1, arr11, arr12));
console.log(solution(n2, arr21, arr22));
