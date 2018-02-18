package com.spring.securitybreachdata.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.spring.securitybreachdata.entity.Actor;

public class ActorRowMapper implements RowMapper<Actor>{

	@Override
	public Actor mapRow(ResultSet rs, int arg) throws SQLException{
		Actor actor = new Actor();
		actor.setActorId(rs.getInt("actor_id"));
		actor.setIncidentId(rs.getInt("incident_id"));
		actor.setActorPattern(rs.getString("actor_pattern"));
		actor.setActorType(rs.getString("actor_type"));
		
		return actor;
	}
}
