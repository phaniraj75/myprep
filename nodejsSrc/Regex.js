var rgx = require('regex')
var proc = require('child_process') 

regex =  /p\w+/.test('ariwk jojsc qeqfi cjaoj renpo baicx qmhsq uszjo yojji edlwk kheoj pcjnr udzyq smfor scfbk msjwd tbhmc luhcp zycyb xlcew')
console.log(regex)
if(regex)
{
	console.log('match!!!!')
}
child=proc.spawn('tail', ['-f', '/home/random.logs'])

child.stdout.on('data', function(data){
	lines = data.toString().split('\n')
	lines.map(function(line){
		if(/ p\w+/.test(line))
		{
			console.log('FOund matching pattern')
		}
		console.log(line)	
	})
	
})

child.stderr.on('data', function(data){
	lines = data.toString().split('\n')
	lines.map(function(line){
		if(/ p\w+/.test(line))
		{
			console.log('FOund matching pattern')
		}
		console.log(line)	
	})
	
})

if(regex)
{
	console.log('Found matching string')
}
