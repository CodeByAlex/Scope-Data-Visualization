package com.spring.securitybreachdata.dao;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Component;
import com.spring.securitybreachdata.entity.Actor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
@Component
public class ActorDaoImpl extends SetUpDao implements ActorDao{
	
	public ArrayList<Actor> getAllActorInfo(){
         this.openCurrentSession();
		 Query query = currentSession.createNativeQuery("SELECT * FROM  Actor");
		 query.setResultTransformer(Transformers.aliasToBean(Actor.class));
		 ArrayList<Actor> entries = (ArrayList<Actor>) query.getResultList();
		 this.closeCurrentSession();
		 return entries;
	}
}
