# Scope

Scope is a security breach visualization tool that gives you insight into cyber crime around the world.
 
  * Uses data from the Veris database of breach information
  * view graphical representions of breach data by country
  * view graphical representions of breach data by compnay
  * Apply searching, on company data
  * View company data in a table that includes pagination
 
## Why Scope?

  - If you are interested in security and enjoy lookingraph visualizations of data, this is the project for you.

## Technology stack
 
 * [Java](https://www.java.com/)
 * [Angular](https://angular.io/)
 * [Spring](http://docs.spring.io/)
 * [Spring boot](http://docs.spring.io/spring-boot/)
 * [Hibernate](http://projects.spring.io/spring-data/) 
 * [H2](www.h2database.com)
 * [Maven](https://maven.apache.org/)

## Data sets

* Data was retrieved from Veris Comminity Database (http://veriscommunity.net/vcdb.html)

## How to run?

###### _Prerequisites_
 * Maven installed
 * Angular Cli install
 * node installed
 
###### _Deployment_
You can run the application using maven configuration command:

```
spring-boot:run
```

Or you can build the JAR file with maven configuration command:
 ```
 clean package
 ```
  
Then you can execute the runnable JAR generated:
 ```
  java -jar target/art-tracker-0.0.1-SNAPSHOT.jar
 ```
 
## How to run integration tests?

Open your favorite IDE and run the files "as junit tests" from the top of the test directory  

## DB configuation

An in memory H2 database will be created and liquibase scripts will be run to create tables and insert data.

## Scope Front End

*Start front end by using command ng serve from the src forlder of the front end application
* Navigate to link [http://localhost:4200]

### Access API Documentation with Swagger

* Navigate to link [http://localhost:8080/swagger-ui.html]
