package com.spring.securitybreachdata.entity;

import java.io.Serializable;

public class Incident implements Serializable{
	private static final long serialVersionUID = -3976940842169644427L;
	
	private int incidentId;
	private int orgId;    
	
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

	public int getIncidentId() {
		return incidentId;
	}

	public void setIncidentId(int incidentId) {
		this.incidentId = incidentId;
	}

	public int getOrgId() {
		return orgId;
	}

	public void setOrgId(int orgId) {
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
	
	
}
