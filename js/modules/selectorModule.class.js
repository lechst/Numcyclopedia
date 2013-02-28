function selectorModule(conf) {
    Module.call(this,conf);

    this.ctnr.addClass('selectorModule');

    this.tagbox = $('<div></div>').addClass('tagBox');


    this.tags= $('<div></div>').addClass('tags')
    if(this.conf.sequence)
    {

        this.tags.css('width',3000);

        this.maintag = $('<div>'+this.conf.sequence.name+'</div>').addClass('mainTag');

        this.tagbox.append(this.maintag);
        this.conf.sequences = [];

        for(var i = 1;i<10;i++)
        {
            this.conf.sequences.push(this.conf.sequence.getN(i));
        }
    }

    //TODO zrobic tu dobra szerokosc


    this.tagbox.append(this.tags);

    for (var tagId in this.conf.sequences){
        var tag = this.conf.sequences[tagId];
        this.tags.append($('<div>'+tag.name+'</div>').append(pageLink('(?)',tag)).addClass('tag').data('tag',tag));
    }

    var thisS = this;

    this.tagbox.find('.tag').mousedown(function(e){
        if($(this).hasClass('selected'))
        {
            // $(this).removeClass('selected')
        }
        else
        {
            thisS.conf.onSelect($(this).data('tag'));
            $(this).parent().find('.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    this.ctnr.append(this.tagbox);
}

selectorModule.prototype = new Module();

selectorModule.prototype.constructor = selectorModule;