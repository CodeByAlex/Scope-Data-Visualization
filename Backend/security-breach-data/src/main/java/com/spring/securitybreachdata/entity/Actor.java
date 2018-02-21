package com.spring.securitybreachdata.entity;

import java.io.Serializable;

public class Actor implements Serializable{
	private static final long serialVersionUID = 2928023584642330485L;
	
	private Integer actorId;
		
	private String actorType;
    
	private String actorPattern;
	
	public Integer getActorId() {
		return actorId;
	}
	
	public void setActorId(Integer actorId) {
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
	
	@Override
	public int hashCode(){
		final int prime = 23;
		int result =1;
		result = prime * result +((actorId==null)? 0 : actorId.hashCode());
		result = prime * result +((actorType==null)? 0 : actorType.hashCode());
		result = prime * result +((actorPattern==null)? 0 : actorPattern.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj){
		if(this == obj){
			return true;
		}
		if(obj == null){
			return false;
		}
		if(!(obj instanceof Actor)){
			return false;
		}
		
		Actor other = new Actor();
		if(actorId == null){
			if(other.actorId != null){
				return false;
			}
		}else if(!actorId.equals(other.actorId)){
			return false;
		}
		
		if(actorType == null){
			if(other.actorType != null){
				return false;
			}
		}else if(!actorType.equals(other.actorType)){
			return false;
		}
		
		if(actorPattern == null){
			if(other.actorPattern != null){
				return false;
			}
		}else if(!actorPattern.equals(other.actorPattern)){
			return false;
		}
		
		return true;
	}
}
