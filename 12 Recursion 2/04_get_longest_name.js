// Write a function, getLongestName, that accepts an object as an argument.
// The object represents a family tree. Return the longest name in the family.

let family = {
  'Beverly Marquez': {
    'Nina Rhone': {
      'William Rhodes': null,
      'Paul Nell': null,
      'Sir Paddington the Fourth, of the county Wilstonshire': null
    }
  }
};

let solveCount = 1

const getLongestName = (obj) => {
  let longName = "";
  for (let name in obj) {
    if (name.length > longName.length) {
      longName = name;
    }
    let person = obj[name]
    if (person === null) {
      continue;
    }
    if (typeof person === 'object') {
      return getLongestName(person);
    }
  }
}

getLongestName(family); // => 'Sir Paddington the Fourth, of the county Wilstonshire'