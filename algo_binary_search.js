// NOTE: 이분탐색
// https://www.youtube.com/watch?v=7lGiPItOVCM
// val = 찾는 수, arr = 숫자 배열

const search = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
};

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(search(7, values));

// 운이 좋으면 정답이 첫번째에 있겠지만
// 아니라면 처음부터 끝까지 반복하고나서도 못 찾을수 있음
// 그래서 절반을 나누고 왼쪽인지 오른쪽인지 판별하는것
// 항상 정렬 필요함

// ==================================================

const binary = (val, arr) => {
  // 최소값(여기서는 인덱스0)
  let lower = 0;
  // 최대값(인덱스10)
  let upper = arr.length - 1;

  while (lower <= upper) {
    console.log('try');
    // 중간값
    const mid = lower + Math.floor((upper - lower) / 2);

    // 일치하는 경우
    if (val === arr[mid]) {
      return mid;
    }
    // 일치하지 않으면
    // 찾는수보다 중간값이 큼
    if (val < arr[mid]) {
      // 중간값을 줄여야함
      // 중간값을 기준으로 왼쪽을 탐색영역으로 좁힘
      // 최대 영역을 중간값 - 1 로 줄이기
      upper = mid - 1;
    } else {
      // 찾는수보다 중간값이 작음
      // 중간값을 늘려야함
      // 오른쪽
      // 최소 영역을 중간값 + 1 로 늘리기
      lower = mid + 1;
    }
  }
  return -1;
};

const values1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binary(6, values));
