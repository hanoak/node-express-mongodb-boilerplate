// App's common utility functions resides here.

const isEmpty = (val) =>
  val === undefined ||
  val === null ||
  (typeof val === "object" && !Object.keys(val)?.length) ||
  (typeof val === "string" && !val.trim().length);

export default {
  isEmpty,
};
