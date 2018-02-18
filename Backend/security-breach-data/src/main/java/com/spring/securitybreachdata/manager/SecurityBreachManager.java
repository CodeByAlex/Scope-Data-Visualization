package com.spring.securitybreachdata.manager;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.spring.securitybreachdata.dao.ActorDao;
import com.spring.securitybreachdata.dao.SetUpDao;
import com.spring.securitybreachdata.dao.IncidentDao;
import com.spring.securitybreachdata.dao.OrgDao;
import com.spring.securitybreachdata.entity.Actor;

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
		try{
			List<Actor> actors = actorDao.getAllActorInfo();
			return new ResponseEntity<>(actors, HttpStatus.OK);
		}catch(Exception ex){
			System.err.println(ex);
			return new ResponseEntity<>(null, HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}

	public ResponseEntity<?> getAllOrgInfo() {
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
	
	
}
