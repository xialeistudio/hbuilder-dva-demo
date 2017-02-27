import React from 'react';
import { connect } from 'dva';
import styles from './Contact.css';
import Navbar from '../components/Navbar';
import { Button, WingBlank, WhiteSpace, List, ActivityIndicator, SearchBar } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
function Contact({ dispatch, loading, displayList: list }) {
  return (
    <div className={styles.normal}>
      <ActivityIndicator
        toast
        text="正在加载"
        animating={loading}
      />
      <Navbar title="Contact"/>
      <SearchBar placeholder={`成功加载${list.length}人`}
                 onChange={value => dispatch({ type: 'contact/search', payload: value })}/>
      <List>
        {list.map((item, index) => {
          return (
            <Item wrap={false}
                  key={index}>{item.displayName}<Brief>{item.phoneNumbers.map((item) => item.value).join(',')}</Brief></Item>
          );
        })}
      </List>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.contact
  };
}

export default connect(mapStateToProps)(Contact);
