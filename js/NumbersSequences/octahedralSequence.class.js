function octahedralSequence() {
    NumbersSequence.call(this);
}

octahedralSequence.prototype = new NumbersSequence();

octahedralSequence.prototype.constructor = octahedralSequence;

octahedralSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Octahedral_number";
octahedralSequence.prototype.wolfram = "http://mathworld.wolfram.com/OctahedralNumber.html";
octahedralSequence.prototype.oeis = "005900";

octahedralSequence.prototype.name = 'octahedral';

octahedralSequence.prototype.length = Infinity;

octahedralSequence.prototype.getN = function (n){

    var x = n*(2*n*n+1)/3;

    return x;
}

octahedralSequence.prototype.Q = function (n){

    var x = Math.round(Math.pow(27*n+Math.sqrt(3)*Math.sqrt(2+243*n*n),1/3)*Math.pow(6,-2/3)-Math.pow(27*n+Math.sqrt(3)*Math.sqrt(2+243*n*n),-1/3)*Math.pow(6,-1/3));

    if((x*(2*x*x+1)/3) == n){
        return true;
    }

    return false;
}

octahedralSequence.prototype.arrange3D = function(n){

    var pos = {};
    pos.x = [];
    pos.y = [];
    pos.z = [];

    var r = 4;
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

        pos.x.push(x);
        pos.y.push(y);
        pos.z.push(-z);

        for(var i=1; i<m; i++){
            x = i + dx;
            y = 0 + dy;

            pos.x.push(x);
            pos.y.push(y);
            pos.z.push(z);

            pos.x.push(x);
            pos.y.push(y);
            pos.z.push(-z);

            for(var j=0; j<(r-2); j++){
                for(var k=0; k<i; k++){
                    pos.x.push(x+(k+1)*Math.cos(alpha));
                    pos.y.push(y-(k+1)*Math.sin(alpha));
                    pos.z.push(z);

                    pos.x.push(x+(k+1)*Math.cos(alpha));
                    pos.y.push(y-(k+1)*Math.sin(alpha));
                    pos.z.push(-z);
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


octahedralSequence.prototype.arrange3D.fill = true;

