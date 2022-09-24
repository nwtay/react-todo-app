import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import "../index.css";

class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  handleStatusChange(e) {
    const itemIdentifier = this.props.id;
    if (e.target.value === "Done") {
      this.props.onStatusChange("done", itemIdentifier);
    } else {
      this.props.onStatusChange("to-do", itemIdentifier);
    }
  }

  render() {
    let variant;
    let status;
    if (this.props.toDoStatus === "to-do") {
      variant = "danger";
      status = "To Do";
    } else {
      variant = "success";
      status = "Done";
    }

    return (
      <ListGroup.Item variant={variant}>
        <Row>
          <Col>{this.props.name}</Col>
          <Col>{status}</Col>
          <Col>
            {" "}
            <Form.Select
              className="border-10"
              onChange={this.handleStatusChange}
            >
              <option className="text-center">To Do</option>
              <option className="text-center">Done</option>
            </Form.Select>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  }
}

export default ToDoListItem;
