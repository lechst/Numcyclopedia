function sequenceNumModule(conf,n,sequence) {

    Module.call(this,conf);



    this.n = n;

    if(!(this.x = sequence.getN(this.n))){
        return false;
    }

    this.sequence = sequence;

    if(this.conf.tile)
    {
        this.tile = new tileModule( {
            bgColorFunction : coldPrimeCF
        },this.x)

        this.ctnr.append($('<div>'+this.n+" - "+'</div>').addClass('nEquals'));
        this.ctnr.append(this.tile.ctnr);
        this.ctnr.append('<div style="clear:both;"></div>');
    }

    var thisM = this;

    if(this.sequence.arrange)
    {
        this.arrangeImg = new arrangeImgModule({maxW:this.conf.maxW,maxH:this.conf.maxH},this.n,this.sequence);
        this.ctnr.append(this.arrangeImg.ctnr);
    }

    if(this.sequence.arrange3D)
    {
        this.arrange3DImg = new arrange3DImgModule({maxW:this.conf.maxW,maxH:this.conf.maxH},this.n,this.sequence);
        this.ctnr.append(this.arrange3DImg.ctnr);
    }

}

sequenceNumModule.prototype = new Module();

sequenceNumModule.prototype.constructor = sequenceNumModule;

sequenceNumModule.prototype.ctnrClassName = "sequenceNumModule";

sequenceNumModule.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('sequenceNumModule');

    ctnr.css(
        {

        }
    );
};