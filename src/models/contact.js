import * as service from '../services/contact';
export default {
  namespace: 'contact',
  state: {
    displayList: [],
    list: [],
    loading: false
  },
  reducers: {
    loading(state) {
      return {
        ...state,
        loading: true
      }
    },
    dataLoaded(state, { payload }) {
      return {
        ...state,
        list: payload.list,
        displayList: payload.list,
        loading: false
      }
    },
    search(state, { payload: keyword }) {
      const list = state.list.filter((item) => {
        return keyword.length === 0 || item.displayName.indexOf(keyword) !== -1 || item.phoneNumbers.some(number => number.value.indexOf(keyword) !== -1);
      });
      return {
        ...state,
        displayList: list
      }
    }
  },
  effects: {
    *loadAll({}, { call, put }) {
      yield put({ type: 'loading' });
      yield call(service.init);
      let data = yield call(service.find, ['displayName', 'phoneNumbers']);
      data = data.map((item) => {
        item.phoneNumbers = item.phoneNumbers.map((number) => {
          number.value = number.value.replace(/(\+86|-|\s)/g, '');
          return number;
        });
        return item;
      });
      yield put({
        type: 'dataLoaded',
        payload: {
          list: data,
        }
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/contact') {
          dispatch({ type: 'loadAll' });
        }
      });
    }
  },
};
