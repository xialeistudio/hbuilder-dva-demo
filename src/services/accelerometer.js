/**
 * @date 2017/2/27
 * @author xialeistudio<1065890063@qq.com>
 */
export async function getCurrentAcceleration() {
  return new Promise((resolve, reject) => {
    plus.accelerometer.getCurrentAcceleration(resolve, reject);
  });
}
