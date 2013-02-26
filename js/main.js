var np = new listPage({
    sequences:[
        new naturalSequence(),
        new primesSequence(),
        new divisibleSequence(2),
        new divisibleSequence(3),
        new divisibleSequence(6),
        new divisibleSequence(11),
        new divisibleSequence(15)
    ],
    N:1000,
    tileConf : {
        bgColorFunction : coldPrimeCF
    }
});

np.render($('body'));

