function truncatedOctahedralSequence() {
    NumbersSequence.call(this);
}

truncatedOctahedralSequence.prototype = new NumbersSequence();

truncatedOctahedralSequence.prototype.constructor = truncatedOctahedralSequence;

truncatedOctahedralSequence.prototype.name = 'truncated octahedral';

truncatedOctahedralSequence.prototype.wolfram = "http://mathworld.wolfram.com/TruncatedOctahedralNumber.html";
truncatedOctahedralSequence.prototype.oeis = "005910";

truncatedOctahedralSequence.prototype.length = Infinity;

truncatedOctahedralSequence.prototype.getN = function (n){
    return (16*n*n*n-33*n*n+24*n-6);
}

truncatedOctahedralSequence.prototype.Q = function (n){

    var x = Math.round((11-7*Math.pow(128*n-13+16*Math.sqrt(64*n*n-13*n+2),-1/3)+Math.pow(128*n-13+16*Math.sqrt(64*n*n-13*n+2),1/3))/16);

    if((16*x*x*x-33*x*x+24*x-6) == n){
        return true;
    }

    return false;
}