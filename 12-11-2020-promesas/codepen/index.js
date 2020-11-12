let name = '';

const showButton = document.getElementById('show');
showButton.addEventListener('click', () => {
  console.log(name);
});

setTimeout(() => {
  name = 'pepe';
  const title = document.getElementById('title');
  title.innerText = name;
  showButton.disabled = false;
}, 4000);
