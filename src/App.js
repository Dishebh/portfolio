import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Resume from './Components/Resume';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    })
  };

  componentDidMount() {
    this.getResumeData();
  };

  render() {
    return (
      <div className="App">
        <Navbar data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
