package com.spring.securitybreachdata.manager;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.spring.securitybreachdata.dao.ActorDao;
import com.spring.securitybreachdata.dao.IncidentDao;
import com.spring.securitybreachdata.dao.OrgDao;
import com.spring.securitybreachdata.dto.YearRangeDTO;
import com.spring.securitybreachdata.entity.Actor;
import com.spring.securitybreachdata.entity.Incident;
import com.spring.securitybreachdata.entity.Organization;

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
		try{
			List<Incident> incidents = incidentDao.getAllIncidentInfo();
			return new ResponseEntity<>(incidents, HttpStatus.OK);
		}catch(Exception ex){
			System.err.println(ex);
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<?> getAllActorInfo() {
		try{
			List<Actor> actors = actorDao.getAllActorInfo();
			return new ResponseEntity<>(actors, HttpStatus.OK);
		}catch(Exception ex){
			System.err.println(ex);
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<?> getAllOrgInfo() {
		try{
			List<Organization> orgs = orgDao.getAllOrgInfo();
			for(Organization org: orgs){
				if(org.getOrgId() != null){
					List<Incident> incidents = incidentDao.getIncidentsByOrgId(org.getOrgId());
					int numRecordsLost =0;
					for(Incident incident: incidents){
						numRecordsLost += incident.getNumRecordsLost();
					}
					org.setNumIncidents(incidents.size());
					org.setNumRecordsLost(numRecordsLost);
				}
			}
			return new ResponseEntity<>(orgs, HttpStatus.OK);
		}catch(Exception ex){
			System.err.println(ex);
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}
	
	public ResponseEntity<?> getIncidentRecordsByOrgId(int orgId) {
		try{
			List<Incident> incidents = incidentDao.getIncidentsByOrgId(orgId);
			return new ResponseEntity<>(incidents, HttpStatus.OK);
		}catch(Exception ex){
			System.err.println(ex);
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}
	
	public ResponseEntity<?> getYearRange(){
		try{
			YearRangeDTO incident = incidentDao.getYearRange();
			return new ResponseEntity<>(incident, HttpStatus.OK);
		}catch(Exception ex){
			System.err.println(ex);
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}
	
	
	
}
