const input = ['A', 'B', 'C', 'D'];
const answer = [];

function permutaion(arr, n, r) {
  console.log(n);
  console.log(arr.length);
  if (n === arr.length - 1) {
    const str = arr.slice(0, r).join('');
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

      permutaion(arr, n + 1, r);

      arr[i] = arr[n];
      arr[n] = temp;
    }
    return answer;
  }
}
console.log(answer);
console.log(permutaion(input, 0, 2));
