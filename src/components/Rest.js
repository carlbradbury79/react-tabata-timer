import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../context/TimerContext';

const RestDiv = styled.div`
  background: green;
`;

const Rest = props => {
  const { name, color } = props;
  const { tabata, editRest } = useContext(TimerContext);
  const [rest, setRest] = useState(tabata.rest);

  const increase = () => {
    setRest(rest => rest + 1);
    editRest(rest);
  };

  const decrease = () => {
    setRest(rest => rest - 1);
    editRest(rest);
  };

  console.log('rest', name, color);
  return (
    <RestDiv>
      <h2>
        {name} {rest}{' '}
      </h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </RestDiv>
  );
};

export default Rest;
