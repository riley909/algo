// NOTE: 프린터
// https://programmers.co.kr/learn/courses/30/lessons/42587
// 스택/큐
// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.
// priorities = 현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열
// location = 인쇄를 요청한 문서의 위치를 알려주는 변수
// 숫자가 클수록 중요도가 높다

// EXAMPLE)
// 중요도 = [[0, 2], [1, 1], [2, 3], [3, 2]], [위치, 중요도]
// 위치 = 2
// 1. 가장 앞에 있는 0  t = [0, 2], q = [[1, 1], [2, 3], [3, 2]]
// 2. q에 t보다 큰 수 있으므로 q에 t push
//    q = [[1, 1], [2, 3], [3, 2], [0, 2]]
// 3. t = [1, 1], q = [[2, 3], [3, 2], [0, 2]]
// 4. q에 t보다 큰 수 있으므로 q에 t push
//    q = [[2, 3], [3, 2], [0, 2], [1, 1]]
// 5. t = [2, 3], q = [[3, 2], [0, 2], [1, 1]]
// 6. q에 t보다 큰 수가 없으므로 answer = [[2, 3]]
// 7. t = [3, 2], q = [[0, 2], [1, 1]]
// 8. q에 t보다 큰 수가 없으므로(같은수는 제외) answer = [[2, 3], [3, 2]]
// 9. t = [0, 2], q = [[1, 1]]
// 10. q에 t보다 큰 수가 없으므로 answer = [[2, 3], [3, 2], [0, 2]]
// 11. t = [1, 1], q = [[]]
//     answer = [[2, 3], [3, 2], [0, 2], [1, 1]]
// 14. location과 일치하는 answer[i][0]을 찾고 answer[i]를 리턴

function solution(priorities, location) {
  // 출력 순서대로 정렬해 담을 배열
  const answer = [];
  // newPr = [[location, priorities]]
  let newPr = priorities.map((el, idx) => [idx, el]);

  while (newPr.length > 0) {
    // 대기목록 첫 순서
    const head = newPr.shift();
    // array.some() = 판별 함수를 통과하는지 테스트함. 결과는 boolean.
    // 대기목록 0번보다 중요도가 큰 작업이 대기목록에 있으면
    if (newPr.some((el) => el[1] > head[1])) {
      // 0번을 대기목록 맨 뒤로 넘김
      newPr.push(head);
    } else {
      // 0번이 중요도가 가장 높으면
      // 순서대로 정렬할 answer 배열에 넣음
      answer.push(head);
    }
  }
  console.log(answer);
  // answer[0] 이 location과 일치하는 요소의 인덱스 찾기
  // 출력 순서는 1부터이므로 + 1해줌
  return answer.findIndex((el) => el[0] === location) + 1;
}

const priorities1 = [2, 1, 3, 2];
const location1 = 2;
const priorities2 = [1, 1, 9, 1, 1, 1];
const location2 = 0;

console.log(solution(priorities1, location1));
console.log(solution(priorities2, location2));

// NOTE: Reference
function solutionRef(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  console.log(list);
  var count = 0;
  while (true) {
    // var cur = list.splice(0, 1)[0];
    var cur = list.shift();
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
console.log(solutionRef(priorities1, location1));
