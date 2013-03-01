function pyramidalSequencesSequence() {
    Sequence.call(this);
}

pyramidalSequencesSequence.prototype = new Sequence();

pyramidalSequencesSequence.prototype.constructor = pyramidalSequencesSequence;

pyramidalSequencesSequence.prototype.name = 'pyramidal numbers';

pyramidalSequencesSequence.prototype.length = Infinity;

pyramidalSequencesSequence.prototype.getN = function(n){

    return new pyramidalSequence(n);

};




function pyramidalSequence(n) {

    NumbersSequence.call(this);

    if(!n) {
        throw new Error("n must be specified!")
    }

    this.final = true;
    this.N = n;

}

pyramidalSequence.prototype = new NumbersSequence();

pyramidalSequence.prototype.memberOf = [pyramidalSequencesSequence.prototype];

pyramidalSequence.prototype.constructor = pyramidalSequence;

pyramidalSequence.prototype.length = Infinity;

pyramidalSequence.prototype.final = false;

pyramidalSequence.prototype.texExpression = "\\frac{n (n+1) \\left[ (r-2) n + (5-r) \\right] }{6}";

pyramidalSequence.prototype.getN = function(n){

    var r = this.N + 2;
    var x = n*(n+1)*((r-2)*n+(5-r))/6;

    return x;

};

pyramidalSequence.prototype.__defineGetter__('name',function(){
    var r = this.N + 2;

    return r+"-gonal pyramidal";
});

pyramidalSequence.prototype.Q = function (n){

    var r = this.N + 2;
    var z = (r-2)*(r-2)*(972*n*n*(r-2)*(r-2)-324*n*(r*r-7*r+12)-(2*r*r-17*r+35)*(2*r*r-17*r+35));
    var y = -108+54*n*(r-2)*(r-2)+63*r-9*r*r+Math.sqrt(3)*Math.sqrt(z);
    var x = Math.round((Math.pow(2/3,1/3)*(13-7*r+r*r)*Math.pow(y,-1/3)+Math.pow(2,-1/3)*Math.pow(3,-2/3)*Math.pow(y,1/3)-1)/(r-2));

    if((x*(x+1)*((r-2)*x+(5-r))/6) == n){
        return true;
    }

    return false;
}

pyramidalSequence.prototype.arrange3D = function(n){

    var pos = {};
    pos.x = [];
    pos.y = [];
    pos.z = [];

    var r = this.N + 2;
    var alpha = 2*Math.PI/r;

    var x = 0;
    var y = 0;
    var z = 0;
    var dx = 0;
    var dy = 0;

    for(var m=n; m>0; m--){

        x = 0 + dx;
        y = 0 + dy;
        z = n - m;

        pos.x.push(x);
        pos.y.push(y);
        pos.z.push(z);

        for(var i=1; i<m; i++){
            x = i + dx;
            y = 0 + dy;

            pos.x.push(x);
            pos.y.push(y);
            pos.z.push(z);

            for(var j=0; j<(r-2); j++){
                for(var k=0; k<i; k++){
                    pos.x.push(x+(k+1)*Math.cos(alpha));
                    pos.y.push(y-(k+1)*Math.sin(alpha));
                    pos.z.push(z);
                }
                x = pos.x[pos.x.length-1];
                y = pos.y[pos.y.length-1];
                alpha = alpha + 2*Math.PI/r;
            }

            alpha = 2*Math.PI/r;
        }

        dx = dx + 1/2;
        dy = dy - 1/(2*Math.tan(alpha/2));

    }

    return pos;

};

pyramidalSequence.prototype.arrange3D.fill = true;






























