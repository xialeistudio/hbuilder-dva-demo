import React from 'react';
import { connect } from 'dva';
import styles from './Accelerometer.css';
import Navbar from '../components/Navbar';
import { Button, WingBlank, WhiteSpace, List } from 'antd-mobile';
const ListItem = List.Item;
function Accelerometer({ dispatch, xAxis, yAxis, zAxis, loading }) {
  return (
    <div className={styles.normal}>
      <Navbar title="Accelerometer"/>
      <WhiteSpace/>
      <WingBlank>
        <Button loading={loading} type="primary"
                onClick={e => dispatch({ type: 'accelerometer/current' })}>获取当前数据</Button>
      </WingBlank>
      <List renderHeader="当前数据">
        <ListItem extra={xAxis}>xAxis</ListItem>
        <ListItem extra={yAxis}>yAxis</ListItem>
        <ListItem extra={zAxis}>zAxis</ListItem>
      </List>
    </div>
  );
}

function mapStateToProps(state) {
  return state.accelerometer;
}

export default connect(mapStateToProps)(Accelerometer);
