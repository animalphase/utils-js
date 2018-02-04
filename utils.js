const utils = {
  // math functions
  clamp: (num, min, max) => {
    return num <= min ? min : num >= max ? max : num;
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



/* NOTES:

_________________________________

sleep from https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
example usage:

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two second later');
}

demo();





*/