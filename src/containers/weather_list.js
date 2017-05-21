import React, { Component }           from 'react';
import { connect }                    from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
    })

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temperatures}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    );
  }
  
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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