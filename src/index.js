/* eslint-disable no-console */
console.log('hi');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './search_bar';

// const App = function() {
//   return <div>Hi</div>;
// }

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
