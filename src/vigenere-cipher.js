const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(reverse) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    var matrix = [],
    cols = 26;
  
    //init the grid matrix
    for ( let i = 0; i < cols; i++ ) {
      matrix[i] = [];
        for (let j = 0; j < cols; j++) {
          matrix[i][j] = 'X';
        } 
    }
  
    const rotate = (arr, index) => {
      let copy = [...arr];
      for (let i = 0; i < index; i++) {
        copy.push(copy.shift());    
      }
      return copy;
    }
  
    for(let i = 0; i < 26; i++) {
      let res = rotate(alphabet, i);
      for(let j = 0; j < 26; j++) {
        matrix[i][j] = res[j];  
      }
    }
  
    let m = message.toUpperCase();
    let k = key.toUpperCase();
  
    let j = 0;
    let result = '';
    let letterCount = 0;
  
    for(let i = 0; i < m.length; i++) {
      if ((m[i].charCodeAt() < 65) || (m[i].charCodeAt() > 90)) {
          result += m[i];
          continue;
      }
  
      if(letterCount % k.length === 0) {
        j = 0;
      }
  
      let row = m[i].charCodeAt() - 65;
      let col = k[j].charCodeAt() - 65;
      let corresponding = matrix[row][col];
      result += corresponding;
  
      letterCount++;
      j++;
  
    }
  
    return (this.reverse === false) ? result.split('').reverse().join('') : result;

  }    
  decrypt(message, key) {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    var matrix = [],
    cols = 26;
  
    //init the grid matrix
    for ( let i = 0; i < cols; i++ ) {
      matrix[i] = [];
        for (let j = 0; j < cols; j++) {
          matrix[i][j] = 'X';
        } 
    }
  
    const rotate = (arr, index) => {
      let copy = [...arr];
      for (let i = 0; i < index; i++) {
        copy.push(copy.shift());    
      }
      return copy;
    }
  
    for(let i = 0; i < 26; i++) {
      let res = rotate(alphabet, i);
      for(let j = 0; j < 26; j++) {
        matrix[i][j] = res[j];  
      }
    }
  
    let m = message.toUpperCase();
    let k = key.toUpperCase();
  
    let j = 0;
    let result = '';
    let letterCount = 0;
  
    for(let i = 0; i < m.length; i++) {
  
      if ((m[i].charCodeAt() < 65) || (m[i].charCodeAt() > 90)) {
          result += m[i];
          continue;
      }
  
      if(letterCount % k.length === 0) j = 0;
  
      let row = k[j].charCodeAt() - 65;
      let letter = String.fromCharCode(matrix[row].findIndex(element => element === m[i]) + 65);
  
      result += letter;
  
      j++;
      letterCount++;
  
    }

    return (this.reverse === false) ? result.split('').reverse().join('') : result;

  }
}

module.exports = VigenereCipheringMachine;
