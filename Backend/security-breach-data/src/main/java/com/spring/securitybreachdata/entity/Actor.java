package com.spring.securitybreachdata.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "actor")
public class Actor implements Serializable{
	private static final long serialVersionUID = 2928023584642330485L;
	
	@Id
	@GeneratedValue(generator="increment")
	@GenericGenerator(name="increment", strategy = "increment")
	@Column(name="actor_id", unique = true, nullable = false)
	private Long actorId;
	
    @Column(name="incident_id")
	private Long incidentId;
	
    @Column(name="actor_type")
	private String actorType;
    
    @Column(name="actor_pattern")
	private String actorPattern;
	
	public Long getActorId() {
		return actorId;
	}
	
	public void setActorId(Long actorId) {
		this.actorId = actorId;
	}
	
	public Long getIncidentId() {
		return incidentId;
	}
	
	public void setIncidentId(Long incidentId) {
		this.incidentId = incidentId;
	}
	
	public String getActorType() {
		return actorType;
	}
	
	public void setActorType(String actorType) {
		this.actorType = actorType;
	}
	
	public String getActorPattern() {
		return actorPattern;
	}
	
	public void setActorPattern(String actorPattern) {
		this.actorPattern = actorPattern;
	}
}
