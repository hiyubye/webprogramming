var v0 = "v0";
let l0 = "l0";
console.log(v0, l0);
function fn1() {
  v0 = "fn1-v0";
  l0 = "fn1-l0";
  console.log(v0, l0);
}
fn1();
ㅋ;
console.log(v0, l0);

function fn2() {
  var v0 = "fn2-v0";
  let l0 = "fn2-l0";
  console.log(v0, l0);
}
fn2();
console.log(v0, l0); //밖에 있는 값은 변하지 않음. 위에서 사용한 fn1()함수에서 저장한 값 사용
