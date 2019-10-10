import React, { Component } from 'react';
import './BottomText.css';

export default class BottomText extends Component {

  constructor(props) {
    super(props);
    this.state = {    	
        data_left: props.chartData.datasets[0].data[0],
        data_right: props.chartData.datasets[0].data[1],
        texto_left: props.chartData.labels[0],
        texto_right: props.chartData.labels[1],
		color_left: props.chartData.datasets[0].backgroundColor[0], 
        color_right: props.chartData.datasets[0].backgroundColor[1]
    }    
    this.give_percentage = this.give_percentage.bind(this);
  } // constructor

  	give_percentage(total, piece) {
  		return ((piece*100)/(total))
  	}

	render() {
		const color_left = {color:this.state.color_left};
		const color_right = {color:this.state.color_right};
		const numeric_symbol = this.props.numericSymbol;
		return (
	 	<div className="bottom-text">
				<div className="bottom-left">
					<span className="simple-left" style={color_left}>{this.state.texto_left} </span><br/>	
					{this.give_percentage(this.state.data_right + this.state.data_left, this.state.data_left)} % 
					
						<span className="simple-gray"> {this.state.data_left} {numeric_symbol ? '€' : ''}  </span>
					
					
				</div>
				<div className="bottom-right">
					<span className="simple-right" style={color_right}>{this.state.texto_right}</span> <br/>	
					{this.give_percentage(this.state.data_right + this.state.data_left, this.state.data_right)} % 
					
						<span className="simple-gray"> {this.state.data_right} {numeric_symbol ? '€' : ''}</span>
					

					
				</div>

	 	</div>
		)
	}
 
} //Component

