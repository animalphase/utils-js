
# 🛠 utils

⚙️ Basic js utils file for handy functions, that can be imported or copy-pasted where needed




## Included functions



### clamp 🗜

Clamps a number value between min & max values.

Takes arguments `value`, `min`, and `max`.

Example usage:
```
let newVal = clamp(value, min, max)
```



### sleep 💤

⏯⏲ Timed delay.

This is the sleep/delay function from https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep

How it works/example:

```
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two second later');
}

demo();
```


### indexesToIds

I need to look up how I used this because I'm confused lol



### indexOfObjectWithPropertyValue

Search through an array of objects, and return the index a single object with a particular value of a particular property.

Takes arguments of `propertyToMatch`, `desiredValue`, and `arrayToSearch`.

Returns `null` if none are found.



### getPropValue

search within nested properties of an object, stops searching when hitting a null property
e.g. for this.soundCloudAudio._track.user.avatar_url,
let avatarUrl = getPropValue( ['_track', 'user', 'avatar_url'], this.soundCloudAudio ) // assigned null if property doesn't exist
@param  {Array} pathToProp   the path to a nested prop we hope to find, each step listed as an array value (string for keys, number for indexes)
@param  {Object} objectToScan the object to look through for all available properties based on the path above
@return {varies}              returns null, or the value found at the requested property



### imageExists

check if image exists at url
@param  {string} image_url the url of image to test
@return {bool}           does the image exist or not


---


## TODO

- add a remap function
- document functionality and example usage of indexesToIds
