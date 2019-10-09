import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import './Chart.css';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {    	
        chartData: props.chartData
    }    
  } // constructor


    static defaultProps = {
    	displayTitle: true,
    	displayLegend: true,
    	legendPosition: 'bottom',
    	cutoutPercentage: 88,
    	rotation:70
    }

	render() {
		return (
	 	<div className="my-chart">
	    	<Doughnut
			  data={this.state.chartData}
			  options={{ 
			  	title: {
				  	text: "Revenue 200000",
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
	 	</div>
		)
	}
 
} //Component

