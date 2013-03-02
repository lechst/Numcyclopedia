function perfectSequence() {
    NumbersSequence.call(this);
}

perfectSequence.prototype = new NumbersSequence();

perfectSequence.prototype.constructor = perfectSequence;

perfectSequence.prototype.name = 'perfect';

perfectSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Perfect_number";
perfectSequence.prototype.wolfram = "http://mathworld.wolfram.com/PerfectNumber.html";

perfectSequence.prototype.length = Infinity;

perfectSequence.prototype.Q = function (n){

    var a = factors(n);
    var x = 1;

    for(var i=0; i< a.length; i++){
        x = x*(Math.pow(a[i].prime,a[i].power+1)-1)/(a[i].prime-1);
    }

    if(x == 2*n){
        return true;
    }

    return false;
}

console.log(perfectSequence.prototype.Q(6));
