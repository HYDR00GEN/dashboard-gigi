import React from "react";
import PropTypes from "prop-types";
import PopUp from "./PopUp";

class Button extends React.Component {
  render() {
    const { type } = this.props;
    return (
      <button
        type={type}
        className="add-card cacca"
        onClick={this.props.onClickHandler}
      >
        {this.props.children}
      </button>
    );
  }
}
export default Button;
