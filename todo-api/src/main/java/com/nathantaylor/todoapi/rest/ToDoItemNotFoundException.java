package com.nathantaylor.todoapi.rest;

public class ToDoItemNotFoundException extends RuntimeException {

    public ToDoItemNotFoundException() {}

    public ToDoItemNotFoundException(String message) {
        super(message);
    }
}
