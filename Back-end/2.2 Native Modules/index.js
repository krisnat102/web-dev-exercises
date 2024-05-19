 const { error } = require("console");
const fs = require("fs");

fs.readFile("message.txt", "utf8" , (error, data) => {
    if(error) throw error;
    console.log(data);
});

//  fs.writeFile("./message.txt", "Hello from NodeJS", (error) => {
//     if(error) throw error;
//     console.log("The file has been saved");
//  });

