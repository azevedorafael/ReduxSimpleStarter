import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// Youtube API Key
const API_KEY = 'AIzaSyAVvQ2yZtJchp28liiNi6mkDkRxZgQDGMM';

// Create a new component.This component should produce some HTML
const App  = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generataed HTML and put it on the page (in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));