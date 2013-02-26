// Ta klasa reprezentuje ciąg liczb naturalnych
// zarówno skończony jak i nieskończony.


function Sequence(){
    Sequence.allSequencces.push(this);
}

Sequence.allSequencces = [];

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

naturalSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Natural_number";

naturalSequence.prototype.length = Infinity;

naturalSequence.prototype.Q = function (n){
    return (n>=2);
};