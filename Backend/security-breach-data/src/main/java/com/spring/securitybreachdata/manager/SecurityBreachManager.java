package com.spring.securitybreachdata.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.spring.securitybreachdata.dao.ActorDao;
import com.spring.securitybreachdata.dao.IncidentDao;
import com.spring.securitybreachdata.dao.OrgDao;


@Component
public class SecurityBreachManager {
	
	@Autowired
	ActorDao actorDao;
	
	@Autowired
	IncidentDao incidentDao; 
	
	@Autowired
	OrgDao orgDao; 

	//ensure propagation is required
	public ResponseEntity<?> getAllIncidentInfo() {
		return new ResponseEntity<>(null, HttpStatus.OK);
	}

	public ResponseEntity<?> getAllActorInfo() {
		return new ResponseEntity<>(null, HttpStatus.OK);
	}

	public ResponseEntity<?> getAllOrgInfo() {
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
	
	
}
