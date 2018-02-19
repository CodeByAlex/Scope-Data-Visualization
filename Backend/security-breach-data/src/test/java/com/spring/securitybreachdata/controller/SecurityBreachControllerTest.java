package com.spring.securitybreachdata.controller;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.spring.securitybreachdata.manager.SecurityBreachManager;

@RunWith(MockitoJUnitRunner.class)
public class SecurityBreachControllerTest {
	@InjectMocks
	SecurityBreachController controller;
	
	@Mock
	SecurityBreachManager manager;
	
	@Before
	public void setUp() throws Exception{
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void testGetAllIncidentInfo(){
		ResponseEntity response = new ResponseEntity<>(null, HttpStatus.OK);
		when(manager.getAllIncidentInfo()).thenReturn(response);
		assertEquals(controller.getAllIncidentInfo().getStatusCode(),HttpStatus.OK);
	}
	
	@Test
	public void testGetAllActorInfo(){
		ResponseEntity response = new ResponseEntity<>(null, HttpStatus.OK);
		when(manager.getAllActorInfo()).thenReturn(response);
		assertEquals(controller.getAllActorInfo().getStatusCode(),HttpStatus.OK);
	}
	
	@Test
	public void testGetAllOrgInfo(){
		ResponseEntity response = new ResponseEntity<>(null, HttpStatus.OK);
		when(manager.getAllOrgInfo()).thenReturn(response);
		assertEquals(controller.getAllOrgInfo().getStatusCode(),HttpStatus.OK);
	}
}
