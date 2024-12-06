var v0 = "v0";
let l0 = "l0";
console.log(v0, l0);
function fn1() {
  v0 = "fn1-v0";
  l0 = "fn1-l0";
  console.log(v0, l0);
}
fn1();
console.log(v0, l0);

function fn2() {
  var v0 = "fn2-v0";
  let l0 = "fn2-l0";
  console.log(v0, l0);
}
fn2();
console.log(v0, l0); //밖에 있는 값은 변하지 않음. 위에서 사용한 fn1()함수에서 저장한 값 사용

{
  var v0 = "block-v0";
  let l0 = "block-l0";
  console.log(v0, l0);
}
console.log(v0, l0); //l0만 블록처러 되어버림. let으로 선언했기 때문.

var i = "I";
for (var i = 0; i < 1; i++) {
  console.log(i);
}
console.log(i);
//var은 값이 변해버림
let j = "J";
for (let j = 0; j < 1; j++) {
  console.log(j);
}
console.log(j);
//let은 값이 안변함.
