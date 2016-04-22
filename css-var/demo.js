window.onload = () => {
  const de = document.documentElement;
  de.style.setProperty('--error-color', 'blue');
  Polymer.updateStyles();

  const styles = getComputedStyle(de);
  const value = styles.getPropertyValue('--error-color');
  console.log('demo.js: value =', value);
};
