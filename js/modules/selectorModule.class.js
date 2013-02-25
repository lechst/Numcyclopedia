function selectorModule() {
    Module.call(this);
}

selectorModule.prototype = new Module();

selectorModule.prototype.constructor = selectorModule;

selectorModule.prototype.build = function(list,onChange,conf){

    var selector = $('<div></div>').addClass('selectorModule');

    var tagbox = $('<div></div>').addClass('tagBox');

    for (var tagId in list){
        var tag = list[tagId];
        tagbox.append($('<div>'+tag.name+'</div>').addClass('tag'));
    }

    tagbox.find('.tag').mousedown(function(){
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

    selector.append(tagbox);

    return selector;
}