import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../context/TimerContext';

const Work = styled.div`
  background: var(--cycles-color);
`;

const Cycles = () => {
  const { tabata, setTabata } = useContext(TimerContext);

  const increase = () => {
    let p = tabata.cycles + 1;
    setTabata({ ...tabata, cycles: p });
  };

  const decrease = () => {
    let p = tabata.cycles - 1;
    setTabata({ ...tabata, cycles: p });
  };

  return (
    <Work>
      <h2>Cycles</h2>
      <div className='timeContainer'>
        <div className='btn' onClick={increase}>
          <span>+</span>
        </div>
        <div className='time'>
          <h3>{tabata.cycles}</h3>
          {/* <p>seconds</p> */}
        </div>
        <div className='btn' onClick={decrease}>
          <span>-</span>
        </div>
      </div>
    </Work>
  );
};

export default Cycles;
