function Page(conf){
    Module.call(this,conf);
}

Page.prototype = new Module();

Page.prototype.constructor = Page;

Page.prototype.render = function(where){

    this.ctnr.addClass('page');

    this.build();

    where.append(this.ctnr);

    return true;

}

Page.prototype.show = function(where){

    $('.page').remove();
    console.log(this)
    this.render($('body'));
    return true;

}