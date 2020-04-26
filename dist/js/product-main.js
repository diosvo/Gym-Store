"use strict";

var proImg = document.querySelectorAll('.product-img');
proImg.forEach(function (element) {
  var li = element.querySelector('ul').querySelectorAll('li');

  for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
      var src = this.querySelector('img').getAttribute('src');
      element.querySelector('.product-img img').src = src;
      li.forEach(function (ele) {
        ele.classList.remove('active');
      });
      this.classList.add('active');
    });
  }
});
$('.more-img-container').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true
});