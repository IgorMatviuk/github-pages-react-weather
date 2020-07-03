import React from 'react';
import './App.scss';
import Header from './component/Header';
import Title from './component/Title';
import Widgets from './component/Widgets';
import Footer from './component/Footer';

const API_KEY ="74b3547c1c9d4ea9bb785378db23c82a"

class App extends React.Component {

  state = {
    temp: undefined,
    city_name: undefined,
    datetime: undefined,
    weather:  undefined,
    low_temp: undefined,
    max_temp: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await
    fetch (`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&lang=ru&key=${API_KEY}`)
    const data = await api_url.json();
    //.replace(/-/g, " ")
    console.log(data)

    
    this.setState({
      temp: data.data[0].temp,
      datetime: data.data[0].datetime.replace(/-/g, " ") ,
      weather: data.data[0].weather.description,
      city_name: data.city_name,
      low_temp: data.data[0].low_temp,
      max_temp: data.data[0].max_temp,
      error: "",

      temp1: data.data[1].temp,
      datetime1: data.data[1].datetime.replace(/-/g, " "),
      weather1: data.data[1].weather.description,
      low_temp1: data.data[1].low_temp,
      max_temp1: data.data[1].max_temp,

      temp2: data.data[2].temp,
      datetime2: data.data[2].datetime.replace(/-/g, " "),
      weather2: data.data[2].weather.description,
      low_temp2: data.data[2].low_temp,
      max_temp2: data.data[2].max_temp,

      temp3: data.data[3].temp,
      datetime3: data.data[3].datetime.replace(/-/g, " "),
      weather3: data.data[3].weather.description,
      low_temp3: data.data[3].low_temp,
      max_temp3: data.data[3].max_temp,

      temp4: data.data[4].temp,
      datetime4: data.data[4].datetime.replace(/-/g, " "),
      weather4: data.data[4].weather.description,
      low_temp4: data.data[4].low_temp,
      max_temp4: data.data[4].max_temp,

      temp5: data.data[5].temp,
      datetime5: data.data[5].datetime.replace(/-/g, " "),
      weather5: data.data[5].weather.description,
      low_temp5: data.data[5].low_temp,
      max_temp5: data.data[5].max_temp,

      temp6: data.data[6].temp,
      datetime6: data.data[6].datetime.replace(/-/g, " "),
      weather6: data.data[6].weather.description,
      low_temp6: data.data[6].low_temp,
      max_temp6: data.data[6].max_temp,

      temp7: data.data[7].temp,
      datetime7: data.data[7].datetime.replace(/-/g, " "),
      weather7: data.data[7].weather.description,
      low_temp7: data.data[7].low_temp,
      max_temp7: data.data[7].max_temp,
    });
  }

  render() {
  return (
    <div style={{overflow: 'hidden'}}>
      <Header weatherMethod={this.getWeather}/>
      <Title
      city_name={this.state.city_name}
      temp={this.state.temp}
      datetime={this.state.datetime}
      weather={this.state.weather}
      low_temp={this.state.low_temp}
      max_temp={this.state.max_temp}
      error={this.state.error}
      />
      <Widgets
      temp1={this.state.temp1}
      datetime1={this.state.datetime1}
      weather1={this.state.weather1}
      low_temp1={this.state.low_temp1}
      max_temp1={this.state.max_temp1}

      temp2={this.state.temp2}
      datetime2={this.state.datetime2}
      weather2={this.state.weather2}
      low_temp2={this.state.low_temp2}
      max_temp2={this.state.max_temp2}

      temp3={this.state.temp3}
      datetime3={this.state.datetime3}
      weather3={this.state.weather3}
      low_temp3={this.state.low_temp3}
      max_temp3={this.state.max_temp3}

      temp4={this.state.temp4}
      datetime4={this.state.datetime4}
      weather4={this.state.weather4}
      low_temp4={this.state.low_temp4}
      max_temp4={this.state.max_temp4}

      temp5={this.state.temp5}
      datetime5={this.state.datetime5}
      weather5={this.state.weather5}
      low_temp5={this.state.low_temp5}
      max_temp5={this.state.max_temp5}

      temp6={this.state.temp6}
      datetime6={this.state.datetime6}
      weather6={this.state.weather6}
      low_temp6={this.state.low_temp6}
      max_temp6={this.state.max_temp6}

      temp7={this.state.temp7}
      datetime7={this.state.datetime7}
      weather7={this.state.weather7}
      low_temp7={this.state.low_temp7}
      max_temp7={this.state.max_temp7}
      />
      <Footer/>
    </div>
  );
  }
}
export default App;
