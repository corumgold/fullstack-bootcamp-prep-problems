// Write a function petSounds that takes an animal name and a country name as arguments.

// Using the globally-defined animalNoises array, petSounds should return a sentence 
// that explains which sound the animal makes in the given country.

let animalNoises = [
  {
    'dog': {
      'America': 'Woof! Woof!',
      'Germany': 'Wau Wau!',
      'England': 'Bow wow!',
      'Uruguay': 'Jua jua!',
      'Afrikaans': 'Blaf!',
      'Korea': 'Mong mong!',
      'Iceland': 'Voff voff!',
      'Albania': 'Ham!',
      'Algeria': 'Ouaf ouaf!'
    }
  },
  {
    'cat': {
      'America': 'Meow',
      'Germany': 'Miauw!',
      'England': 'mew mew',
      'Uruguay': 'Miau Miau!',
      'Afrikaans': 'Purr',
      'Korea': 'Nyaong!',
      'Iceland': 'Kurnau!',
      'Albania': 'Miau',
      'Algeria': 'Miaou!'
    }
  },
  {
    'chicken': {
      'America': 'Cluck cluck',
      'Germany': 'tock tock tock',
      'England': 'Cluck Cluck',
      'Uruguay': 'gut gut gdak',
      'Afrikaans': 'kukeleku',
      'Korea': 'ko-ko-ko',
      'Iceland': 'Chuck-chuck!',
      'Albania': 'Kotkot',
      'Algeria': 'Cotcotcodet'
    }
  }
];

let solveCount = 3;

function petSounds(animal, country) {
  let cappedAnimal = animal.slice(0, 1).toUpperCase() + animal.slice(1);
  //look through all of the animal to get the object that matches our animal.
  for (let i = 0; i < animalNoises.length; i++) {
    for (let creature in animalNoises[i])
      if (creature === animal) {
        let animalObj = animalNoises[i];
        //pick out the sounds object from our animal...
        let soundsObj = animalObj[animal]
        //pick out the animal noise from the sounds object and return it as a sentence
        return `${cappedAnimal}s in ${country} say ${soundsObj[country]}`;
      }
  }
}

// petSounds('dog', 'Iceland'); // => Dogs in Iceland say Voff voff!
petSounds('cat', 'Korea'); // => Cats in Korea say Nyaong!