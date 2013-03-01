function pageLink(caption,obj){

    var newElement = $('<a href="#">'+caption+'</a>').addClass('sequenceLink').data('pageLink',obj);

    newElement.mousedown(function(e){

        if(typeof(obj)=='number')
        {

            (new numberPage({
                number:obj
            })).show();

            return false;
        }

        obj.ownPage.show();

        return false;
    });

    return newElement;
}

function deepFlatCopy(o){
    var newObj = {};

    for (fId in o){
        newObj[fId] = o[fId];
    }

    return newObj;
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
    return factors(n).map(function(x){return x.power+1}).reduce(function(a,b){return a*b;});
}

var primePowersN = function (n){
    return factors(n).map(function(x){return x.power}).reduce(function(a,b){return a+b;});
}