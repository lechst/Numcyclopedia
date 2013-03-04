function barsModule(conf,data) {
    Module.call(this,conf);

    this.data = data;
}

barsModule.prototype = new Module();

barsModule.prototype.constructor = barsModule;

barsModule.prototype.build = function(){

    var conf = this.conf;

    var data = this.data;

    this.ctnr.addClass('bars');

    var max = 0;

    var that = this;

    var dist = 3;
    var distV = 3;

    data.map(function(p,i){

        that.ctnr.append(
            $('<div style="width:'+(((conf.size)*p)-dist)+'px;height:'+(conf.size-2*distV)+'px;"></div>')
                .css('border-width',distV+'px 0px '+distV+'px 0px')
                .addClass('bar')
        );

        for(var j =0;j<p;j++)
        {
            that.ctnr.children('div').last().append(
                $('<div style="width:'+(conf.size-dist)+'px;height:'+(conf.size-2*distV)+'px;"></div>')
                    .addClass('brick')
                    .css('margin-left',j==p-1?0:dist)
            );
        }
    });

    return this.ctnr;
}