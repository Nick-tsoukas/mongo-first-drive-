const chalk = require('chalk');

function connectionMessage() {
    console.log(chalk.green.bold('Connection was successful ======='));
};

module.exports = connectionMessage;