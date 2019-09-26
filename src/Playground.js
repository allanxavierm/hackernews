import React, { Component } from "react";

class Playground extends Component {
  constructor(){
    super();

    // this.onClickMe = this.onClickMe.bind(this);
  }

  onClickMe() {
    console.info("this ===>", this);
  }

  render() {
    return(
      <button
        onClick={this.onClickMe}
        type="button">
        Click Me
      </button>
    );
  }
}

export default Playground;
