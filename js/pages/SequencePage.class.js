function sequencePage(conf) {
    Page.call(this,conf);

    verbose(this,this.conf.N)

    this.title = new titleModule({
        mainTitle : this.conf.sequence.name
    });

    this.subModules.push(this.title);


    for (var ssNid in this.conf.sequence.memberOf)
    {
        this.subModules.push(new memberModule({},this.conf.sequence.N,this.conf.sequence.memberOf[ssNid]));
    }

    verbose(this,this.conf.N)

    var sNM = {};

    for (var i = 1;(i<this.conf.N) && sNM;i++)
    {
        if (sNM = new sequenceNumModule({tile:true},i,this.conf.sequence))
            this.subModules.push(sNM);
    }

}

sequencePage.prototype = new Page();

sequencePage.prototype.constructor = sequencePage;

sequencePage.prototype.sequence = undefined;

sequencePage.prototype.conf.N = 10;

sequencePage.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('sequencePage');

    ctnr.css(
        {

        }
    );
};