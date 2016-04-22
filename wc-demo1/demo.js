const XGreeter = Object.create(HTMLElement.prototype);

XGreeter.createdCallback = function () { // can't use an arrow function
  const name = this.getAttribute('name');
  // Just text.
  //this.textContent = `Hello, ${name}!`;

  // Building DOM in JS.
  const header = document.createElement('h1');
  header.textContent = `Hello, ${name}!`;
  this.appendChild(header);
};

document.registerElement('x-greeter', {prototype: XGreeter});

//TODO: Why doesn't this approach work?
const XHello = document.registerElement('x-hello');
XHello.createdCallback = function () { // can't use an arrow function
  //TODO: This is never called!  Why?
  console.log('demo.js XHello: createdCallback entered');
  const name = this.getAttribute('name');
  this.textContent = `Hello, ${name}!`;
};
