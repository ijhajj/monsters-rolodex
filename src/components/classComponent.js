import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            typeComponent: "class"
        }
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({typeComponent:"modified class"})}>Hello I am a {this.state.typeComponent} component</button>
      </div>
    )
  }
}
