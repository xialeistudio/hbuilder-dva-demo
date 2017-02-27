export default {

  namespace: 'home',

  state: {
    ready: false
  },

  subscriptions: {
    ready({ dispatch }) {
      document.addEventListener('plusready', () => dispatch({ type: 'ready' }));
    }
  },

  effects: {},

  reducers: {
    ready(state) {
      return {
        ...state,
        ready: true
      }
    }
  },

};
