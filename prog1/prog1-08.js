// NOTE: 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061
// 인형뽑기 게임판을 나타내는 이차원배열 board
// 0 = 인형 없음. 숫자는 인형의 종류
// 어느 줄에서 인형을 뽑을지 지시하는 배열 moves
// 같은 종류 인형이 2개 쌓이면 터짐
// 터진 인형 개수 리턴하기

function solution(board, moves) {
  let answer = 0;
  let result = [0];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (result[result.length - 1] === board[j][moves[i] - 1]) {
          result.pop();
          answer += 2;
        } else {
          result.push(board[j][moves[i] - 1]);
        }
        // 꺼낸 인형 자리 0으로 만들기
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
