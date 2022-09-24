package com.nathantaylor.todoapi.service;

import com.nathantaylor.todoapi.dao.ToDoDAO;
import com.nathantaylor.todoapi.entity.ToDoItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@Service
public class ToDoServiceImpl implements ToDoService {

    @Autowired
    ToDoDAO repository;

    @PostConstruct
    public void populateDatabaseStartup() {
        repository.deleteAll();

        repository.save(new ToDoItem("Clean dishes", false));
        repository.save(new ToDoItem("Charge phone", false));
        repository.save(new ToDoItem("Hover room", true));
        repository.save(new ToDoItem("Go to the bank", false));
        repository.save(new ToDoItem("Food shopping", true));
        repository.save(new ToDoItem("Homework", false));
        repository.save(new ToDoItem("Feed the dogs", true));
        repository.save(new ToDoItem("Pay council tax", true));
        repository.save(new ToDoItem("Birthday presents", false));
        repository.save(new ToDoItem("Birthday presents", false));
        repository.save(new ToDoItem("Book holiday", true));
    }

    @Override
    public List<ToDoItem> findAll() {
        return repository.findAll();
    }

    @Override
    public void save(ToDoItem toDoItem) {
        repository.save(toDoItem);
    }

    @Override
    public void deleteById(String toDoItemIdentifier) {
        repository.deleteById(toDoItemIdentifier);
    }

    @Override
    public ToDoItem findById(String toDoItemIdentifier) {
        Optional<ToDoItem> toDoItem = repository.findById(toDoItemIdentifier);
        return toDoItem.orElse(null);
    }
}
