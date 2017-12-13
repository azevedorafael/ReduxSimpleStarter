import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

// Youtube API Key
const API_KEY = 'AIzaSyAVvQ2yZtJchp28liiNi6mkDkRxZgQDGMM';

YTSearch({key:API_KEY,term:'surfboards'}, function(data){
    console.log(data);
});

// The most parent component shoul be responsible for fetch data.
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