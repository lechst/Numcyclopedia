function arrangeImgModule(conf,n,sequence) {

    Module.call(this,conf);

    this.n = n;

    //TODO to poniższe opcje mają być w konfiguracji kiedyś;
    var R = 10;
    var minDistance = 2*R+2;

    //TODO na kiedyś, jesli sequence nie ma arrange przydalaby sie jakiś trywialny sposob rysowania arrange, np na linii ?
    if(!(this.x = sequence.getN(this.n)) || !sequence.arrange){
        return false;
    }

    this.sequence = sequence;

    this.positions = sequence.arrange(n);

    this.canv = $('<canvas></canvas>');
    this.ctx = this.canv[0].getContext('2d');

    var minX = Math.min.apply(this,this.positions.x);
    var maxX = Math.max.apply(this,this.positions.x);
    var minY = Math.min.apply(this,this.positions.y);
    var maxY = Math.max.apply(this,this.positions.y);

    var W = maxX-minX;
    var H = maxY-minY;

    var scaleX = 1;
    var scaleY = 1;

    var minDistSq = Infinity;

    for(var i = 1;i<this.positions.x.length;i++)
    {
        var distSq = (this.positions.x[i]-this.positions.x[i-1])*(this.positions.x[i]-this.positions.x[i-1])+(this.positions.y[i]-this.positions.y[i-1])*(this.positions.y[i]-this.positions.y[i-1]);

        if(distSq>0 && distSq<minDistSq)
        {
            minDistSq = distSq;
        }
    }

    if (minDistSq == Infinity)
    {
        minDistSq = undefined;
    }
    else
    {
        scaleX = minDistance/Math.sqrt(minDistSq);
        scaleY = minDistance/Math.sqrt(minDistSq);
    }

    this.canv[0].width = W*scaleX+2*R+2;
    this.canv[0].height = H*scaleY+2*R+2;

    for(var i = 0;i<this.positions.x.length;i++)
    {
        this.ctx.beginPath();
        this.ctx.arc(
            R+1+scaleX*(this.positions.x[i]-minX),
            R+1+scaleY*(this.positions.y[i]-minY),
            R,0,2*Math.PI);
        this.ctx.stroke();
    }

    this.ctnr.append(this.canv);

}

arrangeImgModule.prototype = new Module();

arrangeImgModule.prototype.constructor = arrangeImgModule;

arrangeImgModule.prototype.ctnrClassName = "arrangeImgModule";