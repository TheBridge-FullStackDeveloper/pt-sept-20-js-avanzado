const swapClasses = (element, add, remove) => {
  element.classList.add(add);
  element.classList.remove(remove);
};

const toggleClasses = (element, ...classNames) => {
  classNames.forEach((className) => element.classList.toggle(className));
};

const bulb = document.querySelector('#bulb');
const bulbInterval = setInterval(() => {
  toggleClasses(bulb, 'bulb-on', 'bulb-off');
}, 3000);

const toggle = document.querySelector('#toggle');
const toggleInterval = setInterval(() => {
  toggleClasses(toggle, 'toggle-on', 'toggle-off');
}, 5000);

const toggleButton = document.querySelector('#toggle-btn');
toggleButton.addEventListener('click', () => {
  clearInterval(bulbInterval);
  clearInterval(toggleInterval);

  swapClasses(bulb, 'bulb-off', 'bulb-on');
  swapClasses(toggle, 'toggle-off', 'toggle-on');
});
