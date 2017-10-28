import React from 'react'
import ReactDOM from 'react-dom'
import Comp from './component'

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.activateLaser = this.activateLaser.bind(this);
        this.state = {buttonText: this.props.buttonText};
      }
    activateLaser(event){
        ReactDOM.render(
            <Comp text={this.state.buttonText}/>, document.getElementById("component")
        );
    }
    render(){
          return (
            <button onClick={this.activateLaser}>
                {this.state.buttonText}
            </button>
          );
      }
  }
