import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { TimerContext } from '../context/TimerContext';

const StartTabataButton = () => {
  const { tabata, setTabata } = useContext(TimerContext);
  const { preparation, workout, rest, cycles, tabatas } = tabata;

  return preparation > 0 &&
    workout > 0 &&
    rest > 0 &&
    cycles > 0 &&
    tabatas > 0 ? (
    <Link to='/timer' className='startTabataButton'>
      Start Tabata Workout
    </Link>
  ) : (
    <p style={{ color: 'white' }}>Please ensure all values are above 1</p>
  );
};

export default StartTabataButton;
