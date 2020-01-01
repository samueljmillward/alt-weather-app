import React, { Component } from 'react';
// import { get } from 'axios'
import PostcodeForm from '../components/PostcodeForm'
import WeatherList from '../components/WeatherList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      zipcode: '',
      city: {},
      dates: [],
      selectedDate: null
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(zipcode) {
    this.setState({ zipcode })
  }

  render() {
    return <div className="app">
      <PostcodeForm onSubmit={this.onFormSubmit} />
      <WeatherList days={this.state.dates} />
    </div>
  }
};

export default App;
