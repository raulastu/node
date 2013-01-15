var net = require('net');

var sockets = [];

var server = net.createServer(function (socket){
	sockets.push(socket);
	socket.on('data',function(d){
		for (var i = 0; i <sockets.length; i++) {
			if(sockets[i]!=socket)
				sockets[i].write(d);
		};
	})
});

server.listen(8000);