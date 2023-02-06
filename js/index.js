$('[data-fancybox="gallery"]').fancybox({});

//////////////////////////////////////////////////////////////////
const pageItem = document.querySelector('.page__item');
let itemMenu = document.querySelector('.nav__list');

if (itemMenu) {
  itemMenuFix();
}

function itemMenuFix() {
  let itemMenuPosition = itemMenu.getBoundingClientRect();
  window.addEventListener('scroll', () => {
    let logo = document.querySelector('.header__logo').offsetHeight;
    let padding = 20;
    let position = logo + padding;
    let scrollDistans = window.scrollY;
    let scrollPosition = itemMenuPosition.top - position;

    if (scrollPosition < scrollDistans) {
      $(itemMenu).addClass('fixed');
    } else {
      $(itemMenu).removeClass('fixed');
    }
  });

  $(".nav__btn").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      paddingPlus = 160,
      top = $(id).offset().top - paddingPlus;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
};

$(document).on("scroll", function () {
  if ($(document).scrollTop() > 0) {
    $(".header").addClass("scroll");
  } else {
    $(".header").removeClass("scroll");
  }
});

//////////////////////////////////////////////////////////////////

const page = document.querySelector('.main');
let certificatesForm = page.querySelector('.certificates__form');

if (certificatesForm) {
  docTypeShow();
}

function docTypeShow() {
  let certificatesBtn = document.querySelector('.certificates__btn');
  let certificates = document.querySelector('.certificates__inner');
  let certificatesType = document.querySelector('.certificates__type');
  let openedClass = 'opened';

  certificates.addEventListener('click', (event) => {
    const target = event.target;
    let btn = target.classList.contains('certificates__btn');
    let isOpened = certificatesBtn.classList.contains(openedClass);

    if (btn) {
      if (!isOpened) {
        $(certificatesType).slideDown(1000);
        $(certificatesBtn).addClass(openedClass);
      } else {
        $(certificatesType).slideUp(1000);
        $(certificatesBtn).removeClass(openedClass);
      }
    }
  });
}

//////////////////////////////////////////////////////////////////


let request = page.querySelector('.request');

if (request) {
  let requestInner = document.querySelector('.request__inner');
  let requestTitle = document.querySelector('.request__title');
  let requestHide = document.querySelector('.request__hide');
  let openedClass = 'opened';

  requestTitle.addEventListener('click', function () {
    let isOpened = requestInner.classList.contains(openedClass);

    if (!isOpened) {
      $(requestInner).addClass(openedClass);
      $(requestHide).slideDown(500);
    } else {
      $(requestInner).removeClass(openedClass);
      $(requestHide).slideUp(500);
    }
  });
}


//////////////////////////////////////////////////////////////////

let pageBasket = page.querySelector('.basket__delivery');

if (pageBasket) {
  let deliveryInput = pageBasket.querySelector('.basket__pay-list--delivery');
  let addressButtons = pageBasket.querySelector('.basket__delivery-addres-buttons');
  let addressBtn = '<button class="basket__delivery-addres-btn basket__delivery-addres-btn--new" type="button"></button>';

  let saveAddressButton = pageBasket.querySelector('.basket__terms');

  addressButtons.addEventListener('click', (event) => {
    let targetValue = event.target.innerText;
    deliveryInput.value = targetValue;
  });

  saveAddressButton.addEventListener('click', () => {
    let inputNotEmpty = deliveryInput.value !== '';

    if (inputNotEmpty) {

      addressButtons.innerHTML += addressBtn;

      let addressNewBtn = Array.from(pageBasket.querySelectorAll('.basket__delivery-addres-btn'));
      let lastElem = addressNewBtn[addressNewBtn.length - 1];

      lastElem.innerText += deliveryInput.value;

    }
  });

}

//////////////////////////////////////////////////////////////////

let table = page.querySelector('.item-available__table');

