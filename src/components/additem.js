import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {
      inputText: ""
    }
  }

  handleClick() {
    this.props.onAddition(this.state.inputText);
  }

  handleTextChange(e) {
    this.setState({
      inputText: e.target.value
    });
  }

    render() {
        return <InputGroup className="mb-3" id="message">
        <Form.Control onChange={this.handleTextChange}
          placeholder="Pay my utility bill..."
        />
        <Button variant="success" onClick={this.handleClick}>
          +
        </Button>
      </InputGroup>
    }

}

export default AddItem;