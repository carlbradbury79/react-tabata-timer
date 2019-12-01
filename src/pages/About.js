import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ color: 'white' }}>
      <Link to='/'>Start</Link>
      <h1>About</h1>

      <p>Version 1.0 of my timer</p>
    </div>
  );
};

export default About;
