const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    return arr.reduce((accum, currValue) => {
      if (Array.isArray(currValue)) {
        return Math.max(this.calculateDepth(currValue, depth + 1), accum);
      }
      return accum;
    }, depth)
  }
};