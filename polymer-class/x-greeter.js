'use strict';

class XGreeter extends HTMLElement {
  createdCallback() {
    console.log('x-greeter.js createdCallback: entered');
    const name = this.getAttribute('name');
    this.createShadowRoot().innerHTML =
      `<h1>Hello, ${name}!</h1>
       <p>This is a second line of content.</p>`;
  }
}

document.registerElement('x-greeter', XGreeter);
console.log('x-greeter.js: created element');
