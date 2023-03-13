const perf = require('execution-time')();

function doublerAppend(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
    return new_nums;
}

function doublerInsert(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
    return new_nums;
}

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


function addToZero(arr) {
    const numSet = new Set(arr); 
  
    for (let num of numSet) { 
      if (numSet.has(-num)) { 
        return true;
      }
    }
  
    return false;
}

function hasUniqueChars(word) {
    const charSet = new Set();
  
    for (let i = 0; i < word.length; i++) { 
      if (charSet.has(word[i])) { 
        return false;
      }
      charSet.add(word[i]);
    }
  
    return true;
}
  
function isPangram(sentence) {
    const charSet = new Set();
  
    for (let i = 0; i < sentence.length; i++) { 
      const charCode = sentence.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) { 
        charSet.add(sentence[i]); 
      }
    }
  
    return charSet.size === 26;
}

function findLongestWord(words) {
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      const wordLength = words[i].length;
      if (wordLength > maxLength) {
        maxLength = wordLength;
      }
    }
  
    return maxLength;
}
  

const sizes = ['tiny', 'small', 'medium', 'large', 'extraLarge'];
const arrays = {
  tiny: getSizedArray(10),
  small: getSizedArray(100),
  medium: getSizedArray(1000),
  large: getSizedArray(10000),
  extraLarge: getSizedArray(100000),
}

const results = {
  append: {},
  insert: {},
}

for (let size of sizes) {
  const array = arrays[size];

  perf.start();
  doublerAppend(array);
  results.append[size] = perf.stop().time; 

  perf.start();
  doublerInsert(array);
  results.insert[size] = perf.stop().time;
}

console.log('Results for the differently sized arrays:');
for (let size of sizes) {
  console.log(`Size: ${size}`);
  console.log(`Append: ${results.append[size]}ms`);
  console.log(`Insert: ${results.insert[size]}ms`);
  console.log('');
}
