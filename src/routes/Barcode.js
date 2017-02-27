import React from 'react';
import { connect } from 'dva';
import styles from './Barcode.css';
import Navbar from '../components/Navbar';
import { Button, WingBlank, WhiteSpace, List } from 'antd-mobile';

function Barcode() {
  return (
    <div className={styles.normal}>
      <Navbar title="条码扫描"/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.barcode
  };
}

export default connect(mapStateToProps)(Barcode);
