import React, { Component } from 'react';
import '../styles/Calendly.css';
class Calendly extends Component {

    componentDidMount() {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
      head.appendChild(script);
    }
  
    componentWillUnmount() {
      //clean widget code
    }
  
    render(){
      return (
        <div>
          <div id="schedule_form">
            <div 
              className="calendly-inline-widget"
              data-url="https://calendly.com/fadingbeat"
              style={{ minWidth: '320px', height: '440px' }} />
          </div>
        </div>
      );
    }
  }
  
  export default Calendly;