package com.spring.securitybreachdata.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.spring.securitybreachdata.entity.Incident;
import com.spring.securitybreachdata.rowmapper.ActorRowMapper;
import com.spring.securitybreachdata.rowmapper.IncidentRowMapper;

@Component
public class IncidentDaoImpl implements IncidentDao{
	@Autowired
	private NamedParameterJdbcTemplate jdbcTemplate;
	
	private static final String GET_ALL_INCIDENT_INFO_SQL = "SELECT * FROM INCIDENT";
	private static final String GET_INCIDENT_INFO_BY_ORG_ID_SQL = "SELECT * FROM INCIDENT WHERE INCIDENT.ORG_ID = :orgId";
	
	public List<Incident> getAllIncidentInfo(){		
		return jdbcTemplate.query(GET_ALL_INCIDENT_INFO_SQL, new IncidentRowMapper());
	}

	@Override
	public List<Incident> getIncidentsByOrgId(int orgId) {
		MapSqlParameterSource params = new MapSqlParameterSource();
		params.addValue("orgId", orgId);
		return jdbcTemplate.query(GET_INCIDENT_INFO_BY_ORG_ID_SQL, params, new IncidentRowMapper());
	}
	

//	@Override
//	public int getNumRecordsLostById(int orgId) {
//		SqlParameterSource params = new SqlParameterSource();
//		params.addValue("orgId", orgId);
//		return jdbcTemplate.queryForObject(GET_INCIDENT_INFO_BY_ID_SQL, params, new IncidentRowMapper());
//	}
}
