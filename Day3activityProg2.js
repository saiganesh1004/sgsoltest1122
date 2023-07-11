const http =require('http');
const port = 9090;


a = 1;
b = 2;
c = a+b;

const server = http.createServer((req, res) => {
	res.statusCode = 200; //server could process the request properly
	res.setHeader('content-Type','text/plain'); //text/plain:: server is respondingwith text data
	res.write(c);
	res.end();
});

server.listen(port, () => {
	console.log(`server running at 9090`);
});