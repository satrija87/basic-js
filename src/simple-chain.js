const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink( value)  {
    if (value === undefined) {
      this.chain.push(`()`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
    // remove line with error and write your code here
  },
  removeLink(position ) {
    if (
      !Number.isInteger(position) ||
      !(position > 0 && position < this.getLength())
    ) {
      this.chain.length=0;
      throw new Error("You can't remove incorrect link!");
    
    }
    this.chain.splice(position - 1, 1);
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let newChain = this.chain.join("~~");
    this.chain.length = 0;
    return newChain;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())