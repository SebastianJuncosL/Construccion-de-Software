const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

// Pascal case
class Logger extends EventEmitter {
    // for a function inside a class you don't need the keword function
    // you just put name(parameters){content}
    log(message) {
        // Send an http request
        console.log(message);

        // Raise an event            || Event argument 
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}

module.exports = Logger;
