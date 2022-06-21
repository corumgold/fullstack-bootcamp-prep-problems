// Define a function, searchParty, that accepts 2 arguments:

// name (string)
// world (object)

// The keys in world represent a location. 
// The values can be any combination of strings, arrays, or other objects.

// Search through world for name. If name exists in world, return an array with directions. 
// Return null if you can't find name.

const searchParty = (string, obj) => {
  
}

let world = {
  'Fullstack': {
    '11th floor': 'Marge',
    '25th floor': 'Francis'
  },
  'Subway': ['Jackie', 'Grumio']
};

searchParty('Francis', world); // => ['Fullstack', '25th floor']
searchParty('Franco', world); // => null