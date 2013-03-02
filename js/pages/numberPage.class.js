function numberPage(conf) {
    Page.call(this,conf);

    console.log(this.conf.number)

    this.number = this.conf.number;

    this.title = new titleModule({
        mainTitle : this.conf.number
    });

    this.subModules.push(this.title);



    for (var ssNid in NumbersSequence.all)
    {
        if(NumbersSequence.all[ssNid].final)
        {
            //console.log('testing',NumbersSequence.all[ssNid])
            if(NumbersSequence.all[ssNid].Q(this.number))
            {
                var qn = NumbersSequence.all[ssNid].QN(this.number);
                //console.log(NumbersSequence.all[ssNid])
                this.subModules.push(new memberModule({},qn,NumbersSequence.all[ssNid]));

                this.subModules.push(new sequenceNumModule({},qn,NumbersSequence.all[ssNid]));
            }
        }
    }

}

numberPage.prototype = new Page();

numberPage.prototype.constructor = numberPage;

numberPage.prototype.number = undefined;

numberPage.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('numberPage');

    ctnr.css(
        {

        }
    );
};