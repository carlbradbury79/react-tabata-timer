import React, { useContext, useEffect, useState } from 'react';
import { TimerContext } from '../context/TimerContext';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Timer = () => {
  const { tabata, changeValue } = useContext(TimerContext);

  const [preparation, setPreparation] = useState(tabata.preparation);
  const [workout, setWorkout] = useState(tabata.workout);
  const [rest, setRest] = useState(tabata.rest);
  const [cycles, setCycles] = useState(tabata.cycles);
  const [tabatas, setTabatas] = useState(tabata.tabatas);
  const [currentValue, setCurrentValue] = useState();
  const [place, setPlace] = useState('Start');

  console.log(preparation, workout, rest, cycles, tabatas);

  // Active toggle
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function getBackground() {
    if (place === 'Prepare') {
      return 'yellow';
    } else if (place === 'Workout') {
      return 'green';
    } else if (place === 'Rest') {
      return 'red';
    } else {
      return 'blue';
    }
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        // Prep countdown
        if (preparation > 0) {
          console.log('preparation', preparation);
          setPreparation(preparation => preparation - 1);
          setCurrentValue(preparation);
          setPlace('Prepare');

          // Workout countdown
        } else if (workout >= 0) {
          console.log('workout', workout);
          setWorkout(workout => workout - 1);
          setCurrentValue(workout);
          setPlace('Workout');

          // Rest countdown
        } else if (rest >= 0) {
          console.log('rest', rest);
          setRest(rest => rest - 1);
          setCurrentValue(rest);
          setPlace('Rest');
        }

        // Change cycles
        if (rest === 0 && cycles > 1 && workout === 0) {
          console.log('Change cycle');
          console.log(preparation, workout, rest, cycles, tabatas);

          setCycles(cycles => cycles - 1);
          setWorkout(tabata.workout);
          setRest(tabata.rest);
        }

        // Change tabatas
        if (rest === 0 && cycles === 0 && workout === 0 && tabatas > 1) {
          setCycles(tabata.cycles);
          setWorkout(tabata.workout);
          setRest(tabata.rest);
          setTabatas(tabatas => tabatas - 1);
        }

        // Complete Workout
        if (rest === -1 && cycles === 1 && workout === -1 && tabatas === 1) {
          setPlace('Workout Complete');
        }
      }, 1000);
    } else if (!isActive && preparation !== 0) {
      console.log('else if');
      clearInterval(interval);
    }
    // console.log('clear');
    console.log(place);
    return () => clearInterval(interval);
  });

  return (
    <div style={{ color: 'white', background: getBackground() }}>
      <Link to='/'>Home</Link>
      <p>
        Cylces: {cycles}, Tabatas: {tabatas}
      </p>
      <h1>{currentValue}</h1>
      <h2 onClick={toggle}>{place}</h2>
      <button
        className={`button-primary-${isActive ? 'active' : 'inactive'}`}
        onClick={toggle}
      >
        {isActive ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;
