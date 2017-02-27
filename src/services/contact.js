/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 2017/2/27
 */
let handler;
/**
 * 初始化
 * @returns {Promise}
 */
export async function init() {
  return new Promise((resolve, reject) => {
    if (handler !== undefined) {
      return resolve();
    }
    plus.contacts.getAddressBook(type, (addressBook) => {
      handler = addressBook;
      resolve();
    }, reject);
  });
}

/**
 * 查找
 * @param fields
 * @param options
 * @returns {Promise}
 */
export async function find(fields, options) {
  return new Promise((resolve, reject) => {
    if (handler === undefined) {
      return reject(new Error('未初始化Contact'));
    }
    handler.find(fields, resolve, reject, options);
  });
}
