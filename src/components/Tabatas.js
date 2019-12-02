import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../context/TimerContext';

const Work = styled.div`
  background: var(--tabatas-color);
`;

const Tabatas = () => {
  const { tabata, setTabata } = useContext(TimerContext);

  const increase = () => {
    let p = tabata.tabatas + 1;
    setTabata({ ...tabata, tabatas: p });
  };

  const decrease = () => {
    let p = tabata.tabatas - 1;
    setTabata({ ...tabata, tabatas: p });
  };

  return (
    <Work>
      <h2>Tabatas</h2>
      <div className='timeContainer'>
        <div className='btn' onClick={increase}>
          <span>+</span>
        </div>
        <div className='time'>
          <h3>{tabata.tabatas}</h3>
          {/* <p>seconds</p> */}
        </div>
        <div className='btn' onClick={decrease}>
          <span>-</span>
        </div>
      </div>
    </Work>
  );
};

export default Tabatas;
