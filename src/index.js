import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component.This component should produce some HTML
const App  = () => {
    return <div>hi</div>;
}

// Take this component's generataed HTML and put it on the page (in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));