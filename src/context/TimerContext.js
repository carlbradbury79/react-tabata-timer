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

  // Old way of getting value
  // const changeValue = (val, value) => {
  //   console.log('val', val);
  //   setTabata({ ...tabata, preparation: parseInt(value) });
  //   console.log('welp', val, value);
  // };

  const editPreparation = value => {
    setTabata({ ...tabata, preparation: value });
    console.log('editPrep', tabata);
  };

  const editWorkout = value => {
    setTabata({ ...tabata, workout: value });
    console.log('editWork', tabata);
  };

  const editRest = value => {
    setTabata({ ...tabata, rest: value });
    console.log('editRest', tabata);
  };

  const editCycles = value => {
    setTabata({ ...tabata, cycles: value });
    console.log('editCycles', tabata);
  };

  const editTabatas = value => {
    setTabata({ ...tabata, tabatas: value });
    console.log('editTabatas', tabata);
  };

  return (
    <TimerContext.Provider
      value={{
        tabata,
        setTabata,
        editWorkout,
        editRest,
        editCycles,
        editTabatas,
        editPreparation
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerContextProvider;
