function memberModule(conf,n,sequence) {

    Module.call(this,conf);

    this.n = n;
    this.sequence = sequence;


    if(this.n>1)
    {
    this.ctnr.append(pageLink('<',this.sequence.getN(n-1)).addClass('prev'));
    }

    this.ctnr.append('<span><span class="num">'+this.n+'</span> of <span class="seq">'+sequence.name+'</span></span>');
    this.ctnr.append(pageLink('>',this.sequence.getN(n+1)).addClass('next'));
}

memberModule.prototype = new Module();

memberModule.prototype.constructor = memberModule;

memberModule.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('memberModule');

    ctnr.css(
        {

        }
    );
};