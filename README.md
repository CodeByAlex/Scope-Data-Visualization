# Scope

Scope is a security breach visualization tool that gives you insight into cyber crime around the world.
 
  * Uses data from the Veris database of breach information
  * View graphical representations of breach data by country
  * View graphical representations of breach data by company
  * Filter, sort, and view company data in a table that includes pagination
  
  ![alt tag](https://github.com/CodeByAlex/Data-Breach-Visualization/blob/master/images/home-screen.png)
  ![alt tag](https://github.com/CodeByAlex/Data-Breach-Visualization/blob/master/images/global-dash.png)
  ![alt tag](https://github.com/CodeByAlex/Data-Breach-Visualization/blob/master/images/company-dash.png)
 
## Why I created Scope?

  - I wanted to create an end to end project from scratch that might be of interest to people in the security community
  - I wanted to increase my presence on github
  - I needed to get my hands on a good side project
 
 ## Why Scope is right for you?

  - Do you enjoy looking a graphical representations of data and have an affinity for security? You have made it to the right place.
  - Interested in using graphs for your angular project? There are many examples in my codebase.
  - Are looking for the right person for the job and are browsing Github to find them? Take a look at my coding style.
  
 ## While you are here...
  - You can use my graphing service for your own graphing needs
  - Take a dive into my implementation of h2 integration with liquibase and spring boot
  - Browse my configuration for testing the DAO layer with H2
  - Use the data set that I transformed for your own project
  - Take a look at the python script I created for ETL
  - Utilize my Travis and Docker files to help set up a project with the same architecture  
    
## Technology stack

###### _Front end_
 * [Angular](https://angular.io/)
 * [Typescript](https://www.typescriptlang.org) 
 * [SCSS](https://sass-lang.com)

###### _Back end_
 * [Java](https://www.java.com/)
 * [Spring](http://docs.spring.io/)
 * [Spring boot](http://docs.spring.io/spring-boot/)
 * [H2](www.h2database.com)
 * [Maven](https://maven.apache.org/)
 * [Liquibase](https://www.liquibase.org/)
 
###### _Deployment_
 * [Docker](https://www.docker.com/)
 
###### _ETL_
 * [Python](https://www.python.org/)

## Data set

* Data was retrieved from Veris Community Database (http://veriscommunity.net/vcdb.html)
* Data was transformed using a custom python script

## How to run?

###### _Prerequisites_
 * Install Docker 
 
###### _Deployment_
To build docker containers:

* Download and unpack the zip file
* CD into the Frontend/data-breach-visualization directory

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
