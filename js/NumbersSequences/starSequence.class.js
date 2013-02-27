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

    for(var i=0;i<starN;i++)
    {
        pos.x.push(i*2);
        pos.y.push(10-i*3);
    }

    return pos;

};

