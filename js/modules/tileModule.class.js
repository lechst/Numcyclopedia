function tileModule(conf,n) {
    Module.call(this,conf);

    this.n = n;

    this.ctnr = $('<div></div>').addClass('numberTile').append('<div class="label">'+this.n+'</div>');

    this.ctnr.css('background-color',conf.bgColorFunction(this.n));

    //newTile.append(renderFactors(i));

    this.ctnr.append(barsModule.prototype.build(primeSingature(this.n)));
}

tileModule.prototype = new Module();

tileModule.prototype.constructor = tileModule;

tileModule.prototype.conf.bgColorFunction = function(){return 'gray';};