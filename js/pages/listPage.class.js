//TODO refactoring zeby zamiast listPabe było gridPage

function listPage(conf) {
    Page.call(this,conf);

    this.grid = new gridModule({
        N:this.conf.N,
        tileConf:this.conf.tileConf
    });

    var thisP = this;

    this.selectorA = new selectorModule({
        sequences : this.conf.sequences,
        onSelect : function(tag){
            thisP.grid.showOnly(tag);
        }
    });

    this.selectorB = new selectorModule({
        sequences : this.conf.sequences,
        onSelect : function(tag){
            thisP.grid.highlightOnly(tag);
        }
    });

    this.subModules.push(this.selectorA);
    this.subModules.push(this.selectorB);

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