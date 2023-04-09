const refs = {
  loginForm: document.querySelector('.login-form'),
};

refs.loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value) {
    alert('Не всі пол заповнені');
    return;
  }
  console.log({ email: email.value, password: password.value });
  event.target.reset();
}
