var np = new listPage({
    sequences:NumbersSequence.all.filter(function(ns){return ns.final}),
    sequencesSequences:[
        polygonalSequencesSequence.prototype,
        centeredPolygonalSequencesSequence.prototype,
        divisibleSequencesSequence.prototype,
        generalizedFibonacciSequencesSequence.prototype,
        generalizedLucasSequencesSequence.prototype,
        pyramidalSequencesSequence.prototype
    ],
    N:100,
    tileConf : {
        bgColorFunction : coldPrimeCF
    }
});

$(document).ready(function(){
    np.show();

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
            number:num
        })).show();
    }
});


//TODO ponirsze koniecznie ogarnac, to jest robocze jeszcze, troche za male i za czeste na modul

