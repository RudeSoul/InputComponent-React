import React, { Component } from "react";
import "./FormWidth.css";
import "./InputComponent.css";

export default class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className={this.props.formwidth}>
        <div className="form-body">
          <div className="form">
            <input
              type={this.props.type || "text"}
              name={this.props.name || "name"}
              autoComplete="off"
              required
              onChange={this.handleChange}
            />
            <label htmlFor={this.props.name} className="label-name">
              <span className="content-name">{this.props.label || "Name"}</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
