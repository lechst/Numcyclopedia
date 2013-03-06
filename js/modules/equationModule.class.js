function equationModule(conf,expression) {

    Module.call(this,conf);

    this.expression = expression;

    var eq = $('<div style="color:#444 !important;">$$'+expression+'$$</div>');
    var eqE = eq[0];
    equationModule.sandbox.append(eq);
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,eqE]);
    this.ctnr.append(eq);
}



equationModule.prototype = new Module();

equationModule.prototype.constructor = equationModule;

equationModule.prototype.ctnrClassName = "equationModule";

equationModule.sandbox = $('<div id="mathSandbox"></div>');

equationModule.sandbox.css('position','fixed');
equationModule.sandbox.css('top','0');
equationModule.sandbox.css('right','-100%');
equationModule.sandbox.css('background-color','green');
equationModule.sandbox.css('z-index','1000');

$('body').append(equationModule.sandbox);