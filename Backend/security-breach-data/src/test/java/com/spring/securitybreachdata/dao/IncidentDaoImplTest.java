package com.spring.securitybreachdata.dao;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.ClassRule;
import org.junit.Test;

import com.spring.securitybreachdata.dao.config.DBRule;
import com.spring.securitybreachdata.dto.YearRangeDTO;
import com.spring.securitybreachdata.entity.Incident;
import com.spring.securitybreachdata.entity.Organization;

public class IncidentDaoImplTest {
	@ClassRule
	public static DBRule rule = DBRule.rule;
	
	@Test
	public void testGetAllIncidentInfo(){
		List<Incident> incidents = rule.getIncidentDao().getAllIncidentInfo();
		assertEquals(1, incidents.size());
	}
	
	@Test
	public void testGetIncidentsByOrgId(){
		List<Incident> incidents = rule.getIncidentDao().getIncidentsByOrgId(1);
		assertEquals(1, incidents.size());
	}
	
	@Test
	public void getYearRange(){
		YearRangeDTO range = rule.getIncidentDao().getYearRange();
		assertEquals((Integer)2017, range.getMinYear());
		assertEquals((Integer)2017, range.getMaxYear());
	}
}
