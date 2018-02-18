package com.spring.securitybreachdata.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.spring.securitybreachdata.entity.Organization;

public class OrgRowMapper implements RowMapper<Organization>{

	@Override
	public Organization mapRow(ResultSet rs, int arg) throws SQLException{
		Organization org = new Organization();
		org.setOrgId(rs.getInt("org_id"));
		org.setOrgIndustry(rs.getString("org_industry"));
		org.setOrgName(rs.getString("org_name"));
		return org;
	}
}
