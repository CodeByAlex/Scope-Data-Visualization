package com.spring.securitybreachdata.dao;

import java.util.List;

import com.spring.securitybreachdata.entity.Incident;

public interface IncidentDao {
	public List<Incident> getAllIncidentInfo();

	List<Incident> getIncidentsByOrgId(int orgId);
}
