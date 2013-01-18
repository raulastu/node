var http=require('http');
var url  = require('url');
var players = new Object();
var positions = 3;
var sockets=[];

var s = http.createServer(function (req,res){
	res.writeHead(200,{'Content-Type':'text/script'});
	// res.end("hello\n");
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	console.info(query);
	if(query.finish==1){
		res.end('_testcb(\''+positions+++'\')');
	}
	console.log(query.player);
	if(query.refresh==1){
		players[query.player]=query.pos;
		if(query.pos==725){
			players[query.player]+=positions--;
		}
		var jsonString = JSON.stringify(players);
		res.end('_testcb(\''+jsonString+'\')');
	}else if(query.player!=undefined){
		positions=3;
		players[query.player]=0;
		console.info(players);
		var x = completed()+"";
		res.end('_testcb(\'{"r": "' + x + '"}\')');
	}else{
		res.end('hi :9');
	}
});

completed = function (){
	if(players['1']==0 && players['2']==0 && players['3']==0)
		return 1;
	return 0;
}

s.listen(8000);