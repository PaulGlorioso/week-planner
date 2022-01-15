
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
    var tbody = document.getElementById('sunday-list');
    tbody.prepend(createTask(values));
  } else if (values.day === 'monday') {
    data.monday.push(values);
    var tbodym = document.getElementById('monday-list');
    tbodym.prepend(createTask(values));
  } else if (values.day === 'tuesday') {
    data.tuesday.push(values);
    var tbodyt = document.getElementById('tuesday-list');
    tbodyt.prepend(createTask(values));
  } else if (values.day === 'wednesday') {
    data.wednesday.push(values);
    var tbodyw = document.getElementById('wednesday-list');
    tbodyw.prepend(createTask(values));
  } else if (values.day === 'thursday') {
    data.thursday.push(values);
    var tbodyth = document.getElementById('thursday-list');
    tbodyth.prepend(createTask(values));
  } else if (values.day === 'friday') {
    data.friday.push(values);
    var tbodyf = document.getElementById('friday-list');
    tbodyf.prepend(createTask(values));
  } else if (values.day === 'saturday') {
    data.saturday.push(values);
    var tbodys = document.getElementById('saturday-list');
    tbodys.prepend(createTask(values));
  }

  data.nextEntryId++;
  modal.className = 'modal h';
  overlay.className = 'overlay h';
  document.getElementById('form').reset();
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

var days = document.querySelector('.daysofweek');
var daysel = document.querySelectorAll('.day');
var tablelist = document.querySelectorAll('.table-list');
days.addEventListener('click', function (event) {
  if (event.target.matches('.day')) {
    for (var i = 0; i < daysel.length; i++) {
      if (event.target === daysel[i]) {
        daysel[i].className = 'day active';
      } else {
        daysel[i].className = 'day';
      }
    }
    var data = event.target.getAttribute('data-view');
    for (var x = 0; x < tablelist.length; x++) {
      if (data === tablelist[x].getAttribute('data-view')) {
        tablelist[x].className = 'table-list active';
      } else {
        tablelist[x].className = 'table-list';
      }
    }
  }
});
