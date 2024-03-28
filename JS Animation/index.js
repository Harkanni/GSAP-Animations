const button = document.querySelector('button');
const sidebar = document.querySelector('.sidebar');

button.addEventListener('click', (e) => {
   sidebar.classList.toggle('hide')
});
