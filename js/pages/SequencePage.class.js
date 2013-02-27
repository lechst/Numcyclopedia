function sequencePage(conf) {
    Page.call(this,conf);

    console.log(conf);

}

sequencePage.prototype = new Page();

sequencePage.prototype.constructor = sequencePage;

sequencePage.prototype.sequence = undefined;

listPage.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('sequencePage');

    ctnr.css(
        {

        }
    );
};