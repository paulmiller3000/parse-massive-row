# Parse Massive Row
__THIS IS A WORK IN PROGRESS__

Solving for this use case:
* Single-line text file 45,000,000+ characters long
* Single row contains 225,000 records, 200 characters in width, that need to be parsed
* Once parsed, load into database

## Next Steps

* Validate output
* Add sample file
* Add license


## Getting Started
### Basic Setup
* Clone this repository
* Create a Postgres database using the SQL statements in _sample-database.sql_
* Rename .env.example to .env and update the following variables:
	HOST
	USER
	PASSWORD
	DATABASE
	PORT

_This app is configured to use PostgreSQL. To use a different database, install the package of your choice with `npm install` and then update the DATABASE_CLIENT variable accordingly_

### File Configuration
* Rename config-sample.json to config.json and update the following properties:
	file _Path to your file and the file name_
	breakpoint _The width at which to break for a new line. If set to 200, each string of 200 characters will be pushed to a new line._
	removeFirstLine _If set to true, the first line in the parsed object will be removed_
	rowToRemoveFirstCharacters _In my case, every row that began with a certain string were unnecessary. Setting a value here will remove those rows. Set to empty string to skip_

* Run `npm run` to start