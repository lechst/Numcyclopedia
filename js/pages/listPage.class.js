//TODO refactoring zeby zamiast listPabe było gridPage

function listPage() {
    Page.call(this);
}

listPage.prototype = new Page();

listPage.prototype.constructor = listPage;

listPage.prototype.sequences = [];

listPage.prototype.tileConf = undefined;

listPage.prototype.ctnrConf = function(ctnr){
    ctnr.addClass('listPage');

    ctnr.css(
        {

        }
    );
};

listPage.prototype.__defineGetter__('modules',function(){

    var modules = [];

    var selector = new selectorModule();

    if(this.sequences.length>0)
    {
        modules.push(selector.build(this.sequences));
    }

    for(var i=2;i<this.N;i++)
    {

        modules.push(tileModule.prototype.build(i,this.tileConf));

    }

    return modules;

});