import React, { Component } from 'react'
import Button from './Button'
import Popup from './PopUp'

export default class ContentButton extends Component {
  render() {
    return (
    <>
      <Button onClickHandler={this.props.onClickHandler}>Add Card</Button>
      <Popup trigger={this.props.trigger} onClickHandler={this.props.onClickHandler} /*onSubmitHandler={this.props.onSubmitHandler}*/></Popup>
    </>
    )
  }
}
