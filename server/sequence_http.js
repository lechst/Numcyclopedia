var http = require('http');
var fs = require('fs');
var path = require("path");
var url = require('url');


var pathToApp = 'http://localhost:8080/Numcyclopedia/'

var loadToClient = [
    'js/Verbose.js',
    'js/utils.js',
    'js/Sequence.class.js',
    'js/NumbersSequence.class.js',
    'js/fastPrimes.js'
];

var loadToClientAfter = [
    'server/SeqCompiler.js'
];

var pageHTML = function(head,body){ return '<html>' +
    '<head>' +
    '<meta charset="utf-8">'+
    '<title>Sequences</title>' +
    loadToClient.map(function(x){return '<script src="'+pathToApp+x+'"></script>'}).join('')+
    head+
    '</head>' +
    '<body>' +
    body+
    loadToClientAfter.map(function(x){return '<script src="'+pathToApp+x+'"></script>'}).join('')+
    '</body>' +
    '</html>'};

var sequenceHTML = function(file,dir){ return '<script src="'+pathToApp+dir+file+'"></script>'};


var server = http.createServer(function(req, res) {

    if(req.method=="POST" && url.parse(req.url).pathname.search('/upload')>-1)
    {
        req.on('data', function(chunk) {

            var urlA = req.url.split("/");
            console.log(chunk.length,req.url,urlA[2]);
            if(!fs.existsSync('./server/computed/'+urlA[3]))
                fs.mkdirSync('./server/computed/'+urlA[3]);

            fs.writeFile('./server/computed/'+urlA[3]+"/"+urlA[2]+"."+urlA[4], chunk ,function (err) {
                if (err) return console.log(err);
            })
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('ok');

    }
    else
    {
    res.writeHead(200, {'Content-Type': 'text/html','Access-Control-Allow-Origin' : '*'});

    var output = [];

    fs.readdir('./'+'js/NumbersSequences', function (err, files) {
        if (err)
            throw err;
        for (var index in files) {
            output.push(sequenceHTML(files[index],'js/NumbersSequences'+'/'));
        }

        res.end(pageHTML(output.join(''),''));

    });

    }
});
server.listen(8088);