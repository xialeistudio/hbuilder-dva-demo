import React from 'react';
import { connect } from 'dva';
import styles from './Audio.css';
import Navbar from '../components/Navbar';
import { Button, WingBlank, WhiteSpace, List } from 'antd-mobile';
function Audio() {
  return (
    <div className={styles.normal}>
      <Navbar title="Audio"/>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Audio);
