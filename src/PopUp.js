import React from "react";

/*export default class PopUp extends React.Component{
  constructor(props){
    super(props)
  }
  render (){
  return (
      <div className="popup">
        <div className="popup-inner">
          <h1>CACCA GROSSISSIMA</h1>
          <button className="close-btn"><p>X</p></button>
        </div>
      </div>
    );
    };
}  */

function Popup(props){
  console.log(props.onClickHandler)
  return(props.trigger) ? (
    <div  className="popup">
      <div className="window">
        <button className="close-btn btn" onClick={props.onClickHandler} type="button"><p>X</p></button>
        <label for="+ Add Task">Add CAZO</label>
        <input type="text" name="+ Add Task" id="+ Add Task" placeholder="...insert coin"></input>
        <button className="add-btn btn" type="button" /*onClick={this.props.onSubmitHandler}*/><p> + Add Task</p></button>
      </div>
    </div>
  ) : "";
}

export default Popup;