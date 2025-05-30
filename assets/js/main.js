const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slides = track.children;
  const slideCount = slides.length / 2; // original slides count (before duplication)
  
  let index = 0;
  let isTransitioning = false;

  // Slide width based on first slide (should be same for all)
  const slideWidth = slides[0].getBoundingClientRect().width;

  // Initialize track to show first slide (original first slide, not duplicate)
  track.style.transform = `translateX(0px)`;

  nextBtn.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;

    index++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(${-slideWidth * index}px)`;

    track.addEventListener('transitionend', onTransitionEnd);
  });

  prevBtn.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;

    index--;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(${-slideWidth * index}px)`;

    track.addEventListener('transitionend', onTransitionEnd);
  });

  function onTransitionEnd() {
    track.removeEventListener('transitionend', onTransitionEnd);

    // Looping logic
    if (index >= slideCount) {
      // Moved past last original slide (show duplicate), jump back to start
      index = 0;
      track.style.transition = 'none';
      track.style.transform = `translateX(0px)`;
    } else if (index < 0) {
      // Moved before first original slide, jump to last original slide
      index = slideCount - 1;
      track.style.transition = 'none';
      track.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    isTransitioning = false;
  }

  // Optional: Resize observer to update slideWidth dynamically
  window.addEventListener('resize', () => {
    const newWidth = slides[0].getBoundingClientRect().width;
    if (newWidth !== slideWidth) {
      // Not updating slideWidth variable for simplicity, but you can add logic here to handle resize
    }
  });



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
const carousel = document.querySelector('.placed-students-carousel');
if (carousel) {
  const items = Array.from(carousel.children);
  const total = items.length;
  // Clone first slide(s) and append to the end for infinite effect
  const clones = items.slice(0, 2).map(item => item.cloneNode(true));
  clones.forEach(clone => carousel.appendChild(clone));
  let index = 0;
  const slideWidth = items[0].offsetWidth;
  // Set carousel scroll position to 0 initially
  carousel.scrollLeft = 0;
  setInterval(() => {
    index++;
    carousel.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth',
    });
    // Reset to 0 when reaching cloned slides to loop infinitely
    if (index >= total) {
      setTimeout(() => {
        carousel.style.scrollBehavior = 'auto'; // Remove smooth to jump instantly
        carousel.scrollLeft = 0;
        index = 0;
        setTimeout(() => {
          carousel.style.scrollBehavior = 'smooth'; // Restore smooth
        }, 50);
      }, 500); // Wait for smooth scroll to finish before jump
    }
  }, 3000);
}


