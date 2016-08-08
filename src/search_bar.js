/* eslint-disable no-console */
console.log('hi');

import React, {Component} from 'react';

class Searchbar extends React.Component {
  render() {
    return(
      <div>
        <input type="text" placeholder="search"/>
      </div>
    );
  }
}

export default Searchbar;
