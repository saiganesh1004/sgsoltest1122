const fs = require ("fs");

//read users.json file
fs.readFile("users.json", function(err,data){

	//check for errors
	if (err) throw err;

	//conversion to JSON
	const user = JSON.parse(data)
	console.log(user);
});