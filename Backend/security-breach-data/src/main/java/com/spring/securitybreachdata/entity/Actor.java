package com.spring.securitybreachdata.entity;

import java.io.Serializable;

public class Actor implements Serializable{
	private static final long serialVersionUID = 2928023584642330485L;
	
	private int actorId;
		
	private String actorType;
    
	private String actorPattern;
	
	public int getActorId() {
		return actorId;
	}
	
	public void setActorId(int actorId) {
		this.actorId = actorId;
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
