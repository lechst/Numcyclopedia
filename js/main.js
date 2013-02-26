var np = new listPage({
    sequences:NumbersSequence.all,
    N:1000,
    tileConf : {
        bgColorFunction : coldPrimeCF
    }
});

np.render($('body'));

