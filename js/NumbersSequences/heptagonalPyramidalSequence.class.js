function heptagonalPyramidalSequence() {
    NumbersSequence.call(this);
}

heptagonalPyramidalSequence.prototype = new NumbersSequence();

heptagonalPyramidalSequence.prototype.constructor = heptagonalPyramidalSequence;

heptagonalPyramidalSequence.prototype.name = 'heptagonal pyramidal';

heptagonalPyramidalSequence.prototype.length = Infinity;

heptagonalPyramidalSequence.prototype.Q = function (n){

    var x = Math.round((13*Math.pow(675*n-54+5*Math.sqrt(3)*Math.sqrt(6075*n*n-972*n-49),-1/3)*Math.pow(3,-1/3)+Math.pow(675*n-54+5*Math.sqrt(3)*Math.sqrt(6075*n*n-972*n-49),1/3)*Math.pow(3,-2/3)-1)/5);

    if(x*(x+1)*(5*x-2)/6 == n){
        return true;
    }

    return false;
}

