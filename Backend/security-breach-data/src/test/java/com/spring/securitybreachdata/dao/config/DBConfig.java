package com.spring.securitybreachdata.dao.config;

public class DBConfig {
	public static final String CHANGE_LOG = "/src/test/java/com/spring/securitybreachdata/dao/config/liquibase-changelog-test.xml";
	public static final String SCHEMA_NAME = "BREACH";
	public static final String DB_MODE = "Oracle";
	public static final String DRIVER = "org.h2.Driver";
	public static final String CONNECTION_STRING = "jdbc:h2:mem:test;Mode=Oracle;INIT=CREATE SCHEMA IF NOT EXISTS "+SCHEMA_NAME+"\\SET SCHEMA "+SCHEMA_NAME;
}
