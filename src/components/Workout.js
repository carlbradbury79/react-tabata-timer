import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../context/TimerContext';

const Work = styled.div`
  background: red;
`;

const Workout = () => {
  const { tabata, setTabata } = useContext(TimerContext);

  const increase = () => {
    let p = tabata.workout + 1;
    setTabata({ ...tabata, workout: p });
  };

  const decrease = () => {
    let p = tabata.workout - 1;
    setTabata({ ...tabata, workout: p });
  };

  return (
    <Work>
      <h2>Workout</h2>
      <div className='timeContainer'>
        <div className='btn' onClick={increase}>
          <span>+</span>
        </div>
        <div className='time'>
          <h3>{tabata.workout}</h3>
          <p>seconds</p>
        </div>
        <div className='btn' onClick={decrease}>
          <span>-</span>
        </div>
      </div>
    </Work>
  );
};

export default Workout;
