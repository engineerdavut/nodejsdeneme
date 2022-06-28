var log = {
        information: function(info) {
            console.log('information: ' + info);
        },
        fault: function(fault) {
            console.log('fault: ' + fault);
        }
    }
    // logun nodejs1 de kullanilması icin modul olması gerekir  asagidaki kod. 
module.exports = log