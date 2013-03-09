function primesSequence() {
    NumbersSequence.call(this);
}

primesSequence.prototype = new NumbersSequence();

primesSequence.prototype.constructor = primesSequence;

primesSequence.prototype.name = 'primes';

primesSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Prime_number";
primesSequence.prototype.wolfram = "http://mathworld.wolfram.com/PrimeNumber.html";

primesSequence.prototype.length = Infinity;

primesSequence.prototype.Q = function (n){

    if (n==0 || n==1){
        return false;
    }

    return fastPrimes.Q(n);
}


