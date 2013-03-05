function GridBox(grid,n,m){

    this.privN = n;
    this.privM = m;

    this.grid = grid;

    this.ctnr = document.createElement('div');
    this.ctnr.className = "gridBox"

    //this.ctnr.style.webkitTransformStyle = 'preserve-3d';

    this.W = this.grid.boxW-(2*(this.grid.borderDist));
    this.H = this.grid.boxH-(2*(this.grid.borderDist));

    this.renderBorders(20);

    this.ctnr.style.width =  this.W+'px';
    this.ctnr.style.height = this.H +'px';

    this.ctnr.style.backgroundColor = 'white';

    var that = this;

    this.ctnr.addEventListener('gesturechange', function(event) {
        event.preventDefault();
        if(event.scale>1.05 && !that.grid.unfolded){

           that.grid.unfoldBox(that.I);

        }
        if(event.scale<0.95 && that.grid.unfolded){

            that.grid.foldBox(that.I);

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

GridBox.prototype.privN = undefined;
GridBox.prototype.privM = undefined;

GridBox.prototype.privContent = undefined;

GridBox.prototype.X = 0;
GridBox.prototype.Y = 0;
GridBox.prototype.Z = 0;

GridBox.prototype.styleBorders = function(bW){

    if (!GridBox.prototype.borderImgs)
        GridBox.prototype.borderImgs = prepareCorner(bW, '#d3d3d3', 'rgba(0,0,0,1)', 2, 2,4,15);

    this.borders[0].style.backgroundRepeat = 'repeat-x';
    this.borders[1].style.backgroundRepeat = 'repeat-y';
    this.borders[2].style.backgroundRepeat = 'repeat-x';
    this.borders[3].style.backgroundRepeat = 'repeat-y';

    for(var i = 0;i<4;i++){
        this.corners[i].style.backgroundRepeat = 'no-repeat';

        this.corners[i].style.backgroundImage = 'url('
        +GridBox.prototype.borderImgs[i][0]
        +')';

        this.borders[i].style.backgroundImage = 'url('
            +GridBox.prototype.borderImgs[i][1]
            +')';

        //this.borders[i].style.webkitTransformStyle = 'preserve-3d';
    }
}

GridBox.prototype.renderBorders = function(bW){
    this.borders = [
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div')
    ];

    this.corners = [
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div')
    ];

    for(var i = 0;i<4;i++){
        this.corners[i].style.zIndex = '90';
        this.borders[i].style.zIndex ='90';

        this.corners[i].style.position = 'absolute';
        this.borders[i].style.position = 'absolute';

        this.corners[i].style.backgroundSize = '100% 100%';
        this.borders[i].style.backgroundSize = '100% 100%';
        this.borders[i].style.position = 'absolute';


        if(i%2==0){

            this.borders[i].style.height =bW+'px';
            this.borders[i].style.left =bW-1+'px';
            this.borders[i].style.width =(this.W-(2*bW)+2)+'px';

            if(i==0){
                this.borders[i].style.top =-1+'px';
            }
            else if(i==2){
                this.borders[i].style.bottom =-1+'px';
            }
        }

        if(i%2==1){

            this.borders[i].style.width =bW+'px';
            this.borders[i].style.top =bW-1+'px';
            this.borders[i].style.height =(this.W-(2*bW)+2)+'px';

            if(i==1){
                this.borders[i].style.right =-1+'px';
            }
            else if(i==3){
                this.borders[i].style.left =-1+'px';
            }
        }


        this.corners[i].style.width = bW + 'px';
        this.corners[i].style.height = bW + 'px';

        if(i<2){
            this.corners[i].style.top =-1+'px';
        }
        else
        {
            this.corners[i].style.bottom =-1+'px';
        }

        if(i==1 || i==2){
            this.corners[i].style.right =-1+'px';
        }
        else
        {
            this.corners[i].style.left =-1+'px';
        }


        this.ctnr.appendChild(this.corners[i]);
        this.ctnr.appendChild(this.borders[i]);
    }

    this.styleBorders(bW)

}

GridBox.prototype.updatePos = function(){
    this.X = this.grid.leftM+(this.grid.boxW*(this.privN))+this.grid.borderDist;
    this.Y = this.grid.topM+(this.grid.boxH*(this.privM))+this.grid.borderDist;

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

    console.log(n)

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

    this.privPendingContent.style.webkitTransitionProperty = '';
    this.privPendingContent.style.webkitFilter = 'opacity(0)';

    this.ctnr.appendChild(this.privPendingContent);

    this.privPendingContent.clientWidth;

    this.privPendingContent.style.webkitTransitionDelay = '700ms';
    this.privPendingContent.style.webkitTransitionProperty = 'webkitFilter';
    this.privPendingContent.style.webkitTransitionDuration = '500ms';

    this.privPendingContent.style.webkitFilter = 'opacity(1)';
}

GridBox.prototype.XAngle = 0;