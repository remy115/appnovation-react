import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import store from './createStore';

const jsx=(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/album/:id" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
// registerServiceWorker();
