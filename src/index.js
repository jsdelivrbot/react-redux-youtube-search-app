import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyDAS05yfxujb-epsgDT6g8y43Wo-Eyedh0';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: ''
    };

    this.videoSearch('Bible');
  }

  videoSearch = (term) => {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      console.log(videos);
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList
          onVideoSelect={ this.onVideoSelect }
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
