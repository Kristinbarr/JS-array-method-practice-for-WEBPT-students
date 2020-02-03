function getAllElementsButNth(arr, n) {
  // Given an array and an index, “getAllElementsButNth” returns an array with all the elements but the nth.

  // var output = getAllElementsButNth(['a', 'b', 'c'], 1);
  // console.log(output); // --> ['a', 'c']

  /* YOUR CODE HERE */

}

function getElementsThatEqual10AtProperty(obj, key) {
  // Given an object and a key, “getElementsThatEqual10AtProperty” returns an array containing all the elements of the array located at the given key that are equal to ten.

  // Notes:
  // * If the array is empty, it should return an empty array.
  // * If the array contains no elements that are equal to 10, it should return an empty array.
  // * If the property at the given key is not an array, it should return an empty array.
  // * If there is no property at the key, it should return an empty array.

  // var obj = {
  //   key: [1000, 10, 50, 10]
  // };
  // var output = getElementsThatEqual10AtProperty(obj, 'key');
  // console.log(output); // --> [10, 10]

  /* YOUR CODE HERE */
}

function select(arr, obj) {
  // Given an array and an object, “select” returns a new object whose properties are those in the given object AND whose keys are present in the given array.

  // Notes:
  // * If keys are present in the given array, but are not in the given object, it should ignore them.
  // * It does not modify the passed in object.

  // var arr = ['a', 'c', 'e'];
  // var obj = {
  //   a: 1,
  //   b: 2,
  //   c: 3,
  //   d: 4
  // };
  // var output = select(arr, obj);
  // console.log(output); // --> { a: 1, c: 3 }

  /* YOUR CODE HERE */
}

function getElementsLessThan100AtProperty(obj, key) {
  // Given an object and a key, “getElementsLessThan100AtProperty” returns an array containing all the elements of the array located at the given key that are less than 100.

  // Notes:
  // * If the array is empty, it should return an empty array.
  // * If the array contains no elements less than 100, it should return an empty array.
  // * If the property at the given key is not an array, it should return an empty array.
  // * If there is no property at the key, it should return an empty array.

  // var obj = {
  //   key: [1000, 20, 50, 500]
  // };
  // var output = getElementsLessThan100AtProperty(obj, 'key');
  // console.log(output); // --> [20, 50]

  /* YOUR CODE HERE */
}

function getElementsGreaterThan10AtProperty(obj, key) {
  // Given an object and a key, “getElementsGreaterThan10AtProperty” returns an array containing the elements within the array, located at the given key, that are greater than 10.

  // Notes:
  // * If the array is empty, it should return an empty array.
  // * If the array contains no elements greater than 10, it should return an empty array.
  // * If the property at the given key is not an array, it should return an empty array.
  // * If there is no property at the key, it should return an empty array.

  // var obj = {
  //   key: [1, 20, 30]
  // };
  // var output = getElementsGreaterThan10AtProperty(obj, 'key');
  // console.log(output); // --> [20, 30]

  /* YOUR CODE HERE */
}

function removeElement(arr, discarder) {
  // Given an array of elements, and a “discarder” parameter, “removeElement” returns an array containing the items in the given array that do not match the “discarder” parameter.

  // Notes:
  // * If all the elements match, it should return an empty array.
  // * If an empty array is passed in, it should return an empty array.

  // var output = removeElement([1, 2, 3, 2, 1], 2);
  // console.log(output); // --> [1, 3, 1]

  /* YOUR CODE HERE */
}

function keep(arr, keeper) {
  // Given an array and a keeper element, “keep” returns an array containing the items that match the given keeper element.

  // Notes:
  // * If no elements match, “keep” should return an empty array.

  // var output = keep([1, 2, 3, 2, 1], 2)
  // console.log(output); --> [2, 2]

  /* YOUR CODE HERE */
}

function getOddLengthWordsAtProperty(obj, key) {
  // Given an object and a key, “getOddLengthWordsAtProperty” returns an array containing all the odd length word elements of the array located at the given key.

  // Notes:
  // * If the array is empty, it should return an empty array.
  // * If it contains no odd length elements, it should return an empty array.
  // * If the property at the given key is not an array, it should return an empty array.
  // * If there is no property at the given key, it should return an empty array.

  // var obj = {
  //   key: ['It', 'has', 'some', 'words']
  // };
  // var output = getOddLengthWordsAtProperty(obj, 'key');
  // console.log(output); // --> ['has', 'words']

  /* YOUR CODE HERE */

}

function computeAverageOfNumbers(nums) {
  // Given an array of numbers, “computeAverageOfNumbers” returns their average.

  // Notes:
  // * If given an empty array, it should return 0.

  // var input = [1,2,3,4,5];
  // var output = computeAverageOfNumbers(input);
  // console.log(output); // --> 3

  /* YOUR CODE HERE */
}

