function barsModule() {
    Module.call(this);
}

barsModule.prototype = new Module();

barsModule.prototype.constructor = barsModule;

barsModule.prototype.build = function(data,conf){

    if(!(conf))
    {
        conf = {};
    }

    if(!(conf.size))
    {
        conf.size = 6;
    }

    var signature = $('<div></div>').addClass('bars');

    var max = 0;

    data.map(function(p,i){

        signature.append($('<div style="width:'+((conf.size*p)-1)+'px;height:'+(conf.size-3)+'px;"></div>').addClass('bar'));

        for(var j =0;j<p;j++)
        {
            signature.children('div').last().append($('<div style="width:'+(conf.size-1)+'px;height:'+(conf.size-3)+'px;"></div>').addClass('brick'));
        }
    });

    return signature;
}