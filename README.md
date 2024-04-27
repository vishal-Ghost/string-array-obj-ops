```markdown
# string-array-obj-ops

`string-array-obj-ops` is a comprehensive JavaScript library providing a wide range of essential string and array operations. It offers efficient functions for handling strings, including converting them to uppercase or lowercase, removing numbers and special characters, and more. For arrays, it provides operations such as finding unique values, sorting numbers and strings, calculating the sum, handling arrays of objects, merging with unique values, flattening, and managing values.

## Installation

Install `string-array-obj-ops` using npm:

```bash
npm install string-array-obj-ops
```

## Usage

### String Operations

#### `upperCaseString`

Converts a string to uppercase.

```javascript
const { stringOps } = require('string-array-obj-ops');

const inputString = 'Hello, World!';
const upperCaseString = stringOps.upperCaseString(inputString);
console.log(upperCaseString); // Output: "HELLO, WORLD!"
```

#### `lowerCaseString`

Converts a string to lowercase.

```javascript
const { stringOps } = require('string-array-obj-ops');

const inputString = 'Hello, World!';
const lowerCaseString = stringOps.lowerCaseString(inputString);
console.log(lowerCaseString); // Output: "hello, world!"
```

#### `removeNumber`

Removes numbers from a string.

```javascript
const { stringOps } = require('string-array-obj-ops');

const inputString = 'Hello123World456';
const stringWithoutNumbers = stringOps.removeNumber(inputString);
console.log(stringWithoutNumbers); // Output: "HelloWorld"
```

#### `removeSpecialChar`

Removes special characters from a string.

```javascript
const { stringOps } = require('string-array-obj-ops');

const inputString = 'Hello, World!';
const stringWithoutSpecialChars = stringOps.removeSpecialChar(inputString);
console.log(stringWithoutSpecialChars); // Output: "HelloWorld"
```

### Array Operations

#### `uniqueArray`

Finds unique values in an array.

```javascript
const { arrayOps } = require('string-array-obj-ops');

const inputArray = [1, 2, 3, 3, 4, 4, 5];
const uniqueArray = arrayOps.uniqueArray(inputArray);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
```

#### `sortedNumArray`

Sorts a numeric array in ascending order.

```javascript
const { arrayOps } = require('string-array-obj-ops');

const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = arrayOps.sortedNumArray(inputArray);
console.log(sortedArray); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

#### `sortedStrArray`

Sorts a string array in lexicographical order.

```javascript
const { arrayOps } = require('string-array-obj-ops');

const inputArray = ['zebra', 'apple', 'orange', 'banana'];
const sortedArray = arrayOps.sortedStrArray(inputArray);
console.log(sortedArray); // Output: ["apple", "banana", "orange", "zebra"]
```

#### `sumNumArray`

Calculates the sum of numbers in an array.

```javascript
const { arrayOps } = require('string-array-obj-ops');

const inputArray = [1, 2, 3, 4, 5];
const sum = arrayOps.sumNumArray(inputArray);
console.log(sum); // Output: 15
```

#### `uniqueArrOfObjWithId`

Filters an array of objects to keep only unique objects based on a specified ID.

```javascript
const { arrayOps } = require('string-array-obj-ops');

const inputArray = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 1, name: 'Charlie' }];
const uniqueArray = arrayOps.uniqueArrOfObjWithId(inputArray, 'id');
console.log(uniqueArray);
// Output: [{ id: 1, name: 'Charlie' }, { id: 2, name: 'Bob' }]
```

#### `mergeArraysWithUniqueValues`

Merges arrays and returns a new array with unique values.

```javascript
const { arrayOps } = require('string-array-obj-ops');

const inputArrays = [[1, 2, 3], [3, 4, 5], [5, 6, 7]];
const mergedArray = arrayOps.mergeArraysWithUniqueValues(inputArrays);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7]
```

#### `flattenArray`

Flattens a nested array up to the specified depth.

```javascript
const { arrayOps } = require('string-array-obj-ops');

const inputArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = arrayOps.flattenArray(inputArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
```

#### `arrayIncludes`

Checks if an array includes a specific value.

```javascript
const { arrayOps } = require('string-array-obj-ops');

const inputArray = [1, 2, 3, 4, 5];
const value = 3;
const includesValue = arrayOps.arrayIncludes(inputArray, value);
console.log(includesValue); // Output: true
```

#### `arrayRemoveValue`

Removes all occurrences of a specific value from an array.

```javascript
const { arrayOps } = require('string-array-obj-ops');

const inputArray = [1, 2, 3, 4, 5];
const valueToRemove = 3;
const newArray = arrayOps.arrayRemoveValue(inputArray, valueToRemove);
console.log(newArray); // Output: [1, 2, 4, 5]
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```
