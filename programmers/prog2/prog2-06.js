// NOTE: 큰 수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/42883
// 어떤 숫자에서 k개의 수를 제거했을때 얻을 수 있는 가장 큰 수 리턴
// 1924에서 수 2개를 제거
// [19, 12, 14, 92, 24, 24] 만들수있음
// 가장 큰 수는 94

// 숫자의 순서는 재배치 할 수 없음
// 숫자를 제거하는것만으로 결과를 만들어야 한다

// n = [1, 9, 2, 4]
// k = 2
// stack = [] 결과물이 만들어질 배열
// 1. 빈 스택에 n[0] = 1을 넣음
// 2. 스택에 들어간 1과 n[1] = 9를 비교
// 3. 9가 더 크기때문에 스택에서 1을 뺌(=숫자 제거)
//    k -= 1
// 4. 빈 스택에 n[1] = 9 넣음
// 5. n[2] = 2와 비교해서 9가 더 크기때문에 빼지않고 2 넣음
// 6. 스택의 2와 n[3] = 4 비교
//    4가 더 크기때문에 2 삭제하고 4 넣음

// number = 362344, k = 5 로 테스트했을때 결과 644
// 제거할 숫자가 k = 2 로 남아있음
// stack 가장 아래 남아있는 숫자가 큰 수이므로 뒤에서부터 k개 제거하는 방법을 추가

function solution (number, k) {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    const cur = number[i];
    while (k > 0 && stack[stack.length - 1] < cur) {
      stack.pop();
      k--;
    }
    stack.push(cur);
  }
  stack.splice(stack.length - k, k);
  return stack.join('');
};

const number1 = '1924';
const k1 = 2;

const number2 = '1231234';
const k2 = 3;

const number3 = '4177252841';
const k3 = 4;

const number4 = '362344';
const k4 = 5;

// console.log(solution(number1, k1));
// console.log(solution(number2, k2));
// console.log(solution(number3, k3));
console.log(solution(number4, k4));
