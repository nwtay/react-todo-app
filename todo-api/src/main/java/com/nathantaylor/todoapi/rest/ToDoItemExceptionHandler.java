package com.nathantaylor.todoapi.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

// AOP: sits between REST service and REST client, intercepts and handles exceptions
@ControllerAdvice
public class ToDoItemExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<ToDoItemErrorResponse> handleException(ToDoItemNotFoundException exc) {
        ToDoItemErrorResponse response = new ToDoItemErrorResponse(HttpStatus.NOT_FOUND.value(),
                exc.getMessage(), System.currentTimeMillis());

        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    // fallback
    @ExceptionHandler
    public ResponseEntity<ToDoItemErrorResponse> handleException(Exception exc) {
        ToDoItemErrorResponse response = new ToDoItemErrorResponse(HttpStatus.BAD_REQUEST.value(),
                exc.getMessage(), System.currentTimeMillis());

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

}
