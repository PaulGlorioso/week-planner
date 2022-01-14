var data = {
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousData = localStorage.getItem('plan-storage');
if (previousData !== null) {
  data = JSON.parse(previousData);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('plan-storage', dataJSON);
});

var addbutton = document.querySelector('.addbutton');
var overlay = document.querySelector('.overlay.h');
var modal = document.querySelector('.modal.h');
addbutton.addEventListener('click', function () {
  modal.className = 'modal';
  overlay.className = 'overlay';
});

var day = document.getElementById('dayselect');
var time = document.getElementById('timeselect');
var text = document.getElementById('text');
document.addEventListener('submit', function (event) {
  event.preventDefault();
  var values = {
    day: day.value,
    time: time.value,
    text: text.value,
    id: data.nextEntryId
  };
  data.entries.push(values);
  data.nextEntryId++;
  modal.className = 'modal h';
  overlay.className = 'overlay h';
});
