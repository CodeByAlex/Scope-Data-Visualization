# Scope

Scope is a security breach visualization tool that gives you insight into cyber crime around the world.
 
  * Uses data from the Veris database of breach information
  * View graphical representations of breach data by country
  * View graphical representations of breach data by company
  * Filter, sort, and view company data in a table that includes pagination
  
  ![alt tag](https://github.com/CodeByAlex/Data-Breach-Visualization/blob/master/images/home-screen.png)
  ![alt tag](https://github.com/CodeByAlex/Data-Breach-Visualization/blob/master/images/global-dash.png)
  ![alt tag](https://github.com/CodeByAlex/Data-Breach-Visualization/blob/master/images/company-dash.png)
 
## Why Scope?

  - If you are interested in security and enjoy looking at graph visualizations of data, this is the project for you.

## Technology stack

Front end
 * [Angular](https://angular.io/)

Back end 
 * [Java](https://www.java.com/)
 * [Spring](http://docs.spring.io/)
 * [Spring boot](http://docs.spring.io/spring-boot/)
 * [H2](www.h2database.com)
 * [Maven](https://maven.apache.org/)
 * [Liquibase](https://www.liquibase.org/)
 
Deploy
 * [Docker](https://www.docker.com/)
 
ETL
 * [Python](https://www.python.org/)

## Data set

* Data was retrieved from Veris Community Database (http://veriscommunity.net/vcdb.html)
* Data was transformed using a custom python script

## How to run?

###### _Prerequisites_
 * Install Maven
 * Install Angular Cli
 * Install node
 
###### _Deployment_
To build docker containers:

* Download and unpack the zip file
* CD into the Frontend/data-breach-visualization directory

Create the dist folder by running the following commands:
```
npm install
ng build
```
Run the following docker commands to start up the front end:
 ```
docker build -t scope-frontend .
docker run -p 80:80 -it scope-frontend
 ```
CD into the Backend/security-breach-data directory

Run the following docker commands to start up the back end:
 ```
docker build -t scope-backend .
docker run -it -p 8080:8080 scope-backend
 ```
You are up and running! Navigate to link http://localhost:80 to start using the website.
 
## How to run integration tests?

Open your favorite IDE and run the files "as junit tests" from the top of the test directory  

## DB configuation

An in memory H2 database will be created and liquibase scripts will be run to create tables and insert data.

### Access API Documentation with Swagger
* Start up the backend docker container
* Navigate to link http://localhost:8080/swagger-ui.html
