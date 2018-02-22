package com.spring.securitybreachdata.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import com.spring.securitybreachdata.entity.Actor;
import com.spring.securitybreachdata.entity.Incident;
import com.spring.securitybreachdata.rowmapper.ActorRowMapper;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

@Component
public class ActorDaoImpl implements ActorDao{
	@Autowired
	private NamedParameterJdbcTemplate jdbcTemplate;
	
	private static final String ALL_ACTOR_INFO_SQL = "SELECT ACTOR_ID, ACTOR_TYPE, ACTOR_PATTERN FROM ACTOR";
	private static List<Actor> allActors = null;

	public List<Actor> getAllActorInfo(){
		if(allActors==null){
			allActors =jdbcTemplate.query(ALL_ACTOR_INFO_SQL, new ActorRowMapper());
		}
		return allActors;
	}
}
