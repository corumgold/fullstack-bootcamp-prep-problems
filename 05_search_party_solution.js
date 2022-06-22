function searchParty(name, world) {
    // loop through the places in the world
    for (let place in world) {
        // if there's a person in this place...
        if (typeof world[place] === 'string') {
            // ...see if it's the person we're looking for
            let person = world[place];
            // if we found them...
            if (person === name) {
                // return an array with the current place in it
                return [place];
            }
        }
        // else, if there's an array of people in this place...
        else if (Array.isArray(world[place])) {
            // ...see if the name we're looking for is in the array
            let people = world[place];
            // if the person we're looking for is in the array...
            if (people.includes(name)) {
                // ...return an array with the place in it
                return [place];
            }
        }
        // else, there must be another object in this place
        else {
            let nextObject = world[place];
            let resultFromNextObject = searchParty(name, nextObject);
            // if we found the person in the nextObject...
            if (resultFromNextObject) {
                // return a new array, with the current place concated in front of the resultFromNextObject
                return [place].concat(resultFromNextObject);
            }
        }
    }
    // if we looped through the world and never found the person, return null
    return null;
}