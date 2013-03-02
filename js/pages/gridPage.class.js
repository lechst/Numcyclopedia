function gridPage(conf) {
    Page.call(this,conf);

    this.ctnr.css('width',window.innerWidth);
    this.ctnr.css('height',window.innerHeight);

    this.ctnr.append(this.boxes = $('<div></div>'));


    this.nBox = 6;
    this.mBox = 3;

    this.boxW = 200;
    this.boxH = 200;

    this.borderDist = 4;
    this.cssBorder = 0;

    this.boxes.css('left',(window.innerWidth-this.nBox*this.boxW)/2);
    this.boxes.css('top',(window.innerHeight-this.mBox*this.boxH)/2);
    this.boxes.css('position','absolute');

    for(var j=0; j<this.mBox;j++){
        for(var i=0; i<this.nBox;i++){
            this.boxes.append($('<div></div>')
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
        }
    }

}

gridPage.prototype = new Page();

gridPage.prototype.constructor = gridPage;

gridPage.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('gridPage');

    ctnr.css(
        {

        }
    );
};