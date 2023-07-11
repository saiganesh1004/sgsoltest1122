const fs = require("fs");


// STEP 1: Reading JSON file
const users = require("./usersnew"); //const users :- users is used as an object here.

// Defining new user
let user = {
    name: "Saps1",
    age: 25,
    language: ["Node", "React", "Graphql"]
};


// Defining a another new user
let user1 = {
    name: "Saps2",
    age: 35,
    language: ["MSA","Graphql"]
};



// STEP 2: Adding new data to users object
users.unshift(user);
users.push(user1)



// STEP 3: Writing to a file
fs.writeFile("usersnew.json", JSON.stringify(users), err => {  //Json.stringify used to read the values , reading the object which is users here.
															   // convert JSON Format to plain  String 
    // Checking for errors
    if (err) throw err;



    console.log("Done writing"); // Success
});