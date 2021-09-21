import React from "react";
import Child from './Child';

class Parent extends React.Component {
    introduce = () => {
        alert("Hello");
    }

    render() {
        return(
            <div>
                <Child name="경현" age={0} introduce={this.introduce} />
                <Child name="재영" age={1} />
            </div>
        )
    }
}

export default Parent;