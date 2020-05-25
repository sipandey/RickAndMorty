const dayDiff = function(d1, d2) {
  return new Number((d2.getTime() - d1.getTime()) / 31536000000).toFixed(0);
};

export { dayDiff };
