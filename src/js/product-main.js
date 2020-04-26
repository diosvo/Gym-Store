const proImg = document.querySelectorAll('.product-img');
proImg.forEach(function (element) {
    const li = element.querySelector('ul').querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function () {
            const src = this.querySelector('img').getAttribute('src');
            element.querySelector('.product-img img').src = src;
            li.forEach(function (ele) {
                ele.classList.remove('active');
            })
            this.classList.add('active');
        })
    }
})

$('.more-img-container').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true
});
                  