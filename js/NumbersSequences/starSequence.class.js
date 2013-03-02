function starSequence() {
    NumbersSequence.call(this);
}

starSequence.prototype = new NumbersSequence();

starSequence.prototype.constructor = starSequence;

starSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Star_number";
starSequence.prototype.wolfram = "http://mathworld.wolfram.com/StarNumber.html";

starSequence.prototype.name = 'star';

starSequence.prototype.length = Infinity;

starSequence.prototype.Q = function (n){

    var x = Math.round((Math.sqrt(2*n+1)*Math.sqrt(3)+3)/6);

    if((6*x*(x-1)+1) == n){
        return true;
    }

    return false;
}

starSequence.prototype.getN = function (n){

    var x = 6*n*(n+1)+1;

    return x;
}

//TODO zaimplementowac rysowanie gwiazdki

starSequence.prototype.arrange = function(n){

// n to n-ta liczba w ciągu, czyli w tym przypadku dla n=3 , rysujemy 3-cią star-number

// narazie zwraca to trywialnie pozycje w lini, a ma zwracac pozycje kolejnych punktow, na parzystych
// pozycjach (0,2,4...), znajduja sie wspolrzedne x a na nieparzystych y;

// pozycje mogą być ujemne, nie musisz tez przejmować się odleglosciami i skalą, ona jest dobierana automatycznie na nastepnym etapie,
// możesz to sprawdzić lekko modyfikując to co jest poniżej.

    var pos = {};
    pos.x = [];
    pos.y = [];

    var starN = this.getN(n);

    //środkowy rząd
    for(var i=0; i<(2*n+1); i++){
        pos.x.push(-n+i);
        pos.y.push(0);
    }

    //szerokie rzędy
    for(var i=0; i<n; i++){
        for(var j=0; j<(2*n+2+i); j++){
            pos.x.push(-(2*n+1+i)/2+j);
            pos.y.push((i+1)*Math.sqrt(3)/2);
            pos.x.push(-(2*n+1+i)/2+j);
            pos.y.push(-(i+1)*Math.sqrt(3)/2);
        }
    }

    //wąskie rzędy
    for(var i=0; i<n; i++){
        for(var j=(n-i); j>0; j--){
            pos.x.push(-(n-i+1)/2+j);
            pos.y.push((n+1+i)*Math.sqrt(3)/2);
            pos.x.push(-(n-i+1)/2+j);
            pos.y.push(-(n+1+i)*Math.sqrt(3)/2);
        }
    }

    return pos;

};

// poniżej przykład opcji, jeśli się ich nie poda to jest tak jak wcześniej

//starSequence.prototype.arrange.minDistance = 0.5;
//starSequence.prototype.arrange.fill = true;

