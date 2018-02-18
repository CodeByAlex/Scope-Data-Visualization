package com.spring.securitybreachdata.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.spring.securitybreachdata.entity.Incident;
import com.spring.securitybreachdata.rowmapper.ActorRowMapper;
import com.spring.securitybreachdata.rowmapper.IncidentRowMapper;

@Component
public class IncidentDaoImpl implements IncidentDao{
	@Autowired
	private NamedParameterJdbcTemplate jdbcTemplate;
	
	private static final String ALL_INCIDENT_INFO_SQL = "SELECT * FROM INCIDENT";
	
	public List<Incident> getAllIncidentInfo(){		
		return jdbcTemplate.query(ALL_INCIDENT_INFO_SQL, new IncidentRowMapper());
	}
}
