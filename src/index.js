import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyDAS05yfxujb-epsgDT6g8y43Wo-Eyedh0';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
      console.log(videos);
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.videos[0] }/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
