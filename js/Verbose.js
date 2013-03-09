
var verbose = function(who){
    if(who.verbose)
    {
        var toConsole = [];

        switch(arguments.length)
        {
            case 2:
                console.log(arguments[1])
                break;
            case 3:
                console.log(arguments[1],arguments[2])
                break;
            case 4:
                console.log(arguments[1],arguments[2],arguments[3])
                break;
            case 5:
                console.log(arguments[1],arguments[2],arguments[3],arguments[4])
                break;
            case 6:
                console.log(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])
                break;
            case 7:
                console.log(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])
                break;
            case 8:
                console.log(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7])
                break;
            default:

        }

    }
}