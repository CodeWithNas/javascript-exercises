const removeFromArray = function(array, ...args) {
 let result = [];

 for (let i = 0; i < array.length; i++) {
    let currentItem = array[i];

    if (!args.includes(currentItem)) {
        result.push(currentItem);
    }
 }
 return result;

};

// Do not edit below this line
module.exports = removeFromArray;
