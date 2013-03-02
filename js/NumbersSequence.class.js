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

NumbersSequence.prototype.__defineGetter__('ownPage',function(){

    if(!this.ownPageForLazy)
    {
        this.ownPageForLazy = new sequencePage({
            sequence:this
        });
    }

    return this.ownPageForLazy
});

NumbersSequence.prototype.QN = function(nn){

    console.log('Warning: Brute QN implementation of:',this);

    NumbersSequence.prototype.QN = function(n){



        if(n>this.maxSearch)
        {
            return false;
        }

        var N = 0;

        for (var i = 1;(N<n && i<this.maxSearch);i++)
        {
            if(this.Q(i)){
                N++;
                if(i==n)
                {
                    return N;
                }
            }
        }
        return false;
    }

    return this.QN(nn);

}

NumbersSequence.prototype.getN = function(nn){

    console.log('Warning: Brute getN implementation of:',this);

    NumbersSequence.prototype.getN = function(n){
        for (var i = 1;(i<this.maxSearch && n>0);i++)
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
    return (n>=1);
};

naturalSequence.prototype.QN = function (n){
    return n;
};