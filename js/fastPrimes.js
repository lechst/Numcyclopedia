function fastPrimes(){

}

fastPrimes.QbyteArray = undefined;

fastPrimes.init = function(){
    fastPrimes.Q = function(i){
        return Boolean(fastPrimes.QbyteArray[i>>3]&(1<<(i&7)))
    }
};

fastPrimes.load = function(onload){



    var oReq = new XMLHttpRequest();
    oReq.open("GET", "http://localhost:8080/Numcyclopedia/server/primes.Uint26.Q", true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function (oEvent) {
        var arrayBuffer = oReq.response; // Note: not oReq.responseText
        if (arrayBuffer) {
            fastPrimes.QbyteArray = new Uint8Array(arrayBuffer);
            fastPrimes.init();
            onload();
        }

    };
    oReq.onerror = function() {
        throw new Error('cant download binnaries');
    };



    oReq.send(null);
}



