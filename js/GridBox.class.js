function GridBox(grid,n,m){

    this.privN = n;
    this.privM = m;

    this.grid = grid;

    this.ctnr = document.createElement('div');
    this.ctnr.className = "gridBox"

    this.ctnr.style.width = this.grid.boxW-(2*(this.grid.borderDist)) +'px';
    this.ctnr.style.height = this.grid.boxH-(2*(this.grid.borderDist)) +'px';

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
        +')';
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

    this.meta = this.newMeta;

    if(this.privContent)
        this.ctnr.removeChild(this.privContent);

    this.privContent = this.privPendingContent;

    this.ctnr.appendChild(this.privContent);
}