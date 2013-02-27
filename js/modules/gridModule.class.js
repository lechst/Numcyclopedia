function gridModule(conf) {
    Module.call(this,conf);


    for (var i = 2;i<this.conf.N;i++)
    {
        this.subModules.push(new tileModule(this.conf.tileConf,i));
    }

}

gridModule.prototype = new Module();

gridModule.prototype.ctnrClassName = 'gridModule';

gridModule.prototype.constructor = gridModule;

gridModule.prototype.showOnly = function(set){

    for (var i = 0;i<this.subModules.length;i++)
    {

        if(set.Q(this.subModules[i].n)){
            this.subModules[i].ctnr.show();
        }
        else
        {
            this.subModules[i].ctnr.hide();
        }
    }

};

gridModule.prototype.highlightOnly = function(set){

    for (var i = 0;i<this.subModules.length;i++)
    {

        if(set.Q(this.subModules[i].n)){
            this.subModules[i].ctnr.css('opacity','1');
        }
        else
        {
            this.subModules[i].ctnr.css('opacity','0.3');
        }
    }

};