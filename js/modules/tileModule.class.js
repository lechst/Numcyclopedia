function tileModule(conf,n) {

    Module.call(this,conf);

    this.n = n;

    this.ctnr.addClass('numberTile').append('<div class="label">'+this.n+'</div>');

    this.ctnr.css('background-color',this.conf.bgColorFunction(this.n));

    //newTile.append(renderFactors(i));
    this.bars = new barsModule({size:5},primeSingature(this.n));
    this.bars.build();

    this.ctnr.append(this.bars.ctnr);
    this.ctnr.append(pageLink('(?)',this.n));
}

tileModule.prototype = new Module();

tileModule.prototype.constructor = tileModule;

tileModule.prototype.conf.bgColorFunction = function(){return 'gray';};