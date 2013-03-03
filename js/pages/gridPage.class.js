function gridPage(conf) {
    Page.call(this,conf);

    this.ctnr.css('width',window.innerWidth);
    this.ctnr.css('height',window.innerHeight);

    this.ctnr.append(this.boxesCtnr = $('<div></div>'));


    this.nBox = 6;
    this.mBox = 3;

    this.boxW = 200;
    this.boxH = 200;

    this.borderDist = 4;
    this.cssBorder = 0;

    this.boxesCtnr.css('left',(window.innerWidth-this.nBox*this.boxW)/2);
    this.boxesCtnr.css('top',(window.innerHeight-this.mBox*this.boxH)/2);
    this.boxesCtnr.css('position','absolute');

    this.boxes = [];
    this.contents = [];

    for(var j=0; j<this.mBox;j++){
        for(var i=0; i<this.nBox;i++){
            this.boxes.push($('<div></div>')
                .css('position','absolute')
                .css('left',(this.boxW*i)+this.borderDist)
                .css('top',(this.boxH*j)+this.borderDist)
                .css('width',this.boxW-(2*(this.borderDist+this.cssBorder)))
                .css('height',this.boxH-(2*(this.borderDist+this.cssBorder)))
                .css('border-width',this.cssBorder)
                .css('border-style','solid')
                .css('border-color','gray')
                .css('background-color','white')
                .css('overflow','hidden')
                .css('border-radius',8)
                .addClass('gridBox')
                .append(
                    $('<div></div>')
                        .css('border-image','url(img/inner_shadow.png) 80 80 80 80')
                        .css('width',this.boxW-(2*(this.borderDist+this.cssBorder)))
                        .css('height',this.boxH-(2*(this.borderDist+this.cssBorder)))
                        .css('border-width',6)
                        .css('opacity',0.8)
                        .css('z-index',10)
                        .css('position','absolute')
                        .css('top',0)
                        .css('left',0)
                        .addClass('innerShadow')
                )
            );

            var nContent = $('<div></div>')
                .css('width',this.boxW-(2*(this.borderDist+this.cssBorder)))
                .css('height',this.boxH-(2*(this.borderDist+this.cssBorder)))
                .css('z-index',40)
                .css('position','absolute')
                .css('top',0)
                .css('left',0)
                .addClass('content');

            this.contents.push(nContent);
            this.boxes[this.boxes.length-1].append(nContent);
            this.boxesCtnr.append(this.boxes[this.boxes.length-1]);
        }
    }

}

gridPage.prototype = new Page();

gridPage.prototype.constructor = gridPage;

gridPage.prototype.revolver = function(newPage){

    newPage.build();
    console.log('revolver from',this.number,'to',newPage.number);
    console.log('oldboxes',this.boxes);
    if(!newPage.conf.context.Q(newPage.number))
    {
        throw new Error('cant revolve here, context not maching number',newPage.number,newPage.conf.context);
    }

    var oldPage = this;

    var oldBoxes = this.boxes;

    var newBoxes = newPage.boxes;

    console.log(oldBoxes.length,oldPage.contents.length,newPage.contents.length);

    var movement = -1*this.boxW;

    if(newPage.number<this.number)
    {
        movement *= -1;
    }


    var revolver = undefined;
    for(var i = 0;i<oldBoxes.length;i++)
    {
        console.log('revSearch',i,oldBoxes[i].data('context'));
        if(oldBoxes[i].data('context')==newPage.conf.context)
        {
            console.log('oldRev',i);
            revolver = i;
        }
        else
        {
         //   oldBoxes[i].find('div.content > div').remove();
         //   oldBoxes[i].removeClass('occupied');
        }
    }

    if(revolver==undefined)
    {
        console.log('newCtx',newPage.conf.context)
        throw new Error('revolver not Found');
    }

    var newRevolver;
    for(var i = 0;i<newBoxes.length;i++)
    {
        if(newBoxes[i].data('context')==newPage.conf.context)
        {
            newRevolver = i;

            console.log(revolver);
            oldBoxes[revolver].append(newPage.contents[newRevolver]);
        }

    }

    console.log('oR',revolver,'nR',newRevolver)

    newPage.contents[newRevolver].css('left',-movement);
    newPage.contents[newRevolver].animate({left:0},400);


    this.contents[revolver].data('oldI',revolver);
    this.contents[revolver].data('newJ',newRevolver);

    this.contents[revolver].animate({left:movement},400,function(){
        oldPage.contents[$(this).data('oldI')] = newPage.contents[$(this).data('newJ')];
        $(this).remove();

    });


    var i=0;
    var missedJ;
    for(var j = 0;j<newPage.contents.length||i<this.contents.length;j++)
    {
        if(j!=newRevolver)
        {
            if(i==revolver)
            {
                i++;
            }


            if(i<oldPage.contents.length){

                    oldBoxes[i].append(newPage.contents[j]);

                    oldPage.contents[i].data('oldI',i);

                    if(newPage.contents[j])
                    {
                        oldPage.contents[i].data('newJ',j);
                    }
                    else
                    {
                        console.log('missJ',missedJ)
                        oldPage.contents[i].data('newJ',missedJ);
                    }

                    oldPage.contents[i].animate({opacity:0},400,function(){
                            oldPage.contents[$(this).data('oldI')] = newPage.contents[$(this).data('newJ')];
                            oldPage.boxes[$(this).data('oldI')].data('context',newPage.boxes[$(this).data('newJ')].data('context'));
                            $(this).remove()
                        }
                    );

                }

                if(j<newPage.contents.length){
                    newPage.contents[j].css('opacity',0);
                    newPage.contents[j].animate({opacity:1},400);
                }

            i++;


        }
        else
        {
            missedJ = j;
        }
    }


    this.number = newPage.number;

};

gridPage.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('gridPage');

    ctnr.css(
        {

        }
    );
};