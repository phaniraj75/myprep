

var proc = require('child_process')

child = proc.spawn('tail', ['-f', 'home/random.logs'])
console.log(child.pid)
child.on('error', function(e){
	console.log(e)
})
child.on('data', function(data){
	console.logs(data)
})
child.stdout.on('data', function(data){
	console.log(data.toString())
})
child.stderr.on('data', function(data){
	console.log(data.toString())
})