// NOTE: 입국심사
// https://programmers.co.kr/learn/courses/30/lessons/43238
// n명이 기다리는 중. 심사관마다 심사 소요 시간 다름.
// 심사는 동시에 한명씩만.
// 한명씩 줄서있다가 맨 앞에 선 사람이 빈 심사대로 감.
// 모든 사람이 심사를 받는 데 걸리는 최소 시간 구하기
// n = 기다리는 사람, times = 심사에 걸리는 시간 배열

// n = 6, times = [7, 10]
// times.length = 심사대 개수
// 만약 times[1]이 빈 상태라도 times[0]이 소요시간이 적기 때문에
// 때에 따라서는 times[1]로 가지 않고 기다렸다가 times[0]에 갈 수도 있음

// 찾으려는 값을 범위를 이용해서 탐색하기
// 최소값, 최대값 필요
// 중간값 = (최소 + 최대) / 2
// 중간값이 30분이라고 가정하면
//  각 소요시간으로 나눔
//  30/7 = 4 30분 안에 4명 처리가능
//  30/10 = 3 30분 안에 3명 처리 가능
//  총 7명
//  => 대기 6명이므로 시간을 더 줄일 수 있음
//     반대였다면 시간을 늘려야함

function solution(n, times) {
  // 최소값 모르기때문에 0으로 가정
  let left = 0;
  // 최대값 가장 느린심사대 * 대기인원
  times.sort((a, b) => a - b);
  let right = n * times[times.length - 1];
  // let right = n * Math.max(...times);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // 전체 심사대 처리가능한 누적값
    let cnt = 0;
    for (let i = 0; i < times.length; i++) {
      cnt += Math.floor(mid / times[i]);
      console.log(cnt);
    }
    if (n <= cnt) {
      // 대기 인원보다 총 처리 인원이 큼
      // 시간 줄여야함 = 왼쪽
      right = mid - 1;
    } else {
      // 대기 인원보다 총 처리 인원이 작음
      // 시간 늘려야함 = 오른쪽
      left = mid + 1;
    }
  }
  console.log(left);
  return left;
}

const n = 6;
const times = [7, 10];

console.log(solution(n, times));
