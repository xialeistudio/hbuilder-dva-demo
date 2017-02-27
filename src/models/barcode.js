export default {
  namespace: 'barcode',
  state: {
    data: null
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  },
  effects: {},
  subscriptions: {},
};
