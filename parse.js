const appconfig = require('./config/config.json');
const fs = require('fs');
const knex = require('knex');

const file = appconfig.file;
const breakpoint = appconfig.breakpoint;
const removeFirstLine = appconfig.removeFirstLine;
const rowToRemoveFirstCharacters = appconfig.rowToRemoveFirstCharacters;

const db = knex({
	client: process.env.DATABASE_CLIENT,
	connection: {
		host : process.env.HOST,
		user : process.env.USER,
		password : process.env.PASSWORD,
		database : process.env.DATABASE
	}
});

const parseFile = (file, breakpoint) => {
	try {
		// First, open the file to read
		fs.readFile(file, (error, data) => {
			if (error) {
				return console.log(error);
			}

			let lines = [];
			let bufferString;
			let fileString = [];

			// Break file into array where the single line is broken at the specified breakpoint into multiple lines
			bufferString = data.toString();
			lines = bufferString.match(new RegExp('.{1,' + breakpoint + '}', 'g'));

			for (line of lines) {
				lineLength = line.trim().length;
				

				if ( lineLength > 0 && ( (line.substring(0, rowToRemoveFirstCharacters.length) !== rowToRemoveFirstCharacters) ||  rowToRemoveFirstCharacters.length === 0) ) {
					fileString.push(line);
				}				
			};

			if (removeFirstLine) {
				fileString.shift();
			}

			console.log(fileString.length);


		})
	} catch (error) {
		console.log(error);
		return('false');
	}
};




parseFile(file, breakpoint);