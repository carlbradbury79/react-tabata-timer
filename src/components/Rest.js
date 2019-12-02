import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../context/TimerContext';

const Work = styled.div`
  background: green;
`;

const Rest = props => {
  const { name, color } = props;
  const { tabata, setTabata } = useContext(TimerContext);

  const increase = () => {
    let p = tabata.rest + 1;
    setTabata({ ...tabata, rest: p });
  };

  const decrease = () => {
    let p = tabata.rest - 1;
    setTabata({ ...tabata, rest: p });
  };

  // console.log('rest', name, color);
  return (
    <Work>
      <h2>Rest</h2>
      <div className='timeContainer'>
        <div className='btn' onClick={increase}>
          <span>+</span>
        </div>
        <div className='time'>
          <h3>{tabata.rest}</h3>
          <p>seconds</p>
        </div>
        <div className='btn' onClick={decrease}>
          <span>-</span>
        </div>
      </div>
    </Work>
  );
};

export default Rest;
