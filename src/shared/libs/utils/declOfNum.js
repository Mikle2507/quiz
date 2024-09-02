const declOfNum = (n, arr) => {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return arr[2];
  }
  if (n1 > 1 && n1 < 5) {
    return arr[1];
  }
  if (n1 == 1) {
    return arr[0];
  }
  return arr[2];
};

export default declOfNum;