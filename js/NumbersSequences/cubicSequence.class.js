function cubicSequence() {
    NumbersSequence.call(this);
}

cubicSequence.prototype = new NumbersSequence();

cubicSequence.prototype.constructor = cubicSequence;

cubicSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Cube_number";
cubicSequence.prototype.wolfram = "http://mathworld.wolfram.com/CubicNumber.html";

cubicSequence.prototype.name = 'cube';

cubicSequence.prototype.length = Infinity;

cubicSequence.prototype.Q = function (n){

    var x = Math.round(Math.pow(n,1/3));

    if(x*x*x == n){
        return true;
    }

    return false;
}

cubicSequence.prototype.arrange3D = function(n){

    var pos = {};
    pos.x = [];
    pos.y = [];
    pos.z = [];

    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            for(var k=0; k<n; k++){
                    pos.x.push(i-k*0.5);
                    pos.y.push(j+k*0.25);
                    pos.z.push(k);
            }
        }
    }

    return pos;

};

cubicSequence.prototype.arrange3D.fill = true;