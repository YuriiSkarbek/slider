var slideIndex = 1;
showSlides(slideIndex);

// Change current slide, press the "arrow button"
function plusSlides(n) {
    showSlides(slideIndex += n)
}

// Change current slide, press the "dot button" 
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    };
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += " active";
}

//auto change slides
setInterval(function(){showSlides(slideIndex += 1)},7300);