
// Logging singleton

var winston = require("winston");
var __logger = null;
 
exports.Logger = function(){
    if(__logger === null)
    {
        __logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({ level: 'debug' }),
                new (winston.transports.File)({ filename: 'omphalokepsis.log', level: 'debug' })
            ]
        });
    }
    return __logger;
}