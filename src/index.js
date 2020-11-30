import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AKApp from "./App";

ReactDOM.render(<AKApp/>, document.getElementById('root'));

serviceWorker.unregister();
