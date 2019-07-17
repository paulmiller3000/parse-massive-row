# Parse Single Row
__THIS IS A WORK IN PROGRESS__

Solving for this use case:
* Single-line text file 45,000,000+ characters long
* Single row contains 225,000 records, 200 characters in width, that need to be parsed
* Once parsed, load into database

## Next Steps

* Remove fast-csv
* Utilize fs to iterate and split into object (?)
* May have blank items to remove
* Validate output
* Add knex
* Add environment variables
* Connect to database and load to table