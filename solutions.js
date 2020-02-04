
function getAllElementsButNth(arr, n) {
  arr.splice(n, 1);
  return arr;
}

function getElementsThatEqual10AtProperty(obj, key) {
  // let outputArr = [];
  // if (Array.isArray(obj[key])) {
  //   for (let i = 0; i < obj[key].length; i++) {
  //     if (obj[key][i] === 10) {
  //       outputArr.push(10);
  //     }
  //   }
  // }
  // return outputArr;

  if (Array.isArray(obj[key])) {
    return obj[key].filter(elem => elem === 10);
  }
  return [];
}

function select(arr, obj) {
  let newObj = {};
  for (let key in obj) {
    if (arr.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function getElementsLessThan100AtProperty(obj, key) {
  let outputArr = [];
  if (!obj[key] || !Array.isArray(obj[key])) return [];

  return obj[key].filter(function(elem) {
    if (elem < 100) {
      return outputArr.push(elem);
    }
  });
  return outputArr;
}

function getElementsGreaterThan10AtProperty(obj, key) {
  let endArr = [];
  if (!obj[key] || !Array.isArray(obj[key])) return endArr;

  return obj[key].filter(function(elem) {
    if (elem > 10) {
      return endArr.push(elem);
    }
  });

  return endArr;
}

function removeElement(arr, discarder) {
  // let newArr = [];
  // if (arr.length === 0) return newArr;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== discarder) {
  //     newArr.push(arr[i])
  //   }
  // }
  // return newArr;

  return arr.filter(elem => elem !== discarder);
}

function keep(arr, keeper) {
  return arr.filter(elem => elem === keeper);
}

function getOddLengthWordsAtProperty(obj, key) {
  if (!Array.isArray(obj[key])) return [];
  let newArr = [];

  // for (let i = 0; i < obj[key].length; i++) {
  //   if (obj[key][i].length % 2 === 1) {
  //     newArr.push(obj[key][i]);
  //   }
  // }
  // return newArr;

  return obj[key].filter(function(elem) {
    if (elem.length % 2 === 1) {
      return newArr.push(elem);
    }
  });
}

function computeAverageOfNumbers(nums) {
  if (!nums || nums.length === 0) return 0;

  let reducer = nums.reduce(function(sum, num) {
    return sum + num;
  });
  return reducer / nums.length;
}

function getAverageOfElementsAtProperty(obj, key) {
  if (!Array.isArray(obj[key]) || obj[key].length === 0) return 0;

  let reducer = obj[key].reduce(function(accum, elem) {
    return (accum += elem);
  });
  return reducer / obj[key].length;
}

function getEvenLengthWordsAtProperty(obj, key) {
  if (!Array.isArray(obj[key]) || obj[key].length === 0) return [];
  let newArr = [];

  let filterArr = obj[key].filter(function(elem) {
    if (elem.length % 2 === 0) {
      newArr.push(elem);
    }
  });
  return newArr;
}

function filterOddLengthWords(words) {
  // let newArr = [];
  // if (words.length === 0) return newArr;
  // return words.reduce(function(word) {
  // if (word.length % 2 === 1) {
  // return newArr.push(word)
  // }
  // });
  // return newArr;

  return words.filter(function(word) {
    return word.length % 2 === 1;
  });
}

function getSquaredElementsAtProperty(obj, key) {
  if (!Array.isArray(obj[key])) {
    return [];
  } else {
    return obj[key].map(function(num) {
      return (num *= num);
    });
  }
}

function getOddElementsAtProperty(obj, key) {
  if (!Array.isArray(obj[key])) {
    return [];
  } else {
    return obj[key].filter(function(elem) {
      return elem % 2 === 1;
    });
  }
}

function getEvenElementsAtProperty(obj, key) {
  if (!Array.isArray(obj[key])) return [];

  return obj[key].filter(function(elem) {
    return elem % 2 === 0;
  });
}

function filterEvenLengthWords(words) {
  return words.filter(function(elem) {
    return elem.length % 2 === 0;
  });
}

function getLengthOfLongestElement(arr) {
  return arr.reduce(function(longest, elem) {
    if (elem.length > longest) {
      longest = elem.length;
    }
    return longest;
  }, 0);
}

function getSmallestElementAtProperty(obj, key) {
  if (!Array.isArray(obj[key]) || obj[key].length === 0) {
    return undefined;
  } else {
    return obj[key].reduce(function(smallest, elem) {
      if (elem < smallest) {
        smallest = elem;
      }
      return smallest;
    });
  }
}

function getLargestElementAtProperty(obj, key) {
  // if (!Array.isArray(obj[key]) || obj[key].length === 0) {
  //   return undefined;
  // } else {
  //   return obj[key].reduce(function (largest, elem) {
  //     if (largest < elem) {
  //       largest = elem;
  //     }
  //     return largest;
  //   });
  // }

  if (Array.isArray(obj[key]) && obj[key].length) {
    return Math.max(...obj[key]);
  }
}

function squareElements(arr) {
  return arr.map(function(elem) {
    return elem * elem;
  });
}

function filterOddElements(arr) {
  return arr.filter(function(elem) {
    return elem % 2 === 1;
  });
}

function computeProductOfAllElements(arr) {
  if (arr.length > 0) {
    return arr.reduce(function(products, elem) {
      return (products *= elem);
    });
  } else {
    return 0;
  }
}

function filterEvenElements(arr) {
  return arr.filter(elem => elem % 2 === 0);
}

function getLengthOfShortestElement(arr) {
  if (arr.length > 0) {
    return arr.reduce(function(shortest, word) {
      if (word.length < shortest) {
        shortest = word.length;
      }
      return shortest;
    }, arr[0].length);
  }
  return 0;
}

function getLongestElement(arr) {
  if (arr.length === 0) {
    return "";
  } else {
    return arr.reduce(function(longest, elem) {
      if (longest.length < elem.length) {
        longest = elem;
      }
      return longest;
    }, arr[0]);
  }
}

function findSmallestElement(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    // return arr.reduce(function(smallest, elem) {
    //   if (smallest > elem) {
    //     smallest = elem;
    //   }
    //   return smallest;
    // }, arr[0]);

    return Math.min(...arr);
  }
}

function findShortestElement(arr) {
  if (arr.length === 0) {
    return "";
  } else {
    return arr.reduce(function(shortest, elem) {
      if (shortest.length > elem.length) {
        shortest = elem;
      }
      return shortest;
    });
  }
}

function getLargestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return Math.max(...arr);

  // return arr.reduce(function(largest, elem) {
  //   if (largest < elem) {
  //     largest = elem;
  //   }
  //   return largest;
  // });
}

function computeSumOfAllElements(arr) {
  return arr.reduce(function(sum, num) {
    return (sum += num);
  }, 0);
}

function getProductOfAllElementsAtProperty(obj, key) {
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key].reduce(function(accum, elem) {
      return (accum *= elem);
    });
  }
  return 0;
}

