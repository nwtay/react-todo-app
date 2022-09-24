import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import AddItem from "./additem";
import Selection from "./selection";
import ToDoList from "./todolist";
import ORIGINAL_TODOS from "../originaltodos";

class FilteredTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedFilter: "all",
      todos: ORIGINAL_TODOS,
    };

    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
  }

  handleStatusChange(updatedStatus, itemIdentifier) {
    const todos = this.state.todos.slice();
    // replace the todo with the same id as itemIdentifier
    var foundIndex = todos.findIndex((item) => item.id === itemIdentifier);
    todos[foundIndex].toDoStatus = updatedStatus;
    this.setState({ todos: todos });
  }

  handleSelectionChange(highlightedFilter) {
    this.setState({
      highlightedFilter: highlightedFilter,
    });
  }

  handleAddition(itemName) {
    const todos = this.state.todos.slice();
    todos.unshift({
      toDoName: itemName,
      toDoStatus: "to-do",
      id: todos.length,
    });
    this.setState({ todos: todos });
  }

  render() {
    return (
      <Container>
        <Card bg="white" className="text-center shadow my-5">
          <Card.Header>
            <br></br>
            <h1 className="header-text">Nathan's ToDo App</h1>
          </Card.Header>
          <Card.Body className="p-5">
            <AddItem onAddition={this.handleAddition}></AddItem>
            <br></br>
            <Selection
              highlightedFilter={this.state.highlightedFilter}
              onSelectionChange={this.handleSelectionChange}
            />
            <ToDoList
              todos={this.state.todos}
              highlightedFilter={this.state.highlightedFilter}
              onStatusChange={this.handleStatusChange}
            />
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default FilteredTable;
