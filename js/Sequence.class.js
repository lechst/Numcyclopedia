// Ta klasa reprezentuje ciąg liczb naturalnych
// zarówno skończony jak i nieskończony.


function Sequence(){
    Sequence.allSequences.push(this);
}

Sequence.allSequences = [];

Sequence.prototype.length = undefined;
// length określa jak długi jest ciąg, może być nieskończony
// jeśli ustawimy Infinity, może być też zdegenerowany i mieć length = 0

Sequence.prototype.name = undefined;
// name określa nazwę ciągu czytelną dla uzytkownika

