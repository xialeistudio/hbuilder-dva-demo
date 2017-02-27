import React from 'react';
import { connect } from 'dva';
import styles from './Device.css';
import Navbar from '../components/Navbar';
import { Button, WingBlank, WhiteSpace, List } from 'antd-mobile';
const Item = List.Item;
function Device({ device, screen, dispatch, display, network, os }) {
  return (
    <div className={styles.normal}>
      <Navbar title="设备信息"/>
      <List renderHeader="Device">
        <Item extra={device.imei}>imei</Item>
        <Item extra={device.imsi}>imsi</Item>
        <Item extra={device.model}>model</Item>
        <Item extra={device.vendor}>vendor</Item>
        <Item extra={device.uuid}>uuid</Item>
      </List>
      <List renderHeader="Screen">
        <Item extra={screen.resolutionHeight}>屏幕高度分辨率</Item>
        <Item extra={screen.resolutionWidth}>屏幕宽度分辨率</Item>
        <Item extra={screen.scale}>分辨率比率</Item>
        <Item extra={screen.dpiX}>屏幕水平方向的密度</Item>
        <Item extra={screen.dpiY}>屏幕垂直方向的密度</Item>
        <Item extra={screen.brightness} arrow="horizontal" onClick={e => dispatch({ type: 'device/loadBrightness' })}>设备亮度</Item>
      </List>
      <List renderHeader="display">
        <Item extra={display.resolutionHeight}>屏幕高度分辨率</Item>
        <Item extra={display.resolutionWidth}>屏幕宽度分辨率</Item>
      </List>
      <List renderHeader="network">
        <Item extra={network} arrow="horizontal" onClick={e => dispatch({ type: 'device/loadNetwork' })}>网络类型</Item>
      </List>
      <List renderHeader="os">
        <Item extra={os.language}>语言信息</Item>
        <Item extra={os.version}>版本信息</Item>
        <Item extra={os.name}>系统名称</Item>
        <Item extra={os.vendor}>供应商信息</Item>
      </List>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.device
  };
}

export default connect(mapStateToProps)(Device);
