var addbutton = document.querySelector('.addbutton');
var overlay = document.querySelector('.overlay.h');
var modal = document.querySelector('.modal.h');
addbutton.addEventListener('click', function () {
  modal.className = 'modal';
  overlay.className = 'overlay';
});
