package com.spring.securitybreachdata.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.securitybreachdata.dto.YearRangeDTO;
import com.spring.securitybreachdata.entity.Actor;
import com.spring.securitybreachdata.entity.Incident;
import com.spring.securitybreachdata.entity.Organization;
import com.spring.securitybreachdata.manager.SecurityBreachManager;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ApiResponse;

@RestController
@RequestMapping("/breach-data")
@Api(value="breachdata", description="Operations pertaining to security breach data collected by VERIS Community Database")
public class SecurityBreachController {
	
	private static final String ORG_ID = "org_id";
	
	@Autowired
	private SecurityBreachManager securityBreachManager;
	
	@RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "incident-info")
    @ApiOperation(value ="/incident-info", notes = "View a list of all incidents on record", response = Incident.class)
	@ApiResponses(value={
			@ApiResponse(code =200, message="Success", response=Incident.class),
			@ApiResponse(code =500, message="Appologies, but incident information is currently unavailable", response=Incident.class)
	})
	@CrossOrigin(origins="*")
	public ResponseEntity<?> getAllIncidentInfo(){
		return securityBreachManager.getAllIncidentInfo();
	}
	
	@RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "incident-info/by-org-id")
    @ApiOperation(value ="incident-info/by-org-id", notes = "View a list of all incidents for a specific organization", response = Incident.class)
	@ApiResponses(value={
			@ApiResponse(code =200, message="Success", response=Incident.class),
			@ApiResponse(code =500, message="Appologies, but incident information is currently unavailable", response=Incident.class)
	})
	@CrossOrigin(origins="*")
	public ResponseEntity<?> getIncidentRecordsByOrgId(@RequestParam(ORG_ID) int orgId){
		return securityBreachManager.getIncidentRecordsByOrgId(orgId);
	}
	
	@RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "incident-info/year-range")
	@ApiOperation(value ="incident-info/year-range", notes = "View the earliest and most recent years when incident records were recorded", response = YearRangeDTO.class)
	@ApiResponses(value={
			@ApiResponse(code =200, message="Success", response=YearRangeDTO.class),
			@ApiResponse(code =500, message="Appologies, but incident information is currently unavailable", response=YearRangeDTO.class)
	})
	@CrossOrigin(origins="*")
	public ResponseEntity<?> getYearRange(){
		return securityBreachManager.getYearRange();
	}
	
	@RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "actor-info")
	@ApiOperation(value ="actor-info", notes = "View a list of all Actors on record", response = Actor.class)
	@ApiResponses(value={
			@ApiResponse(code =200, message="Success", response=Actor.class),
			@ApiResponse(code =500, message="Appologies, but actor information is currently unavailable", response=Actor.class)
	})
	@CrossOrigin(origins="*")
	public ResponseEntity<?> getAllActorInfo(){
		return securityBreachManager.getAllActorInfo();
	}
	
	@RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "org-info")
	@ApiOperation(value ="org-info", notes = "View a list of all organizations on record", response = Organization.class)
	@ApiResponses(value={
			@ApiResponse(code =200, message="Success", response=Actor.class),
			@ApiResponse(code =500, message="Appologies, but organization information is currently unavailable", response=Organization.class)
	})
	@CrossOrigin(origins="*")
	public ResponseEntity<?> getAllOrgInfo(){
		return securityBreachManager.getAllOrgInfo();
	}
	
}
