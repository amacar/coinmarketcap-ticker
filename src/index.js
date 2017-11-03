import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import './index.css';
import reducer from './modules/core/reducers/combine'
import App from './modules/core/App';
import registerServiceWorker from './modules/core/registerServiceWorker';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
