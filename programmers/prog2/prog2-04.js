// NOTE: 기능 개발
// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = [];
  const remain = [];
  // 작업 완료까지 남은 날짜를 구해서 remain 배열에 담는다
  for (let i = 0; i < progresses.length; i++) {
    // (100 - 현재작업상태) => (남은 작업량) / 작업속도 = 남은날짜
    remain.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  // 배포되는 기능 수
  let num = 1;
  // 남은 개발 날짜
  let maxDay = remain[0];
  for (let i = 1; i < remain.length; i++) {
    if (maxDay >= remain[i]) {
      // 이전 개발의 남은 날짜가 다음 날짜보다 높으면
      // 다음 개발로 못넘어가고 같이배포되므로 배포기능수 +1
      num += 1;
    } else {
      // 개발 날짜 끝났으면 배포 기능수 push
      answer.push(num);
      // 다음 개발 날짜로 바꿈
      maxDay = remain[i];
      // 기능 수 초기화
      num = 1;
    }
  }
  answer.push(num);
  return answer;
}
