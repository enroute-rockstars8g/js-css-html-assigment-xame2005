//fibonacci sequence recursive
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//fibonacci sequence not recursive
function fibonacci2(n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
  }
  return b;
}

fibonacci2(10);
