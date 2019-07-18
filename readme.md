# Parse Single Row
__THIS IS A WORK IN PROGRESS__

Solving for this use case:
* Single-line text file 45,000,000+ characters long
* Single row contains 225,000 records, 200 characters in width, that need to be parsed
* Once parsed, load into database

## Next Steps

* Remove blank items
* Validate output
* Connect to database and load to table
* Add sample database create script
* Add sample file
* Add license


## Getting Started
* Clone this repository
* Create a Postgres database using the SQL statements in _sample-database.sql_
* Rename .env.example to .env and replace the following variables:
	HOST
	USER
	PASSWORD
	DATABASE
	PORT
* Run `npm run` to start

Note: This app is configured to use PostgreSQL. To use a different database, install the package of your choice with `npm install` and then update the DATABASE_CLIENT variable in .env accordingly