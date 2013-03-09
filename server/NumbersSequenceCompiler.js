var fs = require('fs');

var fastPrimes = require('./fastPrimesNode.js');

var path = './js/NumbersSequences/fibonacciSequence.class.js';

fastPrimes.load(function(){
    console.log(fastPrimes.QbyteArray.byteLength,' primes loaded.')
    loadAndCompile(path)
});



var maxNPow2 = 14;
var maxQPow2 = 16;

var maxN = (1<<maxNPow2)-1;//maksymalny wyraz ciagu o ktory mozna zapytac
var maxQ = (1<<maxQPow2)-1;//maksymalna liczba ktora mozna przetestowac na obecnosc w ciagu

var maximalRepresentableLength = 32;

var maximalRepresentable = Math.pow(2,maximalRepresentableLength)-1;

if(maximalRepresentable<maxQ)
    new Error("conf error: maxQ must be representable");

function loadAndCompile(path){
    fs.readFile(path, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var className = extractName(data);
        convertToModule(data,className);
    });
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

function convertToModule(source,className){//build and load temporary node.js module
    newSource="function NumbersSequence(){}\n\n"+
        source+'\n\nmodule.exports = '+className+';'

    fs.writeFile('./server/temp/'+className+'.js', newSource ,function (err) {
        var tempSequenceModule = require('./temp/'+className+".js");

        compileSequence(tempSequenceModule.prototype,className);

    })

    return newSource;
}

function compileSequence(seq,className){


    var getNlong = new Uint32Array(maxN+1); // getNlong[x] - to jest x liczba w ciągu
    // format [ ilsoc liczb (dlugosc-1) , N1,N2, ... , NmaxN ] ,
    // nazwa konczy sie na long, bo moze sie okazac ze nie zostanie zapelniony, wtedy dane obcinamy

    var Qshort = new Uint8Array(Math.ceil((maxQ+1)/8)); // enty bit to odp czy (n-1) jest w ciagu
    // format(bity) [(0,q1,q2,q3,q4,q5,q6,q7),(q8,19 ... ),(qmaxQ,0,0,0,0,0,0,0)]
    // nazwa konczy sie na short, bo kazdy bajt reprezentuje 8 liczb

    //console.log(maximalRepresentable);
    if(seq.getN == undefined && seq.Q != undefined)//jesli ciag nei ma swojej funkcji getN to uzywamy Q
    {


        var j = 0; // wskaznik wyrazu ciągu
        var curr = undefined; //
        for(
            var i = 1; //testowana liczba
            (j<maxN || i<=maxQ ) //dopoki nie policzymy
            && i<=maximalRepresentable; //lób dopoki nie przeskoczymy limitu reprezentacji
            ) // sprawdzamy wszystkie liczby pokoleji
        {
            if(seq.Q(i)){
                if(i<=maxQ)
                    Qshort[i>>3]+=(1<<(i&7));
                if(j<maxN)
                {
                    j++;
                    getNlong[j]=i;
                }
                //console.log(j,i)
            }
            i++;
        }
    }
    if(seq.getN != undefined)//jesli ciag nei ma funkcje getN to uzywamy jej
    {
        var j = 1; // wskaznik wyrazu ciągu do zapisu

        for(var n = 1; // wskaznik wyrazu ciągu w pętli
            (curr<=maxQ || j<=maxN)
            && ((curr = seq.getN(n))<=maximalRepresentable);
            n++)
        {
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

    buffergetNshort.writeUInt32BE(j, 0); // zapisujemy ilosc liczb w peirwszych 4 bajtach

    //zapisujemy wartosci z araja, tylko obliczone
    for (var k=1;k<=j;k++){
        buffergetNshort.writeUInt32BE(getNlong[k], k*4);
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