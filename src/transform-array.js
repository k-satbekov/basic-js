const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw new Error('Error');

  return arr.reduce((accum, currElement, index) => {
    if (currElement === '--discard-next') {
      accum[index] = undefined;
      accum[index + 1] = undefined;
    }
    else if (currElement === '--discard-prev') {
      accum[index] = undefined;
      accum[index - 1] = undefined;
    }
    else if (currElement === '--double-next') {
      accum[index] = accum[index + 1];
    }
    else if (currElement === '--double-prev') {
      accum[index] = accum[index - 1];
    }
    return accum
  }, [...arr]).filter(element => element !== undefined);

};
