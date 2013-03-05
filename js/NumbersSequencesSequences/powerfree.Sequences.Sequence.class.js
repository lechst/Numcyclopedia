function powerfreeSequencesSequence() {
    Sequence.call(this);
}

powerfreeSequencesSequence.prototype = new Sequence();

powerfreeSequencesSequence.prototype.constructor = powerfreeSequencesSequence;

powerfreeSequencesSequence.prototype.name = 'powerfree numbers';

powerfreeSequencesSequence.prototype.texExpression = "\\nexists d:\\, d^k|n";

powerfreeSequencesSequence.prototype.length = Infinity;

powerfreeSequencesSequence.prototype.getN = function(n){

    return new powerfreeSequence(n);

};




function powerfreeSequence(n) {

    NumbersSequence.call(this);

    if(!n) {
        throw new Error("n must be specified!")
    }
    this.final = true;
    this.N = n;

}

powerfreeSequence.prototype = new NumbersSequence();

powerfreeSequence.prototype.constructor = powerfreeSequence;

powerfreeSequence.prototype.length = Infinity;

powerfreeSequence.prototype.memberOf = [powerfreeSequencesSequence.prototype];

powerfreeSequence.prototype.final = false;

powerfreeSequence.prototype.texExpressionForN = function(x,n){

    var r = this.N+1;
    var m = this.getN(n);

    var expr = '\\nexists n:\\, n^{'+r+'}|'+m;

    return expr;

}

powerfreeSequence.prototype.__defineGetter__('name',function(){
    var r = this.N + 1;

    return r+"-powerfree";
});

powerfreeSequence.prototype.Q = function (n){

    var r = this.N + 1;
    var a = primeSingature(n);

    for(var i=0; i<a.length; i++){
        if(a[i] >= r){
            return false;
        }
    }

    return true;
}
