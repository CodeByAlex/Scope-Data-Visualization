package com.spring.securitybreachdata.entity;

import java.io.Serializable;

public class Organization implements Serializable{
	private static final long serialVersionUID = -3371143751583305788L;
	
	private Integer orgId;
	private String orgName;	
	private String orgIndustry;
    
	//Additional data
	private Integer numIncidents;
	private Integer numRecordsLost;
	
    public Integer getOrgId() {
		return orgId;
	}

	public void setOrgId(Integer orgId) {
		this.orgId = orgId;
	}

	public String getOrgName() {
		return orgName;
	}

	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}

	public String getOrgIndustry() {
		return orgIndustry;
	}

	public void setOrgIndustry(String orgIndustry) {
		this.orgIndustry = orgIndustry;
	}

	public int getNumRecordsLost() {
		return numRecordsLost;
	}

	public void setNumRecordsLost(int numRecordsLost) {
		this.numRecordsLost = numRecordsLost;
	}

	public Integer getNumIncidents() {
		return numIncidents;
	}

	public void setNumIncidents(Integer numIncidents) {
		this.numIncidents = numIncidents;
	}
	
	@Override
	public int hashCode(){
		final int prime = 23;
		int result =1;
		result = prime * result +((orgId==null)? 0 : orgId.hashCode());
		result = prime * result +((orgName==null)? 0 : orgName.hashCode());
		result = prime * result +((orgIndustry==null)? 0 : orgIndustry.hashCode());
		result = prime * result +((numIncidents==null)? 0 : numIncidents.hashCode());
		result = prime * result +((numRecordsLost==null)? 0 : numRecordsLost.hashCode());
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
		if(!(obj instanceof Organization)){
			return false;
		}
		
		Organization other = new Organization();
		if(orgId == null){
			if(other.orgId != null){
				return false;
			}
		}else if(!orgId.equals(other.orgId)){
			return false;
		}
		
		if(orgName == null){
			if(other.orgName != null){
				return false;
			}
		}else if(!orgName.equals(other.orgName)){
			return false;
		}
		
		if(orgIndustry == null){
			if(other.orgIndustry != null){
				return false;
			}
		}else if(!orgIndustry.equals(other.orgIndustry)){
			return false;
		}
		
		if(numIncidents == null){
			if(other.numIncidents != null){
				return false;
			}
		}else if(!numIncidents.equals(other.numIncidents)){
			return false;
		}
		
		if(numRecordsLost == null){
			if(other.numRecordsLost != null){
				return false;
			}
		}else if(!numRecordsLost.equals(other.numRecordsLost)){
			return false;
		}
		
		return true;
	}
}
