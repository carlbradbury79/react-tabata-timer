import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../context/TimerContext';

const Prep = styled.div`
  background: yellow;
  border-radius: 5px;
`;

const Preparation = () => {
  const { tabata, changeValue } = useContext(TimerContext);
  console.log('p', tabata);
  const [click, setClick] = useState(false);
  const [prepValue, setPrepValue] = useState();

  console.log(tabata);

  const clickPrep = () => {
    setClick(!click);
  };

  const handleSubmit = e => {
    e.preventDefault();
    changeValue('preparation', prepValue);
    setClick(!click);
  };

  return !click ? (
    <Prep onClick={clickPrep}>
      <h2>{tabata.preparation}</h2>
    </Prep>
  ) : (
    <form className='bookForm' onSubmit={handleSubmit}>
      <input
        type='number'
        placeholder='Enter time'
        value={prepValue}
        onChange={e => setPrepValue(e.target.value)}
        required
      />
      <input type='submit' value='Enter time' />
    </form>
  );
};

export default Preparation;
