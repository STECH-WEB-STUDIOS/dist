// css_grouping.js

function applyGroupedClasses() {

  /* INDEX PAGE */

  //Poster Carousal Section
  document.querySelectorAll('.poster-carousal-section').forEach(el => {
    el.classList.add(
      'bg-gray-200', 'relative', 'mt-2', 'w-full', 'overflow-hidden'
    );
  });

  // Poster Carousal
  document.querySelectorAll('.poster-carousal').forEach(el => {
    el.classList.add(
      'flex', 'overflow-x-auto', 'scroll-snap-x', 'snap-mandatory',
      'scroll-smooth', 'w-full', 'relative'
    );
  });

  //Poster Carousal Slide
  document.querySelectorAll('.poster-carousal-slide').forEach(el => {
    el.classList.add(
      'w-full', 'flex-shrink-0', 'snap-start', 'relative'
    );
  });

  // Poster Carousal Buttons
  document.querySelectorAll('.poster-carousal-buttons').forEach(el => {
    el.classList.add(
      'absolute', 'z-10', 'top-1/2', 'left-0', 'right-0',
      'flex', 'justify-between', 'px-4', '-translate-y-1/2', 'pointer-events-none'
    );
  });

  // Poster Carousal Button
  document.querySelectorAll('.poster-carousal-button').forEach(el => {
    el.classList.add(
      'text-2xl', 'text-white', 'pointer-events-auto'
    );
  });

  // Section Content
  document.querySelectorAll('.section-content').forEach(el => {
    el.classList.add(
      'bg-gray-100', 'py-10', 'relative'
    );
  });

  // About Red Text
  document.querySelectorAll('.about-red-text').forEach(el => {
    el.classList.add(
      'text-[#4D0000]', 'text-justify', 'w-3/4', 'm-auto',
      'sm:text-base', 'leading-loose'
    );
  });

  // Cards Content
  document.querySelectorAll('.cards-content').forEach(el => {
    el.classList.add(
      'max-w-7xl', 'mx-auto', 'px-4'
    );
  });

  // Cards Grid
  document.querySelectorAll('.cards-grid').forEach(el => {
    el.classList.add(
      'grid', 'grid-cols-1', 'sm:grid-cols-2',
      'lg:grid-cols-4', 'xl:grid-cols-7', 'gap-6'
    );
  });

  // Cards Section Card
  document.querySelectorAll('.cards-section-card').forEach(el => {
    el.classList.add(
      'bg-white', 'rounded-2xl', 'shadow-lg', 'p-6',
      'flex', 'flex-col', 'items-center', 'text-center'
    );
  });

  // Card Count
  document.querySelectorAll('.card-count').forEach(el => {
    el.classList.add(
      'text-2xl', 'font-bold', 'text-gray-900'
    );
  });

  // Card Text
  document.querySelectorAll('.card-text').forEach(el => {
    el.classList.add(
      'text-gray-700', 'mt-1', 'text-sm', 'font-semibold'
    );
  });

  // News Highlight
  document.querySelectorAll('.news-highlight').forEach(el => {
    el.classList.add(
      'flex', 'flex-col', 'md:flex-row', 'items-stretch',
      'justify-center', 'w-11/12', 'mx-auto', 'mt-8', 'gap-6'
    );
  });

  // News Highlight Image Container
  document.querySelectorAll('.news-highlight-img-container').forEach(el => {
    el.classList.add(
      'w-full', 'md:w-full', 'aspect-[8/3]'
    );
  });

  // News Highlight Image
  document.querySelectorAll('.news-highlight-img').forEach(el => {
    el.classList.add(
      'w-full', 'h-full', 'object-cover',
      'rounded-lg', 'shadow-md'
    );
  });

  // News Highlight Text
  document.querySelectorAll('.news-highlight-text').forEach(el => {
    el.classList.add(
      'w-full', 'md:w-2/5', 'md:h-72', 'p-6',
      'flex', 'flex-col', 'text-justify', 'text-gray-900'
    );
  });

  // News Heading
  document.querySelectorAll('.news-heading').forEach(el => {
    el.classList.add(
      'font-bold', 'text-lg', 'text-[#4D0000]', 'mb-1'
    );
  });
  
  // News Card Grid
  document.querySelectorAll('.news-card-grid').forEach(el => {
    el.classList.add(
      'w-[95%]', 'mx-auto', 'mt-10',
      'grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-6'
    );
  });

  // News Card
  document.querySelectorAll('.news-card').forEach(el => {
    el.classList.add(
      'bg-white', 'rounded-lg', 'shadow', 'overflow-hidden',
      'flex', 'h-[180px]'
    );
  });

  // News Image Container
  document.querySelectorAll('.news-img-container').forEach(el => {
    el.classList.add(
      'w-[55%]', 'h-full', 'flex', 'items-center',
      'justify-center', 'p-4'
    );
  });

  // News Image
  document.querySelectorAll('.news-img').forEach(el => {
    el.classList.add(
      'w-full', 'h-full', 'object-cover', 'rounded-lg'
    );
  });

  // News Text Container
  document.querySelectorAll('.news-text-container').forEach(el => {
    el.classList.add(
      'w-[45%]', 'pl-2', 'pr-4', 'py-4',
      'flex', 'flex-col', 'justify-between'
    );
  });

  // News Para
  document.querySelectorAll('.news-para').forEach(el => {
    el.classList.add(
      'text-sm', 'text-gray-800', 'mt-1'
    );
  });

  // News Date
  document.querySelectorAll('.news-date').forEach(el => {
    el.classList.add(
      'text-sm', 'text-red-900', 'mt-2', 'block'
    );
  });


  // News Link
  document.querySelectorAll('.news-link').forEach(el => {
    el.classList.add(
      'text-red-900', 'mt-2', 'block', 'hover:underline'
    );
  });


  // White Overlay Layer
  document.querySelectorAll('.white-overlay').forEach(el => {
    el.classList.add(
      'absolute', 'inset-0', 'bg-white/50',
      'bg-opacity-70', 'z-0'
    );
  });

  // Courses Container
  document.querySelectorAll('.courses-container').forEach(el => {
    el.classList.add(
      'py-5', 'px-4', 'relative', 'z-10'
    );
  });

  // Courses Main Grid
  document.querySelectorAll('.courses-main-grid').forEach(el => {
    el.classList.add(
      'grid', 'grid-cols-1', 'lg:grid-cols-[auto_1fr]', 'gap-0',
      'max-w-6xl', 'mx-auto', 'border-2', 'border-white',
      'bg-white/50', 'rounded-[20px]', 'mb-8', 'overflow-hidden'
    );
  });

  // Courses Heading
  document.querySelectorAll('.courses-heading').forEach(el => {
    el.classList.add(
      'bg-white/90', 'border-r-2', 'border-white', 'px-6', 'py-6',
      'flex', 'items-center', 'justify-center', 'lg:justify-start',
      'rounded-t-[18px]', 'lg:rounded-bl-[18px]', 'lg:rounded-tl-[18px]',
      'lg:rounded-tr-none', 'rounded-tr-[18px]',
      'text-2xl', 'font-bold', 'text-[#A20000]',
      'text-center', 'lg:text-left', 'leading-snug'
    );
  });

  // Courses Sub Grid
  document.querySelectorAll('.courses-sub-grid').forEach(el => {
    el.classList.add(
      'grid', 'grid-cols-1', 'sm:grid-cols-2',
      'lg:grid-cols-4', 'gap-6', 'p-6'
    );
  });

  // Program Card
  document.querySelectorAll('.program-card').forEach(el => {
    el.classList.add(
      'h-full', 'flex', 'flex-col', 'justify-between', 'group',
      'bg-white/90', 'text-[#A20000]', 'border-1', 'border-white/50',
      'rounded-lg', 'p-3', 'transition', 'duration-300'
    );
  });

  // Program Card Text
  document.querySelectorAll('.program-card-text').forEach(el => {
    el.classList.add(
      'flex', 'flex-col', 'gap-y-1'
    );
  });

  // Program Card Icon
  document.querySelectorAll('.program-card-icon').forEach(el => {
    el.classList.add(
      'opacity-0', 'group-hover:opacity-100',
      'transition', 'duration-300', 'self-end'
    );
  });


  // Department Container
  document.querySelectorAll('.department-container').forEach(el => {
    el.classList.add(
      'flex', 'flex-wrap', 'justify-center',
      'gap-8', 'mb-10', 'p-5', 'pt-10'
    );
  });

  // Department Card
  document.querySelectorAll('.department-card').forEach(el => {
    el.classList.add(
      'w-full', 'sm:w-[48%]', 'lg:w-[22%]',
      'rounded-xl', 'overflow-hidden', 'flex',
      'flex-col', 'bg-white', 'shadow-md'
    );
  });

  // Department Card Text
  document.querySelectorAll('.department-card-text').forEach(el => {
    el.classList.add(
      'relative', '-mt-16', 'px-4', 'py-3',
      'bg-white', 'rounded-md', 'mx-4', 'mb-4', 'shadow-lg'
    );
  });

  // Department Card Heading
  document.querySelectorAll('.department-card-heading').forEach(el => {
    el.classList.add(
      'font-semibold', 'text-lg', 'transition',
      'duration-500', 'inline-block', 'mb-2'
    );
  });

  // Department Card Para
  document.querySelectorAll('.department-card-para').forEach(el => {
    el.classList.add(
      'text-gray-500', 'text-justify', 'text-sm'
    );
  });

  // Department Card Link
  document.querySelectorAll('.department-card-link').forEach(el => {
    el.classList.add(
      'text-[#A20000]', 'text-[12px]', 'hover:underline'
    );
  });

  // Department Card Button
  document.querySelectorAll('.department-card-button').forEach(el => {
    el.classList.add(
      'inline-flex', 'items-center', 'justify-center',
      'w-1/2', 'm-auto', 'mb-4', 'px-6', 'py-1',
      'font-medium', 'text-[#A20000]', 'bg-white',
      'border-2', 'border-[#A20000]', 'rounded-full',
      'shadow-md', 'hover:bg-[#A20000]',
      'hover:text-white', 'transition-colors', 'duration-200'
    );
  });


  // Placement Carousel Container
  document.querySelectorAll('.placement-carousal-container').forEach(el => {
    el.classList.add(
      'relative', 'z-10', 'py-5'
    );
  });

  // Placement Carousel Content
  document.querySelectorAll('.placement-carousal-content').forEach(el => {
    el.classList.add(
      'flex', 'justify-center', 'items-center', 'w-full'
    );
  });

  // Placement Carousel
  document.querySelectorAll('.placement-carousal').forEach(el => {
    el.classList.add(
      'carousel', 'rounded-box', 'w-4/5', 'placed-students-carousel'
    );
  });

  // Placement Carousel Slide
  document.querySelectorAll('.placement-carousal-slide').forEach(el => {
    el.classList.add(
      'carousel-item', 'shadow-lg', 'mr-4'
    );
  });


  // Companies Overflow
  document.querySelectorAll('.companies-overflow').forEach(el => {
    el.classList.add(
      'pt-10', 'overflow-hidden', 'relative'
    );
  });

  // Companies Container
  document.querySelectorAll('.companies-container').forEach(el => {
    el.classList.add(
      'relative', 'w-full'
    );
  });

  // Companies Content Scroll Area
  document.querySelectorAll('.companies-animate').forEach(el => {
    el.classList.add(
      'animate-scroll', 'flex', 'space-x-10',
      'w-max', 'p-20'
    );
  });

  // Companies Card
  document.querySelectorAll('.companies-card').forEach(el => {
    el.classList.add(
      'h-24', 'w-40', 'flex', 'items-center',
      'justify-center', 'bg-white', 'rounded-lg', 'shadow-lg'
    );
  });

  // Companies Card Image
  document.querySelectorAll('.companies-card-img').forEach(el => {
    el.classList.add(
      'max-h-full', 'max-w-full', 'object-contain'
    );
  });


  // Red Polygon Heading
  document.querySelectorAll('.red-polygon-heading').forEach(el => {
    el.classList.add(
      'relative', 'bg-gradient-to-r', 'from-[#4D0000]', 'to-[#ff0000]',
      'text-center', 'text-white', 'font-semibold', 'py-2', 'mb-8',
      'w-[60%]', 'text-lg', 'px-10', 'pl-4', 'sm:w-[40%]', 'sm:text-2xl', 'tracking-wide'
    );
  });
  
  // White Polygon Heading
  document.querySelectorAll('.white-polygon-heading').forEach(el => {
    el.classList.add(
      'relative', 'bg-gradient-to-r', 'from-white', 'to-white/50',
      'text-center', 'text-[#A20000]', 'border-2', 'border-white',
      'font-semibold', 'py-2', 'mb-8', 'w-[60%]', 'text-lg', 'px-10',
      'pl-4', 'sm:w-[40%]', 'sm:text-2xl', 'tracking-wide'
    );
  });

  // Red Long Label Heading
  document.querySelectorAll('.red-long-label-heading').forEach(el => {
    el.classList.add(
      'text-center', 'bg-gradient-to-r', 'from-[#4D0000]',
      'via-[#A20000]', 'to-[#4D0000]', 'text-white', 'py-4',
      'text-2xl', 'font-bold', 'oswald-heading'
    );
  });
  
  // Red Underline Heading
  document.querySelectorAll('.red-underline-heading').forEach(el => {
    el.classList.add(
        'text-4xl', 'font-extrabold', 'tracking-wide', 'text-transparent',
        'bg-clip-text', 'bg-gradient-to-r', 'from-red-800', 'to-red-500',
        'drop-shadow-lg', 'mx-auto', 'text-center', 'border-b-4',
        'border-gray-300', 'w-fit'
    );
  });
  
  /* INDEX PAGE */
  
  ////////////////////////////////////////////////////////////////////////////////////
  
  /* FULL CONTENT PAGE /*
  
  
  
  /* FULL CONTENT PAGE */
  
  ////////////////////////////////////////////////////////////////////////////////////

}
  
  // Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', applyGroupedClasses);
