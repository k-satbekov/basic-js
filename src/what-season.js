const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  try {
    date.getUTCHours();
  } catch (exception) {
    throw new Error(exception);
  }

  const dateMonth = date.getMonth();

  if ((dateMonth === 11) || (dateMonth >= 0 && dateMonth <= 1)) return 'winter';
  if (dateMonth >= 2 && dateMonth <= 4) return 'spring';
  if (dateMonth >= 5 && dateMonth <= 7) return 'summer';
  if (dateMonth >= 8 && dateMonth <= 10) return 'fall';
};
