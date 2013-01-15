var http=require('http');
var url  = require('url');
var players = new Object();

var sockets=[];

var s = http.createServer(function (req,res){
	res.writeHead(200,{'Content-Type':'text/script'});
	// res.end("hello\n");
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	if(query.refresh==1){
		players[query.player]=query.pos;
		console.info(players);
		var jsonString = JSON.stringify(players);
		res.end('_testcb(\''+jsonString+'\')');
	}else{
		players[query.player]=0;
		console.info(players);
		var x = completed()+"";
		res.end('_testcb(\'{"r": "' + x + '"}\')');
	}
});

completed = function (){
	if(players['1']==0 && players['2']==0 && players['3']==0)
		return 1;
	return 0;
}

s.listen(8000);