package com.spring.securitybreachdata.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.spring.securitybreachdata.entity.Incident;
import com.spring.securitybreachdata.entity.Organization;
import com.spring.securitybreachdata.rowmapper.OrgRowMapper;

@Component
public class OrgDaoImpl implements OrgDao{
	@Autowired
	private NamedParameterJdbcTemplate jdbcTemplate;
	
	private static final String ALL_ORG_INFO_SQL = "SELECT * FROM ORG";
	
	public List<Organization> getAllOrgInfo(){		
		return jdbcTemplate.query(ALL_ORG_INFO_SQL, new OrgRowMapper());
	}
}
