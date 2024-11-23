/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *
 * Expected result:
 *
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */

const heapyMeal = {};

heapyMeal.mealName = 'Omelette';
heapyMeal.Serves = 2;
heapyMeal.ingradients = ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper'];

console.log('variant with loop for');
for (const key in heapyMeal) {
  console.log(`${key} : ${heapyMeal[key]}`);
}
console.log('variant with loop while');
const arrKey = Object.keys(heapyMeal);
const arrValue = Object.values(heapyMeal);
// console.log(arrKey);
// console.log(arrValue);
let i = 0;
while (i < arrKey.length) {
  console.log(`${arrKey[i]} : ${arrValue[i]}`);
  i += 1;
}
