function mergeSort(arr) {
  const size = arr.length;
  let leftArr = arr.splice(0, size / 2);
  let rightArr = [...arr];
  console.log(leftArr);
  console.log(rightArr);
}

mergeSort([2, 4, 9, 6, 7, 8, 9]);
