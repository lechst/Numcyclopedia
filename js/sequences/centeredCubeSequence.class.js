function centeredCubeSequence() {
    Sequence.call(this);
}

centeredCubeSequence.prototype = new Sequence();

centeredCubeSequence.prototype.constructor = centeredCubeSequence;

centeredCubeSequence.prototype.name = 'centered cube';

centeredCubeSequence.prototype.length = Infinity;

centeredCubeSequence.prototype.Q = function (n){

    var x = Math.round((1-1/Math.pow(2*n+Math.sqrt(1+4*n*n),1/3)+Math.pow(2*n+Math.sqrt(1+4*n*n),1/3))/2);

    if((x*x*x+(x-1)*(x-1)*(x-1)) == n){
        return true;
    }

    return false;
}