package com.spring.securitybreachdata.dao;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.ClassRule;
import org.junit.Test;

import com.spring.securitybreachdata.dao.config.DBRule;
import com.spring.securitybreachdata.entity.Actor;
import com.spring.securitybreachdata.entity.Organization;

public class ActorDaoImplTest {
	@ClassRule
	public static DBRule rule = DBRule.rule;
	
	@Test
	public void testGetAllActorInfo(){
		List<Actor> actors = rule.getActorDao().getAllActorInfo();
		assertEquals(1, actors.size());
	}
}
