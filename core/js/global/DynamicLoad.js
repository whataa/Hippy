/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */

const ContextifyModule = internalBinding('ContextifyModule');

global.dynamicLoad = (path, encode, cb) => {
  let requestPath = path || '';
  const isSchema = /^(.+:\/\/)|^(\/\/)/.test(path);
  if (!isSchema) {
    requestPath = global.__HIPPYCURDIR__ + path;
  }
  ContextifyModule.LoadUntrustedContent(requestPath, encode, cb);
};
