function gridNumberPage(conf) {

    this.number = conf.obj;
    this.generateContent();

    gridPage.call(this,conf);

}

gridNumberPage.prototype = new gridPage();

gridNumberPage.prototype.constructor = gridNumberPage;

gridNumberPage.prototype.number = undefined;

gridNumberPage.prototype.content = [];

gridNumberPage.prototype.generateContent = function(){

    this.content = [];
    this.partSequences = [];

    this.partitions = [primeSignaturePartition.prototype];

    for (var partNid in this.partitions)
    {

        this.partSequences.push(this.partitions[partNid].getN(this.partitions[partNid].Q(this.number)))
    }

    this.sequences = this.partSequences.concat(NumbersSequence.allFinal.filter(function(s){return s.partMemberOf.length==0}));

    var start = new Date();
    Console.innerHTML="cntnt:";


    for (var ssNid in this.sequences)
    {

            if(this.sequences[ssNid].Q(this.number))
            {
                var qn = this.sequences[ssNid].QN(this.number);

                var seq = this.sequences[ssNid];



                this.content.push(
                    {
                        meta:{number:qn,sequence:seq},
                        modules:
                            [
                                new memberModule({},qn,seq),
                                new sequenceNumModule({maxW:this.boxW*0.8,maxH:this.boxH*0.65},qn,seq)
                            ]
                    }
                )


            }


    }
    Console.innerText += (new Date() - start);
}

gridNumberPage.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('gridPage');

    ctnr.css(
        {

        }
    );
};