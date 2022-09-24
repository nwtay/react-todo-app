import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ToDoListItem from "./todolistitem";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  handleStatusChange(updatedStatus, itemIdentifier) {
    this.props.onStatusChange(updatedStatus, itemIdentifier);
  }

  renderToDoListItem(itemIdentifier) {
    // retrieve the todo item with this id
    const todo = this.props.todos.filter(
      (todo) => todo["id"] === itemIdentifier
    )[0];
    return (
      <ToDoListItem
        key={todo["id"]}
        id={todo["id"]}
        toDoName={todo["toDoName"]}
        toDoStatus={todo["toDoStatus"]}
        onStatusChange={this.handleStatusChange}
      ></ToDoListItem>
    );
  }

  render() {
    const todos = this.props.todos;
    const filter = this.props.highlightedFilter;

    if (filter !== "all") {
      const todo_array = todos
        .filter((todo) => todo["toDoStatus"] === filter)
        .map((todo) => {
          todo = this.renderToDoListItem(todo["id"]);
          return todo;
        });

      return <ListGroup>{todo_array}</ListGroup>;
    } else {
      const todo_array = todos.map((todo) => {
        todo = this.renderToDoListItem(todo["id"]);
        return todo;
      });

      return <ListGroup>{todo_array}</ListGroup>;
    }
  }
}

export default ToDoList;
