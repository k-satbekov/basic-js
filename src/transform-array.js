const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw new Error('Error');

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (typeof arr[i + 1] === 'number') {
          arr.splice(i + 1, 1);
        }
        break;
      case '--discard-prev':
        if (typeof arr[i - 1] === 'number') {
          arr.splice(i - 1, 1);
        }
        break;
      case '--double-next':  
        if (typeof arr[i + 1] === 'number') {
          arr.splice(i + 1, 0, arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (typeof arr[i - 1] === 'number') {
          arr.splice(i, 0, arr[i - 1]);
        }
        i++;
        break;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        arr.splice(i--, 1);
        break;
      case '--discard-prev':
        arr.splice(i--, 1);
        break;
      case '--double-next':
        arr.splice(i--, 1);
        break;
      case '--double-prev':
        arr.splice(i--, 1);
        break;
    }
  }

  return arr;

};
