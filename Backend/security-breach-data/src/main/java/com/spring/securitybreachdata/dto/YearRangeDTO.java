package com.spring.securitybreachdata.dto;

import java.io.Serializable;

public class YearRangeDTO implements Serializable {
	private static final long serialVersionUID = -2389262284716480506L;
	
	Integer minYear;
	Integer maxYear;
	
	public Integer getMinYear() {
		return minYear;
	}
	public void setMinYear(Integer minYear) {
		this.minYear = minYear;
	}
	public Integer getMaxYear() {
		return maxYear;
	}
	public void setMaxYear(Integer maxYear) {
		this.maxYear = maxYear;
	}
}
