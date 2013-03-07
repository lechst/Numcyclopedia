function GridBox(grid,n,m){

    this.privN = n;
    this.privM = m;

    this.grid = grid;

    this.ctnr = document.createElement('div');
    this.ctnr.className = "gridBox"

    this.ctnr.style.overflow = "hidden";

    //this.ctnr.style.webkitTransformStyle = 'preserve-3d';

    this.W = this.grid.boxW-(2*(this.grid.borderDist));
    this.H = this.grid.boxH-(2*(this.grid.borderDist));

    this.bg = document.createElement('div');
    this.bg.style.width =  this.W+'px';
    this.bg.style.height = this.H +'px';
    this.bg.style.position = 'absolute';
    this.bg.style.top = '0px';
    this.bg.style.left = '0px';
    this.bgColor = '#a0a0a0';
    this.bg.style.backgroundColor = this.bgColor;
    this.bg.style.webkitTransformOrigin =  "0 0";

    this.live = true;

    this.bg.style.zIndex = '-5';

    this.ctnr.appendChild(this.bg);

    this.ctnr.style.width =  this.W+'px';
    this.ctnr.style.height = this.H +'px';

    this.privBgW = this.W;
    this.privBgH = this.H;
    this.privBgX = 0;
    this.privBgY = 0;

    this.renderBorders(20);
    this.bordersUpdate();

    var that = this;

    this.ctnr.addEventListener('mousedown', function(e) {
    if(that.live){

        for(var bId in that.buttons){
            var button = that.buttons[bId];
            var x = (e.x-that.X)/that.W;
            var y = (e.y-that.Y)/that.H;

            if(x>button.p[0] && y>button.p[1] && x<(button.p[0]+button.p[2]) && y<(button.p[1]+button.p[3]))
            {
                button.event();
            }

        }
    }
        return false;
    }, true);

    this.ctnr.addEventListener('touchstart', function(e) {
        if(that.live){
            for(var bId in that.buttons){
                var button = that.buttons[bId];
                if (button.touch){

                    var x = (e.pageX-that.X)/that.W;
                    var y = (e.pageY-that.Y)/that.H;

                    if(x>button.p[0] && y>button.p[1] && x<(button.p[0]+button.p[2]) && y<(button.p[1]+button.p[3]))
                    {
                        button.event();
                    }
                }
            }
        }
        return false;
    }, true);

    this.ctnr.addEventListener('gesturechange', function() {
        event.preventDefault();
        if(event.scale>1.05 && !that.grid.unfolded){

           that.grid.unfoldBox(that.I);

        } else if(event.scale<0.95 && that.grid.unfolded){
            that.fold(function(){that.grid.foldBox(that.I)});
        }
    }, false);

    this.grid.boxesCtnr.appendChild(this.ctnr);


    this.privI = this.grid.boxes.push(this)-1;

    this.newContentReset();

    this.updatePos();
}

GridBox.prototype.meta = {};
GridBox.prototype.newMeta = {};

GridBox.prototype.privI = undefined;

GridBox.prototype.buttons = [];

GridBox.prototype.contentsArray = undefined;

GridBox.prototype.privN = undefined;
GridBox.prototype.privM = undefined;

GridBox.prototype.privContent = undefined;

GridBox.prototype.privBgW = undefined;
GridBox.prototype.privBgH = undefined;

GridBox.prototype.privBgX = 0;
GridBox.prototype.privBgY = 0;

GridBox.prototype.bgTransitionTime = 1200;

GridBox.prototype.X = 0;
GridBox.prototype.Y = 0;
GridBox.prototype.Z = 0;

GridBox.prototype.__defineGetter__('bgW',function(){
    return this.privBgW;
});

GridBox.prototype.__defineGetter__('bgH',function(){
    return this.privBgH;
});

GridBox.prototype.__defineGetter__('bgX',function(){
    return this.privBgX;
});

GridBox.prototype.__defineGetter__('bgY',function(){
    return this.privBgY;
});

