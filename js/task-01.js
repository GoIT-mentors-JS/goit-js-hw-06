const categoriesList = document.querySelector('#categories');
console.log(`Number of categories:`, categoriesList.children.length);

[...categoriesList.children].forEach(elem => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements:`, elem.lastElementChild.children.length);
});
