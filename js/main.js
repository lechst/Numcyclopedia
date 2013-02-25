var np = new listPage();

np.N = 1000;

np.sequences.push(new naturalSequence());

np.sequences.push(new primesSequence());

for(var i = 2;i<15;i++)
    np.sequences.push(new divisibleSequence(i));

np.tileConf = {};

np.tileConf.bgColorFunction = coldPrimeCF;
//np.tileConf.bgColorFunction = moduloRainbow(23);

np.render($('body'));

