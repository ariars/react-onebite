console.log("Hello node.js")

import randomColor from "randomcolor";
//const moduleData = require("./math");
//const { add, sub } = require("./math");

//console.log(moduleData.add(1,2));
//console.log(moduleData.sub(1,2));

// import { add, sub } from "./math.js"
// import mul from "./math.js"

import mul, { add, sub } from "./math.js"
import randomcolor from "randomcolor";


console.log(add(1,2));
console.log(mul(1,2));


const color = randomColor();
console.log(color);


