import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home/Home';
import Repos from './components/Repos/Repos';
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/repos/:user' component={Repos} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
