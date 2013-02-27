function Module(conf){

    this.conf = deepFlatCopy(this.conf);

    if(conf)
    {
        for (cId in conf){
            this.conf[cId] = conf[cId];
        }
    }

    this.ctnr = $('<div></div>');

    if(this.ctnrClassName)
    {
        this.ctnr.addClass(this.ctnrClassName);
    }

    if(this.conf.ctnrClassName)
    {
        this.ctnr.addClass(this.conf.ctnrClassName);
    }

    this.subModules = [];
}

Module.prototype.ctnrConf = function(){


}

Module.prototype.build = function(){

    this.ctnrConf(this.ctnr);


    var thisM = this;

    for(var i=0;i<this.subModules.length;i++)
    {
        this.ctnr.append(this.subModules[i].build());
    }

    return this.ctnr;
}
