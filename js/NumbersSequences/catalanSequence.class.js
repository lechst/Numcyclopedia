function catalanSequence() {
    NumbersSequence.call(this);
}

catalanSequence.prototype = new NumbersSequence();

catalanSequence.prototype.constructor = catalanSequence;

catalanSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Catalan_number";
catalanSequence.prototype.wolfram = "http://mathworld.wolfram.com/CatalanNumber.html";

catalanSequence.prototype.name = 'Catalan';

catalanSequence.prototype.length = Infinity;

catalanSequence.prototype.texExpression = "C_0=1\\\\C_{n+1}=\\frac{2(2n+1)C_n}{n+2}";

catalanSequence.prototype.getN = function (n){

    var x = 1;

    for(var i=0; i<n; i++){
        x = x*2*(2*i+1)/(i+2);
    }

    return x;

}

catalanSequence.prototype.Q = function (n){

    var x = 1;
    var i = 0;

    while(x < n){
        x = x*2*(2*i+1)/(i+2);
        i++;
    }

    if(x == n){
        return true;
    }

    return false;
}