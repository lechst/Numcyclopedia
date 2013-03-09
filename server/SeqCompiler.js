var maxN = 1<<14;
var maxQ = 1<<16;
var maximalRepresentable = 1<<32;

var resultSend = true;

var maxTime = 100000;

NumbersSequence.prototype.maxSearch = maximalRepresentable;

var allS = Sequence.allSequences;

allS = [cubanPrimeSequence.prototype,economicalSequence.prototype]

var noS = allS.length;


var body = document.getElementsByTagName('body')[0];

var next = "";
var next = "noask";

var compiled = -1;

var timeout = false

var getNlong = new Uint32Array(maxN);
var Qshort = new Uint8Array(Math.ceil(maxQ/8));

function compile(){
    timeout = false;
    compiled++;
    console.log(compiled);
    if (compiled<noS && next!="no" && !timeout)
    {

        var startT = new Date();
        var sq = allS[compiled];

        sq.getN(1);
        sq.QN(1);
        console.log(sq.name,sq.getN.brute?'getNbrute':'',sq.QN.brute?'QNbrute':'');
        var sCtnr = document.createElement('div');
        body.appendChild(sCtnr);

        var h2 = document.createElement('h2');
        sCtnr.appendChild(h2);

        var getNCtnr = document.createElement('div');
        sCtnr.appendChild(getNCtnr);

        var curr = 0;
        var N=0;

        var aggr = 0;

        getNlong = new Uint32Array(maxN);
        Qshort = new Uint8Array(Math.ceil(maxQ/8));
        var lastDate = startT;
        if(!sq.getN.brute)
        {
            for(var j=1;(j<maxN ||curr<maxQ) && curr<maximalRepresentable && curr!==false && !timeout;j++)
            {
               // console.log(sq.name,j,'=',curr);
                if((curr = sq.getN(j))!==false)
                {
                    Qshort[getNlong[curr]>>3]+=(1<<(getNlong[curr]&7));
                    if(j<maxN)
                        getNlong[j]=curr;
                }

                var currDate = new Date();
                var lastTime = currDate-lastDate;
                var lastDate = currDate;

                console.log('j:',j,' deltaTime:',lastTime)

                if(new Date()-startT > maxTime)
                {

                    timeout = true;
                }

            }
        }
        else{
            var j = 0;
            for(var curr=1;(j<maxN ||curr<maxQ) && curr!==false && !timeout;curr++)
            {
                // console.log(sq.name,j,'=',curr);
                if(sq.Q(curr))
                {
                    j++;
                    Qshort[getNlong[curr]>>3]+=(1<<(getNlong[curr]&7));
                    if(j<maxN)
                        getNlong[j]=curr;
                }

                var currDate = new Date();
                var lastTime = currDate-lastDate;
                var lastDate = currDate;

                aggr +=lastTime;
                if(256%curr==0)
                {
                console.log(curr,' deltaTime:',aggr);
                aggr = 0;
                }

                if(new Date()-startT > maxTime)
                {
                    timeout = true;
                }

            }
        }
        var endT = new Date() - startT;

        if(timeout){
            console.log('reason:','timeout')
            return false;
        }
        else if(!(j<maxN ||curr<maxQ))
        {
            console.log('reason:','calculation finished')
        }
        else if(curr>=maximalRepresentable)
        {
            console.log('reason:','maxRepresentable Reached')
        }
        else {
            console.log('reason:','unknown')
        }

        console.log(j,curr,endT)

        h2.innerHTML = sq.name + " " + String(endT);

        if(timeout){
            h2.innerHTML += ' <span style="color:red;">timeout after '+j+'</span>';
        }

        if(timeout)
        {
            compile();
            return false;
        }

        var getNshort = new Uint32Array(j);
        for (var k=1;k<j;k++){
            getNshort[k]=getNlong[k];
        }
        getNshort[0]=curr;



        //console.log(getNshort.byteLength,getNshort);
       // console.log(Qshort.byteLength,Qshort);

        var Qblob = new Blob([Qshort], {type: 'application/octet-stream'});
        var getNblob = new Blob([getNshort], {type: 'application/octet-stream'});

        var Qreader = new FileReader();
        var getNreader = new FileReader();

        Qreader.onloadend = function(evt) {
            var contentfile = evt.target.result;
            xhr = new XMLHttpRequest();
            xhr.open("POST","upload/"+sq.name+"/"+maxQ+"/Q",true);
            xhr.setRequestHeader("Content-type", "multipart/form-data");
            //console.log('q',contentfile);
            xhr.send(contentfile);
            getNreader.readAsBinaryString(getNblob);
        }

        getNreader.onloadend = function(evt) {
            var contentfile = evt.target.result;
            xhr = new XMLHttpRequest();
            xhr.open("POST","upload/"+allS[i].name+"/"+maxN+"/getN",true);
            xhr.setRequestHeader("Content-type", "multipart/form-data");
            //console.log('getN',contentfile);
            xhr.send(contentfile);
            compile();
        }

        if(resultSend){
        Qreader.readAsBinaryString(Qblob);
        }



        //getNCtnr.innerHTML = Ns.join(' , ');
        window.scrollTo(0, document.body.scrollHeight);

        document.title = compiled+"/"+noS;

        if (next!="noask")
            next = prompt('continue?');

        if(!resultSend){
            compile();
        }

    }
}

fastPrimes.load(compile);