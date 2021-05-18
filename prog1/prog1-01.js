// NOTE: 완주하지 못한 선수
// NOTE: 한명 빼고 다 완주함. 완주 못한 한명을 찾는 문제.
function solution(participant, completion) {
  // 두 배열의 요소 순서가 제각각이므로 알파벳순서대로 정렬해서 최대한 탐색 비용을 줄인다
  var answer = "";
  participant.sort();
  completion.sort();
  console.log(participant);
  console.log(completion);

  // 효율성을 고려하면 이중for문으로 비교하면 안됨
  // sort로 두 배열의 순서를 일치시켰기 때문에 순서가 맞지 않는 요소는 둘 중 한 배열에만 있는 요소라는 뜻
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      return answer;
    }
  }
}

const part = ["mislav", "stanko", "mislav", "ana"];
const comp = ["stanko", "ana", "mislav"];

console.log(solution(part, comp));
