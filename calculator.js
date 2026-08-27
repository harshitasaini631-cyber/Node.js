const Process = require("process");

const ops = Process.argv[2];
const a = +process.argv[3];
const b = +process.argv[4];

function add(x,y){
    console.log(x+y);
}
function sub(x,y){
    console.log(x-y);
}
function divide(x,y){
    console.log(x/y);
}
function product(x,y){
    console.log(x*y);
}

if (ops=="add") {
    add(a, b);
} else if (ops=="sub") {
    sub(a, b);
} else if (ops=="divide") {
    divide(a, b);
} else if (ops=="product") {
    product(a, b);
}