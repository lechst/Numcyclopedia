function titleModule(conf,n) {
    Module.call(this,conf);

    this.n = n;

    this.ctnr = $('<div></div>').append('<h1>'+this.conf.mainTitle+'</h1>');

}

titleModule.prototype = new Module();

titleModule.prototype.constructor = titleModule;