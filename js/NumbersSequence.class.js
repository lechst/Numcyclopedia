function NumbersSequence(){
    Sequence.call(this);
    NumbersSequence.all.push(this);
}

NumbersSequence.all = [];

NumbersSequence.prototype.length = undefined;
// length określa jak długi jest ciąg, może być nieskończony
// jeśli ustawimy Infinity, może być też zdegenerowany i mieć length = 0

NumbersSequence.prototype.final = true;
//jeśli konstruktor ciągu nei rpzyjmuje zadnych parametrów, to final ustawiamy na true

NumbersSequence.prototype.name = undefined;
// name określa nazwę ciągu czytelną dla uzytkownika

NumbersSequence.prototype.maxSearch = 1000;

NumbersSequence.prototype.getN = function(nn){

    console.log('Warning: Brute getN implementation of:',this);

    NumbersSequence.prototype.getN = function(n){
        for (var i = 2;(i<this.maxSearch && n>0);i++)
        {
            if(this.Q(i))
            {
                n--;
            }
            if(n==0){
                return i;
            }
        }
        return false;
    }

    return this.getN(nn);

}


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