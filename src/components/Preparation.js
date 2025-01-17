import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../context/TimerContext';

const Work = styled.div`
  background: var(--preparation-color);
  border-radius: 5px;
`;

const Preparation = () => {
  const { tabata, setTabata } = useContext(TimerContext);

  const increase = () => {
    let p = tabata.preparation + 1;
    setTabata({ ...tabata, preparation: p });
  };

  const decrease = () => {
    let p = tabata.preparation - 1;
    setTabata({ ...tabata, preparation: p });
  };

  return (
    <Work>
      <h2>Preparation</h2>
      <div className='timeContainer'>
        <div className='btn' onClick={increase}>
          <span>+</span>
        </div>
        <div className='time'>
          <h3>{tabata.preparation}</h3>
          <p>seconds</p>
        </div>
        <div className='btn' onClick={decrease}>
          <span>-</span>
        </div>
      </div>
    </Work>
  );
};

export default Preparation;
