console.log("chapter04");

// 1. spread 연산자
// -> spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

// 배열
let arr1 = [1,2,3];
let arr2 = [4, ...arr1, 5,6];
console.log(arr2);
// 객체
let obj1 = {a:1, b:2};
let obj2 = {...obj1, c:3, d:4};
console.log(obj1);
console.log(obj2);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
function funcB(...rest) {
    console.log(rest);
}

funcB(...arr2);

function funcC(one, two, ...rest) {
    console.log(rest);
}

funcC(...arr2);
function funcAA(v) {
    console.log(v);
}

funcB(...arr2);
