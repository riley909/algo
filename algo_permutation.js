const input = ['A', 'B', 'C', 'D'];
const answer = [];

function permutaion(arr, n, k) {
  if (n === arr.length - 1) {
    const str = arr.slice(0, k).join('');
    if (!answer.includes(str)) answer.push(str);
    return;
  } else {
  }
}

console.log(permutaion(input, 0, 2));
