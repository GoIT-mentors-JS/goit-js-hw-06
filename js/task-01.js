const categoriesList = document.querySelector('#categories');
console.log(`Количество категорий ${categoriesList.children.length}`);

[...categoriesList.children].forEach(elem => {
  console.dir(elem.children[0].textContent);
  console.dir(elem.children[1].children.length);
});
