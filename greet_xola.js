// const greet = require('./greet');
// console.log(greet('Xola'))

const chalk = require('chalk');
const greet = require('./greet');
const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

var figlet = require('figlet');
var greet = require('./greet');
figlet('Hello Xola!!', function(err, data) {
    if (err){
        console.log('something is not right...');
        console.log.dir(err);
        return;
    }
    console.log(data)
});

