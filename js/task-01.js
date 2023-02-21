const categoriesList = document.querySelector('#categories');
console.log(`Количество категорий ${categoriesList.children.length}`);

[...categoriesList.children].forEach(elem => {
  console.dir(
    `${elem.firstElementChild.textContent}: ${elem.lastElementChild.children.length}`,
  );
});
