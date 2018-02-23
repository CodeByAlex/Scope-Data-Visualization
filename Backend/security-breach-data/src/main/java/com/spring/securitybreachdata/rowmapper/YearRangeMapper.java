package com.spring.securitybreachdata.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.spring.securitybreachdata.dto.YearRangeDTO;

public class YearRangeMapper implements RowMapper<YearRangeDTO>{

	@Override
	public YearRangeDTO mapRow(ResultSet rs, int arg) throws SQLException{
		YearRangeDTO dto = new YearRangeDTO();
		dto.setMinYear(rs.getInt("minYear"));
		dto.setMaxYear(rs.getInt("maxYear"));
		return dto;
	}
}
