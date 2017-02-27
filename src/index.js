import dva from 'dva';
import './index.css';
import { Toast } from 'antd-mobile';

// 1. Initialize
const app = dva({
  onError(e) {
    Toast.fail(e.message);
  }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/home'));

app.model(require("./models/contact"));

app.model(require("./models/device"));

app.model(require("./models/barcode"));

app.model(require("./models/audio"));

app.model(require("./models/accelerometer"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
