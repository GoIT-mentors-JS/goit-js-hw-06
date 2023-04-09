const refs = {
  changeColorButton: document.querySelector('.change-color'),
  colorTextValue: document.querySelector('.color'),
};

refs.changeColorButton.addEventListener('click', onChangeColorButtonClick);

function onChangeColorButtonClick() {
  const color = getRandomHexColor();
  refs.colorTextValue.textContent = document.body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
