function factorsModule() {
    Module.call(this);
}

factorsModule.prototype = new Module();

factorsModule.prototype.constructor = factorsModule;

//TODO ogarnac to zeby bylo w klasie powyzszej, tak zeby to był poprawny modul, ktory ma funkcje build:
function renderFactors(i){

    var factorization = $('<div></div>').addClass('factors');

    factors(i).map(function(f,ii){

        if(ii>0){
            factorization.append(
                $('<div class="seperator"></div>')
            );
        }

        factorization.append(
            $('<div>'+ f.prime+'</div>').addClass('factor').append(
                $('<div>'+ (f.power!=1?f.power:"")+'</div>').addClass('power')
            )
        );

    });

    return factorization;
}
