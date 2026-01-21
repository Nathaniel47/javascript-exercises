const removeFromArray = function(array, ...itemsToRemove) {
    for (let item of itemsToRemove){
        let index;
        while ((index = array.indexOf(item)) !== -1){
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
