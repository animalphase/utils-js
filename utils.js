const utils = {
  // math functions
  clamp: (value, min, max) => {
    return value <= min ? min : value >= max ? max : value;
  },
  sleep: milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  },  
  indexesToIds: array => {
    var lookup = {};
    for (var i = 0, length = array.length; i < length; i++) {
      lookup[array[i].patchId] = array[i];
    }
    return lookup; // now can use lookup[id]
  },
  indexOfObjectWithPropertyValue: (
    propertyToMatch,
    desiredValue,
    arrayToSearch
  ) => {
    function propertyMatch(object) {
      return object[propertyToMatch] === desiredValue;
    }
    let foundIndex = arrayToSearch.findIndex(propertyMatch);
    // findIndex() returns -1 if no match
    if (foundIndex !== -1) {
      return foundIndex;
    } else {
      console.log('⚠️ utils.indexOfObjectWithPropertyValue found nothing!!');
      return null;
    }
  }
};

export default utils;