if (table) {

  let itemTable = page.querySelector('.item-available__table-tab');
  let td = Array.from(itemTable.querySelectorAll('td'));

  for (let item of td) {
    let itemButton = item.querySelector('button');


    if (item.classList.contains('cell__active')) {
      $(itemButton).addClass('active');
    }
  }

  let popupItem = page.querySelector('.popup-item');
  let closeBtn = popupItem.querySelectorAll('.popup-item__inner-btn');

  itemTable.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('active')) {
      $(table).addClass('hiden');
      $(popupItem).addClass('toshow');
      $('body').addClass('lock__popup');
    }
  });

  for (let btn of closeBtn) {
    $(btn).on('click', function () {
      $(table).removeClass('hiden');
      $(popupItem).removeClass('toshow');
      $('body').removeClass('lock__popup');
    });
  }
}

//////////////////////////////////////////////////////////////////

let cabinetBtn = document.querySelector('.header__bottom-link--cabinet');

cabinetBtn.addEventListener('click', function () {

  let cabinetMenu = document.querySelector('.cabinet-menu__popup');
  let cabinetMenuActive = cabinetMenu.classList.contains('active');


  if (!cabinetMenuActive) {
    $(cabinetMenu).addClass('active');
    $('.cabinet-menu__popup-bg').addClass('active');
    $('body').addClass('lock');
  } else {
    $(cabinetMenu).removeClass('active');
    $('.cabinet-menu__popup-bg').removeClass('active');
    $('body').removeClass('lock');
  }

})

$('.popup-search__btn, .cabinet-menu__popup-bg').on('click', function () {
  $('.cabinet-menu__popup, .cabinet-menu__popup-bg').removeClass('active');
  $('body').removeClass('lock');
});

////////////////////////////////////////////////////////////////////////


$('.popup, .item-about__link, .header__link').on('click', function () {

  let div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';

  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();

  let headerTop = document.querySelector('.header__top');
  let paddingClass = headerTop.classList.contains('.padding');
  let headerTopPaddingRight = getComputedStyle(headerTop).paddingRight;
  let initHeaderTopPaddingRight = Number(headerTopPaddingRight.slice(0, -2));
  let a = initHeaderTopPaddingRight + scrollWidth + 'px';

  if (!paddingClass) {
    headerTop.style.paddingRight = a;
  }

  $('.action__inner, .action-form, .action__wrapper').toggleClass('active');
  $('body').addClass('lock');

});

$('.action-form__close-link, .action__wrapper').on('click', function () {
  $('.action-form, .action__inner, .action__wrapper').removeClass('active');
  $('body').removeClass('lock');

  let div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';

  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();

  let headerTop = document.querySelector('.header__top');
  let paddingClass = headerTop.classList.contains('.padding');
  let headerTopPaddingRight = getComputedStyle(headerTop).paddingRight;
  let initHeaderTopPaddingRight = Number(headerTopPaddingRight.slice(0, -2));
  let a = initHeaderTopPaddingRight - scrollWidth + 'px';

  if (!paddingClass) {
    headerTop.style.paddingRight = a;
  }
});

$('.form__input--name').on('click', function () {
  $('.form__label--name, .form__input--name').addClass('active');
});

$('.form__input--tel').on('click', function () {
  $('.form__label--tel, .form__input--tel').addClass('active');
});


//////////////////////////////////////////////////////////////////

$('.search__btn').on('click', function () {
  $('.popup-search--category').toggleClass('active');
  $('body').addClass('lock');

  let div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';

  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();

  let headerTop = document.querySelector('.header__top');
  let paddingClass = headerTop.classList.contains('.padding');
  let headerTopPaddingRight = getComputedStyle(headerTop).paddingRight;
  let initHeaderTopPaddingRight = Number(headerTopPaddingRight.slice(0, -2));
  let a = initHeaderTopPaddingRight + scrollWidth + 'px';

  if (!paddingClass) {
    headerTop.style.paddingRight = a;
  }
});

//////////////////////////////////////////////////////////////////

$('.login__form-input--login').on('click', function () {
  $('.login__form-label--login').addClass('active');
});

$('.login__form-input--pass').on('click', function () {
  $('.login__form-label--pass').addClass('active');
});

$('.login__form-input--passnew').on('click', function () {
  $('.login__form-label--passnew').addClass('active');
});

