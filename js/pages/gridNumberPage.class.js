function gridNumberPage(conf) {
    gridPage.call(this,conf);

    this.number = this.conf.number;

    var boxId = 0;

    console.log('AllS:',NumbersSequence.all.length)

    for (var ssNid in NumbersSequence.all)
    {

        if(boxId<this.nBox*this.mBox)
        {
            if(NumbersSequence.all[ssNid].final)
            {
                console.log('testing',this.number,NumbersSequence.all[ssNid],NumbersSequence.all[ssNid].Q(this.number))
                if(NumbersSequence.all[ssNid].Q(this.number))
                {

                    this.boxes[boxId].addClass('occupied');

                    this.boxes[boxId].data('context',NumbersSequence.all[ssNid]);

                    var qn = NumbersSequence.all[ssNid].QN(this.number);
                    //console.log(NumbersSequence.all[ssNid])
                    var nMm = new memberModule({},qn,NumbersSequence.all[ssNid]);
                    nMm.build();
                    this.boxes[boxId].children('.content').append(nMm.ctnr);

                    var nSNm = new sequenceNumModule({maxW:this.boxW*0.8,maxH:this.boxH*0.65},qn,NumbersSequence.all[ssNid])
                    nSNm.build();
                    this.boxes[boxId].children('.content').append(nSNm.ctnr);
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