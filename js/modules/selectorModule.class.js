function selectorModule(conf) {
    Module.call(this,conf);

    this.ctnr.addClass('selectorModule');

    this.tagbox = $('<div></div>').addClass('tagBox');

    for (var tagId in this.conf.sequences){
        var tag = this.conf.sequences[tagId];
        this.tagbox.append($('<div>'+tag.name+'</div>').addClass('tag').data('tag',tag));
    }

    var thisS = this;

    this.tagbox.find('.tag').mousedown(function(e){
        if($(this).hasClass('selected'))
        {
            // $(this).removeClass('selected')
        }
        else
        {
            console.log(thisS);
            thisS.conf.onSelect($(this).data('tag'));
            $(this).parent().find('.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    this.ctnr.append(this.tagbox);
}

selectorModule.prototype = new Module();

selectorModule.prototype.constructor = selectorModule;