$('.profile__form-input--name').on('click', function () {
  $('.profile__form-label--name').addClass('active');
});
$('.profile__form-input--surname').on('click', function () {
  $('.profile__form-label--surname').addClass('active');
});
$('.profile__form-input--phone').on('click', function () {
  $('.profile__form-label--phone').addClass('active');
});
$('.profile__form-input--mail').on('click', function () {
  $('.profile__form-label--mail').addClass('active');
});
$('.profile__form-input--pass').on('click', function () {
  $('.profile__form-label--pass').addClass('active');
});
$('.profile__form-input--passonemore').on('click', function () {
  $('.profile__form-label--passonemore').addClass('active');
});

$(function hideInputLabels() {
  const inputs = $('input');
  const textareas = $('textarea');

  toggleLabel(inputs);
  toggleLabel(textareas);

  function toggleLabel(elemList) {
    $(elemList).on('focusout', function (event) {
      if (!!event.target.value) {
        $(event.currentTarget).siblings('.hide__lable').addClass('active');
      } else {
        $(event.currentTarget).siblings('.hide__lable').removeClass('active');
      }
    });
  }
});

let formInit = page.querySelector('.login');
var input = document.getElementById("password");
var inputNew = document.getElementById("passwordnew");
var button = document.getElementById("login__form-icon");
var buttonNew = document.getElementById("login__form-icon-new");

function passInputInit() {


  if (formInit) {
    button.onclick = show;
    buttonNew.onclick = showNew;
  }
}

function show() {
  if (input.getAttribute('type') == 'password') {
    input.removeAttribute('type');
    input.setAttribute('type', 'text');
  } else {
    input.removeAttribute('type');
    input.setAttribute('type', 'password');
  }
}

function showNew() {
  if (inputNew.getAttribute('type') == 'password') {
    inputNew.removeAttribute('type');
    inputNew.setAttribute('type', 'text');
  } else {
    inputNew.removeAttribute('type');
    inputNew.setAttribute('type', 'password');
  }
}

passInputInit();


////////////////////////////////////////////////////////////////////////

let btn = document.querySelector('.header__catalog');
let catalogMenu = document.querySelector('.popup-search--catalog');

$(btn).on('click', function () {
  if (!catalogMenu.classList.contains('opened')) {
    $(catalogMenu).addClass('opened');
  } else {
    $(catalogMenu).removeClass('opened');
  }
});

$('.popup-search__btn').on('click', function () {
  $(catalogMenu).removeClass('opened');
});

////////////////////////////////////////////////////////////////////////

$(function () {
  $('.slider__list').slick({
    dots: true,
    mobileFirst: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    fade: true
  });

  let sliderArrows = Array.from(document.querySelectorAll('.slick-arrow'));

  let hoverSpan = '<span class="slider__arrow"><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill - rule = "evenodd" clip - rule = "evenodd" d = "M7.46563 1.0335C7.05698 0.661998 6.42453 0.692114 6.05302 1.10077L0.323855 7.40285C-0.0228915 7.78428 -0.0228915 8.36678 0.323855 8.7482L6.05302 15.0503C6.42453 15.4589 7.05698 15.4891 7.46563 15.1175C7.87429 14.746 7.90441 14.1136 7.5329 13.7049L2.41526 8.07553L7.5329 2.44612C7.90441 2.03746 7.87429 1.40501 7.46563 1.0335Z" fill = "#ED1C24"/></svg></span>';

  for (let item of sliderArrows) {
    item.insertAdjacentHTML('afterbegin', hoverSpan);
  }
});

////////////////////////////////////////////////////////////////////////

