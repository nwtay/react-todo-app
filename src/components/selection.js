import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
  }

  handleSelectionChange(key) {
    this.props.onSelectionChange(key);
  }

  render() {
    return (
      <>
        <Tabs
          defaultActiveKey={this.props.highlightedFilter}
          id="justify-tab-example"
          className="mb-3"
          justify
          onSelect={this.handleSelectionChange}
        >
          <Tab eventKey="all" title="All"></Tab>
          <Tab eventKey="done" title="Done"></Tab>
          <Tab eventKey="to-do" title="To Do"></Tab>
        </Tabs>
        <br></br>
      </>
    );
  }
}

export default Selection;
