import React from 'react'

export default class Cont extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: props.text, color: props.color};
    }
    componentWillReceiveProps(newprops){
        this.setState({text: newprops.text});
    }
    render(){
        console.log('render called ' + this.state.text);
        return(
            <div>
                <p style={{color: this.state.color}}>
                    {this.state.text}
                </p>
            </div>
        );
    }
}