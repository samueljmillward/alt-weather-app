import React, { Component } from 'react';
// import { get } from 'axios'
import PostcodeForm from '../components/PostcodeForm'

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
    </div>
  }
};

export default App;
