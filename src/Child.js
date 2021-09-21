import React from "react";


class Child extends React.Component {
    render() {
      return (

      <h1 onClick={this.props.introduce}>
        Name: {this.props.name} Age : {this.props.age}
      </h1>
      )
    }
}

export default Child;