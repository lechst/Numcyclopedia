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
});


//TODO ponirsze koniecznie ogarnac, to jest robocze jeszcze, troche za male i za czeste na modul

