const refs = {
  output: document.querySelector('#value'),
  incrementButton: document.querySelector('[data-action="increment"]'),
  decrementButton: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

refs.incrementButton.addEventListener('click', () => {
  counterValue += 1;
  refs.output.textContent = counterValue;
});

refs.decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  refs.output.textContent = counterValue;
});
