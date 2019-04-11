import React, { Component } from "react";
import "./App.css";
import { Line } from "react-chartjs-2";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: [],
        datasets: [
          {
            label: "Temperature",
            data: [],
            fill: false, // Don't fill area under the line
            borderColor: "green" // Line color
          }
        ]
      },
      date: "",
      temperature: ""
    };
  }

  onDateChange = e => {
    this.setState({ date: e.target.value });
  };

  onTemperatureChange = e => {
    this.setState({ temperature: e.target.value });
  };

  onSubmit = () => {
    const labels = this.state.data.labels.concat(this.state.date);
    const data = this.state.data.datasets[0].data.concat(
      this.state.temperature
    );
    this.setState({
      data: {
        labels,
        datasets: [
          {
            label: this.state.data.datasets[0].label,
            data,
            borderColor: this.state.data.datasets[0].label
          }
        ]
      }
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Responsive Linear chart using Chart.js</h1>
        </header>
        <section className="input">
          <label>
            Date: <input type="date" onChange={this.onDateChange} />
          </label>
          <label>
            Temperature:{" "}
            <input type="number" onChange={this.onTemperatureChange} />
          </label>
          <button onClick={this.onSubmit}>Submit</button>
        </section>
        <article className="canvas-container">
          <Line data={this.state.data} />
        </article>
      </div>
    );
  }
}

export default App;
