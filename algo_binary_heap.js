// NOTE: 이진 힙
// minHeap, maxHeap
// 이진포화트리

// 트리구조를 선형적으로 표현한다면
// [root, root_L, root_R, ...]
// 왼쪽자식은 자신 * 2 + 1
// 오른쪽자식은 자신 * 2 + 2

// 부모는 자식보다 크거나 작으면 됨
// 계속 부모와 비교하면서 위로 올라간다

const bHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

// 왼, 오 상관없이 부모를 찾으려면
function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

function swap(curIdx, pIdx, heap) {
  // destructuring assignment 활용
  // [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  [heap[curIdx], heap[pIdx]] = [heap[pIdx], heap[curIdx]];
}

function insert(heap, item) {
  heap.push(item);
  let curIdx = heap.length - 1;
  // 부모의 인덱스
  let pIdx = getParentIdx(curIdx);

  while (pIdx >= 0 && heap[curIdx] < heap[pIdx]) {
    swap(curIdx, pIdx, heap);
    curIdx = pIdx;
    pIdx = getParentIdx(curIdx);
  }
}
