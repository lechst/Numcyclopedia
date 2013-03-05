if(navigator.userAgent.match(/iPad/i) != null)
{
    var pixRatio = 1.6;
}
else
{
    var pixRatio = 1;
}

document.getElementsByTagName('body')[0].ontouchstart = function(e){
    e.preventDefault();
}

document.getElementsByTagName('body')[0].ontouchend = function(e){
    e.preventDefault();
}

document.getElementsByTagName('body')[0].ontouchmove = function(e){
    e.preventDefault();
}

//TODO przeniesc ponizsze do jakiegos initializatora sekwencji

var seqSeq = [
    polygonalSequencesSequence.prototype,
    centeredPolygonalSequencesSequence.prototype,
    divisibleSequencesSequence.prototype,
    generalizedFibonacciSequencesSequence.prototype,
    generalizedLucasSequencesSequence.prototype,
    //powerfreeSequencesSequence.prototype,  fajna sekwencja, ale duzo jej :) na razie chowam ale pojawi sie
    pyramidalSequencesSequence.prototype
]

for(ssId in seqSeq)
{
    for(var i = 1;i<10;i++)
    {
        seqSeq[ssId].getN(i);
    }

}

$(document).ready(function(){

    if(window.location.hash.search('num')>0)
    {
        var num;
        if(parseInt(window.location.hash.split('num')[1])<0)
        {
            num = 1;
        }
        else
        {
            num = parseInt(window.location.hash.split('num')[1]);
        }

        (new gridNumberPage({
            obj:num,
            context:{}
        })).show();
    }
    else
    {
        (new gridNumberPage({
            obj:13,
            context:{}
        })).show();
    }



});


//TODO ponirsze koniecznie ogarnac, to jest robocze jeszcze, troche za male i za czeste na modul

