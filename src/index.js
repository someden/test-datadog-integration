import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: process.env.REACT_APP_DATADOG_APPLICATION_ID,
  clientToken: process.env.REACT_APP_DATADOG_CLIENT_TOKEN,
  site: process.env.REACT_APP_DATADOG_SITE,
  service:process.env.REACT_APP_NAME,
  version: process.env.REACT_APP_VERSION,
  env: process.env.NODE_ENV,
  sampleRate: 100,
  trackInteractions: true,
});

datadogRum.startSessionReplayRecording();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
