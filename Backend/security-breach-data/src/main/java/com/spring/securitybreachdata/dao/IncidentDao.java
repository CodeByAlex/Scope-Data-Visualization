package com.spring.securitybreachdata.dao;

import java.util.List;

import com.spring.securitybreachdata.dto.YearRangeDTO;
import com.spring.securitybreachdata.entity.Incident;

public interface IncidentDao {
	public List<Incident> getAllIncidentInfo();

	public List<Incident> getIncidentsByOrgId(int orgId);

	public YearRangeDTO getYearRange();
}
