const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!sampleActivity || (typeof sampleActivity !== 'string') || sampleActivity === '' || sampleActivity === ' ') return false;
  
  const regExp = /[a-zA-Z]/g;
  if(regExp.test(sampleActivity)) return false;

  let res = 0;
  const parsedSample = parseFloat(sampleActivity);

  if(parsedSample <= 0 || parsedSample > 15) return false;

  const firstOrder = 0.693;
  const k = firstOrder / HALF_LIFE_PERIOD;
  res = Math.ceil(Math.log(MODERN_ACTIVITY / parsedSample) / k);
  
  return res;
};
