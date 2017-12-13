import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
// Youtube API Key
const API_KEY = "AIzaSyAVvQ2yZtJchp28liiNi6mkDkRxZgQDGMM";

// The most parent component shoul be responsible for fetch data.
// Create a new component.This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    // YTSearch({ key: API_KEY, term: "surfboards" }, (data) => {
    //     this.setState({videos:data});
    // });

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
       this.setState({ videos });
    // this.setState({ videos: videos });
      });

  }
  render() {
    return (
      <div>
        <SearchBar />
        {/* props videos */}
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generataed HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
