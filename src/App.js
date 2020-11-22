import React from 'react'
import './App.css'
import {HashRouter as Router ,Switch , Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact  />
        <Route path='/contact' component={Contact} exact  />
      </Switch>
    </Router>
  );
}

export default App;
