function gridPage(conf) {
    Page.call(this,conf);

    console.log(this.conf.number)

    this.ctnr.css('width',window.innerWidth);
    this.ctnr.css('height',window.innerHeight);

    this.ctnr.append(this.boxes = $('<div></div>'));


    var nBox = 6;
    var mBox = 3;

    var boxW = 200;
    var boxH = 200;

    var borderDist = 4;
    var cssBorder = 0;

    this.boxes.css('left',(window.innerWidth-nBox*boxW)/2);
    this.boxes.css('top',(window.innerHeight-mBox*boxH)/2);
    this.boxes.css('position','absolute');

    for(var i=0; i<nBox;i++){
        for(var j=0; j<mBox;j++){
            this.boxes.append($('<div></div>')
                .css('position','absolute')
                .css('left',(boxW*i)+borderDist)
                .css('top',(boxH*j)+borderDist)
                .css('width',boxW-(2*(borderDist+cssBorder)))
                .css('height',boxH-(2*(borderDist+cssBorder)))
                .css('border-width',cssBorder)
                .css('border-style','solid')
                .css('border-color','gray')
                .css('background-color','white')
                .css('overflow','hidden')
                .css('border-radius',8)
                .append(
                    $('<div></div>')
                        .css('border-image','url(img/inner_shadow.png) 80 80 80 80')
                        .css('width',boxW-(2*(borderDist+cssBorder)))
                        .css('height',boxH-(2*(borderDist+cssBorder)))
                        .css('border-width',6)
                        .css('opacity',0.8)
                )


            );
        }
    }

}

gridPage.prototype = new Page();

gridPage.prototype.constructor = gridPage;

gridPage.prototype.number = undefined;

gridPage.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('gridPage');

    ctnr.css(
        {

        }
    );
};