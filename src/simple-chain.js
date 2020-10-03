const CustomError = require("../extensions/custom-error");

const chainMaker = {
  list: [],

  getLength() {
    return this.list.length;
  },

  addLink(value) {
    this.list.push(value);
    return this;
  },

  removeLink(position) {
    if(position === '' || this.list[position] === undefined || isNaN(+position)) {
      this.list = [];
      throw new Error('Error');
    }
    this.list.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
   this.list.reverse();
   return this;
  },

  finishChain() {
    let resultList = '';
    this.list.map((item, index) => {
      resultList += (index !== 0) ? `~~( ${item} )` : `( ${item} )`;
    })
    this.list = [];
    return resultList;
  }
};

module.exports = chainMaker;
