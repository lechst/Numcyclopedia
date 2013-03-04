function gridPage(conf) {
    Page.call(this,conf);

    if(conf){
        this.obj = this.conf.obj;
        this.context = this.conf.context;

        if(Page.current.revolver == this.revolver)
        {
            Page.current.revolver(this.content,this.obj,this.context);

            //Page.current.clearContentBoxes();
            //Page.current.content = this.content;
            //Page.current.putContentInBoxes();

            this.show = function(){};
        }
        else
        {
            this.buildBoxes();
            this.putContentInBoxes();
        }


    }
}

gridPage.prototype = new Page();

gridPage.prototype.constructor = gridPage;

gridPage.prototype.boxes = [];

gridPage.prototype.buildBoxes = function(){

    this.ctnr.css('width',window.innerWidth);
    this.ctnr.css('height',window.innerHeight);

    this.W = window.innerWidth;
    this.H = window.innerHeight;

    this.ctnr.append(this.boxesCtnr = $('<div></div>'));

    this.boxesCtnr = this.boxesCtnr[0];

    this.unfolded = false;

    this.nBox = 6;
    this.mBox = 3;

    this.boxW = 200;
    this.boxH = 200;

    this.borderDist = 4;

    this.leftM = Math.floor((window.innerWidth-this.nBox*this.boxW)/2);
    this.topM = Math.floor((window.innerHeight-this.mBox*this.boxH)/2);

    this.boxesCtnr.style.position = 'absolute';

    this.boxes = [];

    var thisP = this;

    var boxN = 0;

    for(var j=0; j<this.mBox;j++){
        for(var i=0; i<this.nBox;i++){

            var nBox = new GridBox(this,i,j);

            var unfoldE = (function(n){
                return function(e){
                    if(!thisP.unfolded)
                        thisP.unfoldBox(n);
                    else
                        thisP.foldBox(n);

                }})(boxN);

            //this.boxes[boxN].ctnr.onmousedown = unfoldE;
            //this.boxes[boxN].ctnr.ontouchstart = unfoldE;


            boxN++;


        }
    }
}

gridPage.prototype.unfoldBox = function(n){

    this.unfolded = true;

    var col = n%this.nBox;

    var row = Math.floor(n/this.nBox);

    for(var i=0;i<this.nBox;i++){
        if(i!=col){
            for(var j=row;j<this.mBox;j++){
                this.boxes[i+j*this.nBox].ctnr.style.webkitTransitionProperty = 'webkitTransform';
                this.boxes[i+j*this.nBox].ctnr.style.webkitTransitionDuration = '600ms';
                this.boxes[i+j*this.nBox].ctnr.style.webkitTransitionDelay = '0ms';
                this.boxes[i+j*this.nBox].m++;
            }
        }
    }

}

gridPage.prototype.foldBox = function(n){

    this.unfolded = false;

    var col = n%this.nBox;

    var row = Math.floor(n/this.nBox);

    for(var i=0;i<this.nBox;i++){
        if(i!=col){
            for(var j=row;j<this.mBox;j++){
                this.boxes[i+j*this.nBox].ctnr.style.webkitTransitionProperty = 'webkitTransform';
                this.boxes[i+j*this.nBox].ctnr.style.webkitTransitionDuration = '600ms';
                this.boxes[i+j*this.nBox].ctnr.style.webkitTransitionDelay = '0ms';
                this.boxes[i+j*this.nBox].m--;
            }
        }
    }

}

gridPage.prototype.revolver = function(newContent,newObject,context){
    //console.log(newContent,this.content);

    console.log(context);

    var shared  = [];

     for (var i = 0;i<this.content.length;i++)
     {
         for (var j = 0;j<newContent.length;j++)
         {
             if(this.content[i] && newContent[j]){

                 if(this.content[i].meta.sequence == newContent[j].meta.sequence)
                 {
                     shared.push({
                         sequence:newContent[j].meta.sequence,
                         delta:newContent[j].meta.number-this.content[i].meta.number,
                         i:i,
                         j:j
                     })
                 }

             }
         }
     }

    var updated = [];
    var used = [];

    for (var i = 0;i<shared.length;i++)
    {
        this.content[shared[i].i]=newContent[shared[i].j];
        updated.push(shared[i].i);
        used.push(shared[i].j);
    }

    var i = 0;
    var j = 0;
    while (j<newContent.length||i<this.content.length)
    {
        if(used.indexOf(j)>=0)
        {
            j++;
        }
        if(updated.indexOf(i)>=0)
        {
            i++;
        }

        if(updated.indexOf(i)<0&&used.indexOf(j)<0)
        {
            if(j<newContent.length)
                this.content[i]=newContent[j];
            else
                this.content[i]=undefined;
            i++;
            j++;
        }
    }

    this.putContentInBoxes();

};

gridPage.prototype.content = [];

gridPage.prototype.clearContentBoxes = function(){

    var boxN = 0;

    for(var j=0; j<this.mBox;j++){
        for(var i=0; i<this.nBox;i++){

            this.boxes[boxN].newContentReset();
            this.boxes[boxN].newContentShow();

            boxN++;


        }
    }
}

gridPage.prototype.putContentInBoxes = function(){

    var boxId = 0;

    console.log(this.content)

                while(boxId<this.nBox*this.mBox)
                {


                        this.boxes[boxId].newContentReset();

                        if(this.content[boxId]){
                            this.boxes[boxId].newMeta = this.content[boxId].meta;

                            for (var mId in this.content[boxId].modules)
                            {

                                this.boxes[boxId].newContentAdd(this.content[boxId].modules[mId]);

                            }
                        }

                        this.boxes[boxId].newContentShow();


                    boxId++;
                }


}

gridPage.prototype.show = function (where){
    Page.prototype.show.call(this,where)
}


gridPage.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('gridPage');

    ctnr.css(
        {

        }
    );
};