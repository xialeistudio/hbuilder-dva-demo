import React from 'react';
import { Router, Route } from 'dva/router';
import Home from './routes/Home';

import Accelerometer from './routes/Accelerometer.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Home} />
      <Route path="/accelerometer" component={Accelerometer} />
    </Router>
  );
}

export default RouterConfig;
