// Home carousel
const homeCarousel = document.getElementById('carousel');
const totalSlides = homeCarousel.children.length;
let currentIndex = 0;
let autoSlideTimeout;

function goToSlide(index) {
    const slideWidth = homeCarousel.clientWidth;
    homeCarousel.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
    });
    currentIndex = index;
    scheduleNextSlide();
}

function nextSlide() {
    const nextIndex = (currentIndex + 1) % totalSlides;
    goToSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(prevIndex);
}

function scheduleNextSlide() {
    clearTimeout(autoSlideTimeout);

    const currentSlide = homeCarousel.children[currentIndex];
    const video = currentSlide.querySelector('video');

    if (video) {
        video.loop = false;

        // Always restart video when we land on the slide
        video.currentTime = 0;
        video.play();

        const onVideoEnd = () => {
            video.removeEventListener('ended', onVideoEnd);
            nextSlide();
        };

        video.addEventListener('ended', onVideoEnd);
    } else {
        // Images slide after 3 seconds
        autoSlideTimeout = setTimeout(nextSlide, 3000);
    }
}

// Start the carousel
scheduleNextSlide();



// // Increment count of events
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.count-up');
  let counted = false; // to ensure counting only once

  // Function to animate the counting
  const animateCount = (counter) => {
    const target = +counter.getAttribute('data-target');
    let current = 0;

    const updateCount = () => {
      const increment = Math.ceil(target / 100);
      current += increment;

      if(current < target) {
        counter.innerText = current + "+";
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCount();
  };

  // Observer callback
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting && !counted) {
        counters.forEach(counter => animateCount(counter));
        counted = true;
        observer.disconnect(); // stop observing after counting once
      }
    });
  };

  // Create observer
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.3  // trigger when 30% of the section is visible
  });

  // Start observing the cards section
  const section = document.getElementById('cards-section');
  if(section){
    observer.observe(section);
  }
});




//Placed students carousel
const placedStudentsCarousel = document.querySelector('.placed-students-carousel');
if (placedStudentsCarousel) {
  const items = Array.from(placedStudentsCarousel.children);
  const total = items.length;
  // Clone first slide(s) and append to the end for infinite effect
  const clones = items.slice(0, 2).map(item => item.cloneNode(true));
  clones.forEach(clone => placedStudentsCarousel.appendChild(clone));
  let index = 0;
  const slideWidth = items[0].offsetWidth;
  // Set carousel scroll position to 0 initially
  placedStudentsCarousel.scrollLeft = 0;
  setInterval(() => {
    index++;
    placedStudentsCarousel.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth',
    });
    // Reset to 0 when reaching cloned slides to loop infinitely
    if (index >= total) {
      setTimeout(() => {
        placedStudentsCarousel.style.scrollBehavior = 'auto'; // Remove smooth to jump instantly
        placedStudentsCarousel.scrollLeft = 0;
        index = 0;
        setTimeout(() => {
          placedStudentsCarousel.style.scrollBehavior = 'smooth'; // Restore smooth
        }, 50);
      }, 500); // Wait for smooth scroll to finish before jump
    }
  }, 3000);
}



// Pagination
