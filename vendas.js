const $simplecarrosssel = document.querySelector(".box-carrossel")

new Glider($simplecarrosssel,{
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    duration: 1,
    dots: '.dots',
  arrows: {
    prev: ".prev",
    next: ".next",
  },
  responsive: [
    
    {
      // screens greater than >= 775px
      breakpoint:900,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 3,
        slidesToScroll: 1,
        duration: 2
      }
    },
    {
      // screens greater than >= 775px
      breakpoint:700,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 3,
        slidesToScroll: 1,
        duration: 2
      }
    }
    
  ]

})

