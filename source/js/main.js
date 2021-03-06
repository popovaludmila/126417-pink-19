
var navMain = document.querySelector('.main-nav'),
  navToggle = document.querySelector('.main-nav__toggle'),
  headerInner = document.querySelector('.page-header__inner'),
  modalError = document.querySelector('.modal--error'),
  modalSuccess = document.querySelector('.modal--success'),
  form = document.getElementById('form'),
  formInputs = document.querySelectorAll('.form__input'),
  buttonSubmit = document.getElementById('button-submit'),
  buttonError = document.getElementById('button-error'),
  buttonSuccess = document.getElementById('button-success'),
  inputPhone = document.getElementById('phone'),
  inputEmail = document.getElementById('email');

var isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));

navMain.classList.remove('main-nav--nojs');
headerInner.classList.remove('page-header__inner--opened');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headerInner.classList.remove('page-header__inner--closed');
    headerInner.classList.add('page-header__inner--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    headerInner.classList.add('page-header__inner--closed');
    headerInner.classList.remove('page-header__inner--opened');
  }
});

function initMap() {
  var myMap = new google.maps.Map(document.querySelector('.contacts__map'), {
    zoom: 17,
    center: { lat: 59.938635, lng: 30.323118 }
  });

  var marker = new google.maps.Marker({
    position: { lat: 59.938635, lng: 30.323118 },
    map: myMap,
    icon: isIE11 ? 'img/icon-map-marker.png' : 'img/icon-map-marker.svg'
  });
}

function existElement(el) {
  if (el !== null) {
    return el;
  }
}

formInputs = Array.prototype.slice.call(formInputs);

formInputs.forEach(
  function (element) {
    element.addEventListener('change', function (e) {
      if (e.checkValidity()) {
        e.classList.remove('form__input--error');
      }
    })
  }
);

if (existElement(buttonSubmit)) {
  buttonSubmit.addEventListener('click', function (evt) {
    evt.preventDefault();

    let isValidForm = true;

    formInputs.forEach(
      function (element) {
        if (element.checkValidity() == false) {
          element.classList.add('form__input--error');
          isValidForm = false;
        }
      }
    );

    if (isValidForm) {
      senVarificationData();
    } else {
      modalError.classList.remove('modal--closed');
    }
  });
}

if (existElement(buttonError)) {
  buttonError.addEventListener('click', function () {
    modalError.classList.add('modal--closed');
  });
}

if (existElement(buttonSuccess)) {
  buttonSuccess.addEventListener('click', function () {
    modalSuccess.classList.add('modal--closed');
  });
}

function senVarificationData() {
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    modalSuccess.classList.remove('modal--closed');
  });
  xhr.open(form.method, form.action);
  xhr.send(formData);
};
