function truncatedTetrahedralSequence() {
    Sequence.call(this);
}

truncatedTetrahedralSequence.prototype = new Sequence();

truncatedTetrahedralSequence.prototype.constructor = truncatedTetrahedralSequence;

truncatedTetrahedralSequence.prototype.name = 'truncated tetrahedral';

truncatedTetrahedralSequence.prototype.length = Infinity;

truncatedTetrahedralSequence.prototype.Q = function (n){

    var x = Math.round((13*Math.pow(14283*n-2754+23*Math.sqrt(3)*Math.sqrt(128547*n*n-49572*n+4775),-1/3)*Math.pow(3,-1/3)+Math.pow(14283*n-2754+23*Math.sqrt(3)*Math.sqrt(128547*n*n-49572*n+4775),1/3)*Math.pow(3,-2/3)+9)/23);

    if(x*(23*x*x-27*x+10)/6 == n){
        return true;
    }

    return false;
}

