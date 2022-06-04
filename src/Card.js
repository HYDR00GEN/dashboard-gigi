import React from "react";
class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div>{this.props.descr}</div>
      </div>
    );
  }
}
export default Card;