GridBox.prototype.__defineSetter__('bgW',function(newBgW){
    this.privBgW = newBgW;
    this.updateBg();
    this.bordersUpdate();
});

GridBox.prototype.__defineSetter__('bgH',function(newBgH){
    this.privBgH = newBgH;
    this.updateBg();
    this.bordersUpdate();
});

GridBox.prototype.__defineSetter__('bgX',function(newBgX){
    this.privBgX = newBgX;
    this.updateBg();
    this.bordersUpdate();
});

GridBox.prototype.__defineSetter__('bgY',function(newBgY){
    this.privBgY = newBgY;
    this.updateBg();
    this.bordersUpdate();
});

GridBox.prototype.updateBg = function(){
    this.bg.style.webkitTransform = 'translate3D('
        +this.privBgX+'px,'
        +this.privBgY+'px,'
        +0+'px'
        +') scale('+(this.privBgW/this.W)+','+(this.privBgH/this.H)+')';
}

GridBox.prototype.styleBorders = function(bW){



    this.bW = bW;

    if (!GridBox.prototype.borderImgs)
        GridBox.prototype.borderImgs = prepareCorner(bW, '#d3d3d3', 'rgba(0,0,0,1)', 2, 2,4,15);

    this.borders[0].style.backgroundRepeat = 'repeat-x';
    this.borders[1].style.backgroundRepeat = 'repeat-y';
    this.borders[2].style.backgroundRepeat = 'repeat-x';
    this.borders[3].style.backgroundRepeat = 'repeat-y';

    for(var i = 0;i<4;i++){

        this.corners[i].style.webkitTransformOrigin =  "0 0";
        this.borders[i].style.webkitTransformOrigin =  "0 0";

        this.corners[i].style.webkitTransitionProperty = 'webkitTransform';
        this.corners[i].style.webkitTransitionDuration = this.bgTransitionTime+'ms';
        this.corners[i].style.webkitTransitionDelay = '0ms';

        this.borders[i].style.webkitTransitionProperty = 'webkitTransform';
        this.borders[i].style.webkitTransitionDuration = this.bgTransitionTime+'ms';
        this.borders[i].style.webkitTransitionDelay = '0ms';

        this.corners[i].style.zIndex = '90';
        this.borders[i].style.zIndex ='90';

        this.corners[i].style.position = 'absolute';
        this.borders[i].style.position = 'absolute';

        this.corners[i].style.backgroundSize = '100% 100%';
        this.borders[i].style.backgroundSize = '100% 100%';

        this.corners[i].style.backgroundRepeat = 'no-repeat';

        this.corners[i].style.backgroundImage = 'url('
        +GridBox.prototype.borderImgs[i][0]
        +')';

        this.borders[i].style.backgroundImage = 'url('
            +GridBox.prototype.borderImgs[i][1]
            +')';

        //this.borders[i].style.webkitTransformStyle = 'preserve-3d';
    }

    for(var i = 0;i<4;i++){


        if(i%2==0){

            this.borders[i].style.height =bW+'px';
            this.borders[i].style.width =(this.W-(2*bW)+2)+'px';

        }

        if(i%2==1){

            this.borders[i].style.width =bW+'px';
            this.borders[i].style.height =(this.W-(2*bW)+2)+'px';

        }


        this.corners[i].style.width = bW + 'px';
        this.corners[i].style.height = bW + 'px';

    }
}

