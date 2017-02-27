import React from 'react';
import { connect } from 'dva';
import styles from './Contact.css';
import Navbar from '../components/Navbar';
import { Button, WingBlank, WhiteSpace, List } from 'antd-mobile';

function Contact() {
  return (
    <div className={styles.normal}>
      <Navbar title="Contact"/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.contact
  };
}

export default connect(mapStateToProps)(Contact);
