import React, { Component } from "react";
import Chart from './components/Chart/Chart';
import TextDonut from './components/TextDonut/TextDonut';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        chartData: {},        
    }
    this.getCharData = this.getCharData.bind(this);
  } // constructor

  componentWillMount() {
    this.getCharData();
  }

  getCharData() {
    this.setState({
      chartData: {
          labels: ["Tablet", "Smartphone"],
          datasets: [
          {
            data:[
                  120000,
                  80000
              ],
            backgroundColor: [
              "#89cf46", 
              "#3a6712"
              ],
            borderWidth: [
                    0, 
                    0
              ]
          }]
        } // chartData
    })
  }

  render(){ 
    return (
    <div className="App">
      <div className="in-row">
        <Chart chartData={this.state.chartData}  />
      </div>
      <div className="in-row">
        <Chart chartData={this.state.chartData}  />
      </div>
        <div className="in-row">
        <Chart chartData={this.state.chartData}  />
      </div>
    </div>
    );
  }
}

export default App;
