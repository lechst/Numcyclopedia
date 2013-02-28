var np = new listPage({
    sequences:NumbersSequence.all.filter(function(x){return x.final}),
    sequencesSequences:[
        polygonalSequencesSequence.prototype,
        centeredPolygonalSequencesSequence.prototype,
        divisibleSequencesSequence.prototype,
        generalizedFibonacciSequencesSequence.prototype,
        pyramidalSequencesSequence.prototype
    ],
    N:100,
    tileConf : {
        bgColorFunction : coldPrimeCF
    }
});

np.render($('body'));

