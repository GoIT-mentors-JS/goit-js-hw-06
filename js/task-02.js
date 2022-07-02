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

function createMarkupItem(ingredients) {
  return ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `<p>${ingredient}</p>`;
    return li;
  });
}

refs.listIngredients.append(...createMarkupItem(ingredients));
