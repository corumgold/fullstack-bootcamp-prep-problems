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

let solveCount = 2

const getLongestName = (people) => {
  debugger;
  let longestName = "";
  for (let person in people) {
    if (person.length > longestName.length) {
      longestName = person;
    }
    if (typeof people[person] === "object") {
      let children = getLongestName(people[person]);
      if (children.length > longestName.length) {
        longestName = children
      }
    }
  } return longestName;
}

getLongestName(family); // => 'Sir Paddington the Fourth, of the county Wilstonshire'