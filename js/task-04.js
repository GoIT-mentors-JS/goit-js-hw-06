// const refs = {
//   counterValue: document.querySelector('#value'),
//   incrementButton: document.querySelector('[data-action="increment"]'),
//   decrementButton: document.querySelector('[data-action="decrement"]'),
// };
//======================================
// const [decrement, value, increment] =
//   document.querySelector('#counter').children;
// let counterValue = 0;
//======================================
// refs.incrementButton.addEventListener('click', () => {
//   counterValue += 1;
//   refs.counterValue.textContent = counterValue;
// });

// refs.decrementButton.addEventListener('click', () => {
//   counterValue -= 1;
//   refs.counterValue.textContent = counterValue;
// });

class Counter {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.incrementRef = this.container.querySelector(
      '[data-action="increment"]',
    );
    this.decrementRef = this.container.querySelector(
      '[data-action="decrement"]',
    );
    this.counterValueRef = this.container.querySelector('#value');
    this.counterValue = 0;

    this.increment = this._increment.bind(this);
    this.decrement = this._decrement.bind(this);

    this.addListeners();
  }

  addListeners() {
    this.decrementRef.addEventListener('click', this.decrement);
    this.incrementRef.addEventListener('click', this.increment);
  }

  _increment() {
    this.counterValue += 1;
    this.counterValueRef.textContent = this.counterValue;
  }

  _decrement() {
    this.counterValue -= 1;
    this.counterValueRef.textContent = this.counterValue;
  }
}

new Counter('#counter');
new Counter('#counter2');
// const counterPlus = () => document.querySelector('#value').textContent++;
// const incrementBut = document.querySelector('button[data-action="increment"]');

// const counterMinus = () => document.querySelector('#value').textContent--;
// const decrementBut = document.querySelector('button[data-action="decrement"]');

// const onclickUp = incrementBut.addEventListener('click', counterPlus);
// const onclickDown = decrementBut.addEventListener('click', counterMinus);
