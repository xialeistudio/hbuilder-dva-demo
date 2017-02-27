import React from 'react';
import { Router, Route } from 'dva/router';
import Home from './routes/Home';

import Accelerometer from './routes/Accelerometer.js';

import Audio from "./routes/Audio.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Home} />
      <Route path="/accelerometer" component={Accelerometer} />
      <Route path="/audio" component={Audio} />
    </Router>
  );
}

export default RouterConfig;
