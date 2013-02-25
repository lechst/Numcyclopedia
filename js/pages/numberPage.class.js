function numberPage() {
    Page.call(this);
}

numberPage.prototype = new Page();

numberPage.prototype.constructor = numberPage;

//TODO zrobić ttuaj strone pojedynczej liczby

numberPage.prototype.__defineGetter__('modules',function(){

    return ['test']
});