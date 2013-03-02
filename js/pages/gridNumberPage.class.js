function gridNumberPage(conf) {
    gridPage.call(this,conf);

    this.number = this.conf.number;

    var boxId = 0;

    for (var ssNid in NumbersSequence.all)
    {
        if(boxId<this.nBox*this.mBox)
        {
            if(NumbersSequence.all[ssNid].final)
            {
                //console.log('testing',NumbersSequence.all[ssNid])
                if(NumbersSequence.all[ssNid].Q(this.number))
                {
                    var qn = NumbersSequence.all[ssNid].QN(this.number);
                    //console.log(NumbersSequence.all[ssNid])
                    var nMm = new memberModule({},qn,NumbersSequence.all[ssNid]);
                    nMm.build();
                    $(this.boxes.children('div')[boxId]).append(nMm.ctnr);

                    var nSNm = new sequenceNumModule({maxW:this.boxW*0.8,maxH:this.boxH*0.7},qn,NumbersSequence.all[ssNid])
                    nSNm.build();
                    $(this.boxes.children('div')[boxId]).append(nSNm.ctnr);
                    boxId++;
                    //this.subModules.push(new sequenceNumModule({},qn,NumbersSequence.all[ssNid]));
                }
            }
        }
    }

}

gridNumberPage.prototype = new gridPage();

gridNumberPage.prototype.constructor = gridNumberPage;

gridNumberPage.prototype.number = undefined;

gridNumberPage.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('gridPage');

    ctnr.css(
        {

        }
    );
};