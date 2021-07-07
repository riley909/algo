const input = ['A', 'B', 'C', 'D'];
const answer = [];

// arr = 원소를 뽑을 배열
// n = 원소의 개수, 0부터 시작
// r = 뽑을 원소의 수
// n개의 원소에서 r개 뽑기
function permutation(arr, n, r) {
  console.log(n);
  console.log(arr.length - 1);

  if (n === arr.length - 1) {
    const str = arr.slice(0, r).join('');

    // answer 배열에 이미 존재하지 않으면 push
    if (!answer.includes(str)) {
      answer.push(str);
      return;
    }
  } else {
    for (let i = n; i < arr.length; i++) {
      let temp = arr[n];
      console.log(temp);
      arr[n] = arr[i];
      arr[i] = temp;
      console.log(arr[n], arr[i]);

      permutation(arr, n + 1, r);

      arr[i] = arr[n];
      arr[n] = temp;
    }
    return answer;
  }
}
console.log(answer);
console.log(permutation(input, 0, 2));
