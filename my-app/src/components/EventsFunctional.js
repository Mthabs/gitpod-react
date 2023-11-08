import React from 'react';

const EventsFunctional = () => {
    function clickHandler() {
        console.log("Button clicked - functional component");
    }
    return (
        <div>
            <button onClick={clickHandler}>click me - functional component</button>
        </div>
    );
};

export default EventsFunctional;