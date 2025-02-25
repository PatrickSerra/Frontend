// const dragons = [
//     'cool dragon',
//     'angry dragon',
//     'nasty dragon'
// ]

// const iterator = dragons[Symbol.iterator]()
// console.log(iterator);
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// for (const dragon of dragons) {
//     console.log(dragon);
// }

// for(const char of dragons[0]) {
//     console.log(char);
// }

import ramdom from "random";

let min, max;

function randomItem(array) {
  const randomIndex = ramdom.int((min = 0), (max = array.length - 1));

  return array[randomIndex];
}

const makeDragon = () => {
  const dragonSizes = ["big", "medium", "tiny"];
  const dragonAbilities = ["fire", "ice", "lightning"];

  return (
    randomItem(dragonSizes) + " " + randomItem(dragonAbilities) + " dragon"
  );
};

const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const enoughDragonsSpawned = Math.random() > 0.75;

        if (!enoughDragonsSpawned) {
          return {
            value: makeDragon(),
            done: false,
          };
        }
        return { done: true };
      },
    };
  },
};


for(const dragon of dragonArmy) {
    console.log(dragon);
    
}