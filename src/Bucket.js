import { Component } from "react";
import Card from "./Card";
import axios from "axios";
import Button from "./Button";
import PopUp from "./PopUp";
import ContentButton from "./ContentButton";

class Bucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
    };
  }

  // onSubmitHandler = (e)=>{
  //   e.preventDefault();
  //   const url = "http://localhost:8000/app/dashboards";
  //   axios.post(url);
  // }

  onClickHandler = (e) => {
    e.preventDefault();

    const classe = e.target.className
    console.log(classe.split(" ")[0])

    if(classe.includes("add-card")){
      this.setState((prev)=>{
        return {
          ...prev,
          trigger: true
        }
      })
    }

    if(classe.includes("close-btn")){
      this.setState((prev)=>{
        return {
          ...prev,
          trigger: false
        }
      })
    }
    
  }

  componentDidUpdate(){
    console.log(this.state.trigger)
  }

  render() {
    console.log(this.state.trigger)
    return (
      <div className="bucket">
        <h2>{this.props.title}</h2>
        <div className="cards">{this.props.children}</div>
        <ContentButton
          trigger={this.state.trigger}
          onClickHandler={this.onClickHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
      </div>
      );
    }
  }

export default Bucket;
