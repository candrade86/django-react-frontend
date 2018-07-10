import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

import Root from './Root';
import App from './components/App';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import Main from './components/Main';

injectGlobal`
    ${reset};
`

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App>
        <Route path='/' exact component={Main} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
      </App>
    </BrowserRouter>
  </Root>
, document.getElementById('root'));

