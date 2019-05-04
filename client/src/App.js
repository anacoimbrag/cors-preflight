import React, { Component } from "react";
import "./App.css";

class App extends Component {
  askSameOrigin = () => {
    fetch("favicon.ico", {
      method: "GET"
    })
      .then(response => {
        console.log("success", response);
      })
      .catch(error => {
        console.error("error", error);
      });
  };

  askCrossOriginSimple = () => {
    fetch("http://localhost:8080", {
      method: "GET"
    })
      .then(response => {
        console.log("success", response);
      })
      .catch(error => {
        console.error("error", error);
      });
  };

  askCrossOriginPreflight = () => {
    fetch("http://localhost:8080", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { key: "value" }
    })
      .then(response => {
        console.log("success", response);
      })
      .catch(error => {
        console.error("error", error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">A Dive Into CORS</header>
        <div className="App-buildings">
          <section className="building">
            <div className="apartment my-place">Você</div>
            <div className="apartment same-origin" onClick={this.askSameOrigin}>
              Vizinho
            </div>
          </section>
          <section className="building">
            <div
              className="apartment cross-origin"
              onClick={this.askCrossOriginSimple}
            >
              Simples
            </div>
            <div
              className="apartment cross-origin"
              onClick={this.askCrossOriginPreflight}
            >
              Preflight
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