/* function burgerClick() {
  const body = document.querySelector('body');
  const burgerBtn = document.querySelector('.header__burger');
  const burgerMenu = document.querySelector('.burger-menu');
  const headerLogo = document.querySelector('.header__logo');
  const headerBtn = document.querySelector('.header__btn');
  const headerLine = document.querySelector('.header__line');
  
  burgerBtn.addEventListener('click', () => {
    let burgerBtnActive = burgerBtn.classList.contains('active');

    if (!burgerBtnActive) {
      burgerBtn.classList.add('active');
      burgerMenu.classList.add('active');
      body.classList.add('lock');
      headerLogo.classList.add('fixed');
      headerBtn.classList.add('fixed');
      headerLine.classList.add('fixed');
    } else {
      if (window.scrollY > 0) {
        burgerBtn.classList.remove('active');
        burgerMenu.classList.remove('active');
        body.classList.remove('lock');
      } else {
        burgerBtn.classList.remove('active');
        burgerMenu.classList.remove('active');
        body.classList.remove('lock');
        headerLogo.classList.remove('fixed');
        headerBtn.classList.remove('fixed');
        headerLine.classList.remove('fixed');
      }
    }
  });
}

burgerClick(); */


/* $(document).on("scroll", function () {
  if ($(document).scrollTop() > 0) {
    $(".header, .header__top, .header__bg, .header__bottom").addClass("fixed");
    $(".header__line, .header__logo-link, .header__logo-img, .header__logo-img-scroll, .header__inner").addClass("scroll");
  } else {
    $(".header, .header__top, .header__bg, .header__bottom").removeClass("fixed");
    $(".header__line, .header__logo-link, .header__logo-img, .header__logo-img-scroll, .header__inner").removeClass("scroll");
  }
}); */

function subMenuToShow() {
  const menu = document.querySelector('.bracing-sub-menu');

  let openedClass = 'opened';


  if (menu) {
    menu.addEventListener('click', (event) => {


      const target = event.target;
      $(target).addClass('active');
      const submenuIcon = target.classList.contains('active');

      if (!submenuIcon) return;

      event.preventDefault();

      const currentParent = target.closest('.bracing-sub-menu__item');

      const isOpened = currentParent.classList.contains(openedClass);
      const currentParentChildren = currentParent.children[0];


      if (!isOpened) {

        $(currentParent).children('.bracing-sub-menu__text').slideDown(500);
        $(currentParentChildren).children('.bracing-sub-menu__item-arrow').addClass(openedClass);
      } else {
        $(currentParent).children('.bracing-sub-menu__text').slideUp(500);
        $(currentParentChildren).children('.bracing-sub-menu__item-arrow').removeClass(openedClass);
      }

      currentParent.classList.toggle(openedClass);
    });
  }
}

subMenuToShow();

//////////////////////////////////////////////////////////////

let mapOnPage = page.querySelector('.map');

if (mapOnPage) {
  map();
}

function map() {

  var mapInit = document.getElementById('map');
  var lng = parseFloat(mapInit.getAttribute('data-lng'));
  var lat = parseFloat(mapInit.getAttribute('data-lat'));
  var zoom = parseFloat(mapInit.getAttribute('data-zoom'));
  var icon = mapInit.getAttribute('data-icon');

  var map = new google.maps.Map(mapInit, {
    center: {
      lat,
      lng
    },
    zoom: zoom,
  });

  map.setOptions({
    styles: [{
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [{
          "weight": "2.00"
        }]
      },
      {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#9c9c9c"
        }]
      },
      {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#eaf0f4"
        }]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#f6f6f6"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#b9c8d0"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#7b7b7b"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#46bcec"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#d2dbe1"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#070707"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ffffff"
        }]
      }
    ]
  });


  var marker = new google.maps.Marker({
    map: map,
    position: {
      lat,
      lng
    },
    icon: icon,
  });

  var flightPlanCoordinates = [{
      lat: 50.3717,
      lng: 30.54793
    },
    {
      lat: 50.37351,
      lng: 30.5483
    },
    {
      lat: 50.37418,
      lng: 30.54849
    },
    {
      lat: 50.37488,
      lng: 30.54653
    },
    {
      lat: 50.37476,
      lng: 30.54604
    },
    {
      lat: 50.37476,
      lng: 30.54565
    },
    {
      lat: 50.37486,
      lng: 30.54551
    },
    {
      lat: 50.37515,
      lng: 30.54556
    },
    {
      lat: 50.37599,
      lng: 30.54584
    },
    {
      lat: 50.37663,
      lng: 30.5461
    },
    {
      lat: 50.37668,
      lng: 30.54587
    }

  ];
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 6
  });

  flightPath.setMap(map);
}