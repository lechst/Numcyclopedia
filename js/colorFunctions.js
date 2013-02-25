function coldPrimeCF(i){

    if(divisorsN(i)==2){
        h=180;
    }
    else
    {
        // var h = 160-(Math.pow((divisorsN(i)-2)/10,0.25)*10)*10;
        var h = 160-(Math.pow((primePowersN(i)-0)/10,1)*10)*20;

        if(h<0)
            h = 0;

    }

    var s  = 0.50;
    var l = 0.50;

    return 'hsl('+h+','+(s*100)+'%,'+(l*100)+'%)';
}

function moduloRainbow(base){
    return function (i){

        var h = (360/base) * (i%base);

        var s  = 0.50;
        var l = 0.50;

        return 'hsl('+h+','+(s*100)+'%,'+(l*100)+'%)';

    }
}