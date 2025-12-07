console.log("chapter06");

let arr = [1,2,3];
// for of 반복문
for (let item of arr) {
    console.log(item);
}

let person = { name : "정", age: 27, hobby: "테"};

// of keys
let keys = Object.keys(person);

for (let key of keys) {
    console.log(key);
}

// of values
let values = Object.values(person);

for (let value of values) {
    console.log(value);
}

// for in
for (let key in person) {
    console.log(person[key]);
}