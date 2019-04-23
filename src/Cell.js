import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleEvent = () => {
    this.setState({
      color: this.props.getColor()
    })
  }

  render() {
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleEvent}>
      </div>
    )
  }

}
