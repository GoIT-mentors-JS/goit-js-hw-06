const refs = {
  loginForm: document.querySelector('.login-form'),
};

refs.loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const emailValue = email.trim();
  const passwordValue = password.trim();
  if (!emailValue || !passwordValue) {
    alert('Не всі пол заповнені');
    return;
  }
  console.log({ email: emailValue, password: passwordValue });
  event.target.reset();
}
