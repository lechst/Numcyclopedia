function imgModule(conf) {

    Module.call(this,conf);

    //TODO to poniższe opcje mają być w konfiguracji kiedyś;


    this.canv = $('<canvas></canvas>');
    this.ctx = this.canv[0].getContext('2d');

    this.ctnr.append(this.canv);

}

imgModule.prototype = new Module();

imgModule.prototype.constructor = imgModule;

imgModule.prototype.ctnrClassName = "imgModule";

imgModule.prototype.draw = function(positions){

    console.log(this.conf);

    var R = this.conf.R;
    var minDistance = this.conf.minDistance;

    this.positions = positions;

    this.positions = positions;

    var stats = statsNDimPoints(this.positions);

    console.log(stats);

    //verbose(this,minX,maxX,minY,maxY);

    var W = stats.maxX-stats.minX;
    var H = stats.maxY-stats.minY;

    //verbose(this,W,H);

    var scaleX = 1;
    var scaleY = 1;


    if (stats.minDist == Infinity)
    {
        stats.minDist = undefined;
    }
    else
    {
        scaleX = minDistance/stats.minDist;
        scaleY = minDistance/stats.minDist;
    }



    //verbose(this,'maxDistScaled',maxDistSq*scaleX)
    if((stats.maxDist*scaleX)>1000){
        verbose(this,'scaleDown!')
        scaleX *= 1000/(stats.maxDist*scaleX);
        scaleY *= 1000/(stats.maxDist*scaleY);
    }

    //verbose(this,'min,max',minDistSq,maxDistSq);

    //verbose(this,'scale',scaleX);

    this.canv[0].width = W*scaleX+2*R+2;
    this.canv[0].height = H*scaleY+2*R+2;

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

    for(var i = 0;i<this.positions.x.length;i++)
    {


        if(this.conf.mode == 'circle')
        {
            this.ctx.beginPath();
            this.ctx.arc(
                R*globScale+1+scaleX*globScale*(this.positions.x[i]-stats.minX),
                R*globScale+1+scaleY*globScale*(this.positions.y[i]-stats.minY),
                R*globScale,0,2*Math.PI);
        }

        if(this.conf.mode == 'line')
        {
            if(i==0)
                this.ctx.beginPath();

            this.ctx.lineTo(
                R*globScale+1+scaleX*globScale*(this.positions.x[i]-stats.minX),
                R*globScale+1+scaleY*globScale*(this.positions.y[i]-stats.minY));
        }

        if(this.conf.fill)
            this.ctx.fill();
        this.ctx.stroke();
    }



}