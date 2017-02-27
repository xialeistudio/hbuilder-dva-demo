import * as service from '../services/accelerometer';
export default {
  namespace: 'accelerometer',
  state: {
    xAxis: 0,
    yAxis: 0,
    zAxis: 0,
    loading: false
  },
  reducers: {
    watching(state, { payload }) {
      return {
        ...state,
        watching: payload.watching
      };
    },
    data(state, { payload }) {
      return {
        ...state,
        ...payload,
        loading: false
      };
    },
    loading(state, { payload }) {
      return {
        ...state,
        loading: payload
      }
    }
  },
  effects: {
    *current({}, { call, put }) {
      yield put({ type: 'loading', payload: true });
      const payload = yield call(service.getCurrentAcceleration);
      yield put({
        type: 'data',
        payload
      });
    },

  },
  subscriptions: {},
};
