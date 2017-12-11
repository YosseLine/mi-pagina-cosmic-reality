window.addEventListener('load', function(e){
  var button = document.getElementById('button');
  var menu = document.getElementById('menu');

button.addEventListener('click', function(e){
  menu.classList.toggle('block');
});
});
