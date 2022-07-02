const refs = {
  loginForm: document.querySelector('.login-form'),
};

refs.loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    alert('Не все поля заполнены');
  }
  console.log({ email: email.value, password: password.value });
  refs.loginForm.reset();
}

// function onSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(refs.loginForm);
//   formData.forEach((value, name) => console.log(value, name));
//   console.log(formData);
// }
