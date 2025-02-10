function fibs(n) {
  if (n == 0) return [0];
  let res = [0, 1];
  for (let i = 2; i < n; i++) {
    let c = res[i - 1] + res[i - 2];
    res.push(c);
  }
  return res;
}

function fibsRec(n) {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];

  let arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

console.log(fibs(7));
console.log(fibsRec(7));
