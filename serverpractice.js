const http = require('http');

const hostname = '127.0.0.1';
//const port = 21;
const port = 9090;

//port -3000 -pass-using
//port -9000 -pass
//port -21 - fails
//port -443 -pass

const server = http.createServer((req, res) => {
	res.statusCode = 200; //server could process the request properly
	res.setHeader('content-Type','text/plain'); //text/plain:: server is respondingwith text data
	res.end('Hello World 123\n');
});

server.listen(port, hostname, () => {
	console.log(`server running at http://${hostname}:${port}/`);
	console.log("consoles hello World")
	console.log("consoles hello World123");
});