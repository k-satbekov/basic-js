const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!members || !(members instanceof Array)) return false;
  let res = [];
  for(const name of members) {
    if (typeof name === 'string') {
      const correct = name.trim();
      res.push(correct[0].toUpperCase());
    }
  }
  return res.sort().join('');
};
