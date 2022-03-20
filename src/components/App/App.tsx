import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import PersonalAreaPage from '../pages/PersonalAreaPage';
import PrivateRoute from '../PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={['/', '/login']} component={LoginPage} />
        <PrivateRoute path="/personal-area" component={PersonalAreaPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
