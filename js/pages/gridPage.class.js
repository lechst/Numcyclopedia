function gridPage(conf) {
    Page.call(this,conf);

    this.ctnr.css('width',window.innerWidth);
    this.ctnr.css('height',window.innerHeight);

    this.W = window.innerWidth;
    this.H = window.innerHeight;


    this.ctnr.append(this.boxesCtnr = $('<div></div>'));

    this.unfolded = false;

    this.nBox = 6;
    this.mBox = 3;

    this.boxW = 200;
    this.boxH = 200;

    this.borderDist = 4;
    this.cssBorder = 0;

    this.leftM = (window.innerWidth-this.nBox*this.boxW)/2;
    this.topM = (window.innerHeight-this.mBox*this.boxH)/2;

    this.boxesCtnr.css('left',this.leftM);
    this.boxesCtnr.css('top',this.topM);
    this.boxesCtnr.css('position','absolute');

    this.boxes = [];
    this.contents = [];

    var thisP = this;

    var boxN = 0;

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
                //.css('background-color','white')
                .css('overflow','hidden')
                .css('border-radius',8)
                .addClass('gridBox')
          /*      .append(
                    $('<div></div>')
                        .css('border-image','url(img/inner_shadow.png) 80 80 80 80')
                        //.css('width',this.boxW-(2*(this.borderDist+this.cssBorder)))
                        //.css('height',this.boxH-(2*(this.borderDist+this.cssBorder)))
                        .css('width','100%')
                        .css('height','100%')
                        .css('border-width',6)
                        //.css('opacity',0.8)
                        .css('z-index',40)
                        .css('position','absolute')
                        .css('top',0)
                        .css('left',0)
                        .css('cursor','pointer')
                        .addClass('innerShadow')
                )                                   */
                .append(
                $('<div class="foldBtn"></div>')
                    //.css('width',this.boxW-(2*(this.borderDist+this.cssBorder)))
                    //.css('height',this.boxH-(2*(this.borderDist+this.cssBorder)))
                    .css('width','100%')
                    .css('height','70%')
                    //.css('opacity',1)
                    .css('z-index',90)
                    .css('position','absolute')
                    .css('top','30%')
                    .css('left',0)
                    .css('cursor','pointer')
                )
            );

            var nContent = $('<div></div>')
                .css('width',this.boxW-(2*(this.borderDist+this.cssBorder)))
                .css('height',this.boxH-(2*(this.borderDist+this.cssBorder)))
                .css('z-index',50)
                .css('position','absolute')
                .css('top',0)
                .css('left',0)
                .addClass('content');

            this.contents.push(nContent);
            this.boxes[this.boxes.length-1].append(nContent);
            this.boxesCtnr.append(this.boxes[this.boxes.length-1]);

            var unfoldE = (function(n){
                return function(e){
                    if(!thisP.unfolded)
                        thisP.unfoldBox(n);
                    else
                        thisP.foldBox(n);

                }})(boxN);

            this.boxes[boxN].find('.foldBtn').mousedown(
                unfoldE
            );
            this.boxes[boxN].find('.foldBtn')[0].ontouchstart = unfoldE;
            boxN++;


        }
    }

}

gridPage.prototype = new Page();

gridPage.prototype.constructor = gridPage;

gridPage.prototype.unfoldBox = function(n){

    this.unfolded = true;

    var col = n%this.nBox;

    var row = Math.floor(n/this.nBox);

    this.boxes[n][0].style.webkitTransitionProperty = 'width,left';
    this.boxes[n][0].style.webkitTransitionDuration = '600ms';
    this.boxes[n][0].style.webkitTransitionDelay = '600ms';
    this.boxes[n][0].style.width = (this.W+100)+'px';
    this.boxes[n][0].style.left = (-(this.leftM+50))+'px';

    this.contents[n][0].style.webkitTransitionProperty = 'left';
    this.contents[n][0].style.webkitTransitionDuration = '600ms';
    this.contents[n][0].style.webkitTransitionDelay = '600ms';
    this.contents[n][0].style.left = (this.leftM+50+col*this.boxW+this.borderDist)+'px';


    for(var i=0;i<this.nBox;i++){
        if(i!=col){
            for(var j=row;j<this.mBox;j++){
                this.boxes[i+j*this.nBox][0].style.webkitTransitionProperty = 'top';
                this.boxes[i+j*this.nBox][0].style.webkitTransitionDuration = '600ms';
                this.boxes[i+j*this.nBox][0].style.webkitTransitionDelay = '0ms';
                this.boxes[i+j*this.nBox][0].style.top = ((this.boxH*(j+1))+this.borderDist)+'px';
            }
        }
    }

}

