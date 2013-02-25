// Ta klasa reprezentuje ciąg liczb naturalnych
// zaróno skończony jak i nieskończony.


function Sequence(){}

Sequence.prototype.length = undefined;
// length określa jak długi jest ciąg, może być nieskończony
// jeśli ustawimy Infinity, może być też zdegenerowany i mieć length = 0

Sequence.prototype.name = undefined;
// name określa nazwę ciągu czytelną dla uzytkownika


// poniżej przykładowa najprostsza klasa dziedzicaca po Sequence
function naturalSequence(byN) {
    Sequence.call(this);
    this.byN = byN;
}

naturalSequence.prototype = new Sequence();

naturalSequence.prototype.constructor = naturalSequence;

naturalSequence.prototype.name = "naturals";

naturalSequence.prototype.length = Infinity;

naturalSequence.prototype.Q = function (n){
    return (n>=2);
}