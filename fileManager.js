const fs = require("fs");


// read operation

fs.readFile("./text.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Something went wrong");
    } else{
        console.log(data);
        
    }
});


