package com.spring.securitybreachdata.dao;

import java.util.ArrayList;
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
	
	private static final String ALL_ORG_INFO_SQL = "SELECT ORG_ID, ORG_NAME, ORG_INDUSTRY FROM ORG";
	private static List<Organization> allOrganizations = null;
	
	public List<Organization> getAllOrgInfo(){	
		if(allOrganizations ==null){
			allOrganizations = getJdbcTemplate().query(ALL_ORG_INFO_SQL, new OrgRowMapper());
		}
		return allOrganizations;
	}

	public NamedParameterJdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(NamedParameterJdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
}
