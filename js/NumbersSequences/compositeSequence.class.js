function compositeSequence() {
    NumbersSequence.call(this);
}

compositeSequence.prototype = new NumbersSequence();

compositeSequence.prototype.constructor = compositeSequence;

compositeSequence.prototype.name = 'composite';


compositeSequence.prototype.length = Infinity;

compositeSequence.prototype.Q = function (n){

    if (n==0 || n==1){
        return false;
    }

    for (var i=2;i<n;i++){

        if(n%i==0){
            return true;
        }
    }

    return false;
}


