function primesSequence() {
    Sequence.call(this);
}

primesSequence.prototype = new Sequence();

primesSequence.prototype.constructor = primesSequence;

primesSequence.prototype.name = 'primes';

primesSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Prime_number";
primesSequence.prototype.wolfram = "http://mathworld.wolfram.com/PrimeNumber.html";

primesSequence.prototype.length = Infinity;

primesSequence.prototype.Q = function (n){

    if (n==0 || n==1){
        return false;
    }

    for (var i=2;i<n;i++){

        if(n%i==0){
            return false;
        }
    }

    return true;
}


