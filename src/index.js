import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App dataSrc="data.json" />, document.getElementById('root'));
registerServiceWorker();