GridBox.prototype.bordersUpdate = function(){

    var bW = this.bW;

    for(var i = 0;i<4;i++){


        if(i%2==0){

            this.borders[i].Tleft = (this.bgX+bW-1)+'px';

            if(i==0){
                this.borders[i].Ttop =-1+'px';
            }
            else if(i==2){
                this.borders[i].Ttop =(this.bgH-bW+1)+'px';
            }
        }

        if(i%2==1){

            this.borders[i].Ttop =(this.bgY+bW-1)+'px';

            if(i==1){
                this.borders[i].Tleft =(this.bgX+this.bgW-bW+1)+'px';
            }
            else if(i==3){
                this.borders[i].Tleft =(this.bgX-1)+'px';
            }
        }

        if(i<2){
            this.corners[i].Ttop =(this.bgY-1)+'px';
        }
        else
        {
            this.corners[i].Ttop =(this.bgY+this.bgH-bW+1)+'px';
        }

        if(i==1 || i==2){
            this.corners[i].Tleft =(this.bgX+this.bgW-bW+1)+'px';
        }
        else
        {
            this.corners[i].Tleft =(this.bgX-1)+'px';
        }

    }

    for(var i = 0;i<4;i++){


        if(i%2==0){
            this.borders[i].Twidth =(this.bgW-(2*bW)+2);
        }

        if(i%2==1){
            this.borders[i].Theight =(this.bgH-(2*bW)+2);
        }

    }

}

GridBox.prototype.renderBorders = function(bW){
    this.borders = [
        new transformableDiv(document.createElement('div')),
        new transformableDiv(document.createElement('div')),
        new transformableDiv(document.createElement('div')),
        new transformableDiv(document.createElement('div'))
    ];

    this.corners = [
        new transformableDiv(document.createElement('div')),
        new transformableDiv(document.createElement('div')),
        new transformableDiv(document.createElement('div')),
        new transformableDiv(document.createElement('div'))
    ];


    for(var i = 0;i<4;i++){
        this.ctnr.appendChild(this.corners[i].element);
        this.ctnr.appendChild(this.borders[i].element);
    }

    this.styleBorders(bW);
}

GridBox.prototype.arrangeArray = function(state){

    var seq = this.meta.sequence;


    var onLeft = Math.floor(this.grid.W/this.W);

    if( this.meta.number <= onLeft )
    {
        onLeft = this.meta.number - 1;
    }

    var onRight = Math.floor(this.grid.W/this.W);

    var j = 0;
    console.log(this.meta.number,this.meta.number-onLeft,this.meta.number+onRight)
    for (var i = this.meta.number-onLeft;i<=this.meta.number+onRight;i++)
    {
        if(i!=this.meta.number)
        {
            this.contentsArray[j].style.webkitTransitionDuration = this.bgTransitionTime/2+'ms';

            this.contentsArray[j].style.webkitTransitionProperty = "webkitTransform"

            if(state == undefined)
            {
                this.contentsArray[j].style.webkitTransitionDelay = 200+'ms';
                this.contentsArray[j].style.webkitTransform = 'translate3D('
                    +(this.W*(i-this.meta.number))+'px,'
                    +0+'px,'
                    +0+'px'
                    +')';
            }
            else if(state = "under")
            {
                this.contentsArray[j].style.webkitTransitionDelay = 0+'ms';
                this.contentsArray[j].style.webkitTransform = 'translate3D('
                    +0+'px,'
                    +0+'px,'
                    +0+'px'
                    +')';
            }
            j++;
        }
    }

}

GridBox.prototype.destroyArray = function(){
    for (var i = 0;i<this.contentsArray.length;i++)
    {
        this.ctnr.removeChild(this.contentsArray[i]);
    }
    this.contentsArray = [];
}

GridBox.prototype.buildArray = function(){

    var seq = this.meta.sequence;


    var onLeft = Math.floor(this.grid.W/this.W);

    if( this.meta.number <= onLeft )
    {
        onLeft = this.meta.number - 1;
    }

    var onRight = Math.floor(this.grid.W/this.W);

    var left = true;

    this.contentsArray = [];

    for (var i = this.meta.number-onLeft;i<=this.meta.number+onRight;i++)
    {
        if(i!=this.meta.number)
        {
        var newArrayMember = document.createElement('div');
        this.contentsArray.push(newArrayMember);


        var qn = i;

        var mM = new memberModule({},qn,seq);

        var sNM = new sequenceNumModule({maxW:this.boxW*0.8,maxH:this.boxH*0.65},qn,seq);

        mM.build();
        sNM.build();

        newArrayMember.appendChild(mM.ctnr[0]);
        newArrayMember.appendChild(sNM.ctnr[0]);

        newArrayMember.style.width = this.W+'px';
        newArrayMember.style.height = this.H+'px';
        newArrayMember.className = "content array";
        this.ctnr.appendChild(newArrayMember);

        newArrayMember.style.webkitTransform = 'translate3D('
            //+(left?(-this.grid.W):this.grid.W)+'px,'
            +0+'px,'
            +0+'px,'
            +0+'px'
            +')';
        }
        else
        {
            var left = false;
        }
    }



   // fake = this.privContent.clientWidth+3;

 //   this.privContent.style.webkitTransitionDelay = '0ms';
 //   this.privContent.style.webkitTransitionProperty = 'webkitTransform';
//    this.privContent.style.webkitTransitionDuration = '600ms';
//    this.privContent.style.webkitTransform = 'translate3D('

}


