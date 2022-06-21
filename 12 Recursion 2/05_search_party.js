// Define a function, searchParty, that accepts 2 arguments:

// name (string)
// world (object)

// The keys in world represent a location. 
// The values can be any combination of strings, arrays, or other objects.

// Search through world for name. If name exists in world, return an array with directions. 
// Return null if you can't find name.

const searchParty = (string, obj) => {
  debugger;
  for (let place in obj) {
    if (typeof obj[string] === 'string') {
      let obj[string] = ;
    }
    if (Array.isArray(place)) {
      for (let i = 0; i < place.length; i++) {
        let element = place[i];
        if (element === string) {
          return [key, place]
        }
      }
    }
    if (typeof place === 'object') {
      return searchParty(string, place);
    } else if (place === string) {
      return [obj, key];
    }
  }
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

searchParty('Susan', newYorkCity); // => ['Fullstack', '25th floor']
// searchParty('Franco', world); // => null