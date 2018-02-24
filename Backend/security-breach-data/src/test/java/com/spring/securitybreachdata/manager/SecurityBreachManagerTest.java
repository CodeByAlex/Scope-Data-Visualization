package com.spring.securitybreachdata.manager;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.Assert.*;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.when;

import com.spring.securitybreachdata.dao.ActorDao;
import com.spring.securitybreachdata.dao.IncidentDao;
import com.spring.securitybreachdata.dao.OrgDao;
import com.spring.securitybreachdata.dto.YearRangeDTO;
import com.spring.securitybreachdata.entity.Actor;
import com.spring.securitybreachdata.entity.Incident;
import com.spring.securitybreachdata.entity.Organization;

@RunWith(MockitoJUnitRunner.class)
public class SecurityBreachManagerTest {
	@InjectMocks
	private SecurityBreachManager manager;
	
	@Mock
	ActorDao actorDao;
	
	@Mock
	OrgDao orgDao;
	
	@Mock
	IncidentDao incidentDao; 
	
	@Before
	public void setUp() throws Exception{
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void testGetAllIncidentInfo(){
		List<Incident> incidents = new ArrayList<>();
		Incident incident = new Incident();
		incident.setOrgId(1);
		incidents.add(incident);
		doReturn(incidents).when(incidentDao).getAllIncidentInfo();
		ResponseEntity<?> response = manager.getAllIncidentInfo();
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(incidents, response.getBody());
	}
	
	@Test
	public void testGetAllActorInfo(){
		List<Actor> actors = new ArrayList<>();
		actors.add(new Actor());
		doReturn(actors).when(actorDao).getAllActorInfo();
		ResponseEntity<?> response = manager.getAllActorInfo();
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(actors, response.getBody());
	}
	
	@Test
	public void testGetAllOrgInfo(){
		List<Organization> orgs = new ArrayList<>();
		Organization org = new Organization();
		org.setOrgId(1);
		orgs.add(org);
		doReturn(orgs).when(orgDao).getAllOrgInfo();
		ResponseEntity<?> response = manager.getAllOrgInfo();
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(orgs, response.getBody());
	}
	
	@Test
	public void testGetAllOrgInfoWithIncidents(){
		List<Incident> incidents = new ArrayList<>();
		Incident incident = new Incident();
		incident.setOrgId(1);
		incident.setNumRecordsLost(1);
		incidents.add(incident);
		doReturn(incidents).when(incidentDao).getIncidentsByOrgId(1);
		
		List<Organization> orgs = new ArrayList<>();
		Organization org = new Organization();
		org.setOrgId(1);
		orgs.add(org);
		doReturn(orgs).when(orgDao).getAllOrgInfo();
		
		ResponseEntity<?> response = manager.getAllOrgInfo();
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(orgs, response.getBody());
	}
	
	@Test
	public void testGetAllOrgInfoWithIncidentsNullRecordsLost(){
		List<Incident> incidents = new ArrayList<>();
		Incident incident = new Incident();
		incident.setOrgId(1);
		incidents.add(incident);
		doReturn(incidents).when(incidentDao).getIncidentsByOrgId(1);
		
		List<Organization> orgs = new ArrayList<>();
		Organization org = new Organization();
		org.setOrgId(1);
		orgs.add(org);
		doReturn(orgs).when(orgDao).getAllOrgInfo();
		
		ResponseEntity<?> response = manager.getAllOrgInfo();
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(orgs, response.getBody());
	}
	
	@Test
	public void testGetIncidentRecordsByOrgId(){
		List<Incident> incidents = new ArrayList<>();
		Incident incident = new Incident();
		incident.setOrgId(1);
		incidents.add(incident);
		doReturn(incidents).when(incidentDao).getIncidentsByOrgId(1);
		ResponseEntity<?> response = manager.getIncidentRecordsByOrgId(1);
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(incidents, response.getBody());
	}
	
	@Test
	public void testGetYearRange(){
		YearRangeDTO dto = new YearRangeDTO();		
		doReturn(dto).when(incidentDao).getYearRange();
		ResponseEntity<?> response = manager.getYearRange();
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(dto, response.getBody());
	}
	
}
