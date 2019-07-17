const fs = require('fs');
const csv = require('fast-csv');

const parser = csv.parse();
const fileName = './STAXMAST_test';
const fileStream = fs.createReadStream(fileName);

/*fileStream
	.pipe(parser)
	.on('error', error => console.error(error))
	.on('data', data => {
		const singleRow = data;
		const dataArray = singleRow.toString().match(/.{1,200}/g);
		console.log(dataArray);
	})
	.on('end', rowCount => console.log(`Parsed ${rowCount} rows`));
*/

const readFile = () => {
		fileStream
		.pipe(parser)
		.on('error', error => console.error(error))
		.on('data', data => {
			const singleRow = data;
			const dataArray = singleRow.toString().match(/.{1,200}/g);
			console.log(dataArray);
		})
		.on('end', rowCount => console.log(`Parsed ${rowCount} rows`));
}

readFile();



