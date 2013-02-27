function sequencePage(conf) {
    Page.call(this,conf);

    console.log(this.conf.N)

    this.title = new titleModule({
        mainTitle : this.conf.sequence.name
    });

    this.subModules.push(this.title);

    console.log(this.conf.N)

    var sNM = {};

    for (var i = 1;(i<this.conf.N) && sNM;i++)
    {
        if (sNM = new sequenceNumModule({},i,this.conf.sequence))
            this.subModules.push(sNM);
    }

}

sequencePage.prototype = new Page();

sequencePage.prototype.constructor = sequencePage;

sequencePage.prototype.sequence = undefined;

sequencePage.prototype.conf.N = 50;

sequencePage.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('sequencePage');

    ctnr.css(
        {

        }
    );
};