// NOTE: 체육복
// https://programmers.co.kr/learn/courses/30/lessons/42862
// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost
// 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve
// 체육수업을 들을 수 있는 학생의 최댓값을 return 하기

// 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있다
// 체육복을 도난당한 학생의 수는 1명 이상 n명 이하. 중복되는 번호 없음
// 여벌의 체육복을 가져온 학생 수는 1명 이상 n명 이하. 중복되는 번호 없음
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있다.

function solution(n, lost, reserve) {
  var answer = 0;

  // 여벌이 있지만 체육복 도난당한 경우
  const prevLost = lost.slice();
  lost = lost.filter((item) => !reserve.includes(item));
  reserve = reserve.filter((item) => !prevLost.includes(item));
  // 전체 학생수에서 체육복이 아예 없는 학생수만큼 뺌 = 체육복 있는 학생
  answer = n - lost.length;

  lost.sort();
  reserve.sort();

  // 여벌이 없고 체육복 도난당한 경우
  // 빌릴 수 있는 학생 찾기
  lost.forEach((lostS) => {
    const _reserve = reserve.findIndex((reserveS) => {
      // 도난당한 학생 번호 - 여벌있는 학생번호 = 1 || -1 : 앞뒤로 위치한 번호라는 의미
      // 빌려줄 수 있는 학생 index를 리턴
      return lostS - reserveS === 1 || lostS - reserveS === -1;
    });
    // 리턴한 인덱스가 있으면 여벌 가져온 학생 명단에서 제거(빌려줬으므로)
    if (_reserve !== -1) {
      reserve.splice(_reserve, 1);
      answer++;
    }
  });

  return answer;
}

const lost = [4, 2];
const reserve = [1, 3];

console.log(solution(4, lost, reserve));
