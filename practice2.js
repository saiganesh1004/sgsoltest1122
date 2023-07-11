const async = require("async");

function square1(a,b) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve (a + b);
		},2000);
	});
}
function square2(c,d) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve (c + d);
		},2000);
	});
}

async function output1 (a,b) {
	const ans1 = await square1(a,b);
	console.log(ans1);
}

async function output2 (c,d) {
	const ans2 = square2(c,d);
	console.log(ans2);
}
output1(10,20);
output2(100,200);