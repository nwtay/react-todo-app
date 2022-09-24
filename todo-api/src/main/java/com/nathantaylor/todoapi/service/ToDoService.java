package com.nathantaylor.todoapi.service;

import com.nathantaylor.todoapi.entity.ToDoItem;

import java.util.List;

public interface ToDoService {

    List<ToDoItem> findAll();

    void save(ToDoItem toDoItem);

    void deleteById(String toDoItemIdentifier);

    ToDoItem findById(String toDoItemIdentifier);

}