function getAverageOfElementsAtProperty(obj, key) {
  // Given an object and a key, “getAverageOfElementsAtProperty” returns the average of all the elements in the array located at the given key.

  // Notes:
  // * If the array at the given key is empty, it should return 0.
  // * If the property at the given key is not an array, it should return 0.
  // * If there is no property at the given key, it should return 0.

  // var obj = {
  //   key: [1, 2, 3]
  // };
  // var output = getAverageOfElementsAtProperty(obj, 'key');
  // console.log(output); // --> 2

  /* YOUR CODE HERE */
}

function getEvenLengthWordsAtProperty(obj, key) {
  // Given an object and a key, “getEvenLengthWordsAtProperty” returns an array containing all the even length word elements of the array located at the given key.

  // Notes:
  // * If the array is empty, it should return an empty array.
  // * If it contains no even length elements, it should return an empty array.
  // * If the property at the given key is not an array, it should return an empty array.
  // * If there is no property at the key, it should return an empty array.

  // var obj = {
  //   key: ['a', 'long', 'game']
  // };
  // var output = getEvenLengthWordsAtProperty(obj, 'key');
  // console.log(output); // --> ['long', 'game']

  /* YOUR CODE HERE */
}

function filterOddLengthWords(words) {
  // Given an array of string, “filterOddLengthWords” returns an array containing only the elements of the given array whose lengths are odd numbers.

  // var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
  // console.log(output); // --> ['there', "now']

  /* YOUR CODE HERE */
}

function getSquaredElementsAtProperty(obj, key) {
  // Given an object and a key, “getSquaredElementsAtProperty” returns an array containing all the squared elements of the array located at the given key.

  // Notes:
  // * If the array is empty, it should return an empty array.
  // * If the property at the given key is not an array, it should return an empty array.
  // * If there is no property at the key, it should return an empty array.

  // var obj = {
  //   key: [2, 1, 5]
  // };
  // var output = getSquaredElementsAtProperty(obj, 'key');
  // console.log(output); // --> [4, 1, 25]

  /* YOUR CODE HERE */
}

function getOddElementsAtProperty(obj, key) {
  // Given an object and a key, “getOddElementsAtProperty” returns an array containing all the odd elements of the array located at the given key.

  // Notes:
  // * If the array is empty, it should return an empty array.
  // * If it contains no odd elements, it should return an empty array.
  // * If the property at the given key is not an array, it should return an empty array.
  // * If there is no property at the key, it should return an empty array.

  // var obj = {
  //   key: [1, 2, 3, 4, 5]
  // };
  // var output = getOddElementsAtProperty(obj, 'key');
  // console.log(output); // --> [1, 3, 5]

  /* YOUR CODE HERE */
}

function getEvenElementsAtProperty(obj, key) {


  /* YOUR CODE HERE */
}

function filterEvenLengthWords(words) {

  /* YOUR CODE HERE */
}

function getLengthOfLongestElement(arr) {

  /* YOUR CODE HERE */
}

function getSmallestElementAtProperty(obj, key) {

  /* YOUR CODE HERE */
}

function getLargestElementAtProperty(obj, key) {

  /* YOUR CODE HERE */
}

function squareElements(arr) {

  /* YOUR CODE HERE */
}

function filterOddElements(arr) {

  /* YOUR CODE HERE */
}

function computeProductOfAllElements(arr) {

  /* YOUR CODE HERE */
}

function filterEvenElements(arr) {
  /* YOUR CODE HERE */
}

function getLengthOfShortestElement(arr) {
  /* YOUR CODE HERE */
}

function getLongestElement(arr) {
  /* YOUR CODE HERE */
}

function findSmallestElement(arr) {
  /* YOUR CODE HERE */
}

function findShortestElement(arr) {
  /* YOUR CODE HERE */
}

function getLargestElement(arr) {
  /* YOUR CODE HERE */
}

function computeSumOfAllElements(arr) {
  /* YOUR CODE HERE */
}

function getProductOfAllElementsAtProperty(obj, key) {
  /* YOUR CODE HERE */
}

function sumDigits(num) {
  /* YOUR CODE HERE */
}

function getSumOfAllElementsAtProperty(obj, key) {
  /* YOUR CODE HERE */
}

function findShortestWordAmongMixedElements(arr) {
  /* YOUR CODE HERE */
}

function findSmallestNumberAmongMixedElements(arr) {
  /* YOUR CODE HERE */
}

function getLongestWordOfMixedElements(arr) {
  /* YOUR CODE HERE */
}

function getLargestNumberAmongMixedElements(arr) {
  /* YOUR CODE HERE */
}

function getLongestOfThreeWords(word1, word2, word3) {
  /* YOUR CODE HERE */
}

function findShortestOfThreeWords(word1, word2, word3) {
  /* YOUR CODE HERE */
}
