// /**
//  * @date 2017/2/27
//  * @author xialeistudio<1065890063@qq.com>
//  */
// let recorder, player;
// /**
//  * 开始录音
//  * @param options
//  * @return {Promise}
//  */
// export async function startRecord(options) {
//   return new Promise((resolve) => {
//     recorder.record(options, resolve);
//   });
// }
//
// /**
//  * 停止录音
//  */
// export function stopRecord() {
//   recorder.stop();
// }
// /**
//  * 获取录音对象
//  * @return {*}
//  */
// export function getRecorder() {
//   recorder = plus.audio.getRecorder();
// }
//
// /**
//  * 创建播放对象
//  * @param path
//  * @return {*}
//  */
// export function getPlayer(path) {
//   player = plus.audio.createPlayer(path);
// }
//
// /**
//  * 播放音频
//  * @return {Promise}
//  */
// export async function startPlay() {
//   return new Promise((resolve, reject) => {
//     player.play(resolve, reject);
//   });
// }
//
// /**
//  * 暂停播放
//  * @return {void|*}
//  */
// export function pausePlay() {
//   return player.pause();
// }
//
// /**
//  * 恢复播放
//  * @return {void|*}
//  */
// export function resumePlay() {
//   return player.resume();
// }
//
//
// /**
//  * 停止播放
//  * @return {void|*}
//  */
// export function stopPlay() {
//   return player.stop();
// }
//
// /**
//  * 跳转指定位置播放，单位秒
//  * @param time
//  * @return {*}
//  */
// export function seekPlayerTo(time) {
//   return player.seekTo(time);
// }
//
// /**
//  * 获取音频流总长度，单位秒
//  * @return {*}
//  */
// export function getPlayerDuration() {
//   return player.getDuration();
// }
//
// /**
//  * 获取当前播放时间，单位秒
//  * @return {*}
//  */
// export function getPlayerPosition() {
//   return player.getPosition();
// }
//
// /**
//  * 设置播放器输出线路
//  * @param route
//  * @return {*}
//  */
// export function setPlayerRoute(route) {
//   return player.setRoue(route);
// }
//
// export const ROUTE_SPEAKER = plus.audio.ROUTE_SPEAKER;
// export const ROUTE_EARPIECE = plus.audio.ROUTE_EARPIECE;
