import { Component } from "react";
import Card from "./Card";
import Button from "./Button";
import PopUp from "./PopUp";

class Bucket extends Component {
  onClickHandler = () => {
    console.log("sto qui");
    return <PopUp />;
  };

  render() {
    return (
      <div className="bucket">
        <h2>{this.props.title}</h2>
        <div className="cards">{this.props.children}</div>
        <Button onClickHandler={this.onClickHandler}>Add Card</Button>
      </div>
    );
  }
}
export default Bucket;
