package com.spring.securitybreachdata.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.spring.securitybreachdata.entity.Actor;
import com.spring.securitybreachdata.entity.Incident;

public class IncidentRowMapper implements RowMapper<Incident>{
	@Override
	public Incident mapRow(ResultSet rs, int arg) throws SQLException{
		Incident incident = new Incident();
		incident.setCountry(rs.getString("country"));
		incident.setDataLostType(rs.getString("data_lost_type"));
		incident.setIncidentId(rs.getInt("incident_id"));
		incident.setNumRecordsLost(rs.getInt("num_records_lost"));
		incident.setOrgId(rs.getInt("org_id"));
		incident.setReferences(rs.getString("references"));
		incident.setReportDay(rs.getInt("report_day"));
		incident.setReportMonth(rs.getInt("report_month"));
		incident.setReportYear(rs.getInt("report_year"));
		incident.setState(rs.getString("state"));
		incident.setSummary(rs.getString("summary"));
		incident.setVictimType(rs.getString("victim_type"));
		return incident;
	}
}
