import React, { Component } from "react";
import "./App.css";
import MyComponents from "./components/MyComponents";
import MycomponentFunc from "./components/MycomponentFunc";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponents name="리액트JS" age={10} />
        <MyComponents />
        <MycomponentFunc name="함수형컴포넌트">
          <p>안녕하세요 칠드런입니다.</p>
        </MycomponentFunc>
      </div>
    );
  }
}

export default App;
