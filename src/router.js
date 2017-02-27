import React from 'react';
import { Router, Route } from 'dva/router';
import Home from './routes/Home';

import Accelerometer from './routes/Accelerometer.js';

import Audio from "./routes/Audio.js";

import Barcode from "./routes/Barcode.js";

import Device from "./routes/Device.js";

import Contact from "./routes/Contact.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Home} />
      <Route path="/accelerometer" component={Accelerometer} />
      <Route path="/audio" component={Audio} />
      <Route path="/barcode" component={Barcode} />
      <Route path="/device" component={Device} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default RouterConfig;
