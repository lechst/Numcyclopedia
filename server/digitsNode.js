var digits = function(n){

    var a = [];
    var x = n.toString();

    for(var i=0; i<x.length; i++){
        a.push(parseInt(x[i]));
    }

    return a;
}

module.exports = digits;