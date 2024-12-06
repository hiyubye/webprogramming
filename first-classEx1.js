function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}

let p = plus;
console.log("10 + 20 = %d", p(10, 20));

//함수가 매개변수
function calculate(a, b, func) {
  return func(a, b);
} //함수에서 함수를 매개변수로 호출하고 함수를 수행
console.log(calculate(10, 20, minus));
console.log(calculate(10, 20, plus));
