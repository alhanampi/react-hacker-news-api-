import React from 'react';
import {render} from 'react-dom';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

render(<App />, document.getElementById('root'));

serviceWorker.register();
