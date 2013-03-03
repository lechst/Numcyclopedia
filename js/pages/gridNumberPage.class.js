function gridNumberPage(conf) {
    gridPage.call(this,conf);

    this.number = this.conf.number;

    var boxId = 0;

    this.partitions = [primeSignaturePartition.prototype];

    this.partSequences = [];

    for (var partNid in this.partitions)
    {

        this.partSequences.push(this.partitions[partNid].getN(this.partitions[partNid].Q(this.number)))
    }

    this.sequences = this.partSequences.concat(NumbersSequence.allFinal.filter(function(s){return s.partMemberOf.length==0}));

    for (var ssNid in this.sequences)
    {

        if(boxId<this.nBox*this.mBox)
        {
                if(this.sequences[ssNid].Q(this.number))
                {

                    this.boxes[boxId].addClass('occupied');

                    this.boxes[boxId].data('context',this.sequences[ssNid]);

                    var qn = this.sequences[ssNid].QN(this.number);
                    //verbose(this,NumbersSequence.all[ssNid])
                    var nMm = new memberModule({},qn,this.sequences[ssNid]);
                    nMm.build();
                    this.boxes[boxId].children('.content').append(nMm.ctnr);

                    var nSNm = new sequenceNumModule({maxW:this.boxW*0.8,maxH:this.boxH*0.65},qn,this.sequences[ssNid])
                    nSNm.build();
                    this.boxes[boxId].children('.content').append(nSNm.ctnr);
                    boxId++;
                    //this.subModules.push(new sequenceNumModule({},qn,NumbersSequence.all[ssNid]));
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