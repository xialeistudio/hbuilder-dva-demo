/**
 * @date 2017/2/27
 * @author xialeistudio<1065890063@qq.com>
 */
/**
 * 开始录音
 * @param recorder
 * @param options
 * @return {Promise}
 */
export async function startRecord(recorder, options) {
  return new Promise((resolve) => {
    recorder.record(options, resolve);
  });
}

/**
 * 停止录音
 * @param recorder
 */
export function stopRecord(recorder) {
  recorder.stop();
}
/**
 * 获取录音对象
 * @return {*}
 */
export function getRecorder() {
  return plus.audio.getRecorder();
}

/**
 * 创建播放对象
 * @param path
 * @return {*}
 */
export function getPlayer(path) {
  return plus.audio.createPlayer(path);
}

/**
 * 播放音频
 * @param player
 * @return {Promise}
 */
export async function startPlay(player) {
  return new Promise((resolve, reject) => {
    player.play(resolve, reject);
  });
}

/**
 * 暂停播放
 * @param player
 * @return {void|*}
 */
export function pausePlay(player) {
  return player.pause();
}

/**
 * 恢复播放
 * @param player
 * @return {void|*}
 */
export function resumePlay(player) {
  return player.resume();
}


/**
 * 停止播放
 * @param player
 * @return {void|*}
 */
export function stopPlay(player) {
  return player.stop();
}

/**
 * 跳转指定位置播放，单位秒
 * @param player
 * @param time
 * @return {*}
 */
export function seekPlayerTo(player, time) {
  return player.seekTo(time);
}

/**
 * 获取音频流总长度，单位秒
 * @param player
 * @return {*}
 */
export function getPlayerDuration(player) {
  return player.getDuration();
}

/**
 * 获取当前播放时间，单位秒
 * @param player
 * @return {*}
 */
export function getPlayerPosition(player) {
  return player.getPosition();
}

/**
 * 设置播放器输出线路
 * @param player
 * @param route
 * @return {*}
 */
export function setPlayerRoute(player, route) {
  return player.setRoue(route);
}

export const ROUTE_SPEAKER = plus.audio.ROUTE_SPEAKER;
export const ROUTE_EARPIECE = plus.audio.ROUTE_EARPIECE;
