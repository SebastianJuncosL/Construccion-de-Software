
// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('$', function (err, files){
//     if (err) console.log('Error ', err);
//     else console.log('Result ', files);
// }) 

// Use PascaLcase for classes

// const Logger = require('./logger');
// const logger = new Logger();

// // Register a listener        Put an arrow instead of typing: function(args){}
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });

// logger.log('message');

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Hello World')
        res.end();
    }

    if (req.url == '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');