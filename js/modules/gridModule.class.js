function gridModule(conf) {
    Module.call(this,conf);


    for (var i = 2;i<this.conf.N;i++)
    {
        this.subModules.push(new tileModule(this.conf.tileConf,i));
    }

}

gridModule.prototype = new Module();

gridModule.prototype.constructor = gridModule;