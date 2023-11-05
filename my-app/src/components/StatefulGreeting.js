import React from 'react';

class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            ending: "Nice meeting you!!!",
            buttontext: "Exit",
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name}, {this.props.greeting}, {this.state.ending}</h1>
                <button>{this.state.buttontext}</button>
            </div>
        );
    }
}

export default StatefulGreeting;
