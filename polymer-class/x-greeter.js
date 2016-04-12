class XGreeter extends HTMLElement {
  createdCallback() {
    console.log('x-greeter.js createdCallback: entered');
    this.createShadowRoot().innerHTML = 'test';
  }
}

document.createElement('x-greeter', XGreeter);
console.log('x-greeter.js: created element');
