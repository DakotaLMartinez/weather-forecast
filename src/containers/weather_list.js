import React, { Component }           from 'react';
import { connect }                    from 'react-redux';
import Chart                          from '../components/chart';
import GoogleMap                      from '../components/google_map';

class WeatherList extends Component {
  renderRow(cityData) {
    const name       = cityData.city.name;
    let temperatures = [];
    let humidities   = [];
    let pressures    = [];
    cityData.list.forEach((weather) => {
      temperatures.push(weather.main.temp);
      humidities.push(weather.main.humidity);
      pressures.push(weather.main.pressure);
    });
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temperatures} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }
  
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>        
        </thead>
        <tbody>
          {this.props.weather.map(this.renderRow)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  // Whatever is returned will show up as props
  // inside of WeatherList 
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);