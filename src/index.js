import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: '0c07075d-d5d8-4b6e-a52e-3d4fd73f77d0',
  clientToken: 'pub21614b888027ba0a2d54992925e44366',
  site: 'datadoghq.com',
  service: 'test-datadog-integration',
  version: '0.1.0',
  env: 'production',
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
