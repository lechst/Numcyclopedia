function sequenceNumModule(conf,n,sequence) {

    Module.call(this,conf);

    this.n = n;

    if(!(this.x = sequence.getN(this.n))){
        return false;
    }

    this.sequence = sequence;


    this.tile = new tileModule( {
        bgColorFunction : coldPrimeCF
    },this.x)

    this.ctnr.append($('<div>'+this.n+" - "+'</div>').addClass('nEquals'));
    this.ctnr.append(this.tile.ctnr);
    this.ctnr.append('<div style="clear:both;"></div>');


    if(this.sequence.arrange)
    {
        this.arrangeImg = new arrangeImgModule({},this.n,this.sequence);
        this.ctnr.append(this.arrangeImg.ctnr);
    }

    if(this.sequence.arrange3D)
    {
        this.arrange3DImg = new arrange3DImgModule({},this.n,this.sequence);
        this.ctnr.append(this.arrange3DImg.ctnr);
    }

}

sequenceNumModule.prototype = new Module();

sequenceNumModule.prototype.constructor = sequenceNumModule;

sequenceNumModule.prototype.ctnrClassName = "sequenceNumModule";