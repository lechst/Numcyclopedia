var fs = require('fs');

var fastPrimes = require('./fastPrimesNode.js');

var factors = require('./factorsNode.js');

var divisors = require('./divisorsNode.js');

var divisorsN = require('./divisorsNNode.js');

var divisorFunction = require('./divisorFunctionNode.js');

fastPrimes.mode = "disk";

//var path = './js/NumbersSequences/fibonacciSequence.class.js';

var oneCompilePerExec = true;

fastPrimes.load(function(err){


    getSequencesNames(function(names){
        getFirstUncompiled(names,function(name){
                loadAndCompile(name);
            })
        }
    );

});

function getFirstUncompiled(names,callback){

     for (var index in names) {
        var name = names[index];

             if (fs.existsSync("./server/computed/"+names[index])) {
                 //do smthing ? nah..
             }
             else
             {
                console.log('uncompiled found!');
                callback(name);
                return true;
             }

     };
    return false;
}

var maxNPow2 = 14;
var maxQPow2 = 16;

var maxN = (1<<maxNPow2)-1;//maksymalny wyraz ciagu o ktory mozna zapytac
var maxQ = (1<<maxQPow2)-1;//maksymalna liczba ktora mozna przetestowac na obecnosc w ciagu

var maximalRepresentableLength = 30;

var maximalRepresentable = Math.pow(2,maximalRepresentableLength)-1;

if(maximalRepresentable<maxQ)
    new Error("conf error: maxQ must be representable");

function getSequencesNames(callback){
    fs.readdir('./'+'js/NumbersSequences', function (err, files) {
        if (err)
            throw err;
        var names = [];
        for (var index in files) {

            names.push(files[index].split('.')[0]);

        }
        callback(names);
    });
}

function loadSequence(name,callback){
    console.log('loading: ',name);
    fs.readFile('./js/NumbersSequences/'+name+'.class.js', 'utf8', function (err,source) {
        if (err) {
            return console.log(err);
        }
        var subloadsPrivate = 1;

        var subloads = function(i){
            subloadsPrivate+=i;
            //console.log(subloadsPrivate);
            if(subloadsPrivate==0)
            {
                //console.log('subloadsPrivate zero');
                callback(source);
            }
        }

        if(source.search('prototype.needs')>-1){
            source.split("prototype.needs")[1].split("[")[1].split("]")[0].split("'").map(
                function(x){
                    if(x.length>4)
                    {
                        subloads(1);
                        loadSequence(x,function(src){
                            source=src+'\n\n'+source;
                            subloads(-1);
                        });
                    }
                }
            );
        };

        subloads(-1);
    });
}

function loadAndCompile(name){
    loadSequence(name,function(source){
        convertToModule(source,name,function(seq){
            compileSequence(seq.prototype,name);
        })
    })
}

function extractName(source){
    var className = source.split('function ')[1].split('()')[0].trim();
    if (className.length>0){
        return className
    }
    else
    {
        throw new Error('Cant find sequence declaration in source');
    }
}

function convertToModule(source,className,callback){//build and load temporary node.js module
    newSource = "var fastPrimes = require('../fastPrimesNode.js');\n"
                +"var factors = require('../factorsNode.js');\n"
                +"var divisors = require('../divisorsNode.js');\n"
                +"var digits = require('../digitsNode.js');\n"
                +"var divisorFunction = require('../divisorFunctionNode.js');\n"
                +"var divisorsN = require('../divisorsNNode.js');\n"
                +"function NumbersSequence(){}\n\n"
                +source
                +'\n\nmodule.exports = '+className+';';

    fs.writeFile('./server/temp/'+className+'.js', newSource ,function (err) {
        var tempSequenceModule = require('./temp/'+className+".js");

        callback(tempSequenceModule);
    })

    return true;
}

