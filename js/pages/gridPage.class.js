function gridPage(conf) {
    Page.call(this,conf);

    this.nBox = 6;
    this.mBox = 3;

    this.boxW = 200;
    this.boxH = 200;

    this.borderDist = 4;


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

    this.leftM = Math.floor((window.innerWidth-this.nBox*this.boxW)/2);
    this.topM = Math.floor((window.innerHeight-this.mBox*this.boxH)/2);

    this.boxesCtnr.style.width = '100%';
    this.boxesCtnr.style.height = '100%';

    this.boxesCtnr.style.position = 'absolute';
    this.boxesCtnr.style.webkitPerspective = '3000';
    this.boxesCtnr.style.webkitPerspectiveOrigin = '50% 50%';

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

            var that = this;

            //pageLinkFN

            nBox.buttons = [
                {p:[0,0,0.25,0.25],
                    event:(function(n){return function(){
                        if(that.boxes[n].meta.number>1){
                        pageLinkFN(
                            that.boxes[n].meta.sequence.getN(that.boxes[n].meta.number-1),
                            that.boxes[n].meta.sequence
                        )()}
                    }})(boxN),
                    touch:true
                },
                {p:[0.75,0,0.25,0.25],
                    event:(function(n){return function(){
                        pageLinkFN(
                            that.boxes[n].meta.sequence.getN(that.boxes[n].meta.number+1),
                            that.boxes[n].meta.sequence
                        )()
                    }})(boxN),
                    touch:true
                },
                {p:[0,0.25,1,0.75],
                    event:(function(n){return function(){
                        if(!that.unfolded){
                            that.unfoldBox(n);
                        }else{
                            that.boxes[n].fold(function(){that.foldBox(n)});
                        }
                    }})(boxN),
                    touch:false
                }
            ];

            boxN++;


        }
    }
}

gridPage.prototype.unfoldBox = function(n){



    if(!this.unfolded){
        this.unfolded = true;

        var col = n%this.nBox;

        var row = Math.floor(n/this.nBox);

        var box = this.boxes[n];

        box.buildArray();

        var binded = false;

        for(var i=0;i<this.nBox;i++){
            if(i!=col){
                for(var j=row;j<this.mBox;j++){


                    this.boxes[i+j*this.nBox].ctnr.style.webkitTransitionProperty = 'webkitTransform';
                    this.boxes[i+j*this.nBox].ctnr.style.webkitTransitionDuration = '600ms';
                    this.boxes[i+j*this.nBox].ctnr.style.webkitTransitionDelay = '0ms';
                    this.boxes[i+j*this.nBox].m++;

                    if(!binded){
                        this.boxes[i+j*this.nBox].ctnr.addEventListener( 'webkitTransitionEnd',function(e){
                            box.unfold();
                            e.target.removeEventListener( 'webkitTransitionEnd',arguments.callee,false);
                        });
                        binded = true;
                    }

                }
            }
        }
    }
}

gridPage.prototype.foldBox = function(n){
    if(this.unfolded){
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
}

gridPage.prototype.revolver = function(newContent,newObject,context){
    //console.log(newContent,this.content);
    var start = new Date();

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
    Console.innerText += ", rev:" + (new Date() - start);
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