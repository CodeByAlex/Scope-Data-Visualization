package com.spring.securitybreachdata.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.securitybreachdata.manager.SecurityBreachManager;

@RestController
@RequestMapping("/breach-data")
public class SecurityBreachController {
	
	private static final String ORG_ID = "org_id";
	
	@Autowired
	private SecurityBreachManager securityBreachManager;
	
	@RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "incident-info")
	@CrossOrigin(origins="*")
	public ResponseEntity<?> getAllIncidentInfo(){
		return securityBreachManager.getAllIncidentInfo();
	}
	
	@RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "incident-info/by-org-id")
	@CrossOrigin(origins="*")
	public ResponseEntity<?> getIncidentRecordsByOrgId(@RequestParam(ORG_ID) int orgId){
		return securityBreachManager.getIncidentRecordsByOrgId(orgId);
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
