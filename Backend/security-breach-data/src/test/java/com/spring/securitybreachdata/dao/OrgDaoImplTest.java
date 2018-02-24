package com.spring.securitybreachdata.dao;

import java.util.List;

import org.junit.ClassRule;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

import com.spring.securitybreachdata.dao.config.DBRule;
import com.spring.securitybreachdata.entity.Organization;

public class OrgDaoImplTest {

	@ClassRule
	public static DBRule rule = DBRule.rule;
	
	@Test
	public void testGetAllOrgInfo(){
		List<Organization> orgs = rule.getOrgDao().getAllOrgInfo();
		assertEquals(1, orgs.size());
	}
}
