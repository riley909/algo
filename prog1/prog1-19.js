// NOTE: 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889
// 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// N = 전체 스테이지 개수
// stages = 사용자가 현재 멈춰있는 스테이지 번호 배열
// 실패율 높은 스테이지부터 내림차순 배열 리턴하기

function solution(N, stages) {
  let temp = [];
  for (let i = 1; i <= N + 1; i++) {
    let curPlayers = 0;
    let allPlayers = 0;
    for (let j = 0; j < stages.length; j++) {
      if (i <= stages[j]) {
        if (i === stages[j]) curPlayers++;
        allPlayers++;
      }
    }
    temp.push([i, curPlayers / allPlayers]);
    console.log(curPlayers);
    console.log(allPlayers);
  }
  // 전체통과한사람 빼기
  temp.pop();
  console.log(temp);
  temp.sort((a, b) => b[1] - a[1]);
  console.log(temp);

  const answer = temp.map((v) => v[0]);
  return answer;
}

const N1 = 5;
const stages1 = [2, 1, 2, 6, 2, 4, 3, 3];

const N2 = 4;
const stages2 = [4, 4, 4, 4, 4];

console.log(solution(N1, stages1));
// console.log(solution(N2, stages2));
