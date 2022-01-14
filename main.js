
var data = {
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
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
    text: text.value
  };
  if (values.day === 'sunday') {
    data.sunday.push(values);
  } else if (values.day === 'monday') {
    data.monday.push(values);
  } else if (values.day === 'tuesday') {
    data.tuesday.push(values);
  } else if (values.day === 'wednesday') {
    data.wednesday.push(values);
  } else if (values.day === 'thursday') {
    data.thursday.push(values);
  } else if (values.day === 'friday') {
    data.friday.push(values);
  } else if (values.day === 'saturday') {
    data.saturday.push(values);
  }

  var tbody = document.querySelector('.table-list');
  tbody.prepend(createTask(values));
  data.nextEntryId++;
  modal.className = 'modal h';
  overlay.className = 'overlay h';
});

function createTask(values) {
  var $tr = document.createElement('tr');
  var $ttd = document.createElement('td');
  $ttd.setAttribute('class', 'time-data');
  $ttd.textContent = values.time;
  $tr.appendChild($ttd);
  var $dtd = document.createElement('td');
  $dtd.setAttribute('class', 'desc-data');
  $dtd.textContent = values.text;
  $tr.appendChild($dtd);
  return $tr;
}
