import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import BottomText from '../BottomText/BottomText';
import './Chart.css';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {    	
        chartData: props.chartData,        
        textTop: props.textTop,
        textBottom:props.textBottom
    }    
  } // constructor


    static defaultProps = {
    	displayTitle: false,
    	displayLegend: false,
    	legendPosition: 'bottom',
    	cutoutPercentage: 92,
    	rotation:70
    }

	render() {
		return (
	 	<div className="my-chart">
	    	<Doughnut
			  data={this.state.chartData}
			  options={{ 
			  	title: {
				  	text: this.state.textTop,
				  	textsecond: this.state.textBottom, //"200,000 €",
				  	display: this.props.displayTitle,
				  	fontSize: 25
			  	},
			  	legend: {
				  	display: this.props.displayLegend,
				  	position: this.props.legendPosition
			  	},
				cutoutPercentage: this.props.cutoutPercentage,
				rotation:this.props.rotation
			  }}
			/>
      		<BottomText  chartData={this.props.chartData}/>
	 	</div>
		)
	}
 
} //Component

