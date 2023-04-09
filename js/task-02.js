const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  listIngredients: document.querySelector('#ingredients'),
};

refs.listIngredients.append(...createItemsMarkup(ingredients));

function createItemsMarkup(ingredients) {
  return ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = ingredient;
    return li;
  });
}
