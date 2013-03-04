function pageLink(caption,obj,context){

    var newElement = $('<a href="#">'+caption+'</a>').addClass('sequenceLink').data('pageLink',obj);


    var event = function(e){

        if(typeof(obj)=='number')
        {
            window.location.hash = "#num"+obj;
            (new gridNumberPage({
                obj:obj,
                context:context
            })).show();

            return false;
        }

        obj.ownPage.show();

        return false;
    };

    newElement.mousedown(event);

    newElement[0].ontouchstart = event;

    return newElement;
}

function deepFlatCopy(o){
    var newObj = {};

    for (fId in o){
        newObj[fId] = o[fId];
    }

    return newObj;
}

function flatCompare(a,b){
    var newObj = {};

    if(a.length!= b.length)
        return false

    for (fId in a){
        if(a[fId] != b[fId])
            return false;
    }

    return true;
}

factors = function (n){

    var factorsArr = [];

    if (n==0){
        throw new Error("cant factorize 0");
        return false;
    }

    if (n==1){
        return [{prime:1,power:1}];
    }
    var i = 2;
    while (!primesSequence.prototype.Q(n)){

        if(n%i==0){

            factorsArr.push({prime:i,power:1});

            n=n/i;

        }
        else
        {
            i++;
        }
    }
    factorsArr.push({prime:n,power:1});

    return factorsArr.reduceRight(function(a,b){

        if(a.length>0)
        {
            if(a[0].prime == b.prime)
            {
                a[0].power++;
                return a;
            }
            else
            {
                return [b].concat(a);
            }
        }
        else
        {
            return [b];
        }
    },[]);

}

var primeSingature = function (n){
    return factors(n).map(function(x){return x.power}).sort();
}

var divisorsN = function (n){
    if (n == 1){
        return 1;
    } else {
        return factors(n).map(function(x){return x.power+1}).reduce(function(a,b){return a*b;});
    }
}

var primePowersN = function (n){
    return factors(n).map(function(x){return x.power}).reduce(function(a,b){return a+b;});
}

var divisorFunction = function(n){
    var a = factors(n);
    var x = 1;

    for(var i=0; i<a.length; i++){
        x = x*(Math.pow(a[i].prime,a[i].power+1)-1)/(a[i].prime-1);
    }

    return x;
}

var divisors = function(n){
    var a = factors(n);
    var d = [1];

    for(var i=0; i<a.length; i++){
        var l = d.length;

        for(var j=0; j<l; j++){
            for(var k=1; k<(a[i].power+1); k++){
                d.push(d[j]*Math.pow(a[i].prime,k));
            }
        }
    }

    d = d.sort(function(a,b){return a-b});

    return d;
}

var digits = function(n){

    var a = [];
    var x = n.toString();

    for(var i=0; i<x.length; i++){
        a.push(parseInt(x[i]));
    }

    return a;
}

var sumOfDigits = function(n){
    var sum = 0;
    var x = n;

    while(x>0){
        sum = sum + x%10;
        x = Math.floor(x/10);
    }

    return sum;
}