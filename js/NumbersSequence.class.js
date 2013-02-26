function NumbersSequence(){
    Sequence.call(this);
    NumbersSequence.all.push(this);
}

NumbersSequence.all = [];

NumbersSequence.prototype.length = undefined;
// length określa jak długi jest ciąg, może być nieskończony
// jeśli ustawimy Infinity, może być też zdegenerowany i mieć length = 0

NumbersSequence.prototype.name = undefined;
// name określa nazwę ciągu czytelną dla uzytkownika


// poniżej przykładowa najprostsza klasa dziedzicaca po Sequence
function naturalSequence(byN) {
    NumbersSequence.call(this);
    this.byN = byN;
}

naturalSequence.prototype = new NumbersSequence();

naturalSequence.prototype.constructor = naturalSequence;

naturalSequence.prototype.name = "naturals";

naturalSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Natural_number";
naturalSequence.prototype.wolfram = "http://mathworld.wolfram.com/NaturalNumber.html";

naturalSequence.prototype.length = Infinity;

naturalSequence.prototype.Q = function (n){
    return (n>=2);
};