'use strict';

function fib(n) {
  if (n < 0) {
    return 0
  } else {
    let result = [0,1];
    return fibHelper(0,1,n,result);
  }
}

function fibHelper(f1, f2, n, result) {
  if (n <= 0) {
    return result;
  } else {
    let sum = f1 + f2;
    result.push(sum);
    return fibHelper(f2,f1+f2,n-1,result);
  }
}

const length = 30;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}