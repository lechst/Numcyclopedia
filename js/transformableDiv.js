function transformableDiv(element){

    this.element = element;
    this.styleT = {};
    this.style = element.style;
    this.privLeft = 0;
    this.privTop = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.privWidth = undefined;
    this.privHeight = undefined;
    this.trans = '';

}

transformableDiv.prototype.__defineSetter__('Tleft',function(left){
    this.privLeft = left;
    this.uptdT();
});
transformableDiv.prototype.__defineSetter__('Ttop',function(top){
    this.privTop = top;
    this.uptdT();
});

transformableDiv.prototype.__defineSetter__('Twidth',function(width){
    this.privWidth = width;
    if(this.element.offsetWidth!=0)
        this.scaleX = this.privWidth/this.element.offsetWidth;
    this.uptdT();
});
transformableDiv.prototype.__defineSetter__('Theight',function(height){
    this.privHeight = height;
    if(this.element.offsetHeight!=0)
        this.scaleY = this.privHeight/this.element.offsetHeight;
    this.uptdT();
});

transformableDiv.prototype.uptdT = function(){
    this.trans = 'translate3D('
            +this.privLeft+","
            +this.privTop+","
            +0
            +')';

    if(this.scaleX!=1 || this.scaleY!=1)
    {
        this.trans +=' scale('
            +this.scaleX+','
            +this.scaleY
            +')';
    }

    this.element.style.webkitTransform = this.trans;
    //console.log('a',this.trans,this.element.style.webkitTransform)
}