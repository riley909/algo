// dfs, bfs => 완전탐색 기법
//          => 그래프(트리)를 순회

function solution(input1, input2){
  // dfs + memoization

  // 깊이 우선
  // 깊이를 나타내는 변수 = 문제의 크기, 문제의 순서
  // 재귀 탈출조건 = 가장 큰 입력 또는 그 이상 || 가장 작은 입력 또는 그 이하
  const aux = (depth, matrix, visited) => {
    if(depth === N) {
      return
    }
    
    // 현재 깊이에서 선택가능한 옵션들을 탐색
    // 보통 반복문으로 구현
    for(let i = 0; i < N; i++){
      if(res){
      // 선택에 따른 데이터의 변화
      // ex) matrix[y][x] = 1
      const res = aux(depth+1, matrix, visited)
      // 원복
      // ex) matrix[y][x] = 0
      }
    }
  }
}