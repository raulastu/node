var http=require('http');

var s = http.createServer(function (req,res){
	res.writeHead(200,{'content-type':'text/plain'});
	res.write("hello\n");
	setTimeout(function (){
		res.end("lester \n");	
	}, 2000);
	
});

s.listen(8000);