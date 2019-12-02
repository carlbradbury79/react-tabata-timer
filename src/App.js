import React from 'react';
import styled from 'styled-components';
import Preparation from './components/Preparation';
import Workout from './components/Workout';
import Rest from './components/Rest';
import Start from './components/Start';
import TimerContextProvider from './context/TimerContext';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Timer from './pages/Timer';
import Cycles from './components/Cycles';
import Tabatas from './components/Tabatas';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

function App() {
  return (
    <div className='App'>
      <TimerContextProvider>
        <Router>
          <Title>Tabata Timer</Title>
          <Switch>
            <Route exact path='/'>
              <Link to='/about'>About</Link>
              <Preparation />
              <Workout />
              <Rest name='rest' color='red' />
              <Cycles />
              <Tabatas />
              <Link to='/timer'>Timer</Link>
            </Route>
            <Route exact path='/timer'>
              <Timer />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
        </Router>
      </TimerContextProvider>
    </div>
  );
}

export default App;
