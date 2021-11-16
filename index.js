//fibonacci sequence recursive
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//fibonacci sequence not recursive
function fibonacci2() {
  const fibonacciInput = document.getElementById("fibonacci-input").value;

  let a = 0;
  let b = 1;
  for (let i = 0; i < fibonacciInput; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
    var aBlock = document
      .createElement("p")
      .appendChild(document.createElement("c"));
  }
  return b;
}
