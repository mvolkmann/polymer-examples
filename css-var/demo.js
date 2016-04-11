window.onload = () => {
  const de = document.documentElement;
  const styles = getComputedStyle(de);
  const value = styles.getPropertyValue('--error-color');
  console.log('demo.js: value =', value);

  de.style.setProperty('--error-color', 'blue');
};
