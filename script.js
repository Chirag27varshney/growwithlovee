let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    
    // Hide the current slide
    slides[slideIndex].style.opacity = 0;
    
    // Move to the next slide
    slideIndex++;
    
    // Reset to the first slide if at the end
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Display the next slide
    slides[slideIndex].style.opacity = 1;

    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

showSlides();