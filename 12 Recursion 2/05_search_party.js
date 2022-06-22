// Define a function, searchParty, that accepts 2 arguments:

// name (string)
// world (object)

// The keys in world represent a location. 
// The values can be any combination of strings, arrays, or other objects.

// Search through world for name. If name exists in world, return an array with directions. 
// Return null if you can't find name.

const searchParty = (human, world) => {
  debugger;
  for (let key in world) {
    let value = world[key];
    //if the value is a string, it's a person's name
    if (typeof value === "string") {
      let person = value;
      //if that person is the one we're searching for, return the place they're in
      if (person === human) {
        return [key];
      }
    }
    //if the value is an array, it's a group of people
    else if (Array.isArray(value)) {
      let people = value;
      //if the person we're looking for is in that group, return the place they're in
      if (people.includes(human)) {
        return [key]
      }
    }
    //otherwise, the value must be an object! We need to look through THAT place
    else {
      let deeperPlace = value;
      let deeperPlaceSearch = searchParty(human, deeperPlace);
      //if the deeper search returned truu, concat the result with the place we're in
      if (deeperPlaceSearch) {
        return [key].concat(deeperPlaceSearch);
      }
    }
  } return null;
}


let newYorkCity = {
  'Manhattan': {
    'Uptown': {
      'Washington Heights': 'Daniel',
      'UWS': 'Cathy'
    },
    'Midtown': {
      'Madison Square': 'Susan',
      'Theater District': ['Robert', 'Latisha']
    },
    'Downtown': {
      'Tribeca': 'Billy',
      'Financial District': {
        'Fullstack': {
          '11th floor': ['David', 'Nimit'],
          '25th floor': 'Ashi'
        }
      }
    }
  },
  'Brooklyn': {
    'Bushwick': 'Marilyn',
    'Bed-Stuy': ['Juan', 'Denice']
  },
  'Queens': {
    'Astoria': 'Ella',
    'Flushing': 'Eric'
  },
  'Bronx': {
    'Fordham': 'Aaron',
    'Melrose': 'Krysten'
  },
  'Staten Island': {
    'Arlington': ['Nadine', 'Mose'],
    'Elm Park': 'Arthur'
  }
};

searchParty('Daniel', newYorkCity); // => ['Fullstack', '25th floor']
// searchParty('Franco', world); // => null