import React, { createContext, useState } from 'react';

export const TimerContext = createContext();

const TimerContextProvider = props => {
  const [tabata, setTabata] = useState({
    preparation: 10,
    workout: 20,
    rest: 10,
    cycles: 1,
    tabatas: 1
  });

  const changeValue = (val, value) => {
    console.log('val', val);
    setTabata({ ...tabata, preparation: parseInt(value) });
    console.log('welp', val, value);
  };

  const increaseWorkout = value => {
    setTabata({ ...tabata, workout: value });
  };

  const editRest = value => {
    setTabata({ ...tabata, rest: value });
  };

  return (
    <TimerContext.Provider
      value={{ tabata, changeValue, increaseWorkout, editRest }}
    >
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerContextProvider;