gridPage.prototype.foldBox = function(n){

    this.unfolded = false;

    var col = n%this.nBox;

    var row = Math.floor(n/this.nBox);

    this.boxes[n][0].style.webkitTransitionProperty = 'width,left';
    this.boxes[n][0].style.webkitTransitionDuration = '600ms';
    this.boxes[n][0].style.webkitTransitionDelay = '0ms';
    this.boxes[n][0].style.width = (this.boxW-(2*(this.borderDist+this.cssBorder)))+'px';
    this.boxes[n][0].style.left = ((col*this.boxW)+this.borderDist)+'px';

    this.contents[n][0].style.webkitTransitionProperty = 'left';
    this.contents[n][0].style.webkitTransitionDelay = '0ms';
    this.contents[n][0].style.webkitTransitionDuration = '600ms';

    this.contents[n][0].style.left = 0+'px';


    for(var i=0;i<this.nBox;i++){
        if(i!=col){
            for(var j=row;j<this.mBox;j++){
                this.boxes[i+j*this.nBox][0].style.webkitTransitionProperty = 'top';
                this.boxes[i+j*this.nBox][0].style.webkitTransitionDuration = '600ms';
                this.boxes[i+j*this.nBox][0].style.webkitTransitionDelay = '600ms';
                this.boxes[i+j*this.nBox][0].style.top = ((this.boxH*(j))+this.borderDist)+'px';
            }
        }
    }

}

gridPage.prototype.revolver = function(newPage){

    //this.verbose = true;

    newPage.build();
    verbose(this,'revolver from',this.number,'to',newPage.number);
    verbose(this,'oldboxes',this.boxes);
    if(!newPage.conf.context.Q(newPage.number))
    {
        throw new Error('cant revolve here, context not maching number',newPage.number,newPage.conf.context);
    }

    var oldPage = this;

    var oldBoxes = this.boxes;

    var newBoxes = newPage.boxes;

    verbose(this,oldBoxes.length,oldPage.contents.length,newPage.contents.length);

    var movement = -1*this.boxW;

    if(newPage.number<this.number)
    {
        movement *= -1;
    }


    var revolver = undefined;
    for(var i = 0;i<oldBoxes.length;i++)
    {
        verbose(this,'revSearch',i,oldBoxes[i].data('context'));
        if(oldBoxes[i].data('context')==newPage.conf.context)
        {
            verbose(this,'oldRev',i);
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
        verbose(this,'newCtx',newPage.conf.context)
        throw new Error('revolver not Found');
    }

    var newRevolver;
    for(var i = 0;i<newBoxes.length;i++)
    {
        if(newBoxes[i].data('context')==newPage.conf.context)
        {
            newRevolver = i;

            verbose(this,revolver);
            oldBoxes[revolver].append(newPage.contents[newRevolver]);
        }

    }

    verbose(this,'oR',revolver,'nR',newRevolver)

    //TODO naprawic ? nie mam siwego pojecia czemu ponizsze nie dziala :( nowy content wogole sie nie animuje choc reaguje na  css

    newPage.contents[newRevolver][0].style.left = '0px';

    newPage.contents[newRevolver][0].style.webkitTransitionProperty = 'left';
    newPage.contents[newRevolver][0].style.webkitTransitionDuration = '400ms';
    newPage.contents[newRevolver][0].style.webkitTransitionDelay = '0ms';

    newPage.contents[newRevolver][0].addEventListener( 'webkitTransitionEnd',
        function( e) {
            e.target.style.webkitTransitionDuration = '400ms';
            e.target.style.left = '0px';
            e.target.webkitTransitionEnd = "";

        }, false );

    this.contents[revolver].css('border-left','1px solid gray')
    this.contents[revolver].css('border-right','1px solid gray')

    this.contents[revolver].data('oldI',revolver);
    this.contents[revolver].data('newJ',newRevolver);

    this.contents[revolver][0].style.webkitTransitionProperty = 'left';
    this.contents[revolver][0].style.webkitTransitionDuration = '400ms';
    this.contents[revolver][0].style.webkitTransitionDelay = '0ms';
    this.contents[revolver][0].style.left = String(movement)+'px';

    this.contents[revolver][0].addEventListener( 'webkitTransitionEnd',
        function( e) {
            oldPage.contents[$(e.target).data('oldI')] = newPage.contents[$(e.target).data('newJ')];
            $(e.target).remove();
        }, false );

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
                        verbose(this,'missJ',missedJ)
                        oldPage.contents[i].data('newJ',missedJ);
                    }

                    //newPage.contents[oldPage.contents[i].data('newJ')].css('opacity','0');


                    oldPage.contents[i].animate({},300,function(){
                            oldPage.contents[$(this).data('oldI')] = newPage.contents[$(this).data('newJ')];
                            oldPage.boxes[$(this).data('oldI')].data('context',newPage.boxes[$(this).data('newJ')].data('context'));
                            newPage.contents[$(this).data('newJ')].animate({},300);
                            $(this).remove()

                        }
                    );

                }

                //if(j<newPage.contents.length){
                //    newPage.contents[j].css('opacity',0);
                //    newPage.contents[j].animate({opacity:1},500);
                //}

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