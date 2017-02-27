import React from "react";
import { connect } from "dva";
import { List } from "antd-mobile";
import Navbar from '../components/Navbar';
import styles from "./Home.css";
const ListItem = List.Item;
function Home(props, { router }) {
  return (
    <div className={styles.normal}>
      <Navbar showBack={false} title="HBuilder+Dva"/>
      <List>
        <ListItem arrow="horizontal" extra="加速度传感器"
                  onClick={() => router.push('/accelerometer')}>Accelerometer</ListItem>
        <ListItem arrow="horizontal" extra="音频模块" onClick={() => router.push('/audio')}>Audio</ListItem>
        <ListItem arrow="horizontal" extra="条码扫描" onClick={() => router.push('/barcode')}>Barcode</ListItem>
        <ListItem arrow="horizontal" extra="摄像头">Camera</ListItem>
        <ListItem arrow="horizontal" extra="联系人" onClick={() => router.push('/contact')}>Contacts</ListItem>
        <ListItem arrow="horizontal" extra="设备信息" onClick={() => router.push('/device')}>Device</ListItem>
        <ListItem arrow="horizontal" extra="下载模块">Downloader</ListItem>
        <ListItem arrow="horizontal" extra="事件模块">Events</ListItem>
        <ListItem arrow="horizontal" extra="相册模块">Gallery</ListItem>
        <ListItem arrow="horizontal" extra="定位模块">Geolocation</ListItem>
        <ListItem arrow="horizontal" extra="本地文件系统">IO</ListItem>
        <ListItem arrow="horizontal" extra="按键事件">Key</ListItem>
        <ListItem arrow="horizontal" extra="地图模块">Maps</ListItem>
        <ListItem arrow="horizontal" extra="消息模块">Messaging</ListItem>
        <ListItem arrow="horizontal" extra="原生UI">nativeUI</ListItem>
        <ListItem arrow="horizontal" extra="浏览器对象">Navigator</ListItem>
        <ListItem arrow="horizontal" extra="授权登录">OAuth</ListItem>
        <ListItem arrow="horizontal" extra="方向传感器">Orientation</ListItem>
        <ListItem arrow="horizontal" extra="支付模块">Payment</ListItem>
        <ListItem arrow="horizontal" extra="距离传感器">Proximity</ListItem>
        <ListItem arrow="horizontal" extra="推送">Push</ListItem>
        <ListItem arrow="horizontal" extra="运行环境">Runtime</ListItem>
        <ListItem arrow="horizontal" extra="分享">Share</ListItem>
        <ListItem arrow="horizontal" extra="语音输入">Speech</ListItem>
        <ListItem arrow="horizontal" extra="统计功能">Statistic</ListItem>
        <ListItem arrow="horizontal" extra="本地数据存储">Storage</ListItem>
        <ListItem arrow="horizontal" extra="网络上传">Uploader</ListItem>
        <ListItem arrow="horizontal" extra="应用窗口">webview</ListItem>
        <ListItem arrow="horizontal" extra="网络请求">net</ListItem>
        <ListItem arrow="horizontal" extra="文件压缩和解压">Zip</ListItem>
      </List>
    </div>
  );
}
Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect()(Home);
