function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorButton: document.querySelector('.change-color'),
  colorTextValue: document.querySelector('.color'),
};

refs.changeColorButton.addEventListener('click', onButtonClick);

function onButtonClick() {
  const color = getRandomHexColor();
  refs.colorTextValue.textContent = color;
  document.body.style.backgroundColor = color;
}
