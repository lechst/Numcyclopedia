var np = new listPage({
    sequences:NumbersSequence.all,
    N:100,
    tileConf : {
        bgColorFunction : coldPrimeCF
    }
});

np.render($('body'));

