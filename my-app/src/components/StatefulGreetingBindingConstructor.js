import React from 'react';

class StatefulGreetingBindingConstructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            ending: "Nice meeting you!!!",
            buttontext: "Exit"
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        this.setState((prevState) => ({
            introduction: prevState.introduction === "Hello" ? "Goodbye!!!" : "Hello",
            buttontext: prevState.buttontext === "Exit" ? "Enter" : "Exit"
        }));
    };
    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name}, {this.props.greeting}, {this.state.ending}</h1>
                <button onClick={this.handleClick}>{this.state.buttontext}</button>
            </div>
        );
    }
}

export default StatefulGreetingBindingConstructor;
