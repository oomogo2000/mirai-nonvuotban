const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ❕ ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ❕ ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.green('[ KASUMI ] » ') + data);
			break;
		case "error":
			console.log(chalk.green('[ KASUMI  ] » ') + data);
			break;
		default:
			console.log(chalk.green(`[ KASUMI  ] » `) + data);
			break;
	}
}