GridBox.prototype.unfold = function(){

    this.ctnr.style.overflow = "visible";

    this.bg.style.webkitTransitionProperty = '';
    this.bg.style.backgroundColor = this.bgColor;

    var a = this.bg.clientWidth+'b';

    this.bg.style.webkitTransitionProperty = 'webkitTransform';
    this.bg.style.webkitTransitionDuration = this.bgTransitionTime+'ms';
    this.bg.style.webkitTransitionDelay = '0ms';

    var that = this;

    that.arrangeArray();

    this.bg.addEventListener( 'webkitTransitionEnd',function(e){


        e.target.removeEventListener( 'webkitTransitionEnd',arguments.callee,false);
    });


    this.bgW = 2*this.grid.W;
    this.bgX = -this.grid.W;

};

GridBox.prototype.fold = function(doAfter){

    this.bgW = this.W;
    this.bgX = 0;
    var that = this;

    this.bg.style.webkitTransitionDelay = '200ms';

    this.bg.addEventListener( 'webkitTransitionEnd',function(e){
        doAfter();
        that.ctnr.style.overflow = "hidden";
        that.destroyArray();

        e.target.removeEventListener( 'webkitTransitionEnd',arguments.callee,false);

    });

    that.arrangeArray('under');

    this.updateBg();
    this.bordersUpdate();
};


GridBox.prototype.updatePos = function(X,Y){
    if(X==undefined)
        this.X = this.grid.leftM+(this.grid.boxW*(this.privN))+this.grid.borderDist;
    else
        this.X = X;

    if(Y==undefined)
        this.Y = this.grid.topM+(this.grid.boxH*(this.privM))+this.grid.borderDist;
    else
        this.Y = Y;

    this.ctnr.style.webkitTransform = this.trans;
    return true;
}

GridBox.prototype.__defineGetter__('trans',function(){
    return 'translate3D('
        +this.X+'px,'
        +this.Y+'px,'
        +this.Z+'px'
        +') rotate3d(1,0,0,'+this.XAngle+'deg)';
});

GridBox.prototype.__defineGetter__('n',function(){
    return this.privN;
});

GridBox.prototype.__defineGetter__('m',function(){
    return this.privM;
});

GridBox.prototype.__defineGetter__('I',function(){
    return this.privI;
});

GridBox.prototype.__defineSetter__('n',function(newN){
    this.privN = newN;
    this.updatePos();
});

GridBox.prototype.__defineSetter__('m',function(newM){
    this.privM = newM;
    this.updatePos();
});

GridBox.prototype.__defineGetter__('content',function(){
    return this.privContent;
});

GridBox.prototype.__defineSetter__('content',function(newContent){
    this.privContent = newContent;
});

GridBox.prototype.newContentReset = function(){
    this.newMeta = undefined;
    this.privPendingContent = document.createElement('div');
    this.privPendingContent.style.width = this.W+'px';
    this.privPendingContent.style.height = this.H+'px';
    this.privPendingContent.className = "content";
}

GridBox.prototype.newContentAdd = function(module){
    module.build();
    this.privPendingContent.appendChild(module.ctnr[0]);
}

