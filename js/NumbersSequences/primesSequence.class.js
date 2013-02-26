function primesSequence() {
    NumbersSequence.call(this);
}

primesSequence.prototype = new NumbersSequence();

primesSequence.prototype.constructor = primesSequence;

primesSequence.prototype.name = 'primes';

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


