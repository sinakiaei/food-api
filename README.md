# Food API

This application can be used to retrieve various food options from the database provided by the Canada food webpage.

## Prerequisites

Before starting, ensure that you have a recent version of:

* [Node.js.][CS]

[CS]: https://nodejs.org/en/

* [PostgreSQL][CS]

[CS]: https://www.postgresql.org/

### What is a Nodejs?

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. Node.js is an open-source, cross-platform runtime environment for developing server-side and networking applications.

### What is meant by PostgreSQL?

PostgreSQL (pronounced "post-gress-Q-L") is an open-source relational database management system ( DBMS ) developed by a worldwide team of volunteers. PostgreSQL is not controlled by any corporation or other private entity and the source code is available free of charge.

## Project setup

This project uses PostgresSQL as a database management system and Node.JS as a server-side. In order to run this project, first, you need to restore the information in the 'food_db.dump' to the database.

In order to do that, first, the food database needs to create in the PostgreSQL. This command, on the IDE terminal or windows command line, will create a food database.

```
psql -h localhost -U postgres -c "CREATE DATABASE food;"
```

By using this command all infromation will restore in database. 

```
psql -h localhost -d food -U postgres < food_db.dump
```

The following assumption for the food database considered in PostgreSQL. This information saved in  the '.env' file. If you have a different username or password, you need to tweak the '.env' file.

```
DATABASE_USER='postgres'
DATABASE_PASSWORD='postgres'
DATABASE_SERVER='localhost'
DATABASE_PORT='5432'
DATABASE_NAME='food'
```

After creating food database and restoring all information, we need to install the project by using:

```
npm install
```
### Run 

At the end, you will be able to run the server by using the following command:

```
npm start
```
