var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200,{'content-type':'text/html'})
	response.end('<h1>Hello World</h1>');
}).listen(52273, function(){
	console.log('Server Running http://127.0.0.1:52273/');
});



