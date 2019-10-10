import React, { Component } from 'react';
import './BottomText.css';

export default class BottomText extends Component {

  constructor(props) {
    super(props);
    this.state = {    	
        total: 200000,
        data_left: 120000,
        data_right: 80000,
        texto_left: 'Tablet',
        texto_right: 'Smartphone',
		color_left:"#89cf46", 
        color_right: "#3a6712"
    }    
    this.give_percentage = this.give_percentage.bind(this);
  } // constructor

  	give_percentage(total, piece) {
  		return ((piece*100)/(total))
  	}

	render() {
		const color_left = {color:this.state.color_left};
		const color_right = {color:this.state.color_right};
		return (
	 	<div className="bottom-text">
				<div className="bottom-left">
					<span className="simple-left" style={color_left}>{this.state.texto_left}</span><br/>	
					{this.give_percentage(this.state.total, this.state.data_left)} % <span className="simple-gray"> {this.state.data_left} €</span>
				</div>
				<div className="bottom-right">
					<span className="simple-right" style={color_right}>{this.state.texto_right}</span> <br/>	
					{this.give_percentage(this.state.total, this.state.data_right)} % <span className="simple-gray"> {this.state.data_right} €</span>
				</div>

	 	</div>
		)
	}
 
} //Component

