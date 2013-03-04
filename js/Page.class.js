function Page(conf){
    Module.call(this,conf);
}

Page.prototype = new Module();

Page.current = {};

Page.prototype.verbose = false;

Page.prototype.constructor = Page;

Page.prototype.render = function(where){

    this.ctnr.addClass('page');

    this.build();

    where.append(this.ctnr);

    return true;

}

Page.prototype.displayed = false;

Page.prototype.show = function(where){
    if(!this.displayed){
        this.displayed = true;

        $('.page').remove();
        Page.current = this;
        this.render($('body'));
        return true;

    }
}