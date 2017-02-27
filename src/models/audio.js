import * as service from '../services/audio';
export default {
  namespace: 'audio',
  state: {
    recording: false,
    filename: null,
    recorder: null,
    player: null,
  },
  reducers: {},
  effects: {},
  subscriptions: {},
};
