class XGreeter extends HTMLElement {
  createdCallback() {
    const name = this.getAttribute('name');
    this.createShadowRoot().innerHTML =
      `<h1>Hello, ${name}!</h1>
       <p>This is a second line of content.</p>`;
  }
}

document.registerElement('x-greeter', XGreeter);
