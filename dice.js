const crypto = require("crypto");
const fs = require("fs");
let output = "";


for (let i = 0; i < 10; i++) {
    const ans1 = crypto.randomInt(1, 7);
    console.log("Dice:", ans1);
}