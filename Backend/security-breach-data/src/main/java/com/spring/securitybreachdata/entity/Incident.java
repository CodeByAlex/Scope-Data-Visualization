package com.spring.securitybreachdata.entity;

import java.io.Serializable;

public class Incident implements Serializable{
	private static final long serialVersionUID = -3976940842169644427L;
	
	private Integer incidentId;
	private Integer actorId;
	private Integer orgId;    
	
	private String country;
	private String state;
    private String victimType;    
	private String dataLostType;
	private String summary;
	private String references;
    
	private Integer reportDay;
	private Integer reportMonth;
	private Integer reportYear;

	private Integer numRecordsLost;

	public Integer getIncidentId() {
		return incidentId;
	}

	public void setIncidentId(Integer incidentId) {
		this.incidentId = incidentId;
	}

	public Integer getActorId() {
		return actorId;
	}

	public void setActorId(Integer actorId) {
		this.actorId = actorId;
	}
	
	public Integer getOrgId() {
		return orgId;
	}

	public void setOrgId(Integer orgId) {
		this.orgId = orgId;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getVictimType() {
		return victimType;
	}

	public void setVictimType(String victimType) {
		this.victimType = victimType;
	}

	public String getDataLostType() {
		return dataLostType;
	}

	public void setDataLostType(String dataLostType) {
		this.dataLostType = dataLostType;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getReferences() {
		return references;
	}

	public void setReferences(String references) {
		this.references = references;
	}

	public Integer getReportDay() {
		return reportDay;
	}

	public void setReportDay(Integer reportDay) {
		this.reportDay = reportDay;
	}

	public Integer getReportMonth() {
		return reportMonth;
	}

	public void setReportMonth(Integer reportMonth) {
		this.reportMonth = reportMonth;
	}

	public Integer getReportYear() {
		return reportYear;
	}

	public void setReportYear(Integer reportYear) {
		this.reportYear = reportYear;
	}

	public Integer getNumRecordsLost() {
		return numRecordsLost;
	}

	public void setNumRecordsLost(Integer numRecordsLost) {
		this.numRecordsLost = numRecordsLost;
	}

	@Override
	public int hashCode(){
		final int prime = 23;
		int result =1;
		result = prime * result +((incidentId==null)? 0 : incidentId.hashCode());
		result = prime * result +((actorId==null)? 0 : actorId.hashCode());
		result = prime * result +((orgId==null)? 0 : orgId.hashCode());
		result = prime * result +((country==null)? 0 : country.hashCode());
		result = prime * result +((state==null)? 0 : state.hashCode());
		result = prime * result +((victimType==null)? 0 : victimType.hashCode());
		result = prime * result +((dataLostType==null)? 0 : dataLostType.hashCode());
		result = prime * result +((summary==null)? 0 : summary.hashCode());
		result = prime * result +((references==null)? 0 : references.hashCode());
		result = prime * result +((reportDay==null)? 0 : reportDay.hashCode());
		result = prime * result +((reportMonth==null)? 0 : reportMonth.hashCode());
		result = prime * result +((reportYear==null)? 0 : reportYear.hashCode());
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
		if(!(obj instanceof Incident)){
			return false;
		}
		
		Incident other = new Incident();
		if(incidentId == null){
			if(other.incidentId != null){
				return false;
			}
		}else if(!incidentId.equals(other.incidentId)){
			return false;
		}
		
		if(actorId == null){
			if(other.actorId != null){
				return false;
			}
		}else if(!actorId.equals(other.actorId)){
			return false;
		}
		
		if(orgId == null){
			if(other.orgId != null){
				return false;
			}
		}else if(!orgId.equals(other.orgId)){
			return false;
		}
		
		if(country == null){
			if(other.country != null){
				return false;
			}
		}else if(!country.equals(other.country)){
			return false;
		}
		
		if(state == null){
			if(other.state != null){
				return false;
			}
		}else if(!state.equals(other.state)){
			return false;
		}
		
		if(victimType == null){
			if(other.victimType != null){
				return false;
			}
		}else if(!victimType.equals(other.victimType)){
			return false;
		}
		
		if(dataLostType == null){
			if(other.dataLostType != null){
				return false;
			}
		}else if(!dataLostType.equals(other.dataLostType)){
			return false;
		}
		
		if(summary == null){
			if(other.summary != null){
				return false;
			}
		}else if(!summary.equals(other.summary)){
			return false;
		}
		
		if(references == null){
			if(other.references != null){
				return false;
			}
		}else if(!references.equals(other.references)){
			return false;
		}
		
		if(reportDay == null){
			if(other.reportDay != null){
				return false;
			}
		}else if(!reportDay.equals(other.reportDay)){
			return false;
		}
		
		if(reportMonth == null){
			if(other.reportMonth != null){
				return false;
			}
		}else if(!reportMonth.equals(other.reportMonth)){
			return false;
		}
		
		if(reportYear == null){
			if(other.reportYear != null){
				return false;
			}
		}else if(!reportYear.equals(other.reportYear)){
			return false;
		}
		return true;
	}
	
	
}
