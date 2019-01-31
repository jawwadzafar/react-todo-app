import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
//using hashrouter because hosted to a static site server
import {HashRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
    <App/>
  </HashRouter>, document.getElementById('root'));
  registerServiceWorker();


