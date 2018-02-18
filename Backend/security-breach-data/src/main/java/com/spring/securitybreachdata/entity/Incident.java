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
@Table(name = "incident")
public class Incident implements Serializable{
	private static final long serialVersionUID = -3976940842169644427L;
	
	@Id
	@GeneratedValue(generator="increment")
	@GenericGenerator(name="increment", strategy = "increment")
	@Column(name="incident_id", unique = true, nullable = false)
	private Long incidentId;
	
    @Column(name="org_id")
	private Long orgId;
    
    @Column(name="country")
	private String country;

    @Column(name="state")
	private String state;
    
    @Column(name="victim_type")
	private String victimType;    
    @Column(name="data_lost_type")
	private String dataLostType;
    @Column(name="summary")
	private String summary;
    @Column(name="references")
	private String references;
    
    @Column(name="report_day")
	private Integer reportDay;
    @Column(name="report_month")
	private Integer reportMonth;
    @Column(name="report_year")
	private Integer reportYear;
	
    @Column(name="num_records_lost")
	private Integer numRecordsLost;

	public Long getIncidentId() {
		return incidentId;
	}

	public void setIncidentId(Long incidentId) {
		this.incidentId = incidentId;
	}

	public Long getOrgId() {
		return orgId;
	}

	public void setOrgId(Long orgId) {
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
