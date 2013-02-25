function Page(){}

Page.prototype.render = function(where){

    var pageCtnr = $("<div></div>").addClass('page');

    where.append(pageCtnr);

    this.modules.map(function(m){
        pageCtnr.append(m);
    });

    this.ctnrConf(pageCtnr)

    return true;

}