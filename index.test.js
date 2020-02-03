xdescribe("getAllElementsButNth", function() {
  it("should return an array", function() {
    expect(Array.isArray(getAllElementsButNth([4, 5, 6], 2))).toBe(true);
  });
  it("should return an array with all the elements of the passed in array, except for the nth", function() {
    expect(getAllElementsButNth([4, 5, 6], 0)).toEqual([5, 6]);
  });
  it("should return an empty array when passed in a single element array", function() {
    expect(getAllElementsButNth([4], 0)).toEqual([]);
  });
  it("should return a mirror of the original array when passed an n out of range", function() {
    expect(getAllElementsButNth([4], 10)).toEqual([4]);
  });
  it("should return an empty array when passed in an empty array", function() {
    expect(getAllElementsButNth([])).toEqual([]);
  });
});

xdescribe("getElementsThatEqual10AtProperty", function() {
  it("should return an array containing all the elements that equal 10 in the array located at key", function() {
    var obj = {
      array: [10, 20, 40]
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([10]);
  });
  it("should return an empty array if the array has no elements that equal 10", function() {
    var obj = {
      array: [1, 3]
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
  });
});

xdescribe("select", function() {
  it("should return an object", function() {
    var keys = ["a", "c", "e"];
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    expect(typeof select(keys, obj)).toBe("object");
  });
  it("should return an object with properties in from the passed in object whose keys are present in the given function", function() {
    var keys = ["a", "c", "e"];
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    var result = {
      a: 1,
      c: 3
    };
    expect(select(keys, obj)).toEqual(result);
  });
  it("should not modify the passed in object", function() {
    var keys = ["a", "c", "e"];
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    select(keys, obj);
    expect(Object.keys(obj).length).toEqual(4);
  });
});

xdescribe("getElementsLessThan100AtProperty", function() {
  it("should return an array containing all the elements less than 100 in the array located at key", function() {
    var obj = {
      array: [100, 20, 40]
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([20, 40]);
  });
  it("should return an empty array if the array has no elements less than 100", function() {
    var obj = {
      array: [1000, 3000]
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
  });
});

xdescribe("getElementsGreaterThan10AtProperty", function() {
  it("should return an array containing all the elements greater than 10 in the array located at key", function() {
    var obj = {
      array: [10, 20, 40]
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([20, 40]);
  });
  it("should return an empty array if the array has no elements greater than 10", function() {
    var obj = {
      array: [1, 3]
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
  });
});

xdescribe("removeElement", function() {
  it("should return an array", function() {
    expect(Array.isArray(removeElement(["there", "it", "is", "there"]))).toBe(
      true
    );
  });
  it("return an array with all strings not matching 'discarder'", function() {
    expect(removeElement(["there", "it", "is", "there"], "there")).toEqual([
      "it",
      "is"
    ]);
  });
  it("return an array with all numbers not matching 'discarder'", function() {
    expect(removeElement([1, 2, 4, 3, 1, 4], 4)).toEqual([1, 2, 3, 1]);
  });
  it("return an array with all booleans not matching 'discarder'", function() {
    expect(removeElement([true, true, true, false, true], true)).toEqual([
      false
    ]);
  });
  it("return an emtpy array when all elements match 'discarder'", function() {
    expect(removeElement([true, true, true, true], true)).toEqual([]);
  });
  it("return an emtpy array when given an empty array", function() {
    expect(removeElement([], 4)).toEqual([]);
  });
});

xdescribe("keep", function() {
  it("should return an array", function() {
    expect(Array.isArray(keep(["there", "it", "is", "there"]))).toBe(true);
  });
  it("returns an array with all strings matching 'kept'", function() {
    expect(keep(["there", "it", "is", "there"], "there")).toEqual([
      "there",
      "there"
    ]);
  });
  it("returns an array with all numbers matching 'kept'", function() {
    expect(keep([1, 2, 4, 3, 1, 4], 4)).toEqual([4, 4]);
  });
  it("returns an array with all booleans matching 'kept'", function() {
    expect(keep([true, true, true, false, true], true)).toEqual([
      true,
      true,
      true,
      true
    ]);
  });
  it("returns an emtpy array when no elements match 'kept'", function() {
    expect(keep([true, true, true, false, true], 4)).toEqual([]);
  });
  it("returns an emtpy array when given an empty array", function() {
    expect(keep([], 4)).toEqual([]);
  });
});

xdescribe("getOddLengthWordsAtProperty", function() {
  it("should return an array containing all the odd length elements of the array located at key", function() {
    var obj = {
      array: ["a", "long", "night"]
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual(["a", "night"]);
  });
  it("should return an empty array if the array has only no odd length elements", function() {
    var obj = {
      array: ["It", "is", "gone"]
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
});

xdescribe("computeAverageOfNumbers", function() {
  it("should return a number", function() {
    expect(typeof computeAverageOfNumbers([6, 8, 10])).toBe("number");
  });
  it("should return the average of the numbers in the given array", function() {
    expect(computeAverageOfNumbers([6, 8, 10])).toBe(8);
  });
  it("should return the average of negative numbers in the given array", function() {
    expect(computeAverageOfNumbers([-6, -8, -10])).toBe(-8);
  });
  it("should return 0 if given an empty array", function() {
    expect(computeAverageOfNumbers([])).toBe(0);
  });
});

xdescribe("getAverageOfElementsAtProperty", function() {
  it("should return the average of all the elements of the array located at key", function() {
    var obj = {
      array: [1, 3, 5]
    };
    expect(getAverageOfElementsAtProperty(obj, "array")).toBe(3);
  });
  it("should return 0 if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getAverageOfElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getAverageOfElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getAverageOfElementsAtProperty(obj, "array")).toBe(0);
  });
});

xdescribe("getEvenLengthWordsAtProperty", function() {
  it("should return an array containing all the even length elements of the array located at key", function() {
    var obj = {
      array: ["a", "long", "game"]
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual([
      "long",
      "game"
    ]);
  });
  it("should return an empty array if the array has only no even length elements", function() {
    var obj = {
      array: ["I", "may", "say"]
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
});

xdescribe("filterOddLengthWords", function() {
  it("should return an array", function() {
    expect(
      Array.isArray(filterOddLengthWords(["there", "it", "is", "now"]))
    ).toBe(true);
  });
  it("should return an array with odd lengthed words", function() {
    expect(filterOddLengthWords(["there", "it", "is", "now"])).toEqual([
      "there",
      "now"
    ]);
  });
  it("should return an empty array when passed an array with no odd lengthed words", function() {
    expect(filterOddLengthWords(["it", "cats"])).toEqual([]);
  });
  it("should return an empty array when passed an empty array", function() {
    expect(filterOddLengthWords([])).toEqual([]);
  });
});

xdescribe("getSquaredElementsAtProperty", function() {
  it("should return an array containing all the squared elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 7]
    };
    expect(getSquaredElementsAtProperty(obj, "array")).toEqual([1, 4, 49]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getSquaredElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getSquaredElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getSquaredElementsAtProperty(obj, "array")).toEqual([]);
  });
});

xdescribe("getOddElementsAtProperty", function() {
  it("should return an array containing all the odd elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 7]
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([1, 7]);
  });
  it("should return an empty array if the array has only no odd elements", function() {
    var obj = {
      array: [2, 30]
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([]);
  });
});

xdescribe("getEvenElementsAtProperty", function() {
  it("should return an array containing all the even elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getEvenElementsAtProperty(obj, "array")).toEqual([2, 4]);
  });
  it("should return an empty array if the array has only no even elements", function() {
    var obj = {
      array: [1, 3]
    };
    expect(getEvenElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getEvenElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getEvenElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getEvenElementsAtProperty(obj, "array")).toEqual([]);
  });
});

xdescribe("filterEvenLengthWords", function() {
  it("should return an array", function() {
    expect(
      Array.isArray(filterEvenLengthWords(["there", "it", "is", "now"]))
    ).toBe(true);
  });
  it("should return an array with even lengthed words", function() {
    expect(filterEvenLengthWords(["there", "it", "is", "now"])).toEqual([
      "it",
      "is"
    ]);
  });
  it("should return an empty array when passed an array with no even lengthed words", function() {
    expect(filterEvenLengthWords(["there", "now"])).toEqual([]);
  });
  it("should return an empty array when passed an empty array", function() {
    expect(filterEvenLengthWords([])).toEqual([]);
  });
});

xdescribe("getLengthOfLongestElement", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfLongestElement(["one", "two", "three"])).toBe(
      "number"
    );
  });
  it("should return the length of the longest element in an array", function() {
    expect(getLengthOfLongestElement(["one", "two", "three"])).toBe(5);
  });
  it("it should handle ties", function() {
    expect(getLengthOfLongestElement(["one", "two", "no"])).toBe(3);
  });
  it("it should return 0 when given an empty array", function() {
    expect(getLengthOfLongestElement([])).toBe(0);
  });
});

xdescribe("getSmallestElementAtProperty", function() {
  it("should return the smallest element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getSmallestElementAtProperty(obj, "array")).toBe(1);
  });
  it("should return undefined if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getSmallestElementAtProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getSmallestElementAtProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getSmallestElementAtProperty(obj, "array")).toBe(undefined);
  });
});

xdescribe("getLargestElementAtProperty", function() {
  it("should return the largest element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getLargestElementAtProperty(obj, "array")).toBe(4);
  });
  it("should return undefined if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getLargestElementAtProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getLargestElementAtProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getLargestElementAtProperty(obj, "array")).toBe(undefined);
  });
});

xdescribe("squareElements", function() {
  it("should return an array", function() {
    expect(Array.isArray(squareElements([1, 2, 3]))).toBe(true);
  });
  it("should return an array with the elements of the passed in array, squared", function() {
    expect(squareElements([1, 2, 3])).toEqual([1, 4, 9]);
  });
});

xdescribe("filterOddElements", function() {
  it("should return an array", function() {
    expect(Array.isArray(filterOddElements([1, 2, 3, 4]))).toBe(true);
  });
  it("should return an array with the odd elements from the passed in array", function() {
    expect(filterOddElements([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
  });
  it("should return an array if there are no odd numbers", function() {
    expect(filterOddElements([2, 4, 6])).toEqual([]);
  });
  it("should return an array if given an emtpy array", function() {
    expect(filterOddElements([])).toEqual([]);
  });
});

xdescribe("computeProductOfAllElements", function() {
  it("should return a number", function() {
    expect(typeof computeProductOfAllElements([1, 2, 4])).toBe("number");
  });
  it("return the product of all elements", function() {
    expect(computeProductOfAllElements([1, 2, 4])).toBe(8);
  });
  it("return 0 if the passed in array is empty", function() {
    expect(computeProductOfAllElements([])).toBe(0);
  });
});

xdescribe("filterEvenElements", function() {
  it("should return an array", function() {
    expect(Array.isArray(filterEvenElements([1, 2, 3, 4]))).toBe(true);
  });
  it("should return an array with the even elements from the passed in array", function() {
    expect(filterEvenElements([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });
  it("should return an array if there are no even numbers", function() {
    expect(filterEvenElements([1, 3, 5])).toEqual([]);
  });
  it("should return an array if given an emtpy array", function() {
    expect(filterEvenElements([])).toEqual([]);
  });
});

xdescribe("getLengthOfShortestElement", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfShortestElement(["one", "two", "three"])).toBe(
      "number"
    );
  });
  it("should return the length of the shortest element in an array", function() {
    expect(getLengthOfShortestElement(["one", "four", "three"])).toBe(3);
  });
  it("it should handle ties", function() {
    expect(getLengthOfShortestElement(["one", "to", "no"])).toBe(2);
  });
  it("it should return 0 when given an empty array", function() {
    expect(getLengthOfShortestElement([])).toBe(0);
  });
});

xdescribe("getLongestElement", function() {
  it("should return a string", function() {
    expect(typeof getLongestElement(["one", "two", "three"])).toBe("string");
  });
  it("should return the longest element in an array", function() {
    expect(getLongestElement(["one", "two", "three"])).toBe("three");
  });
  it("should return the first longest element in an array when there are ties", function() {
    expect(getLongestElement(["one", "two", "ONE"])).toBe("one");
  });
});

xdescribe("findSmallestElement", function() {
  it("should return a number", function() {
    expect(typeof findSmallestElement([3, 5, 3, 1])).toBe("number");
  });
  it("should return the smallest element in an array", function() {
    expect(findSmallestElement([3, 5, 3, 1])).toBe(1);
  });
  it("should return the smallest element in an array when there are ties", function() {
    expect(findSmallestElement([3, 1, 3, 1, 5])).toBe(1);
  });
  it("should return the smallest element in an array when they are all negative", function() {
    expect(findSmallestElement([-1, -5, -3])).toBe(-5);
  });
  it("should return 0 if the array is empty", function() {
    expect(findSmallestElement([])).toBe(0);
  });
});

xdescribe("findShortestElement", function() {
  it("should return a string", function() {
    expect(typeof findShortestElement(["one", "two", "three"])).toBe("string");
  });
  it("should return the shortest element in an array", function() {
    expect(findShortestElement(["a", "two", "three"])).toBe("a");
  });
  it("should return the first shortest element in an array when there are ties", function() {
    expect(findShortestElement(["one", "to", "no"])).toBe("to");
  });
  it("should return an empty string if the array is empty", function() {
    expect(findShortestElement([])).toBe("");
  });
});

xdescribe("getLargestElement", function() {
  it("should return a number", function() {
    expect(typeof getLargestElement([3, 5, 3, 1])).toBe("number");
  });
  it("should return the largest element in an array", function() {
    expect(getLargestElement([3, 5, 3, 1])).toBe(5);
  });
  it("should return the largest element in an array when there are ties", function() {
    expect(getLargestElement([3, 5, 3, 1, 5])).toBe(5);
  });
  it("should return the largest element in an array when they are all negative", function() {
    expect(getLargestElement([-1, -5, -3])).toBe(-1);
  });
});

xdescribe("computeSumOfAllElements", function() {
  it("should return a number", function() {
    expect(typeof computeSumOfAllElements([1, 2, 4])).toBe("number");
  });
  it("return the sum of all elements", function() {
    expect(computeSumOfAllElements([1, 2, 4])).toBe(7);
  });
  it("return 0 if the passed in array is empty", function() {
    expect(computeSumOfAllElements([])).toBe(0);
  });
});

xdescribe("getProductOfAllElementsAtProperty", function() {
  it("should return the product of all the elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(8);
  });
  it("should return 0 if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
});

xdescribe("sumDigits", function() {
  it("should return a number", function() {
    expect(typeof sumDigits(2002)).toBe("number");
  });
  it("should sum the digits of a positive number", function() {
    expect(sumDigits(2002)).toBe(4);
  });
  it("should sum the digits of a negative number", function() {
    expect(sumDigits(-2004)).toBe(2);
  });
  it("should sum return 0 if the number is 0", function() {
    expect(sumDigits(0)).toBe(0);
  });
});

xdescribe("getSumOfAllElementsAtProperty", function() {
  it("should return the sum of all the elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(7);
  });
  it("should return 0 if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
});

xdescribe("findShortestWordAmongMixedElements", function() {
  it("should return a string", function() {
    expect(
      typeof findShortestWordAmongMixedElements(["these", "are", "strings"])
    ).toBe("string");
  });
  it("should return the shortest string in an array", function() {
    expect(findShortestWordAmongMixedElements([3, "word", 5, "up", 3, 1])).toBe(
      "up"
    );
  });
  it("should return the shortest string in an array that appears first when there are ties", function() {
    expect(
      findShortestWordAmongMixedElements(["word", 3, 5, 3, "yo", "up", 1, 5])
    ).toBe("yo");
  });
  it("should return an empty string when the array is empty", function() {
    expect(findShortestWordAmongMixedElements([])).toBe("");
  });
  it("should return an empty string there are no strings", function() {
    expect(findShortestWordAmongMixedElements([1, 2, 4])).toBe("");
  });
});

xdescribe("findSmallestNumberAmongMixedElements", function() {
  it("should return a number", function() {
    expect(typeof findSmallestNumberAmongMixedElements([3, 5, 3, 1])).toBe("number");
  });
  it("should return the smallest element in an array", function() {
    expect(findSmallestNumberAmongMixedElements([3, "word", 5, "up", 3, 1])).toBe(1);
  });
  it("should return the smallest element in an array when there are ties", function() {
    expect(findSmallestNumberAmongMixedElements(["word", 3, 1, 3, "wordy", "up", 1, 5])).toBe(1);
  });
  it("should return the smallest element in an array when they are all negative", function() {
    expect(findSmallestNumberAmongMixedElements([-1, -5, "word", -3])).toBe(-5);
  });
  it("should return 0 when the array is empty", function() {
    expect(findSmallestNumberAmongMixedElements([])).toBe(0);
  });
  it("should return 0 when there are no numbers", function() {
    expect(findSmallestNumberAmongMixedElements(["word", "up"])).toBe(0);
  });
});

xdescribe("getLongestWordOfMixedElements", function() {
  it("should return a string", function() {
    expect(
      typeof getLongestWordOfMixedElements(["these", "are", "strings"])
    ).toBe("string");
  });
  it("should return the longest string in an array", function() {
    expect(getLongestWordOfMixedElements([3, "word", 5, "up", 3, 1])).toBe(
      "word"
    );
  });
  it("should return the longest string in an array that appears first when there are ties", function() {
    expect(
      getLongestWordOfMixedElements(["word", 3, 5, 3, "bird", "up", 1, 5])
    ).toBe("word");
  });
  it("should return an empty string when the array is empty", function() {
    expect(getLongestWordOfMixedElements([])).toBe("");
  });
  it("should return an empty string there are no strings", function() {
    expect(getLongestWordOfMixedElements([1, 2, 4])).toBe("");
  });
});

xdescribe("getLargestNumberAmongMixedElements", function() {
  it("should return a number", function() {
    expect(typeof getLargestNumberAmongMixedElements([3, 5, 3, 1])).toBe(
      "number"
    );
  });
  it("should return the largest element in an array", function() {
    expect(getLargestNumberAmongMixedElements([3, "word", 5, "up", 3, 1])).toBe(
      5
    );
  });
  it("should return the largest element in an array when there are ties", function() {
    expect(
      getLargestNumberAmongMixedElements(["word", 3, 5, 3, "wordy", "up", 1, 5])
    ).toBe(5);
  });
  it("should return the largest element in an array when they are all negative", function() {
    expect(getLargestNumberAmongMixedElements([-1, -5, "word", -3])).toBe(-1);
  });
  it("should return 0 when the array is empty", function() {
    expect(getLargestNumberAmongMixedElements([])).toBe(0);
  });
  it("should return 0 when there are no numbers", function() {
    expect(getLargestNumberAmongMixedElements(["word", "up"])).toBe(0);
  });
});

xdescribe("getLongestOfThreeWords", function() {
  it("should return a string", function() {
    expect(typeof getLongestOfThreeWords("a", "be", "see")).toBe("string");
  });
  it("should return the longest of three words", function() {
    expect(getLongestOfThreeWords("a", "be", "see")).toBe("see");
  });
  it("should return the first occurence of a longest word when there is a tie", function() {
    expect(getLongestOfThreeWords("these", "three", "words")).toBe("these");
  });
});

xdescribe("findShortestOfThreeWords", function() {
  it("should return a string", function() {
    expect(typeof findShortestOfThreeWords("a", "be", "see")).toBe("string");
  });
  it("should return the shortest of three words", function() {
    expect(findShortestOfThreeWords("abacus", "be", "see")).toBe("be");
  });
  it("should return the first occurence of a shortest word when there is a tie", function() {
    expect(findShortestOfThreeWords("these", "apple", "words")).toBe("these");
  });
});


