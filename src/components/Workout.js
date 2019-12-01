import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../context/TimerContext';

const Work = styled.div`
  background: red;
`;

const Workout = () => {
  const { tabata, increaseWorkout } = useContext(TimerContext);
  const [workout, setWorkout] = useState(tabata.workout);

  const increase = () => {
    setWorkout(workout => workout + 1);
    increaseWorkout(workout);
  };

  const decrease = () => {
    setWorkout(workout => workout - 1);
    increaseWorkout(workout);
  };

  return (
    <Work>
      <h2>Workout {workout}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </Work>
  );
};

export default Workout;
