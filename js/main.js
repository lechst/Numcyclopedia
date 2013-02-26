var np = new listPage({
    sequences:Sequence.allSequencces,
    N:1000,
    tileConf : {
        bgColorFunction : coldPrimeCF
    }
});

np.render($('body'));

