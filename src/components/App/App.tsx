import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import authStore, { FormDataAuth } from '../../stores/authStore';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import PersonalAreaPage from '../pages/PersonalAreaPage';
import PrivateRoute from '../PrivateRoute';
import './App.css';

function App() {

  const history = useHistory();

  const submit = async (formData: FormDataAuth): Promise<void> => {
    await authStore.auth(formData);
    history.push('/personal-area/authors');
  }

  const [token, setToken] = useState<string>('');
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    setToken(location.search.split('=')[1])
  }, [])

  const { login, role } = authStore;

  return (
    <div className="App">
      <Switch>
        <Route exact path={['/', '/login']} component={() => <LoginPage token={token} submit={submit} />} />
        <PrivateRoute path="/personal-area" component={(() => <PersonalAreaPage login={login} role={role} />)} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default observer(App);
