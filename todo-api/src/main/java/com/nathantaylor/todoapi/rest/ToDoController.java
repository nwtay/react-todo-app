package com.nathantaylor.todoapi.rest;

import com.nathantaylor.todoapi.entity.ToDoItem;
import com.nathantaylor.todoapi.service.ToDoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class ToDoController {

    @Autowired
    ToDoServiceImpl service;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public List<ToDoItem> getAllToDoItems() {
        return service.findAll();
    }

    @PostMapping("/")
    public String addToDoItem(@RequestBody ToDoItem toDoItem) {
        service.save(toDoItem);

        return "Successfully added new To Do Item: " + toDoItem.getName();
    }

    @DeleteMapping("/{toDoItemIdentifier}")
    public String deleteToDoItem(@PathVariable String toDoItemIdentifier) {
        ToDoItem toDoItem = service.findById(toDoItemIdentifier);

        if (toDoItem == null) {
            throw new ToDoItemNotFoundException("To Do Item with id = " + toDoItemIdentifier + " not found!");
        }

        service.deleteById(toDoItemIdentifier);
        return "Successfully deleted To Do Item: " + toDoItem.getName();
    }

}
