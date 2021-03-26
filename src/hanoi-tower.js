const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(d, t) {
  let turns = Math.pow(2,d) -1
  let time = Math.floor((3600/t) * turns)
  return { turns: turns, seconds: time }
};
