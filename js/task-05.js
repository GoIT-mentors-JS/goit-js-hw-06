const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

refs.inputName.addEventListener('input', event => {
  refs.outputName.textContent = event.currentTarget.value.trim() || 'Anonymous';
});
