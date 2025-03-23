// App's common utility functions resides here.

const isEmpty = (val) =>
  val === undefined ||
  val === null ||
  (typeof val === "object" && !Object.keys(val)?.length) ||
  (typeof val === "string" && !val.trim().length);

export const safePromise = (promise) =>
  promise.then((res) => [null, res]).catch((err) => [err]);

export default {
  isEmpty,
  safePromise,
};
