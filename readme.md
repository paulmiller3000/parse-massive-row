![License Badge](https://img.shields.io/github/license/paulmiller3000/parse-massive-row.svg?style=plastic)
# Parse Massive Row
Solves for this use case:

* Single-line text file 45,000,000+ characters long
* Single row contains 225,000 records, 200 characters in width, that needed to be parsed
* Once parsed, load into database

## Getting Started
### Basic Setup
* Clone this repository
* Create a Postgres database using the SQL statements in _sample-database.sql_
* Rename .env.example to .env and update the following variables:
    * HOST
    * USER
    * PASSWORD
    * DATABASE
    * PORT

_This app is configured to use PostgreSQL. To use a different database, install the package of your choice with `npm install` and then update the DATABASE_CLIENT variable accordingly_

### File Configuration
* Rename config-sample.json to config.json and update the following properties:
	* file _Path to your file and the file name_
	* breakpoint _The width at which to break for a new line. If set to 200, each string of 200 characters will be pushed to a new line._
	* removeFirstLine _If set to true, the first line in the parsed object will be removed_
	* rowToRemoveFirstCharacters _In my case, every row that began with a certain string were unnecessary. Setting a value here will remove those rows. Set to empty string to skip_

* Run `npm run` to start

## Demo
Let's say you have a single-row text file thousands or hundreds of thousands of columns wide (yes, it happens) you need to parse into distinct rows. And perhaps that file has a header "row" you want to eliminate:

![File Start](../assets/parse-massive-row-file-start.png?raw=true)

The data you actually need starts several hundred columns in and is 200 characters in length. In this case, the first desired string starts at position 824:

![Desired String](../assets/parse-massive-row-desired-string.png?raw=true)

Loading your file and set the parameters. For this demo, the defaults are to:
	
	1. Load rows in lengths of 200 characters
	2. Skip blank rows
	3. Skip rows where the string begins with 000000000

Running `npm start` on this example will report back that two rows have been loaded:

![Program Execution](../assets/parse-massive-row-npm-start.png?raw=true)

Querying the database from a GUI or the console will return the following:

![Database Results](../assets/parse-massive-row-database-load-results.png?raw=true)

Commence rejoicing!

## Future Enhancements
You may have noticed the __file_transform__ table in the sample database, which is not used in this solution. I may enhance this to further parse the file via database calls, as that was part of my original use case.