function compileSequence(seq,className){

    console.log('compiling: '+className);

    var getNlong = new Uint32Array(maxN+1); // getNlong[x] - to jest x liczba w ciągu
    // format [ ilsoc liczb (dlugosc-1) , N1,N2, ... , NmaxN ] ,
    // nazwa konczy sie na long, bo moze sie okazac ze nie zostanie zapelniony, wtedy dane obcinamy

    var Qshort = new Uint8Array(Math.ceil((maxQ+1)/8)); // enty bit to odp czy (n-1) jest w ciagu
    // format(bity) [(0,q1,q2,q3,q4,q5,q6,q7),(q8,19 ... ),(qmaxQ,0,0,0,0,0,0,0)]
    // nazwa konczy sie na short, bo kazdy bajt reprezentuje 8 liczb

    var startTime = new Date();

    //console.log(maximalRepresentable);
    if(seq.getN == undefined && seq.Q != undefined)//jesli ciag nei ma swojej funkcji getN to uzywamy Q
    {
        console.log('getN not found, using Q, consider implementing it if posible');

        var j = 0; // wskaznik wyrazu ciągu
        var curr = undefined; //
        for(
            var i = 1; //testowana liczba
            (j<maxN || i<=maxQ ) //dopoki nie policzymy
            && i<=maximalRepresentable; //lub dopoki nie przeskoczymy limitu reprezentacji
            ) // sprawdzamy wszystkie liczby pokoleji
        {

            fs.writeSync(1, "i:"+i+" n:"+j+"\n");
            fs.fsyncSync(1);

            if(seq.Q(i)){
                if(i<=maxQ)
                    Qshort[i>>3]+=(1<<(i&7));
                if(j<maxN)
                {
                    j++;
                    getNlong[j]=i;
                }

            }
            i++;
        }
    }
    if(seq.getN != undefined)//jesli ciag ma funkcje getN to uzywamy jej
    {
        console.log('getN found and used');

        var j = 1; // wskaznik wyrazu ciągu do zapisu

        for(var n = 1; // wskaznik wyrazu ciągu w pętli
            (curr<=maxQ || j<=maxN)
            && ((curr = seq.getN(n))<=maximalRepresentable);
            n++)
        {


            //console.log(curr);
            if(n<=maxN)
            {
                j = n;
                getNlong[j]=curr;
            }
            if(curr<=maxQ)
            {
                Qshort[curr>>3]+=(1<<(curr&7));
            }
            //console.log(j,curr);
        }
    }

    console.log('computed in: '+(new Date() - startTime)+'ms')

    //tworzymy katalog jesli nie istnieje
    if(!fs.existsSync('./server/computed/'+className))
        fs.mkdirSync('./server/computed/'+className);

    var bufferQshort = new Buffer(Qshort)

    var writeStreamQshort = fs.createWriteStream(
        './server/computed/'+className+"/"+className+'.'+maxQ+'.'+'Q' ,
        { flags : 'w+' }
    );

    writeStreamQshort.write(bufferQshort);
    writeStreamQshort.end();
    writeStreamQshort.destroy();

    var buffergetNshort = new Buffer((j+1)*4)

    buffergetNshort.writeUInt32LE(j, 0); // zapisujemy ilosc liczb w peirwszych 4 bajtach

    //zapisujemy wartosci z araja, tylko obliczone
    for (var k=1;k<=j;k++){
        buffergetNshort.writeUInt32LE(getNlong[k], k*4);
    }


    var howMany;

    if(j<maxN)
    {
        howMany = 'ALL';
    }
    else
    {
        howMany = String(j);
    }

    var writeStreamgetNshort = fs.createWriteStream(
        './server/computed/'+className+"/"+className+'.'+'Uint'+maximalRepresentableLength+'.'+howMany+'.'+'getN' ,
        { flags : 'w+' }
    );

    writeStreamgetNshort.write(buffergetNshort);
    writeStreamgetNshort.end();
    writeStreamgetNshort.destroy();


}