const fs = require("fs");


// STEP 1: Reading JSON file
const usersnew = require("./jsonDay4"); //const users :- users is used as an object here.

// Defining new user1
let user1 = {
    fname: "Mr.AAA",
	lname: "Kumar",
    age: 20,
    emp_id: 001
};


// Defining a another new user2
let user2 = {
    fname: "Mr.BBB",
	lname: "Kumar",
    age: 21,
    emp_id: 002
};

// Defining a another new user3
let user3 = {
    fname: "Mr.CCC",
	lname: "Kumar",
    age: 22,
    emp_id: 003
};

// Defining a another new user4
let user4 = {
    fname: "Mr.DDD",
	lname: "Kumar",
    age: 23,
    emp_id: 004
};


// Defining a another new user5
let user5 = {
    fname: "Mr.EEE",
	lname: "Kumar",
    age: 24,
    emp_id: 005
};
usersnew.unshift(user1);
usersnew.unshift(user2);
usersnew.unshift(user3);
usersnew.unshift(user4);
usersnew.push(user5);





// STEP 3: Writing to a file
fs.writeFile("jsonDay4.json", JSON.stringify(usersnew), err => {

    // Checking for errors
    if (err) throw err;



    console.log("Done writing"); // Success
});