function sumDigits(num) {
  let isNeg = false;
  if (num < 0) {
    isNeg = true;
  }
  let string = JSON.stringify(Math.abs(num));
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    let curNum = Number(string[i]);

    if (i === 0 && isNeg) {
      curNum = -Number(string[0]);
    }

    sum += curNum;
  }
  return sum;
}

function getSumOfAllElementsAtProperty(obj, key) {
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key].reduce(function(sum, num) {
      return (sum += num);
    });
  } else {
    return 0;
  }
}

function findShortestWordAmongMixedElements(arr) {
  // if (arr.length === 0) {
  //   return '';
  // } else {
  //   let strArr = arr.reduce(function(strArr, elem) {
  //     if (typeof elem === 'string') {
  //       strArr.push(elem)
  //     }
  //     return strArr;
  //   }, []);

  //   if (strArr.length === 0) return '';

  //   return strArr.reduce(function(shortest, str) {
  //     if (str.length < shortest.length) {
  //       shortest = str;
  //     }
  //     return shortest;
  //   }, strArr[0]);
  // }

  return arr
    .filter(function(word) {
      return typeof word === "string";
    })
    .reduce(function(shortest, word) {
      if (shortest === "") {
        return word;
      } else if (shortest.length <= word.length) {
        return shortest;
      } else {
        return word;
      }
    }, "");
}

function findSmallestNumberAmongMixedElements(arr) {
  let numArr = arr.filter(function(elem) {
    return typeof elem === "number";
  });

  if (numArr.length === 0) return 0;

  return numArr.reduce(function(smallest, num) {
    if (num < smallest) {
      smallest = num;
    }
    return smallest;
  }, Infinity);

  // return arr.filter(function(elem) {
  //   return typeof elem === 'number'
  // })
  // .reduce(function(smallest, num) {
  //   if (smallest === 0) {
  //     return num;
  //   } else if (smallest <= num) {
  //     return smallest;
  //   } else {
  //     return num;
  //   }
  // }, 0);
}

function getLongestWordOfMixedElements(arr) {
  return arr
    .filter(function(word) {
      return typeof word === "string";
    })

    .reduce(function(longest, word) {
      if (word.length > longest.length) {
        longest = word;
      }
      return longest;
    }, "");
}

function getLargestNumberAmongMixedElements(arr) {
  let numArr = arr.filter(function(num) {
    return typeof num === "number";
  });

  if (numArr.length === 0) {
    return 0;
  }

  return Math.max(...numArr);

  // using sort method
  // return numArr.sort(function(a, b){
  //   return b - a
  // }) [0];

  // using reduce method
  // return numArr.reduce(function(largest, num) {
  //   if (largest < num) {
  //     largest = num;
  //   }
  //   return largest;
  // }, numArr[0])
}

function getLongestOfThreeWords(word1, word2, word3) {
  return [word1, word2, word3].reduce(function(longest, word) {
    if (longest.length < word.length) longest = word;
    return longest;
  });
}

function findShortestOfThreeWords(word1, word2, word3) {
  return [word1, word2, word3].reduce(function(shortest, word) {
    return shortest.length > word.length ? word : shortest;
  });
}


