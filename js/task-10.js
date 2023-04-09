const refs = {
  createMarkupButton: document.querySelector('[data-create]'),
  destroyMarkupButton: document.querySelector('[data-destroy]'),
  input: document.querySelector('[type="number"]'),
  markupContainer: document.querySelector('#boxes'),
};

refs.createMarkupButton.addEventListener('click', onCreateButtonClick);
refs.destroyMarkupButton.addEventListener('click', onDestroyButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onCreateButtonClick() {
  const inputValue = Number(refs.input.value);
  if (!(inputValue >= 1 && inputValue <= 100)) {
    refs.input.value = '';
    return alert('Введіть, будь ласка, число від 1 до 100');
  }
  createBoxes(inputValue);
  refs.input.value = '';
}

function onDestroyButtonClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  let size = 30;
  const elements = [];
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    size += 10;
  }
  refs.markupContainer.append(...elements);
}

function destroyBoxes() {
  refs.markupContainer.innerHTML = '';
}
