const appconfig = require('./config/config.json');
const fs = require('fs');
const knex = require('knex');

const file = appconfig.file;
const breakpoint = appconfig.breakpoint;

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
		fs.readFile(file, (error, data) => {
			if (error) {
				return console.log(error);
			}

			let lines = [];
			let bufferString;
			let jsonObj = [];

			bufferString = data.toString();
			
			// Split string into chunks of the specified width and store in an object			
			lines = bufferString.match(new RegExp('.{1,' + breakpoint + '}', 'g'));
			for (line of lines) {				
				jsonObj.push(line);
			};

			for (obj of jsonObj) {
				console.log(obj);
			}

		})
	} catch (error) {
		console.log(error);
		return('false');
	}
};




parseFile(file, breakpoint);



