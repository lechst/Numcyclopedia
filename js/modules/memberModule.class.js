function memberModule(conf,n) {

    Module.call(this,conf);

    this.n = n;

    this.ctnr.addClass('numberTile').append('<div class="label">'+this.n+'</div>');

    this.ctnr.css('background-color',this.conf.bgColorFunction(this.n));

    //newTile.append(renderFactors(i));

    this.ctnr.append(barsModule.prototype.build(primeSingature(this.n)));
}

memberModule.prototype = new Module();

memberModule.prototype.constructor = memberModule;