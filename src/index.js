import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyA5n5y9IVFdWbHzgfUfkclmsvEdy9l3Qxc';

const App = () => (
  <div>
    <SearchBar />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
