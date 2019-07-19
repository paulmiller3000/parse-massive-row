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
				
				// Remove unnecessary lines as specified in config
				if ( lineLength > 0 && ( (line.substring(0, rowToRemoveFirstCharacters.length) !== rowToRemoveFirstCharacters) ||  rowToRemoveFirstCharacters.length === 0) ) {
					fileString.push(line);
				}				
			};

			// Remove first line if specifiied in config
			if (removeFirstLine) {
				fileString.shift();
			}

			// Insert to database
			const insertData = (dataArray) => {
			  return new Promise( (resolve, reject) => {
			    const data = dataArray.map(x => {
			      return {
			          file_line: x.line
			      };
			    });

			    let insertedRows;

			    db.insert(data)
			      .into('file_import')  
			      .then((result) => {
			        insertedRows = result.rowCount;
			        resolve(insertedRows);
			      })
			  });
			}

			const dbLoad = (b) => {
			  insertData(b).then((result) => {
			    console.log(`${result} rows inserted.`);
			    process.exit(0);
			  })
			}

			dbLoad(fileString);
		});
	} catch (error) {
		console.log(error);
		return('false');
	}
};

parseFile(file, breakpoint);