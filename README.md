# Food API

This application can be used to retrieve various food options from the database provided by the Canada food webpage.

## Prerequisites

Before starting, ensure that you have a recent version of:

* [Node.js.](https://nodejs.org/en/)
* [PostgreSQL](https://www.postgresql.org/)

## Project setup

Clone the repository
```
git clone https://github.com/sinakiaei/food-api.git
```

Navigate into the directory
```
cd food-api/
```

Create the database
```
psql -h localhost -U postgres -c "CREATE DATABASE food;"
```

Load data into the database
```
psql -h localhost -d food -U postgres < food_db.dump
```

Edit `.env` in the root directory to provide database connection information. Here is an example:
```
DATABASE_USER='postgres'
DATABASE_PASSWORD='postgres'
DATABASE_SERVER='localhost'
DATABASE_PORT='5432'
DATABASE_NAME='food'
```

Install dependencies from package.json
```
npm install
``` 

Run the server
```
npm start
```

## API Endpoints
### Initial Vaules
* URL: /api/initial-values
* Method: HTTP GET
* Parameters: N/A
* Success Reponse
  * Code: HTTP 200
  * Content: ```{
"genders": ["Male", "Female"],
"ages": ["2 to 3", "4 to 8", "9 to 13", "14 to 18", "19 to 30", "31 to 50", "51 to 70", "71+"]
}```
* Error Response
  * Code: HTTP 500
  * Content: throws an exception based on the nature of the error.
### Recommentations
* URL: /api/recommendations
* Method: HTTP GET
* Parameters
  * ```age={"2 to 3", "4 to 8", "9 to 13", "14 to 18", "19 to 30", "31 to 50", "51 to 70", "71+"}```
  * ```gender={Male, Female}```
* Success Reponse
  * Code: HTTP 200
  * Content: returns food servings from different food groups and related recommendations based on age and gender, for example: ```{"servings": [...], "directions": [...]}```
* Error Response
  * Code: HTTP 500
  * Content: throws an exception based on the nature of the error.
