import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleMap extends Component {
  static propTypes = {
   lat: PropTypes.number.isRequired,
   lon: PropTypes.number.isRequired
  };

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12, 
      center: {
        lat: this.props.lat, 
        lng: this.props.lon
      }
    })
  }
  
  render() {
    return (
      <div ref="map" />
    );
  }
}

export default GoogleMap;