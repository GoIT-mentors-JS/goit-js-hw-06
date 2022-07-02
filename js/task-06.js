const refs = {
  input: document.querySelector('#validation-input'),
};

// refs.input.addEventListener('blur', event => {
//   if (+event.target.dataset.length === event.target.value.length) {
//     refs.input.classList.remove('invalid');
//     refs.input.classList.add('valid');
//   } else {
//     refs.input.classList.add('invalid');
//     refs.input.classList.remove('valid');
//   }
// });

refs.input.addEventListener('blur', ({ target: { value, dataset } }) => {
  +dataset.length === value.length
    ? toggleClasslist(refs.input, 'valid', 'invalid')
    : toggleClasslist(refs.input, 'invalid', 'valid');
});

function toggleClasslist(ref, add, rem) {
  ref.classList.add(add);
  ref.classList.remove(rem);
}1
