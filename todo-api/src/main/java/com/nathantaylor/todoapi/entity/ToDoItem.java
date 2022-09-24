package com.nathantaylor.todoapi.entity;

import org.springframework.data.annotation.Id;

public class ToDoItem {

    @Id
    private String id;
    private String name;
    private boolean isDone;

    public ToDoItem(String name, boolean isDone) {
        this.name = name;
        this.isDone = isDone;
    }

    public ToDoItem() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }
}
