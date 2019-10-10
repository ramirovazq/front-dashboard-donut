import React, { Component } from "react";
import Chart from './components/Chart/Chart';
import TextDonut from './components/TextDonut/TextDonut';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        chartFirstData: {},        
        chartSecondData: {},        
        chartThirdData: {},        
    }
    this.getCharData = this.getCharData.bind(this);
  } // constructor

  componentWillMount() {
    // simulate ajax call 
    this.getCharData();
  }

  getCharData() {


    this.setState({
      chartFirstData: {
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
        }, // chartData
      chartSecondData: {
          labels: ["Tablet", "Smartphone"],
          datasets: [
          {
            data:[
                  20000,
                  30000
              ],
            backgroundColor: [
              "#71c8db", 
              "#2c5166"
              ],
            borderWidth: [
                    0, 
                    0
              ]
          }]
        }, // chartData
      chartThirdData: {
          labels: ["Tablet", "Smartphone"],
          datasets: [
          {
            data:[
                  120000,
                  80000
              ],
            backgroundColor: [
              "#ecc62a", 
              "#bb5822"
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
        <Chart chartData={this.state.chartFirstData}  textTop="Revenue" textBottom="200.000 €" />
      </div>
      <div className="in-row">
        <Chart chartData={this.state.chartSecondData}  textTop="Impresions" textBottom="50.000.000" />
      </div>
        <div className="in-row">
        <Chart chartData={this.state.chartThirdData}  textTop="Visits" textBottom="600.000.000" />
      </div>
    </div>
    );
  }
}

export default App;
