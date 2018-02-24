package com.spring.securitybreachdata.dao.config;

import java.util.concurrent.atomic.AtomicBoolean;

import javax.sql.DataSource;

import org.h2.jdbcx.JdbcDataSource;
import org.junit.rules.TestRule;
import org.junit.runner.Description;
import org.junit.runners.model.Statement;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import com.spring.securitybreachdata.dao.ActorDaoImpl;
import com.spring.securitybreachdata.dao.IncidentDaoImpl;
import com.spring.securitybreachdata.dao.OrgDaoImpl;

import liquibase.Liquibase;
import liquibase.database.Database;
import liquibase.database.DatabaseFactory;
import liquibase.database.jvm.JdbcConnection;
import liquibase.resource.FileSystemResourceAccessor;
import liquibase.resource.ResourceAccessor;

public class DBRule implements TestRule {
	
	public static final DBRule rule = new DBRule();
	
	private static Liquibase liquibase;
	private DataSource source;
	
	private final AtomicBoolean initialized = new AtomicBoolean();
	
	private final ActorDaoImpl actorDao = new ActorDaoImpl();
	private final IncidentDaoImpl incidentDao = new IncidentDaoImpl();
	private final OrgDaoImpl orgDao = new OrgDaoImpl();
	
	private static final String CONNECTION_STRING = 
			  "jdbc:h2:mem:test;"
			+ "Mode="+DBConfig.DB_MODE+";"
			+ "INIT=CREATE SCHEMA IF NOT EXISTS "+DBConfig.SCHEMA_NAME+ " \\;"
			+ "SET SCHEMA "+DBConfig.SCHEMA_NAME;	
	
	@Override
	public Statement apply(Statement base, Description desc){
		if(!initialized.get()){
			before();
			initialized.set(true);
		}
		return base;
	}
	
	private static JdbcDataSource createSource(){
		JdbcDataSource dataSource = new JdbcDataSource();
		dataSource.setUrl(CONNECTION_STRING);
		return dataSource;	
	}
	
	private void before(){
		try{
			ResourceAccessor accessor = new FileSystemResourceAccessor(System.getProperty("user.dir"));
			Class.forName(DBConfig.DRIVER);
			this.source = createSource();
			
			this.getActorDao().setJdbcTemplate(new NamedParameterJdbcTemplate(this.source));
			this.getOrgDao().setJdbcTemplate(new NamedParameterJdbcTemplate(this.source));
			this.getIncidentDao().setJdbcTemplate(new NamedParameterJdbcTemplate(this.source));

			Database db = DatabaseFactory.getInstance().findCorrectDatabaseImplementation(new JdbcConnection(this.source.getConnection()));
			db.setDefaultSchemaName(DBConfig.SCHEMA_NAME);
			liquibase = new Liquibase(DBConfig.CHANGE_LOG, accessor, db);
			liquibase.dropAll();
			liquibase.update("");
		}catch(Exception ex){
			System.err.println(ex);
		}
	}

	public ActorDaoImpl getActorDao() {
		return actorDao;
	}

	public IncidentDaoImpl getIncidentDao() {
		return incidentDao;
	}

	public OrgDaoImpl getOrgDao() {
		return orgDao;
	}

	
	
	
}
