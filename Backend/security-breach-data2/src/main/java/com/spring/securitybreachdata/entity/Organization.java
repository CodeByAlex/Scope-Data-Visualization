package com.spring.securitybreachdata.entity;

import java.io.Serializable;

public class Organization implements Serializable{
	private static final long serialVersionUID = -3371143751583305788L;
	
	private int orgId;
	private String orgName;	
	private String orgIndustry;
    
    public int getOrgId() {
		return orgId;
	}

	public void setOrgId(int orgId) {
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
}
