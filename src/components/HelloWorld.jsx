import React from 'react';

// Creating Presentational

const HelloWorld = () => {
    const Hello = 'Hello Cruel World';
    const Name = 'Fernando'
    const isTrue = true;
    return (
        <div className="HelloWorld">
            <h1>{Hello} {Name}</h1>
            <h2>Essential React Course</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
            {/* conditional */}
            {isTrue ? <h4>This is True</h4> : <h5>This is False</h5>}
            {isTrue &&  <h4>Im True</h4>}
        </div>
    );
};

export default HelloWorld;

