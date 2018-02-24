package com.spring.securitybreachdata;

import static springfox.documentation.builders.PathSelectors.regex;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
public class SecurityBreachDataApplication {
	
	 public static final Contact DEFAULT_CONTACT = new Contact(
		      "Alex Wilson", "http://www.codebyalex.com", "wilsonc.alexander@gmail.com");
		  
	 public static final ApiInfo DEFAULT_API_INFO = new ApiInfo(
		      "Data Breach API", "API that produces breach data collected by VERIS Community Database", "1.0",
		      "urn:tos", DEFAULT_CONTACT, 
		      "Apache 2.0", "http://www.apache.org/licenses/LICENSE-2.0");

	public static void main(String[] args) {
		SpringApplication.run(SecurityBreachDataApplication.class, args);
	}
	
	 @Bean
	  public Docket api() {
	      return new Docket(DocumentationType.SWAGGER_2)
	              .select()
	              .apis(RequestHandlerSelectors.basePackage("com.spring.securitybreachdata.controller"))
	              .build()
	              .apiInfo(DEFAULT_API_INFO);
	  }
}
