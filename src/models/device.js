const types = {};
types[plus.networkinfo.CONNECTION_UNKNOW] = "Unknown";
types[plus.networkinfo.CONNECTION_NONE] = "None";
types[plus.networkinfo.CONNECTION_ETHERNET] = "Ethernet";
types[plus.networkinfo.CONNECTION_WIFI] = "WiFi";
types[plus.networkinfo.CONNECTION_CELL2G] = "2G";
types[plus.networkinfo.CONNECTION_CELL3G] = "3G";
types[plus.networkinfo.CONNECTION_CELL4G] = "4G";
export default {
  namespace: 'device',
  state: {
    device: {
      imei: null,
      imsi: null,
      model: null,
      vendor: null,
      uuid: null,
      volumn: 0,
    },
    screen: {
      resolutionHeight: 0,
      resolutionWidth: 0,
      scale: 1,
      dpiX: 0,
      dpiY: 0,
      brightness: 0
    },
    display: {
      resolutionHeight: 0,
      resolutionWidth: 0,
    },
    network: null,
    os: {
      language: null,
      version: null,
      name: null,
      vendor: null
    }
  },
  reducers: {
    saveDevice(state, { payload }) {
      return {
        ...state,
        device: { ...payload }
      };
    },
    saveScreen(state, { payload }) {
      return {
        ...state,
        screen: { ...payload }
      }
    },
    saveDisplay(state, { payload }) {
      return {
        ...state,
        display: { ...payload }
      }
    },
    loadBrightness(state) {
      return {
        ...state,
        screen: { ...state.screen, brightness: plus.screen.getBrightness() }
      }
    },
    loadNetwork(state) {
      const network = plus.networkinfo.getCurrentType();
      return {
        ...state,
        network: types[network]
      }
    },
    saveOs(state, { payload }) {
      return {
        ...state,
        os: { ...payload }
      }
    }
  },
  effects: {},
  subscriptions: {
    setupDevice({ dispatch }) {
      if (window.plus !== undefined) {
        const payload = {
          imei: plus.device.imei,
          imsi: plus.device.imsi,
          model: plus.device.model,
          vendor: plus.device.vendor,
          uuid: plus.device.uuid
        };
        dispatch(
          {
            type: 'saveDevice',
            payload
          });
      }
    },
    setupScreen({ dispatch }) {
      if (window.plus !== undefined) {
        const payload = {
          resolutionHeight: plus.screen.resolutionHeight,
          resolutionWidth: plus.screen.resolutionWidth,
          scale: plus.screen.scale,
          dpiX: plus.screen.dpiX,
          dpiY: plus.screen.dpiY,
          brightness: plus.screen.getBrightness()
        };
        dispatch(
          {
            type: 'saveScreen',
            payload
          });
      }
    },
    setupDisplay({ dispatch }) {
      if (window.plus !== undefined) {
        const payload = {
          resolutionHeight: plus.display.resolutionHeight,
          resolutionWidth: plus.display.resolutionWidth,
        };
        dispatch(
          {
            type: 'saveDisplay',
            payload
          });
      }
    },
    setupNetwork({ dispatch }) {
      if (window.plus !== undefined) {
        dispatch(
          {
            type: 'loadNetwork',
          });
      }
    },
    setupOs({ dispatch }) {
      if (window.plus !== undefined) {
        const payload = {
          language: plus.os.language,
          version: plus.os.version,
          name: plus.os.name,
          vendor: plus.os.vendor
        };
        dispatch(
          {
            type: 'saveOs',
            payload
          });
      }
    }
  },
};
