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
		incidents.add(new Incident());
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
		orgs.add(new Organization());
		doReturn(orgs).when(orgDao).getAllOrgInfo();
		ResponseEntity<?> response = manager.getAllOrgInfo();
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(orgs, response.getBody());
	}
	
	
}
