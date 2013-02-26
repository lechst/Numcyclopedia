function Module(conf){

    this.conf = {};

    if(this.conf)
    {
        for (cId in conf){
            this.conf[cId] = conf[cId];
        }
    }

    this.ctnr = $('<div></div>');
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
