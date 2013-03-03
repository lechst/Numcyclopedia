function arrangeImgModule(conf,n,sequence) {

    this.sequence = sequence;
    this.n = n;

    //TODO na kiedyś, jesli sequence nie ma arrange przydalaby sie jakiś trywialny sposob rysowania arrange, np na linii ?
    if(!(this.x = sequence.getN(this.n)) || !sequence.arrange){
        return false;
    }

    conf.R = 10;

    if(sequence.arrange.minDistance)
    {
        conf.minDistance = 2*R*sequence.arrange.minDistance;
    }
    else
    {
        conf.minDistance = 2*conf.R+2;
    }

    conf.mode = "circle";

    this.conf.fill = false;

    imgModule.call(this,conf);

    this.draw(sequence.arrange(this.n));

}

arrangeImgModule.prototype = new imgModule();

arrangeImgModule.prototype.constructor = arrangeImgModule;

arrangeImgModule.prototype.ctnrClassName = "arrangeImgModule";