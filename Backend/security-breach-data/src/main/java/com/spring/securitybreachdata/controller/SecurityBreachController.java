package com.spring.securitybreachdata.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spring.securitybreachdata.manager.SecurityBreachManager;

@RestController
@RequestMapping("/breach-data")
public class SecurityBreachController {
	
	@Autowired
	private SecurityBreachManager securityBreachManager;
	
	@RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "incident-info")
	@CrossOrigin(origins="*")
	public ResponseEntity<?> getAllIncidentInfo(){
		return securityBreachManager.getAllIncidentInfo();
	}
	
	@RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "actor-info")
	@CrossOrigin(origins="*")
	public ResponseEntity<?> getAllActorInfo(){
		return securityBreachManager.getAllActorInfo();
	}
	
	@RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "org-info")
	@CrossOrigin(origins="*")
	public ResponseEntity<?> getAllOrgInfo(){
		return securityBreachManager.getAllOrgInfo();
	}
	
}
