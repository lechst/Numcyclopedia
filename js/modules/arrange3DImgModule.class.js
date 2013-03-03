function arrange3DImgModule(conf,n,sequence) {

    Module.call(this,conf);

    this.n = n;

    //TODO to poniższe opcje mają być w konfiguracji kiedyś;
    var R = 10;
    var minDistance = 2*R+2;

    if(sequence.arrange3D.minDistance)
    {
        minDistance = 2*R*sequence.arrange3D.minDistance;
    }

    //TODO na kiedyś, jesli sequence nie ma arrange przydalaby sie jakiś trywialny sposob rysowania arrange, np na linii ?
    if(!(this.x = sequence.getN(this.n)) || !sequence.arrange3D){
        return false;
    }

    this.sequence = sequence;

    this.positions = sequence.arrange3D(n);

    this.canv = $('<canvas></canvas>');
    this.ctx = this.canv[0].getContext('2d');

    var minX = Math.min.apply(this,this.positions.x);
    var maxX = Math.max.apply(this,this.positions.x);
    var minY = Math.min.apply(this,this.positions.y);
    var maxY = Math.max.apply(this,this.positions.y);

    //verbose(this,minX,maxX,minY,maxY);

    var W = maxX-minX;
    var H = maxY-minY;

    //verbose(this,W,H);

    var scaleX = 1;
    var scaleY = 1;

    var minDistSq = Infinity;
    var maxDistSq = 0;

    posArr = [[this.positions.x[0],this.positions.y[0],this.positions.z[0]]];

    for(var i = 1;i<this.positions.x.length;i++)
    {
        posArr.push([this.positions.x[i],this.positions.y[i],this.positions.z[i]]);
        for(var j = 0;j<i;j++)
        {
            var distSq = (this.positions.x[i]-this.positions.x[j])*(this.positions.x[i]-this.positions.x[j])
                +(this.positions.y[i]-this.positions.y[j])*(this.positions.y[i]-this.positions.y[j]);

            if(this.positions.z[i]==this.positions.z[j]){
                if(distSq>0 && distSq<minDistSq)
                {
                    minDistSq = distSq;
                }

                if(distSq>maxDistSq)
                {
                    maxDistSq = distSq;
                }
            }
        }
    }

    posArr.sort(function(a,b){return a[2]-b[2]});

    if (minDistSq == Infinity)
    {
        minDistSq = undefined;
    }
    else
    {
        scaleX = minDistance/Math.sqrt(minDistSq);
        scaleY = minDistance/Math.sqrt(minDistSq);
    }

    //verbose(this,'maxDistScaled',maxDistSq*scaleX)
    if((maxDistSq*scaleX)>1000*1000){
        verbose(this,'scaleDown!')
        scaleX *= 1000/(Math.sqrt(maxDistSq)*scaleX);
        scaleY *= 1000/(Math.sqrt(maxDistSq)*scaleY);
    }

    //verbose(this,'min,max',minDistSq,maxDistSq);

    //verbose(this,'scale',scaleX);

    this.canv[0].width = W*scaleX+2*R+2;
    this.canv[0].height = H*scaleY+2*R+2;

    this.ctx.fillStyle = 'white';

    var ratio = this.canv[0].height/this.canv[0].width;

    var globScale = 1;

    if(this.conf.maxH<this.canv[0].height || this.conf.maxW<this.canv[0].width)
    {
        var boundsRatio = this.conf.maxH/this.conf.maxW;

        if(boundsRatio<ratio)
        {
            globScale *= this.conf.maxH/this.canv[0].height;
        }
        else
        {
            globScale *= this.conf.maxW/this.canv[0].width;
        }


    }

    this.canv[0].width = (W*scaleX*globScale+2*R+2);
    this.canv[0].height = (H*scaleY*globScale+2*R+2);

    this.ctx.fillStyle = 'white';
    this.ctx.strokeStyle = '#333333';

    for(var i = 0;i<posArr.length;i++)
    {
        this.ctx.beginPath();
        this.ctx.arc(
            R*globScale+1+scaleX*globScale*(posArr[i][0]-minX),
            R*globScale+1+scaleY*globScale*(posArr[i][1]-minY),
            R*globScale,0,2*Math.PI);


        if(sequence.arrange3D.fill)
            this.ctx.fill();
        this.ctx.stroke();
    }

    this.ctnr.append(this.canv);

}

arrange3DImgModule.prototype = new Module();

arrange3DImgModule.prototype.constructor = arrange3DImgModule;

arrange3DImgModule.prototype.ctnrClassName = "arrangeImgModule";