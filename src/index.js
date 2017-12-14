import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
// Youtube API Key
const API_KEY = "AIzaSyAVvQ2yZtJchp28liiNi6mkDkRxZgQDGMM";

// The most parent component shoul be responsible for fetch data.
// Create a new component.This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        videos: [],
        selectedVideo: null
    };
    this.videoSearch('sufboards');
  }

    // YTSearch({ key: API_KEY, term: "surfboards" }, (data) => {
    //     this.setState({videos:data});
    // });

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
          videos,
          selectedVideo: videos[0]
        });
   // this.setState({ videos: videos });
     });
  }

  render() {
    return (
      <div>
        <SearchBar  onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        {/* props videos */}
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generataed HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
