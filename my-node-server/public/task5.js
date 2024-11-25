/**
 * You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink.
 * Let's go get them a drink.
 *
 * Declare a variable that holds an empty array, called drinkTray.
 * Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable.
 * The drinkTray can only hold at most two instances of the same drink type,
 * for example it can only hold 2 colas, 2 lemonades, 2 waters.
 *
 * Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
 */

// There are 3 different types of drinks:

const drinkTypes = ['кола', 'лимонад', 'вода'];
const drinkTray = [];
const messageText = 'Привет, ребята, я принес ';
const drinkTypesLength = drinkTypes.length;

console.log(drinkTypesLength);

const getRandomInt = (num) => {
  return Math.floor(Math.random() * num);
};

const addDrinkToTray = () => {
  let result = 0;
  result = getRandomInt(drinkTypesLength);

  while (
    drinkTray.filter((drink) => drink === drinkTypes[result]).length >= 2
  ) {
    result = getRandomInt(drinkTypesLength);
  }
  drinkTray.push(drinkTypes[result]);
};

for (let i = 0; i < 5; i++) {
  addDrinkToTray();
  console.log(drinkTray);
}

console.log(messageText + `${drinkTray.join(', ')}`);
