// NOTE: 다리를 지나는 트럭
// https://programmers.co.kr/learn/courses/30/lessons/42583
// 트럭 여러대가 일차선 다리를 정해진 순서대로 건널 때 최소 시간
// bridge_length = 다리에 올라갈 수 있는 트럭 수
// weight = 다리가 견딜 수 있는 무게
// truck_weights = 트럭 무게 배열

// 다리에 트럭 2대 올라갈 수 있음
// 다리가 견디는 무게는 10
// 트럭 무게 = [7, 4, 5, 6]
// 1. 0초 = 시작
//    완료 = [], 이동중 = [], 대기트럭 = [7, 4, 5, 6]
// 2. 1초 = 7 출발
//    완료 = [], 이동중 = [7], 대기트럭 = [4, 5, 6]
// 3. 2초 = 10초과하므로 4 못올라감
//    완료 = [], 이동중 = [7], 대기트럭 = [4, 5, 6]
// 4. 3초 = 7도착, 4출발
//    완료 = [7], 이동중 = [4], 대기트럭 = [5, 6]
// 5. 4초 = 제한 10 넘지않으므로 5 올라갈 수 있음
//    완료 = [7], 이동중 = [4, 5], 대기트럭 = [6]
// 6. 5초 = 4도착, 10넘으므로 6 못올라감
//    완료 = [7, 4], 이동중 = [5], 대기트럭 = [6]
// 7. 6초 = 5도착
//    완료 = [7, 4, 5], 이동중 = [], 대기트럭 = [6]
// 8. 7초 = 6출발
//    완료 = [7, 4, 5], 이동중 = [6], 대기트럭 = []
// 9. 8초 = 6도착
//    완료 = [7, 4, 5, 6], 이동중 = [], 대기트럭 = []

// sec = 시간
// cur = 건너갈 트럭
// moving = 다리에 올라갈 수 있는 트럭 수만큼 fill(0)
// bridgeWeight = 현재 다리의 무게
// 1. 건너갈 트럭을 truck_weights에서 shift()로 뽑음
// 2. moving에 뽑은 트럭 push
//    moving = [0, 0] => [0, 7] 이런식으로 됨
// 3. 다리 무게가 0이 되면 트럭이 다 건넌것
//    bridgeWeight가 있을때 반복
// 4. 현재무게에서 현재 다리에 있는 첫번째 트럭 무게를 뺌
//    [0, 7] 무게 - 0 => 완전히 건널 수 있는 트럭 없다는 뜻
//    [7, 0] 무게 - 7 => 7짜리 트럭이 건너간 것
// 5. 현재 다리 무게 + 다음트럭무게 <= 제한무게 인 경우
//    moving에 다음트럭 넣음
//    truck_weights에서는 shift()로 제거
//    bridgeWeight += 다음트럭무게
// 6. 아니라면 다음트럭 못넣음
//    moving에 0 넣기
// 7. 시간 증가시키기 sec++

function solution(bridge_length, weight, truck_weights) {
  var sec = 1;
  let cur = truck_weights.shift();
  let moving = new Array(bridge_length - 1).fill(0);
  let bridgeWeight = cur;

  moving.push(cur);

  while (bridgeWeight) {
    bridgeWeight -= moving.shift();
    let next = truck_weights[0];

    if (bridgeWeight + next <= weight) {
      moving.push(next);
      truck_weights.shift();
      bridgeWeight += next;
    } else {
      moving.push(0);
    }
    sec++;
  }
  return sec;
}

const bridge_length1 = 2;
const weight1 = 10;
const truck_weights1 = [7, 4, 5, 6];

const bridge_length2 = 100;
const weight2 = 100;
const truck_weights2 = [10];

const bridge_length3 = 100;
const weight3 = 100;
const truck_weights3 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(solution(bridge_length1, weight1, truck_weights1));
// console.log(solution(bridge_length2, weight2, truck_weights2));
// console.log(solution(bridge_length3, weight3, truck_weights3));
