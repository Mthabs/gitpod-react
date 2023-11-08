import React from "react";
import './App.css';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingClassNested from './components/ConditionalRenderingClassNested';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreetingBindingBindThis from './components/StatefulGreetingBindingBindThis';
import StatefulGreetingBindingConstructor from './components/StatefulGreetingBindingConstructor';
import StatefulGreetingBindingDefine from './components/StatefulGreetingBindingDefine';
import StatefulGreetingRender from "./components/StatefulGreetingRender";

function App() {
    return (
        <div className="App">
            <ConditionalRenderingClass />
            <ConditionalRenderingClassNested />
            <ConditionalRenderingFunctional connected = {true}/>
            <EventsClass />
            <EventsFunctional />
            <FunctionalGreetingWithProps greeting="Nice to meet you!!!" name="Mike!" age="32" />
            <StatefulGreetingBindingBindThis name="John!" greeting="How are you doing?" />
            <StatefulGreetingBindingConstructor name="John!" greeting="How are you doing?" />
            <StatefulGreetingBindingDefine name="John!" greeting="How are you doing?" />
            <StatefulGreetingRender name="John!" greeting="How are you doing?" />
        </div>
    );
}

export default App;
