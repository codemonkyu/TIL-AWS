import React, { Component } from "react";
import propTypes from "prop-types";

class MyComponents extends Component {
  //생성자
  constructor(props) {
    super(props);
    this.state = {
      myvalue: 0,
    };
  }

  render() {
    const { name, age } = this.props;
    const { myvalue } = this.state;

    return (
      <div>
        <h3>
          hello {name} / {age}
        </h3>
        <p>상태변수 myvalue = {myvalue}</p>
        <button onClick={() => this.setState({ myvalue: myvalue + 1 })}>
          증가
        </button>
        <button onClick={() => this.setState({ myvalue: myvalue - 1 })}>
          감소
        </button>
      </div>
    );
  }
}

MyComponents.defaultProps = {
  name: "ReactJS",
};

MyComponents.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired,
};

export default MyComponents;
