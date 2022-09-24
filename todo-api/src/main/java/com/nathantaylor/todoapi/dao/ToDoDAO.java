package com.nathantaylor.todoapi.dao;

import com.nathantaylor.todoapi.entity.ToDoItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ToDoDAO extends MongoRepository<ToDoItem, String> {

}
