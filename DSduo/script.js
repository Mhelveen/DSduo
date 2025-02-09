document.addEventListener('DOMContentLoaded', () => {
    function hamburg() {
        const navbar = document.querySelector('.dropdown');
        navbar.style.transform = 'translateY(0px)';
    }

    function cancel() {
        const navbar = document.querySelector('.dropdown');
        navbar.style.transform = 'translateY(-500px)';
    }

    document.querySelector('.hamburg').addEventListener('click', hamburg);
    document.querySelector('.cancel').addEventListener('click', cancel);

    AOS.init({ offset: 0 });

    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlides(n) {
        if (n >= slides.length) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = slides.length - 1;
        }
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
            if (index === slideIndex) {
                slide.querySelectorAll('[data-aos]').forEach(element => {
                    element.classList.remove('aos-animate');
                });
            }
        });

        setTimeout(() => {
            AOS.init({ offset: 0 });
            AOS.refresh();
        }, 100);

        setTimeout(() => {
            changeSlide(1);
        }, 7000);
    }

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    showSlides(slideIndex);
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
  });


//WORK PAGE
let currentIndex = 0;
const items = document.querySelectorAll('.layout');
const totalItems = items.length;

window.onload = function() {
    filterSelection('layout');
    showItem(currentIndex);
};

function filterSelection(c) {
    const x = document.getElementsByClassName("column");
    for (let i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) {
            w3AddClass(x[i], "show");
        }
    }

    if (c === 'layout') {
        document.getElementById('navButtons').style.display = 'block';
    } else {
        document.getElementById('navButtons').style.display = 'none';
    }
}

function w3AddClass(element, name) {
    element.classList.add(name);
}

function w3RemoveClass(element, name) {
    element.classList.remove(name);
}

function showItem(index) {
    items.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
