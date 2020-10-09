const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = '';

  (options.repeatTimes === undefined) ? options.repeatTimes = 1 : null;

  for (let i = 0; i < options.repeatTimes; i++) {
    res += str;
    if (options.addition !== undefined) {
      if(options.additionRepeatTimes) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          (j === options.additionRepeatTimes - 1) ? res += options.addition : res += options.addition + options.additionSeparator;
        }
      } else {
        res += options.addition;
      }
    }
    if (options.separator === undefined) {
      options.separator = '+';
    }
    if (i < options.repeatTimes - 1) {
      res += options.separator;
    }
  }

  return res;
};
  