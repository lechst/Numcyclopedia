function tileModule() {
    Module.call(this);
}

tileModule.prototype = new Module();

tileModule.prototype.constructor = tileModule;

tileModule.prototype.build = function(i,conf){

    if(!conf)
    {
        conf = {
            bgColorFunction : function(){
                return 'gray'
            }
        }
    }

    var newTile = $('<div></div>').addClass('numberTile').append('<div class="label">'+i+'</div>');

    newTile.css('background-color',conf.bgColorFunction(i));

    //newTile.append(renderFactors(i));

    newTile.append(barsModule.prototype.build(primeSingature(i)));

    return newTile;

}