GridBox.prototype.newContentShow = function(){

        if((this.newMeta!=undefined&&this.meta!=undefined) && this.newMeta.sequence == this.meta.sequence)
        {
            this.rollTransition(this.newMeta.number-this.meta.number);
        }
        else
        {
            if((this.newMeta!=undefined&&this.meta!=undefined) &&
                (this.newMeta.sequence!=undefined&&this.meta.sequence!=undefined) &&
                this.newMeta.sequence.partMemberOf.length>0 &&
                this.newMeta.sequence.partMemberOf[0]==this.meta.sequence.partMemberOf[0])
                {
                    //TDODO
                }
            else
                {
                    //TDODO
                }

            this.alphaTransition();
        }

    this.meta = this.newMeta;
    this.privContent = this.privPendingContent;
}
var fake;
GridBox.prototype.rollTransition = function(n){

    if(Math.abs(n)>1)
    {
        n = 2*n/Math.abs(n);
    }

    var movement = -1*n*this.W;

    if(this.privContent){
        this.privContent.style.webkitTransitionProperty = '';
        this.privContent.style.webkitTransform = 'translate3D('
            +0+'px,'
            +0+'px,'
            +0+'px'
            +')';
        fake = this.privContent.clientWidth+3;

        this.privContent.addEventListener( 'webkitTransitionEnd',
            function( event ) {
                event.target.parentNode.removeChild(event.target);
            }, false );

        this.privContent.style.webkitTransitionDelay = '0ms';
        this.privContent.style.webkitTransitionProperty = 'webkitTransform';
        this.privContent.style.webkitTransitionDuration = '600ms';
        this.privContent.style.webkitTransform = 'translate3D('
            +movement+'px,'
            +0+'px,'
            +0+'px'
            +')';

    }

    this.ctnr.appendChild(this.privPendingContent);

    this.privPendingContent.style.webkitTransform = 'translate3D('
        +(-movement)+'px,'
        +0+'px,'
        +0+'px'
        +')';

    this.privPendingContent.clientWidth;

    this.privPendingContent.style.webkitTransitionProperty = 'webkitTransform';
    this.privPendingContent.style.webkitTransitionDuration = '600ms';
    this.privPendingContent.style.webkitTransform = 'translate3D('
        +0+'px,'
        +0+'px,'
        +0+'px'
        +')';


}

GridBox.prototype.trivialTransition = function(){

    if(this.privContent)
        this.ctnr.removeChild(this.privContent);

    this.ctnr.appendChild(this.privPendingContent);
}

GridBox.prototype.alphaTransition = function(){

    this.bg.style.backgroundColor = "white";

    var that = this;

    if(this.privContent){
        this.privContent.style.webkitTransitionProperty = '';
        this.privContent.style.webkitFilter = 'opacity(1)';

        this.privContent.clientWidth;

        this.privContent.addEventListener( 'webkitTransitionEnd',
            function( event ) {
                event.target.parentNode.removeChild(event.target);
            }, false );

        this.privContent.style.webkitTransitionDelay = '0ms';
        this.privContent.style.webkitTransitionProperty = 'webkitFilter';
        this.privContent.style.webkitTransitionDuration = '500ms';


        this.privContent.style.webkitFilter = 'opacity(0)';
        //this.ctnr.removeChild(this.privContent);



    }



    this.ctnr.appendChild(this.privPendingContent);

    this.privPendingContent.style.webkitTransitionProperty = '';
    this.privPendingContent.style.webkitFilter = 'opacity(0)';



    var a = this.privPendingContent.clientWidth+'b';

    this.privPendingContent.addEventListener( 'webkitTransitionEnd',
        function( e ) {
            console.log('test');
            that.bg.style.backgroundColor = that.bgColor;

            e.target.removeEventListener( 'webkitTransitionEnd',arguments.callee,false);
        }, false );

    this.privPendingContent.style.webkitTransitionDelay = '700ms';
    this.privPendingContent.style.webkitTransitionProperty = 'webkitFilter';
    this.privPendingContent.style.webkitTransitionDuration = '500ms';

    this.privPendingContent.style.webkitFilter = 'opacity(1)';


}

GridBox.prototype.XAngle = 0;