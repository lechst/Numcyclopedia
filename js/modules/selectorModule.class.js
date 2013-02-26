function selectorModule() {
    Module.call(this);

    this.ctnr.addClass('selectorModule');

    this.tagbox = $('<div></div>').addClass('tagBox');

    for (var tagId in this.conf.sequences){
        var tag = this.conf.sequences[tagId];
        this.tagbox.append($('<div>'+tag.name+'</div>').addClass('tag'));
    }

    this.tagbox.find('.tag').mousedown(function(){
        if($(this).hasClass('selected'))
        {
            // $(this).removeClass('selected')
        }
        else
        {
            $(this).parent().find('.selected').removeClass('selected');
            $(this).addClass('selected');



        }
    });

    this.ctnr.append(this.tagbox);
}

selectorModule.prototype = new Module();

selectorModule.prototype.constructor = selectorModule;