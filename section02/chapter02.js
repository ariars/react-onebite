console.log("chapter02");

function printNmae(person) {
    console.log(person && person.name);
}

//let person = null;
let person = { name : "정"};
printNmae();
printNmae(person);