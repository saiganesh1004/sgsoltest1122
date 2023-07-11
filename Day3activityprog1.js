
let http =require('http');
let fs = require('fs');
const hostname = '127.0.0.1'
const port = 8081;


const server = http.createServer((req, res) => {
	res.statusCode = 200; //server could process the request properly
	res.setHeader('content-Type','text/plain'); //text/plain:: server is respondingwith text data
	fs.readFile('./Day3activityProg1.txt', null, function(error, data){
		if (error) {
			res.writeHead(404);
			res.write('file not found');
		} else {
			res.write(data);
		}
		res.end();
	});
});


server.listen(port, hostname, () => {
	console.log(`server running at http://${hostname}:${port}/`);
});

//Done with the code created a sever and made the text file read and dislayed it on web pade.