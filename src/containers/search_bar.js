import React, { Component } from 'react';
import { connect }          from 'react-redux';

export default class SearchBar extends Component {
  
  render() {
    return (
      <form className="input-group">
        <input 
          type="text" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// function mapStateToProps(state) {
//   // Whatever is returned will show up as props
//   // inside of SearchBar 
//   return {
//     propName: state.stateKey
//   };
// }

// export default connect(mapStateToProps)(SearchBar);