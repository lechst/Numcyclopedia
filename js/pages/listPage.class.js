//TODO refactoring zeby zamiast listPabe było gridPage

function listPage(conf) {
    Page.call(this,conf);

    this.selector = new selectorModule({
        sequences : this.conf.sequences
    });


    this.subModules.push(this.selector);


    this.grid = new gridModule({
        N:this.conf.N,
        tileConf:this.conf.tileConf
    });

    this.subModules.push(this.grid);

}

listPage.prototype = new Page();

listPage.prototype.constructor = listPage;

listPage.prototype.sequences = [];

listPage.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('listPage');

    ctnr.css(
        {

        }
    );
};