import React from "react";
import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from "./components/StatefulGreeting";
function App() {
    return (
        <div className="App">
            <FunctionalGreetingWithProps greeting="Nice to meet you!!!" name="Mike!" age="32" />
            <StatefulGreeting name="John!" greeting="How are you doing?" />
        </div>
    );
}

export default App;
