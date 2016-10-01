var http = require('http')
var fs = require('fs')
var proc = require('child_process')
var url = require('url')
var rgx = require('regex')
var path = '/home/random.logs'

server = http.createServer(function(req, res){
	res.writeHead(200, 'type:text/plain')
	fs.readFile(path, function(err, data){
		if(err)
		{
			console.log('file specified not found')
			res.end('File not found')
		}
		else
		{
			var regex = /p\w+/
			res.write(data)
			child = proc.spawn('tail', ['-f', path])
			child.stdout.on('data', function(data){
				lines = data.toString().split('\n');
				lines.map(function(val){
					val = val + '\n'
					if(regex.test(val))
					{
						console.log('found line matching with regex : ' + val)
						formattedLine = '<h1 style="color:blue;">' + val + '</h1>'
						console.log(formattedLine)
						res.write(formattedLine)
					}
					res.write(val)
				})	
				
			})
			child.stderr.on('data', function(data){
				res.write(data.toString())
				//res.end()
			})
			child.on('close', function(m){
				res.end()
			})
		}
	})

})
server.listen(9000,'127.0.0.1')