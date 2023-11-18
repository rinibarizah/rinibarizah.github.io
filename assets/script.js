  // Add the 'fixed-top-scroll' class to the navbar when scrolling down
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('fixed-top-scroll');
    } else {
      $('.navbar').removeClass('fixed-top-scroll');
    }
  });
