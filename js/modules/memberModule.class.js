function memberModule(conf,n,sequence) {

    Module.call(this,conf);

    this.n = n;
    this.sequence = sequence;

    console.log(this.sequence)

    if(this.n>1)
    {
    this.ctnr.append(pageLink('(prev)',this.sequence.getN(n-1)));
    }

    this.ctnr.append('<span>'+this.n+' of '+sequence.name+'</span>');
    this.ctnr.append(pageLink('(next)',this.sequence.getN(n+1)));
}

memberModule.prototype = new Module();

memberModule.prototype.constructor = memberModule;